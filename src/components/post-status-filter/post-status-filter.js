import React from "react";

import "./post-status-filter.css";
import { Button } from "reactstrap";

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      {/* <button type="button" className='btn btn-info'>All</button> */}
      <Button color="info">All</Button>
      <Button outline color="secondary">
        Favorite
      </Button>
    </div>
  );
};

export default PostStatusFilter;
