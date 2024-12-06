import React, { useState, useRef } from "react";
import Reply from "./Reply";

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [height, setHeight] = useState(0);
  const repliesRef = useRef(null);

  const toggleReplies = () => {
    if (!showReplies) {
      setHeight(repliesRef.current.scrollHeight);
    } else {
      setHeight(repliesRef.current.scrollHeight);
      setTimeout(() => setHeight(0), 10);
    }
    setShowReplies(!showReplies);
  };

  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <h2 className="text-xl font-bold">Comments</h2>
      {/* User Info */}
      <div className="flex items-center space-x-3 mb-2">
        <img
          src={comment.user.avatar}
          alt={`Avatar of ${comment.user.username}`}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium text-gray-700">
          {comment.user.username}
        </span>
      </div>

      {/* Comment Text */}
      <p className="text-gray-800">{comment.text}</p>

      {/* View Replies Button */}
      <button
        onClick={toggleReplies}
        className="mt-2 text-sm text-blue-500 hover:underline"
        aria-expanded={showReplies ? "true" : "false"}
        aria-controls="replies"
      >
        {showReplies ? "Hide Replies" : "View Replies"}
      </button>

      <div
        ref={repliesRef}
        id="replies"
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight: `${height}px`, opacity: showReplies ? 1 : 0 }}
        aria-hidden={!showReplies}
      >
        <div className="mt-4 space-y-2">
          {comment.replies.map((reply, index) => (
            <Reply key={index} reply={reply} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
