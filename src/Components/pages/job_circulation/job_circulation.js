import React from "react";
import "./Job_circulation.css"
import { useForm } from "react-hook-form";
function Job_circulation() {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const onSubmit = data => {
    console.log(data)
    reset()
  };
  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
      <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 md:w-[600px] w-[350px] max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
              {...register("name")}
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
              {...register("email")}
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
              {...register("phoneNumber")}
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
              {...register("cvFile")}
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
              {...register("description")}
                type="text"
                placeholder="Description"
                className="input input-bordered resize-none h-[150px]"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Job_circulation;
