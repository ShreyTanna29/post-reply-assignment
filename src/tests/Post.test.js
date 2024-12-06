import React from "react";
import { render, screen } from "@testing-library/react";
import Post from "../components/Post";

test("renders the Post component with title, body, and image", () => {
  const content = {
    title: "I love my dog, but...",
    body: "I'm not bringing that big idiot everywhere with me.",
    image: "https://via.placeholder.com/600x300",
  };

  render(<Post content={content} />);

  // Check if the title, body, and image are rendered
  expect(screen.getByText(content.title)).toBeInTheDocument();
  expect(screen.getByText(content.body)).toBeInTheDocument();
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", content.image);
  expect(image).toHaveAttribute("alt", "Post");
});
