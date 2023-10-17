import React from "react";
import { FiMessageSquare, FiEdit3 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import { images } from "../../constants";
import CommentForm from "./CommentForm";

const Comment = ({
  comment,
  logginedUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
}) => {
  const isUserLoggined = Boolean(logginedUserId);
  const commentBelongToUser = logginedUserId === comment.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  const repliedCommentId = parentId ? parentId : comment._id;
  const replyOnUserId = comment.user._id;
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      <img
        src={images.profile1}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      <div className="flex flex-1 flex-col">
        <h5 className="font-bold text-dark-hard text-xs">
          {comment.user.name}
        </h5>
        <span className="text-xs text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        <p className="font-opensans text-dark-light mt-[10px]">
          {comment.desc}
        </p>
        <div className="flex items-center gap-x-4 mt-3 mb-3 font-roboto text-sm text-dark-light">
          {isUserLoggined && (
            <button
              className="flex items-center space-x-1"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}
          {commentBelongToUser && (
            <>
              <button className="flex items-center space-x-1">
                <FiEdit3 className="w-4 h-auto" />
                <span>Edit</span>
              </button>
              <button className="flex items-center space-x-1">
                <MdOutlineDelete className="w-4 h-auto" />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel={"Reply"}
            formSubmitHandler={(value) =>
              addComment(value, repliedCommentId, replyOnUserId)
            }
            formCancelHandler={() => setAffectedComment(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Comment;
