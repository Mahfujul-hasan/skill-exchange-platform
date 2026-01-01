import React from "react";
import logo from "../assets/image.png";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className=" grid grid-cols-1 lg:grid-cols-12 lg:gap-10 max-w-11/12 mx-auto text-base-content px-0 lg:px-10 pt-10 pb-5 ">
        <aside className="col-span-4">
          <Link to="/">
            <img className="w-15" src={logo} alt="" />
          </Link>
          <p>
            An interactive platform for individuals to offer, learn, and trade
            skills within their local area.
          </p>
        </aside>
        <div className="col-span-8 grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          <nav className="flex flex-col">
            <h6 className="footer-title">Social Media</h6>
            <Link
              to={"https://www.facebook.com/"}
              className="link link-hover text-gray-600 flex items-center gap-2"
            >
              <FaFacebook /> Facebook
            </Link>
            <Link
              to={"https://www.instagram.com/"}
              className="link link-hover text-gray-600 flex items-center gap-2"
            >
              <IoLogoInstagram /> Instagram
            </Link>
            <Link
              to={"https://www.linkedin.com/"}
              className="link link-hover text-gray-600 flex items-center gap-2"
            >
              <FaLinkedinIn />
              Linkedin
            </Link>
            <Link
              to={"https://x.com/"}
              className="link link-hover text-gray-600 flex items-center gap-2"
            >
              <FaXTwitter />
              Twitter
            </Link>
          </nav>
          <nav className="flex flex-col col-span-2">
            <h6 className="footer-title">Contact Us</h6>
            <p className="">
              Phone: <a>018*****80</a>{" "}
            </p>
            <p className="">
              address: Rupatoli, Barishal, Bangladesh
            </p>
            <p className="">
              Email: <a className="link link-hover">mah****00@gmail.com</a>{" "}
            </p>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
      <div className="divider my-0 lg:max-w-11/12 mx-auto"></div>
      <aside className="text-center text-gray-600 pb-5 pt-2">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </div>
  );
};

export default Footer;
