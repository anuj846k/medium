import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput, SignupInput } from "@anuj846k/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput | SigninInput>({
    username: "",
    password: "",
    ...(type === "signup" ? { name: "" } : {}),
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e: any) {
      console.log(e);
      if (e.response?.data.error) {
        alert(e.response.data.message);
      } else {
        alert(`Error while ${type === "signup" ? "signing up" : "signing in"}`);
      }
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center  ">
        <div className=" ">
          <div className="px-10">
            <div className="md:text-4xl text-xl font-extrabold">
              {type === "signup" ? "Create an account" : "Login to an account"}
            </div>
            <div className="text-slate-400 text-xs md:text-md text-center ">
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signup" ? "/signin" : "/signup"}
              >
                {type === "signup" ? "Sign In" : "Sign Up"}
              </Link>
            </div>
          </div>
          <div className="mt-8">
            {type === "signup" && (
              <LabelledInput
                label="Name"
                placeholder="Anuj Kumar.."
                onchange={(e) => {
                  setPostInputs({ ...postInputs, name: e.target.value });
                }}
              />
            )}
            <LabelledInput
              label="Username"
              placeholder="anuj@gmail.com"
              onchange={(e) => {
                setPostInputs({ ...postInputs, username: e.target.value });
              }}
            />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="abcd122..."
              onchange={(e) => {
                setPostInputs({ ...postInputs, password: e.target.value });
              }}
            />
            <button
              onClick={sendRequest}
              type="button"
              className="w-full mt-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

interface LabelledInputType {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
const LabelledInput = ({
  label,
  placeholder,
  onchange,
  type,
}: LabelledInputType) => {
  return (
    <div className="mt-2">
      <label className="block mb-2 text-sm font-semibold  text-gray-900">
        {label}
      </label>
      <input
        onChange={onchange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
        placeholder={placeholder}
        required
      />
    </div>
  );
};
