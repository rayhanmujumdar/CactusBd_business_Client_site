import React from "react";
import { Link } from "react-router-dom";

function BlogsCard({blog}) {
    console.log(blog)
  return (
    <div className="card md:w-96 w-[350px] bg-base-100 shadow-xl rounded-sm">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
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
