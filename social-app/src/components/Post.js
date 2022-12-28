import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div>
      {/* {
        posts.results?.map((post, i) => (
            <SingleArticle key={i} post={post} profile={profile} />
        ))
    } */}
      <div className="paginationBtn">
        {/* <div>
          <Link className="btn btn-danger">Previous</Link>
        </div>
        <div>
          <Link className="btn btn-info">Next</Link>
        </div> */}
      </div>
    </div>
  );
};

export default Post;
