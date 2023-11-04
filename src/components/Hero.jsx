"use client";

import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

const Hero = (props) => {
  // const [data, setData] = useState([]);
  // console.log(data);

  // useEffect(() => {
  //   setData(props.propsData);

  // }, []);

  const data = props.propsData;

  return (
    <section className="relative">
      <div
        className="hidden lg:block absolute inset-0 w-1/2 ml-auto  z-0"
        style={{ zIndex: -1 }}
      />
      <div className="container  mx-auto">
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center">
             
          
              {data && data.map((item, index) => (
                
                <div key={index}   className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <Link className="block max-w-md mx-auto group relative"    href={`blog-details/${item.id}`}>
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded">
                      <img src={item.imgCDN} alt="image" className="w-full" />
                    </div>
                    <div>
                      <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                        Dec 22, 2023
                      </span>
                      <h3>
                        <a
                          href="javascript:void(0)"
                          className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                          {item?.title}
                        </a>
                      </h3>
                      <p className="text-body-color text-base"></p>
                    </div>
                  </div>
                  </Link>
                </div>
               
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-semibold leading-none" href="#">
              <img
                className="h-10"
                src="metis-assets/logos/metis/metis.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  href="#"
                >
                  Company
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  href="#"
                >
                  Features
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-6 border-t border-gray-100">
              <a
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded"
                href="#"
              >
                Sign Up
              </a>
              <a
                className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded"
                href="#"
              >
                Log In
              </a>
            </div>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-gray-400">
              <span>Get in Touch</span>
              <a
                className="text-blue-600 hover:text-blue-600 underline"
                href="#"
              >
                info@example.com
              </a>
            </p>
            <a className="inline-block px-1" href="#">
              <img src="metis-assets/icons/facebook-blue.svg" alt="" />
            </a>
            <a className="inline-block px-1" href="#">
              <img src="metis-assets/icons/twitter-blue.svg" alt="" />
            </a>
            <a className="inline-block px-1" href="#">
              <img src="metis-assets/icons/instagram-blue.svg" alt="" />
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
