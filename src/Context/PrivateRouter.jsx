import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import { RingLoader } from "react-spinners";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
    // console.log(location);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center">
          <RingLoader color="#AED6CF" />
        </div>
      </>
    );
  }

  if (user && user.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRouter;
