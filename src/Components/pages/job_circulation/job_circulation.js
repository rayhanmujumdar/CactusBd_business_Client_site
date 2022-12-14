import React from "react";
import "./Job_circulation.css"
import { useForm } from "react-hook-form";
import RouteLink from "../RouteLink/RouteLink";
import Footer from "../../Footer/Footer";
function Job_circulation() {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const onSubmit = data => {
    const newData = {...data,cvFile: data.cvFile[0].name}
    console.log(newData)
    reset()
  };
  return (
    <>
    <div>
      <RouteLink pageName="Job Circulation" backRoute="Home" path="job circulation"></RouteLink>
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200 py-8">
      <div className="hero-content flex-col lg:flex-row-reverse p-0">
      <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 md:w-[600px] w-[350px] max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
              {...register("name",{
                minLength:{
                  value: 6,
                  message: "Minimum 6 character require"
                },
                required: {
                  value: true,
                  message: "Name must be require"
                }
              })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {
                errors.name && <p className="text-red-400 py-1">{errors?.name.message}</p>
              }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              {...register("email",{
                required: {
                  value: true,
                  message: "Email must be required"
                },
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Your Email is not valid"
                }
              })}
                type="text"
                placeholder="Email"
                className="input input-bordered"
              />
              {
                errors.email && <p className="text-red-400 py-1">{errors?.email.message}</p>
              }
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
              {...register("phoneNumber",{
                required: {
                  value: true,
                  message: "Phone number is required"
                },
                pattern:{
                  value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                  message: "Phone number is not current"
                }
              })}
                type="number"
                placeholder="Phone no"
                className="input input-bordered"
              />
              {
                errors.phoneNumber && <p className="text-red-400 py-1">{errors?.phoneNumber.message}</p>
              }
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
              {...register("description",{
                required: {
                  value: true,
                  message: "description must be require"
                }
              })}
                type="text"
                placeholder="Description"
                className="input input-bordered resize-none h-[150px]"
              />
              {
                errors.description && <p className="text-red-400 py-1">{errors?.description.message}</p>
              }
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}

export default Job_circulation;
