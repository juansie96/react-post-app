import React, { useEffect } from "react";
import Post from "../../components/Post/Post";
import { useModal } from "../../hooks/useModal";
import NewPost from "../NewPost/NewPost";
import "./Feed.css";

const Feed = () => {
  const [isModalOpen, toggleModal] = useModal();

    useEffect(() => {
        console.log(isModalOpen);
    }, [isModalOpen])

  return (
    <div className="feed centered">
      <h1>React Posts Application</h1>
      <div className="btn-primary mt-m" onClick={() => toggleModal()}>New Post</div>
      {isModalOpen ? <NewPost toggleModal={toggleModal} /> : ''}
      <div className="posts-container">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
