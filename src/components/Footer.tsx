import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center gap-16 p-10">
      <section className="flex flex-wrap justify-center gap-16">
        <nav className="flex flex-col">
          <h6 className="text-dark dark:text-white">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-dark dark:text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col justify-center">
          <h6 className="text-white "></h6>
          <div className="grid grid-flow-col gap-4 text-3xl">
            <a href="https://www.linkedin.com/in/mirza-shah-hussain-a18269247" target="_blank">
              <FaLinkedin className="hover:text-dark dark:hover:text-white cursor-pointer"/>
            </a>
            <a href="https://github.com/shahhussain27" target="_blank">
              <FaGithub className="hover:text-dark dark:hover:text-white cursor-pointer"/>
            </a>
            <a href="https://wa.me/7827917162" target="_blank">
              <FaWhatsapp className="hover:text-dark dark:hover:text-white cursor-pointer"/>
            </a>
          </div>
        </nav>
      </section>
      <section className="text-center p-4 text-sm text-gray-500">
        © 2024 GameHub, Inc. All rights reserved.
      </section>
    </footer>
  );
};

export default Footer;
