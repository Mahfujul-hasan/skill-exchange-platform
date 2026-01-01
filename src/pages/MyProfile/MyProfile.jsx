import React, { use, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { RingLoader } from "react-spinners";

const MyProfile = () => {
  const { user, setUser, updateUserProfile } = use(AuthContext);

  useEffect(()=>{
    document.title= "My Profile | skillSwap"
  },[])
  if (!user) {
    return (
      <>
        <div className="flex justify-center items-center">
          <RingLoader color="#AED6CF" />
        </div>
      </>
    );
  }

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const photoURL = event.target.userPhoto.value;
    // console.log(displayName, photoURL);
    updateUserProfile({ displayName, photoURL })
      .then(() => {
        setUser({ ...user, displayName, photoURL });
      })
      .catch();
  };

  return (
    <div className="my-8 bg-base-100 border border-gray-200 rounded-lg lg:p-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 my-10">
        <img className="w-25 h-25 rounded-full" src={user.photoURL} alt="" />
        <div>
          <h3 className="text-2xl font-bold text-gray-600">
            {user.displayName}
          </h3>
          <p className="text-gray-400">{user.email}</p>
        </div>
      </div>
      {/* Update profile section  */}

      <div>
        <div className="card bg-base-100 w-full lg:max-w-2xl mx-auto shadow-sm">
          <div className="card-body">
            <h3 className="text-center text-xl font-bold text-[#70B2B2] mb-3">
              Update your profile
            </h3>
            <form onSubmit={handleUpdateProfile}>
              <fieldset className="fieldset">
                {/* Name  */}
                <div className="grid grid-cols-5 items-center lg:gap-3">
                  <label className="label text-base font-medium">Name</label>
                  <input
                    type="text"
                    className="input col-span-4 w-full"
                    name="name"
                    defaultValue={user.displayName}
                  />
                </div>
                {/* Photo url  */}
                <div className="grid grid-cols-5  items-center gap-3">
                  <label className="label text-base font-medium">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    className="input col-span-4 w-full"
                    name="userPhoto"
                    defaultValue={user.photoURL}
                  />
                </div>

                <button className="btn bg-[#70B2B2] text-white text-lg mt-4">
                  Update Profile
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
