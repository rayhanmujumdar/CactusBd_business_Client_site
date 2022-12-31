import React from "react";
import { Link } from "react-router-dom";

function BlogsCard({blog}) {
  return (
    <div data-aos="fade-down" className="card md:w-96 w-[350px] bg-base-100 shadow-xl rounded-sm">
      <figure>
        <img src={blog.img} alt="Shoes" />
      </figure>
      <div className="card-body p-3">
        <h2 className="text-xl font-bold">
          If a dog chews shoes whose shoes does he choose?{" "}
          <Link
            to={`/blogs/${blog._id}`}
            className="text-sm text-blue-800 hover:underline"
          >
            Read more
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default BlogsCard;
