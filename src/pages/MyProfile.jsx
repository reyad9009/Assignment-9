import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer} from "react-toastify";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    //console.log({ name, photo });

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        setUser((prevUser) => ({
          ...prevUser,
          displayName: name,
          photoURL: photo,
        }));
        e.target.reset();
        toast.success('Update successful')

      })
      .catch((err) => {
        //console.log(err);
        toast.warn('Please enter your Name & Photo url')

      });
  };
  return (
    <div className="min-h-scree flex lg:flex-row flex-col justify-center lg:items-start items-center">
      <Helmet><title>Career Kindle | Profile</title></Helmet>
      <div className="p-7">

        <div className="flex items-center gap-6 bg-[#2196f3] rounded-t-xl">
          <div className="w-28 overflow-hidden p-2 ">
            <img className="w-28 rounded-xl" src={user?.photoURL} alt="" />
          </div>
          <h1 className="font-bold text-4xl">{user?.displayName}</h1>
        </div>

        <div className="flex gap-4 items-center p-3 border border-[#2196f3]">
          <span className="bg-[#2196f3] p-2 rounded-lg text-white font-bold">Gmail : </span>
          <span>
            <h1 className="font-semibold">{user?.email}</h1>
          </span>
        </div>

        <div className="flex gap-4 items-center p-3 border rounded-b-xl border-[#2196f3]">
          <span  className="bg-[#2196f3] p-2 rounded-lg font-bold text-white">Photo URL : </span>
          <span>
            <h1 className=" text-wrap w-[90%] font-semibold">{user?.photoURL}</h1>
          </span>
        </div>
      </div>

      <div className="">
        <div className="card w-full">
          <h2 className="text-2xl font-extrabold text-center mt-3">Update your Profile</h2>
          <form onSubmit={handleUpdate} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-lg font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />

              {/* {error.login && <label className="label">{error.login}</label>} */}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#2196f3] font-bold text-white text-xl">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
