import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

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
        form.value.reset()
        alert("Profile updated successfully!")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>{user?.displayName}</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.photoURL}</h1>
      <div className="min-h-scree flex justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl font-extrabold">Update your Profile</h2>
          <form onSubmit={handleUpdate} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
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
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
