import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="">
        <div className="">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span
              className="px-2 py-1 bg-gradient-to-r
                 from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"
            >
              Arsh
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default SignUp;
