import React from "react";
import "../job_circulation/job_circulation.css"
function job_circulation() {
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
      <div className="card flex-shrink-0 md:w-[600px] w-[350px] max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
                type="number"
                placeholder="Phone no"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">CV/Resume</span>
              </label>
              <input
                type="file"
                placeholder="CV"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type=""
                placeholder="Description"
                className="input input-bordered resize-none h-[150px]"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default job_circulation;
