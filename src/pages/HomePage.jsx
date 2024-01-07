import React from 'react';
import Layout from '../components/Layout/Layout';
import hero from '../assets/hero.png';
import doctor from '../assets/doctor.jpg';
import location from '../assets/location.png';
import appointment from '../assets/book-appointment.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Layout>
      {/* hero section */}
      <div
        className="min-h-[80vh] flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: '70%', // Adjusted background position for smaller screens
        }}
      >
        <div className="min-h-[80vh] flex items-center justify-start mx-10 md:mx-20">
          <div className="bg-white p-6 rounded-md shadow-lg md:w-1/2 bg-opacity-30 lg:w-1/3 text-black">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              We Help Patients Live A Longer Life
            </h1>
            <p className="text-base md:text-md lg:text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              rerum facilis nemo a impedit cumque fugiat, animi illo autem.
              Eaque inventore nihil amet laudantium ab!
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 font-bold text-white px-6 py-3 rounded-3xl mb-10 mr-4">
              Request An Appointment
            </button>

            <div className="flex gap-5">
              <div className="flex flex-col">
                <span className="font-bold text-3xl border-b-4 border-orange-400 w-1/3">
                  30+
                </span>
                <span>Years of Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-3xl border-b-4 border-purple-500 w-1/3">
                  15+
                </span>
                Clinic Location
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-3xl border-b-4 border-blue-400 w-1/3">
                  100%
                </span>
                <span>Patient Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services section */}
      <div className="min-h-[80vh] flex flex-col items-center text-center mb-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mt-10 md:w-1/2 mb-4 font-bold">
          Providing the best medical services
        </h2>
        <p className="font-normal text-btnColor w-2/3 md:w-1/2 mb-10 text-xl">
          World Class Care For Everyone. Our Health System Offers Unmatched,
          Expert Health Care.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 mx-4 md:mx-10">
          <div className="container mb-8 md:mb-0 flex flex-col items-center">
            <img
              src={doctor}
              alt="find a doctor img"
              className="w-full h-40 md:w-48 md:h-auto rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Find a Doctor</h3>
            <p className="text-gray-600 text-center">
              World Class Care For Everyone. Our Health System Offers Unmatched,
              Expert Health Care.
            </p>
            <span className="inline-block cursor-pointer mt-4 p-2 border border-black rounded-full hover:bg-btnColor transition-all duration-300 ease-in-out">
              <Link to="/find-doctor">
                <FaArrowRightLong className="w-4 h-4 text-black" />
              </Link>
            </span>
          </div>
          <div className="container mb-8 md:mb-0 flex flex-col items-center">
            <img
              src={location}
              alt="find a location img"
              className="w-full h-40 md:w-48 md:h-auto rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Find a Location</h3>
            <p className="text-gray-600 text-center">
              World Class Care For Everyone. Our Health System Offers Unmatched,
              Expert Health Care.
            </p>
            <span className="inline-block cursor-pointer mt-4 p-2 border border-black rounded-full hover:bg-btnColor transition-all duration-300 ease-in-out">
              <FaArrowRightLong className="w-4 h-4 text-black" />
            </span>
          </div>
          <div className="container mt-4 flex flex-col items-center">
            <img
              src={appointment}
              alt="book an appointment img"
              className="w-full h-40 md:w-48 md:h-auto rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">Book Appointments</h3>
            <p className="text-gray-600 text-center">
              World Class Care For Everyone. Our Health System Offers Unmatched,
              Expert Health Care.
            </p>
            <span className="inline-block cursor-pointer mt-4 p-2 border border-black rounded-full hover:bg-btnColor transition-all duration-300 ease-in-out">
              <FaArrowRightLong className="w-4 h-4 text-black" />
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
