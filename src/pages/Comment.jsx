import React, { useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments((prev) => [...prev, newComment]);
      setNewComment(""); 
    }
  };
  return (
    <div className="lg:mt-10 lg:w-[40rem] w-[23rem] mx-auto">
      <h2 className="text-2xl font-bold mb-5">Comments & Feedback</h2>
      <div className="flex flex-col gap-4">
        <textarea
          className="textarea textarea-bordered w-full h-24 resize-none"
          placeholder="Write your Comments & Feedback here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          onClick={handleAddComment}
          className="btn bg-[#2196f3] font-bold text-lg text-white px-10"
        >
          Add Comment
        </button>
      </div>

      {/* Comments & Feedback */}
      <div className="mt-8">
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="border border-[#2196f3] rounded-lg py-2 px-5 text-lg font-medium text-black"
              >
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No comments yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Comment;
