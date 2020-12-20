import React from "react";

import PostListItem from "../post-list-item";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./post-list.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
  let postItems = posts.map(item => {
    const { id } = item;
    return (
      <li key={id} className="list-group-item">
        <PostListItem
          label={item.label}
          important={item.important}
          like={item.liked}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLike={() => onToggleLike(id)}
        />
      </li>
    );
  });

  return <ul className="app-list list-group">{postItems}</ul>;
};

export default PostList;
