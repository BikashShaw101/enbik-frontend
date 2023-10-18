import React, { useState } from "react";

const CommentForm = ({
  btnLabel,
  formSubmitHandler,
  formCancelHandler = null,
  initialText = "",
}) => {
  const [value, setValue] = useState(initialText);
  const submitHandler = (e) => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col items-end rounded-lg p-4 border border-primary">
        <textarea
          className="w-full focus:outline-none resize-none bg-transparent"
          rows="5"
          placeholder="Leave your comment here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex flex-col-reverse gap-y-2 gap-x-2 pt-2 items-center min-[420px]:flex-row">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="lg:px-6 lg:py-2.5 lg:text-base border border-red-500 text-red-500 font-semibold rounded-lg text-sm px-4 py-2 "
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="lg:px-6 lg:py-2.5 lg:text-base bg-primary border border-primary font-semibold rounded-lg text-white text-sm px-4 py-2 "
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
