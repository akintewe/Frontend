"use client";

import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaBed, FaPaw, FaBath } from "react-icons/fa";
import Loader from "@/layouts/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usePropertyDetails from "@/hooks/house/usePropertyDetails";

const PropertyDetails: React.FC = () => {
  const { bookReservation, loadingBook, isBooked } = usePropertyDetails();

  const handleBook = async () => {
    try {
      await bookReservation();
    } catch (error) {
      console.error("Error during booking:", error);
    }
  };

  return (
    <div className="w-full bg-gray-50 px-5 py-2">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 bg-white rounded-lg shadow-lg p-6 w-[73rem]">
          <div className="flex gap-6">
            <div className="flex-grow relative">
              <img
                src="/img/house1.jpg"
                alt="Main Property"
                className="w-full h-[465px] object-cover rounded-lg border"
              />
              <span className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
                PROMOTED
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="/img/house1.jpg"
                alt="House"
                className="w-36 h-36 object-cover rounded-lg"
              />
              <img
                src="/img/house1.jpg"
                alt="House"
                className="w-36 h-36 object-cover rounded-lg"
              />
              <img
                src="/img/house1.jpg"
                alt="House"
                className="w-36 h-36 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-black">La sabana sur</h1>
              <button
                onClick={handleBook}
                className={`bg-orange-500 text-white px-12 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 ${
                  isBooked || loadingBook ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isBooked || loadingBook}
              >
                {loadingBook ? <Loader /> : isBooked ? "BOOKED" : "BOOK"}
              </button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center text-gray-700 text-sm">
                <MdLocationOn className="text-orange-500 w-5 h-5 mr-2" />
                329 Calle Santos, Paseo Colón, San José
              </div>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-orange-500">
                <div className="flex items-center">
                  <FaBed className="w-5 h-5 mr-2" />
                  <span className="text-gray-700 text-sm">2 bd.</span>
                </div>
                <div className="flex items-center">
                  <FaPaw className="w-5 h-5 mr-2" />
                  <span className="text-gray-700 text-sm">pet friendly</span>
                </div>
                <div className="flex items-center">
                  <FaBath className="w-5 h-5 mr-2" />
                  <span className="text-gray-700 text-sm">1 ba.</span>
                </div>
              </div>
              <div className="flex items-center">
                <img src="/img/person.png" className="w-10 h-10 rounded-full" />
                <p className="text-black font-semibold ml-2 text-sm">
                  Alberto Casas
                </p>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-black">
                Apartment details
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default PropertyDetails;
