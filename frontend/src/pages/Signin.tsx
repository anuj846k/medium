import React from "react";
import Quote from "../components/Quote";
import Auth from "../components/Auth";

const Signin = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="md:p-0 p-4">
          <Auth  type="signin"/>
        </div>
        <div className="md:block hidden">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Signin;
