import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import React from "react";

function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg
             sm:text-xl font-semibold dark:text-white"
            >
              <span
                className="px-2 py-1 bg-gradient-to-r
                 from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white"
              >
                Arsh
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <Footer.Title title="About"/>
            <Footer.LinkGroup col>
                <Footer.Link href="">
                    flutter projects
                </Footer.Link>
                <Footer.Link href="">
                    github
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Follow US"/>
            <Footer.LinkGroup col>
                <Footer.Link href="">
                    discord
                </Footer.Link>
                <Footer.Link href="">
                    mern projects
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
            <div>
            <Footer.Title title="Legal"/>
            <Footer.LinkGroup col>
                <Footer.Link href="">
                    Privacy Policy
                </Footer.Link>
                <Footer.Link href="">
                    Terms & Conditions
                </Footer.Link>
            </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
