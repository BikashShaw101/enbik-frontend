import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { HiOutlineCamera } from "react-icons/hi";
import CreatableSelect from "react-select/creatable";
import EditPostSkeleton from "./EditPostSkeleton";
import React, { useState } from "react";
import {
  getSinglePost,
  updatePostDetail,
} from "../../../../services/index/posts";
import { Link, useParams, useNavigate } from "react-router-dom";
import ErrorMessage from "../../../../components/ErrorMessage";
import { stables } from "../../../../constants";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Editor from "../../../../components/editor/Editor";
import DropDownTag from "../../components/select-dropdown/DropDownTag";
import { getAllPostCategories } from "../../../../services/index/postCategories";
import {
  categoryToOption,
  filterCategories,
} from "../../../../utils/multiTagSelect";

const promiseOptions = async (inputValue) => {
  const categoriesData = await getAllPostCategories();
  return filterCategories(inputValue, categoriesData);
};

const EditPost = () => {
  const { slug } = useParams();
  const userState = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [initialPhoto, setInitialPhoto] = useState(null);
  const [body, setBody] = useState(null);
  const [categories, setCategories] = useState(null);
  const [title, setTitle] = useState(null);
  const [tags, setTags] = useState(null);
  const [postSlug, setPostSlug] = useState(slug);
  const [caption, setCaption] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSinglePost({ slug }),
    queryKey: ["blog", slug],
    onSuccess: (data) => {
      setInitialPhoto(data?.photo);
      setCategories(data.categories.map((item) => item._id));
      setTitle(data.title);
      setTags(data.tags);
      setCaption(data.caption);
    },
    refetchOnWindowFocus: false,
  });

  const {
    mutate: mutateUpdatedPostDetail,
    isLoading: isLoadingUpdatedPostDetail,
  } = useMutation({
    mutationFn: ({ updatedData, slug, token }) => {
      return updatePostDetail({ updatedData, slug, token });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["blog", slug]);
      toast.success("Post is updated");
      navigate(`/admin/posts/manage/edit/${data.slug}`, { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleFileChange = (ev) => {
    const file = ev.target.files[0];
    setPhoto(file);
  };

  const handleUpdatePost = async () => {
    let updatedData = new FormData();

    if (!initialPhoto && photo) {
      updatedData.append("postPicture", photo);
    } else if (initialPhoto && !photo) {
      const urlToObject = async (url) => {
        let response = await fetch(url);
        let blob = await response.blob();
        const file = new File([blob], initialPhoto, { type: blob.type });
        return file;
      };
      const picture = await urlToObject(
        stables.UPLOAD_FOLDER_BASE_URL + data?.photo
      );
      updatedData.append("postPicture", picture);
    }

    updatedData.append(
      "document",
      JSON.stringify({ body, categories, title, tags, slug: postSlug, caption })
    );

    mutateUpdatedPostDetail({
      updatedData,
      slug,
      token: userState.userInfo.token,
    });
  };

  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete yout post Picture?")) {
      setInitialPhoto(null);
      setPhoto(null);
    }
  };

  let isPostDataLoaded = !isLoading && !isError;

  return (
    <div>
      {isLoading ? (
        <EditPostSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post details" />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <label htmlFor="postPicture" className="w-full cursor-pointer">
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt={data?.title}
                  className="rounded-xl w-full"
                />
              ) : initialPhoto ? (
                <div className="max-h-[400px] overflow-hidden flex items-center justify-center rounded-xl ">
                  <img
                    src={stables.UPLOAD_FOLDER_BASE_URL + data?.photo}
                    alt={data?.title}
                    className="rounded-xl w-full "
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center min-h-[300px] w-full bg-green-100/50 rounded-xl">
                  <HiOutlineCamera className="w-7 h-auto text-center  text-green-500" />
                </div>
              )}
            </label>
            <input
              type="file"
              className="sr-only"
              id="postPicture"
              onChange={handleFileChange}
            />
            <button
              type="button"
              className="w-fit bg-red-500 text-white font-semibold rounded-lg px-3 py-1 mt-3 hover:bg-red-700 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={handleDeleteImage}
            >
              Delete image
            </button>
            <div className="flex gap-2 mt-4">
              {data?.categories.map((category) => (
                <Link
                  to="/blog?category=selectedCategory"
                  className="text-primary text-sm md:text-base font-roboto font-medium inline-block mt-4 uppercase"
                >
                  {category}
                </Link>
              ))}
            </div>
            {/* edit title  */}
            <div className="d-form-control w-full">
              <label htmlFor="title" className="d-label">
                <span className="d-label-text">Title</span>
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="d-input d-input-bordered border-slate-300 outline-slate-300 w-full p-3 font-medium font-roboto text-dark-hard text-xl"
                placeholder="title"
              />
            </div>
            {/* set caption  */}
            <div className="d-form-control w-full">
              <label htmlFor="caption" className="d-label">
                <span className="d-label-text">caption</span>
              </label>
              <input
                id="caption"
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="d-input d-input-bordered border-slate-300 outline-slate-300 w-full p-3 font-medium font-roboto text-dark-hard text-xl"
                placeholder="caption"
              />
            </div>

            {/* edit slug basicaly a cpmbination of text and alphanumeric values messy like a slug  */}
            <div className="d-form-control w-full">
              <label htmlFor="slug" className="d-label">
                <span className="d-label-text">slug</span>
              </label>
              <input
                id="slug"
                type="text"
                value={postSlug}
                onChange={(e) =>
                  setPostSlug(e.target.value.replace(/\s+/g, "-").toLowerCase())
                }
                className="d-input d-input-bordered border-slate-300 outline-slate-300 w-full p-3 font-medium font-roboto text-dark-hard text-xl"
                placeholder="post slug"
              />
            </div>

            {/* ============ categories section ========= */}
            <div className="my-2">
              <label className="d-label">
                <span className="d-label-text">categories</span>
              </label>
              {isPostDataLoaded && (
                <DropDownTag
                  loadOptions={promiseOptions}
                  defaultValue={data.categories.map(categoryToOption)}
                  onChange={(newValue) =>
                    setCategories(newValue.map((item) => item.value))
                  }
                />
              )}
            </div>

            <div className="mb-5 mt-2">
              <label className="d-label">
                <span className="d-label-text">Tags</span>
              </label>
              {isPostDataLoaded && (
                <CreatableSelect
                  defaultValue={data.tags.map((tag) => ({
                    value: tag,
                    label: tag,
                  }))}
                  isMulti
                  onChange={(newValue) =>
                    setTags(newValue.map((item) => item.value))
                  }
                  className="relative z-20"
                />
              )}
            </div>

            <div className="w-full h-auto mt-6 overflow-x-auto ">
              {isPostDataLoaded && (
                <Editor
                  content={data?.body}
                  editable={true}
                  onDataChange={(data) => {
                    setBody(data);
                  }}
                />
              )}
            </div>
            <button
              type="button"
              disabled={isLoadingUpdatedPostDetail}
              className="w-full mt-7 bg-green-500 text-white rounded-lg font-semibold px-4 py-2 disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={handleUpdatePost}
            >
              Update Post
            </button>
          </article>
        </section>
      )}
    </div>
  );
};

export default EditPost;
