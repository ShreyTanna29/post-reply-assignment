import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Comment from "../components/Comment";

test("renders the Comment component with user info and text", () => {
  const comment = {
    user: {
      username: "Massive_Mission",
      avatar: "https://i.pravatar.cc/40?u=1",
    },
    text: "Yeah my dog is wonderful and extremely friendly but his manners go out the window when he sees children so he stays home.",
    replies: [],
  };

  render(<Comment comment={comment} />);

  // Check if the username, avatar, and comment text are rendered
  expect(screen.getByText(comment.user.username)).toBeInTheDocument();
  const avatar = screen.getByRole("img");
  expect(avatar).toHaveAttribute("src", comment.user.avatar);
  expect(screen.getByText(comment.text)).toBeInTheDocument();
});

test("toggles replies visibility when View Replies button is clicked", () => {
  const comment = {
    user: {
      username: "Massive_Mission",
      avatar: "https://i.pravatar.cc/40?u=1",
    },
    text: "Yeah my dog is wonderful and extremely friendly but his manners go out the window when he sees children so he stays home.",
    replies: [
      {
        user: {
          username: "Key_Warthog",
          avatar: "https://i.pravatar.cc/40?u=2",
        },
        text: "Same here, kids are like magnets for my dog!",
      },
    ],
  };

  render(<Comment comment={comment} />);

  // Check initial state
  expect(screen.queryByText(comment.replies[0].text)).toBeNull();

  // Click "View Replies" and check if replies are displayed
  fireEvent.click(screen.getByText("View Replies"));
  expect(screen.getByText(comment.replies[0].text)).toBeInTheDocument();

  // Click again to hide replies
  fireEvent.click(screen.getByText("Hide Replies"));
  expect(screen.queryByText(comment.replies[0].text)).toBeNull();
});
