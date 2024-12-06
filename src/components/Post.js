import React from "react";

const Post = ({ content }) => {
  return (
    <div className="border-b border-gray-300 pb-4">
      {/* Post Image */}
      <img
        src={content.image}
        alt="Post"
        className="w-full  object-cover rounded-lg mb-4"
      />

      {/* Post Title */}
      <h3 className="text-xl font-bold text-gray-800">{content.title}</h3>

      {/* Post Body */}
      <p className="text-gray-600 mt-2">{content.body}</p>
    </div>
  );
};

export default Post;
