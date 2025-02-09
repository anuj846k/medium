import React from "react";

const Quote = () => {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center ">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <div className="text-4xl font-bold">
            "The customer support I recived was exceptional.The support team
            went above and beyond to address my concerns"
          </div>
          <div className="mt-4 text-xl font-bold">Julies Winfield</div>
          <div className=" text-sm text-gray-500 font-bold">
            CEO | Acme Corp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
