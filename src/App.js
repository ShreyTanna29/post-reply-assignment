import React from "react";
import Post from "./components/Post";
import Comment from "./components/Comment";

const App = () => {
  const data = {
    post: {
      title: "I love my dog, but...",
      body: "I'm not bringing that big idiot everywhere with me.",
      image: "./post-image.png", // Replace with your image URL
    },
    comments: [
      {
        user: {
          username: "Massive_Mission",
          avatar: "https://i.pravatar.cc/40?u=1", // Replace with avatar URL
        },
        text: "Yeah my dog is wonderful and extremely friendly but his manners go out the window when he sees children so he stays home.",
        replies: [
          {
            user: {
              username: "Key_Warthog",
              avatar: "https://i.pravatar.cc/40?u=2", // Replace with avatar URL
            },
            text: "Same here, kids are like magnets for my dog!",
          },
          {
            user: {
              username: "Friendly_Human",
              avatar: "https://i.pravatar.cc/40?u=3", // Replace with avatar URL
            },
            text: "Dogs are the best but can be chaos with kids.",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Post Section */}
        <Post content={data.post} />

        {/* Comments Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
            Comments
          </h3>
          <div className="space-y-4">
            {data.comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
