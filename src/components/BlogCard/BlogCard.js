import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <img className="img-fluid w-100" src="images/blog-1.jpg" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Fear the Walking Dead 8x06: Tập phim cuối cùng của Morgan Jones Sau 5
          năm xuất hiện với vai trò là nhân vật chính của Fear TWD từ mùa thứ
          tư, Lennie James kể từ tập phim "All I See is Red" sẽ không còn xuất
        </p>
        <Link to="/blogs/:id" className="button">
          Read More
        </Link>
      </div>
    </>
  );
};

export default BlogCard;
