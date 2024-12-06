import React from "react";
import { render, screen } from "@testing-library/react";
import Reply from "../components/Reply";

test("renders the Reply component with user info and text", () => {
  const reply = {
    user: {
      username: "Key_Warthog",
      avatar: "https://i.pravatar.cc/40?u=2",
    },
    text: "Same here, kids are like magnets for my dog!",
  };

  render(<Reply reply={reply} />);

  // Check if the username, avatar, and reply text are rendered
  expect(screen.getByText(reply.user.username)).toBeInTheDocument();
  const avatar = screen.getByRole("img");
  expect(avatar).toHaveAttribute("src", reply.user.avatar);
  expect(screen.getByText(reply.text)).toBeInTheDocument();
});
