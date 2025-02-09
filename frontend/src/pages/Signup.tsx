import React from "react";
import Quote from "../components/Quote";
import Auth from "../components/Auth";

const Signup = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="p-4 md:p-0">
          <Auth type="signup" />
        </div>
        <div className="invisible md:visible">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Signup;
