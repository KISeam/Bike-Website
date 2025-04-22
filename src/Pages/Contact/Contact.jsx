import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import PageHeader from "../../Components/PageHeader";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
      <div>
        <PageHeader pageName={"Contact Us"} />
        <div className="bg-black p-16 md:py-20">
          <div className="w-11/12 2xl:w-9/12 mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
              <div className="w-full lg:w-1/3">
                <div className="bg-[#222222] p-12 space-y-4">
                  <h1 className="text-white font-semibold text-2xl lg:text-3xl">
                    Contact info
                  </h1>
                  <p className="text-[#b1b1b1] roboto font-normal text-base leading-7">
                    Whether it’s a good day, a rough one, or something in
                    between — we’re here to help.
                  </p>

                  <div className="flex gap-2">
                    <FaPhoneAlt className="text-[#ff2626] text-lg mt-1" />
                    <div className="space-y-1.5">
                      <p className="text-[#b1b1b1] roboto font-normal text-base leading-7">
                        Call us at
                      </p>
                      <p className="text-white roboto text-lg">
                        +880 1580768366
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <IoLocationSharp className="text-[#ff2626] text-lg mt-1" />
                    <div className="space-y-1.5">
                      <p className="text-[#b1b1b1] roboto font-normal text-base leading-7">
                        Address:
                      </p>
                      <p className="text-white roboto text-lg">
                        Jatrabari, Dhaka
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <MdEmail className="text-[#ff2626] text-lg mt-1" />
                    <div className="space-y-1">
                      <p className="text-[#b1b1b1] roboto font-normal text-base leading-7">
                        Email:
                      </p>
                      <p className="text-white roboto text-lg">
                        khairulislamseam01@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-6">
                    <FaFacebook className="text-gray-400 hover:text-white cursor-pointer text-lg" />
                    <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer text-lg" />
                    <FaTwitter className="text-gray-400 hover:text-white cursor-pointer text-lg" />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/3">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="bg-[#ff2626] py-2 px-2 md:px-4 text-sm w-fit">
                      Contact
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-semibold">
                      Get In touch
                    </h1>
                  </div>
                  <p className="text-[#b1b1b1] roboto font-normal text-base leading-7">
                    We’d love to hear from you! Just fill out the form below to
                    share any comments, questions, or concerns. Need extra
                    support? You can always request a callback or speak directly
                    with a Senior Agent or Supervisor.
                  </p>

                  <div>
                    <div className="flex gap-6">
                      <div className="w-full">
                        <label className="input validator bg-[#333333]">
                          <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <g
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2.5"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </g>
                          </svg>
                          <input
                            type="input"
                            required
                            placeholder="Username"
                            pattern="[A-Za-z][A-Za-z0-9\-]*"
                            minlength="3"
                            maxlength="30"
                            title="Only letters, numbers or dash"
                          />
                        </label>
                        <p className="validator-hint">
                          Must be 3 to 30 characters
                          <br />
                          containing only letters, numbers or dash
                        </p>
                      </div>

                      <div className="w-full">
                        <label className="input validator bg-[#333333]">
                          <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <g
                              strokeLinejoin="round"
                              strokeLinecap="round"
                              strokeWidth="2.5"
                              fill="none"
                              stroke="currentColor"
                            >
                              <rect
                                width="20"
                                height="16"
                                x="2"
                                y="4"
                                rx="2"
                              ></rect>
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                          </svg>
                          <input
                            type="email"
                            placeholder="mail@site.com"
                            required
                          />
                        </label>
                        <div className="validator-hint hidden">
                          Enter valid email address
                        </div>
                      </div>
                    </div>

                    <textarea
                      name=""
                      id=""
                      className="input w-full h-48 pt-3 bg-[#333333]"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3.5 rounded-md hover:from-red-700 hover:to-red-600 cursor-pointer transition duration-300 w-fit uppercase font-semibold">
                    Send Message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full relative overflow-hidden h-[60vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396725783!2d90.25487754014735!3d23.780753031632905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1745282600364!5m2!1sen!2sbd"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
