import React from 'react';
import logo from '../../assets/Logo.svg';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className="footer flex px-0 justify-around p-10 bg-base-200 bg-secondaryColor text-base-content">
        <aside className="w-1/4">
          <p>
            <img src={logo} alt="logo" className="inline-block" />
            <div className="inline-block font-bold text-xl ml-3">My Doc</div>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            aut culpa minus ipsam iusto maiores, aliquid nobis tenetur doloribus
            accusantium.
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Book Appointments</a>
          <a className="link link-hover">Book Tests</a>
        </nav>
        <nav>
          <header className="footer-title ">Contact</header>
          <a className="link link-hover flex">
            <FaPhoneAlt className="mt-1 mr-2" />
            <div>+977 9827158522</div>
          </a>
          <a className="link link-hover flex">
            <MdEmail className="mt-1 mr-2" />
            <div>mydoc@gmail.com</div>
          </a>
          <a className="link link-hover flex">
            <FaLocationDot className="mt-1 mr-2" />
            <div>Pokhara, Nepal</div>
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
