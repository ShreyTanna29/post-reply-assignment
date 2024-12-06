import React from "react";

const Reply = ({ reply }) => {
  return (
    <div className="border-l-4 border-gray-300 pl-4">
      {/* User Info */}
      <div className="flex items-center space-x-3 mb-2">
        <img
          src={reply.user.avatar}
          alt={reply.user.username}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium text-gray-700">
          {reply.user.username}
        </span>
      </div>

      {/* Reply Text */}
      <p className="text-gray-600">{reply.text}</p>
    </div>
  );
};

export default Reply;
