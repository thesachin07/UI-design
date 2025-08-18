import React, { useState } from "react";
import Card from "./card";
import Slideshow from "./Slideshow";
import Reviewbox from "./Reviewbox";
import Faq from "./Faq";
import ContactForm from "./userform";
import CheckBox from "./CheckBox";
import { Menu, X } from 'lucide-react';
import { motion } from "framer-motion";


const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const car = [
    { name: "01", title: "Website Design" },
    { name: "02", title: "Branding" },
    { name: "03", title: "UI/UX" },
    { name: "04", title: "Motion Design" },
    { name: "05", title: "SEO" },
    { name: "06", title: "Content Creation" },
    { name: "07", title: "Landing Page" },
    { name: "08", title: "Webflow Development" },
  ];

  const faqData = [
    {
      question: "Do you offer revisions?",
      answer:
        "Yes, we provide revisions to ensure the final content meets your expectations and goals.",
    },
    {
      question: "How long does branding take?",
      answer:
        "Most branding projects take about 4-5 weeks, depending on scope and complexity.",
    },
    {
      question: "What do you need from me to start the project?",
      answer:
        "We’ll need details about your brand, goals, and any references you like. Our team will guide you through the entire process.",
    },

    {
      question: "How long does it take to design a website?",
      answer:
        "Timelines vary based on complexity, but most projects take between 4-6 weeks from concept to completion.",
    },
    {
      question: "How can my website enhance my branding?",
      answer:
        "Your website can enhance your branding by providing a consistent visual identity and messaging that reflects your brand values. Use your logo, color scheme, and typography consistently across your site. High-quality content that resonates with your target audience can also strengthen your brand image. Engaging design and user-friendly navigation contribute to a positive perception of your brand.",
    },
  ];
  const faqData2 = [
    {
      question: "What is user experience (UX) design?",
      answer:
        " r experience (UX) design focuses on creating products that provide meaningful and relevant experiences to users. This involves understanding user needs, behaviors, and motivations through research and testing. Good UX design enhances user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with the product. It is essential for retaining customers and ensuring they have a positive experience on your website",
    },

    {
      question: "What industries do you specialize in?",
      answer:
        "We can design for any industry, but most of our clients come from fintech, healthcare, Web3, SaaS, and e-commerce.",
    },

    {
      question: "How can I optimize my website's speed?",
      answer:
        "Networks (CDNs) to distribute your content efficiently. Additionally, clean up your code by removing unnecessary scripts and styles. Regularly monitor your website's performance using tools like Google PageSpeed Insights to identify areas for improvement. ",
    },

    {
      question: "What is a content management system (CMS)?",
      answer:
        " A content management system (CMS) is a software application that allows users to create, manage, and modify content on a website without needing specialized technical knowledge. Popular CMS platforms include WordPress, Joomla, and Drupal. These systems provide user-friendly interfaces for managing website content, making it easier for businesses to maintain their online presence and update information as needed.",
    },

    {
      question: "Why is website design important?",
      answer:
        "Website design is crucial because it affects how users perceive your brand. A well-designed website can enhance user experience, improve navigation, and increase engagement. It also plays a significant role in SEO, as search engines favor sites that are visually appealing and easy to use. In today's digital age, a professional website design can set you apart from competitors and help establish credibility.",
    },
  ];

  const box = [
    { name: "01", title: "100+", description: "Project Completed" },
    { name: "02", title: "98%", description: "Client Satisfaction Rate" },
    { name: "03", title: "25+", description: "Experts In Our team" },
    { name: "04", title: "8/10", description: "Client Return For More" },
  ];

  return (
    <div className=" p-0 bg-gray-300 overflow-x-hidden">


      {/* Nav Bar starts from here */}

      <div className="bg-white min-h-screen rounded-3xl ">
        <motion.nav initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
       className="bg-white-100 p-3 flex items-center justify-between box  duration-300 transform">
          <div className=" w-28 ml-0 md:ml-10">
            <a href="#" class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 127 33"
                fill="none"
              >
                <path
                  d="M12.5339 0.0495186C11.6559 0.334023 10.6715 2.02269 10.033 4.31708C9.80689 5.13388 9.33466 7.35485 9.19498 8.26343C9.11517 8.79572 8.88903 10.7689 8.78926 11.8427C8.39019 16.2387 8.69614 21.6259 9.59405 25.9761C10.1328 28.5733 11.1172 31.0146 11.9353 31.7855C13.2988 33.0795 14.6755 31.3908 15.6932 27.1692C16.1122 25.453 16.5778 22.2867 16.6509 20.7174C16.6643 20.5338 16.6842 23.0393 16.7042 26.2973L16.7374 32.2168L17.203 32.1893C19.5376 32.07 21.6194 28.812 22.7434 23.544C23.6546 19.249 23.7145 13.6782 22.8898 9.23625C22.5306 7.27225 21.8322 5.01457 21.1471 3.58287C20.9543 3.17906 20.5552 2.51828 20.2625 2.11447C19.3912 0.90303 18.5199 0.297312 17.4225 0.141293C17.0899 0.0954056 16.7906 0.0770531 16.7574 0.104584C16.7308 0.132118 16.6975 2.78443 16.6975 5.99657C16.6909 11.2461 16.6776 11.7417 16.6044 10.8331C16.4248 8.73148 15.9991 6.09752 15.5668 4.42721C15.1478 2.81196 14.7554 1.8575 14.1767 1.04987C13.5315 0.150471 13.0726 -0.124855 12.5339 0.0495186Z"
                  fill="url(#paint0_linear_6009_1890)"
                ></path>
                <path
                  d="M5.58528 3.78397C5.31923 3.85739 4.82039 4.63748 4.561 5.38086C3.82937 7.51923 3.40369 10.9425 3.33718 15.1917C3.26402 19.8263 3.63649 23.9103 4.36811 26.4525C4.8337 28.0953 5.31923 28.8662 5.89788 28.8662C6.849 28.8662 7.707 25.9936 8.07947 21.5242C8.2391 19.5602 8.279 14.0995 8.14598 11.9612C7.89989 8.09742 7.38775 5.46346 6.65612 4.3438C6.31026 3.8115 6.03756 3.66466 5.58528 3.78397Z"
                  fill="url(#paint1_linear_6009_1890)"
                ></path>
                <path
                  d="M1.32424 8.99567C1.16815 9.03837 0.875491 9.49199 0.723307 9.92427C0.294072 11.1677 0.0443351 13.1583 0.00531376 15.6293C-0.0376098 18.3243 0.18091 20.6992 0.610145 22.1775C0.883295 23.1328 1.16815 23.5811 1.50764 23.5811C2.06564 23.5811 2.56902 21.9106 2.78754 19.3116C2.88119 18.1696 2.9046 14.9942 2.82656 13.7507C2.68218 11.504 2.38172 9.9723 1.95248 9.32121C1.74957 9.01168 1.58958 8.92629 1.32424 8.99567Z"
                  fill="url(#paint2_linear_6009_1890)"
                ></path>
                <path
                  d="M23.8672 16.2939V28.7754H24.0534C24.6653 28.7754 25.5699 28.2064 26.2018 27.4079C28.1106 25.031 29.2613 19.8181 29.0019 14.7429C28.7359 9.67692 27.3657 5.6755 25.4502 4.36312C24.9713 4.0419 24.3727 3.81246 23.9869 3.81246C23.8738 3.81246 23.8672 4.46407 23.8672 16.2939Z"
                  fill="url(#paint3_linear_6009_1890)"
                ></path>
                <path
                  d="M29.4768 12.6416C29.5037 13.8622 29.524 16.386 29.524 18.2582L29.5307 21.6631L29.6725 21.4336C29.9019 21.0574 30.3069 19.7909 30.4621 18.9557C30.6444 17.9278 30.7658 16.1657 30.7051 15.1929C30.6106 13.4951 30.2664 11.8706 29.794 10.8428C29.443 10.0994 29.4295 10.1911 29.4768 12.6416Z"
                  fill="url(#paint4_linear_6009_1890)"
                ></path>
                <path
                  d="M121.047 21.2255C121.047 23.6594 122.344 25.2426 124.571 25.2426C125.349 25.2426 126.127 24.9591 126.668 24.5101V23.0923C126.149 23.5649 125.436 23.8721 124.679 23.8721C123.295 23.8721 122.387 22.8796 122.387 21.1782V18.0118L121.047 18.0354V21.2255Z"
                  fill="black"
                ></path>
                <path
                  d="M118.82 14.8453H121.047H122.387H126.668V13.522H122.387V10.4737H121.047V13.522H118.82V14.8453Z"
                  fill="black"
                ></path>
                <path
                  d="M111.771 14.6569C109.393 14.6569 108.118 16.8073 108.118 19.2412V24.9834H106.777V19.1231C106.777 15.8148 108.615 13.2628 111.771 13.2628C114.993 13.2628 116.873 15.7912 116.873 19.0994V24.9834H115.533V19.2649C115.533 16.8073 114.214 14.6569 111.771 14.6569Z"
                  fill="black"
                ></path>
                <path
                  d="M92.0049 25.2433C91.032 25.2433 90.4267 24.6289 90.1673 23.4474L88.0702 13.5227H89.3457L91.3563 23.1639C91.4644 23.6601 91.659 23.8964 92.0049 23.8964C92.3076 23.8964 92.5238 23.6365 92.6102 23.2347L94.4695 15.035C94.7505 13.8299 95.3559 13.2628 96.3071 13.2628C97.2367 13.2628 97.8421 13.8299 98.1015 15.0114L99.9391 23.2347C100.047 23.6601 100.263 23.8964 100.588 23.8964C100.912 23.8964 101.107 23.6601 101.215 23.1639L103.204 13.5227H104.458L102.382 23.4474C102.123 24.6526 101.539 25.2433 100.588 25.2433C99.5932 25.2433 99.0528 24.6526 98.7933 23.4947L96.9557 15.2477C96.8476 14.7987 96.6098 14.5624 96.2855 14.5624C95.9612 14.5624 95.7234 14.7987 95.6369 15.2477L93.7777 23.4947C93.5182 24.6526 92.9778 25.2433 92.0049 25.2433Z"
                  fill="black"
                ></path>
                <path
                  d="M84.4176 30.253H85.758V19.2176C85.758 15.8621 83.3366 13.2628 80.2451 13.2628C77.1103 13.2628 74.7538 15.9566 74.7538 19.2176C74.7538 22.5967 77.0887 25.2433 80.1802 25.2433H80.2451V23.8491C77.9318 23.8491 76.0942 21.746 76.0942 19.2412C76.0942 16.7364 77.9318 14.6569 80.2451 14.6569C82.5799 14.6569 84.4176 16.7364 84.4176 19.2412V22.7621V30.253Z"
                  fill="black"
                ></path>
                <path
                  d="M72.8163 19.2176C72.8163 22.5258 70.4166 25.2197 67.3034 25.2197C64.2119 25.2197 61.8122 22.5258 61.8122 19.2176C61.8122 15.9566 64.1686 13.2628 67.3034 13.2628V14.6569C64.9902 14.6569 63.1525 16.7364 63.1525 19.2412C63.1525 21.746 64.9902 23.8255 67.3034 23.8255C69.6383 23.8255 71.4759 21.746 71.4759 19.2412C71.4759 18.4333 71.2847 17.6696 70.9473 17.0057L72.0908 16.2542C72.5531 17.1273 72.8163 18.1393 72.8163 19.2176Z"
                  fill="black"
                ></path>
                <path
                  d="M57.3436 8.25299H58.7038V24.9832H57.3436V8.25299Z"
                  fill="black"
                ></path>
                <path
                  d="M43.8671 19.2178C43.8671 22.6442 46.1803 25.2199 49.2719 25.2199C51.196 25.2199 52.839 24.2747 53.7903 22.3842L52.7526 21.7699C51.9959 23.2349 50.6987 23.8257 49.2719 23.8257C47.0451 23.8257 45.402 22.1007 45.1859 19.7613C45.1345 19.384 45.1933 18.8164 45.2291 18.5798C45.4237 16.3585 46.8505 14.6335 49.0341 14.6335C51.1527 14.6335 52.6877 16.1931 52.7309 18.5798H48.98V19.7613H54.0713V18.887C54.0713 15.626 52.0824 13.2393 49.0341 13.2393C45.9641 13.2393 43.8671 15.9095 43.8671 19.2178Z"
                  fill="black"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_6009_1890"
                    x1="16.0435"
                    y1="1.14441e-05"
                    x2="16.0435"
                    y2="32.2168"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3F5FF"></stop>
                    <stop offset="1" stop-color="#A9C5DB"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_6009_1890"
                    x1="5.77709"
                    y1="3.74511"
                    x2="5.77709"
                    y2="28.8662"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3F5FF"></stop>
                    <stop offset="1" stop-color="#A9C5DB"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_6009_1890"
                    x1="1.43677"
                    y1="8.97307"
                    x2="1.43677"
                    y2="23.5811"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3F5FF"></stop>
                    <stop offset="1" stop-color="#A9C5DB"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_6009_1890"
                    x1="26.4527"
                    y1="3.81246"
                    x2="26.4527"
                    y2="28.7754"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3F5FF"></stop>
                    <stop offset="1" stop-color="#A9C5DB"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_6009_1890"
                    x1="30.089"
                    y1="10.434"
                    x2="30.089"
                    y2="21.6631"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3F5FF"></stop>
                    <stop offset="1" stop-color="#A9C5DB"></stop>
                  </linearGradient>
                </defs>
              </svg>{" "}
            </a>
          </div>
          <div>
            <ul className=" hidden md:flex justify-center items-center gap-14">
              <li className="text-sm ">
                <a href="#" className="relative inline-block  group">
                  Home
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="relative inline-block  group">
                  About
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="relative inline-block  group">
                  Project
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="relative inline-block  group">
                  Services
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="relative inline-block  group">
                  Contact
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="text-sm">
                <a href="#" className="relative inline-block  group">
                  Blog
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>{" "}
            </ul>
          </div>


          
          <div className="bg-gray-200 hover:bg-black hover:text-white duration-500 rounded-4xl mr-10">
            <button className="hidden md:inline-flex  mx-3 md:mx-4 relative  px-0 md:px-2 lg:px-6 pl-4 py-2 overflow-hidden  text-black   rounded-full group">
              <span className="relative z-10 transition-colors text-nowrap duration-300 group-hover:text-white">
                Let's Chat 👋
              </span>
              <span className="absolute inset-0  h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
            </button>
          </div>

          <div className="md:hidden mr-4">
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

        </motion.nav>
       {/* Mobile Menu Overlay - Backdrop */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true">
          </div>
        )}

        {/* Mobile Sidebar Menu */}
        <div className={`
          fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl z-40 lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button 
              onClick={closeMenu}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="px-6 py-4">
            <ul className="flex flex-col space-y-6">
              <li>
                <a  href="/home"  className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/project" 
                  className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Project
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  Blog
                </a>
              </li>
            </ul>

            {/* Mobile CTA Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button 
                className="w-full bg-gray-200 hover:bg-black hover:text-white text-black font-medium py-3 px-6 rounded-full transition-all duration-300"
                onClick={closeMenu}
              >
                Let's Chat 👋
              </button>
            </div>
          </nav>
        </div>

          
        <div className="mt-45 text-center justify-center">
          <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} className="font-medium  text-6xl">Explore Our Services</motion.h1>
          <h3 className="p-18 font-normal">
            Solution to help your brand <br></br>Stand out and grow
          </h3>
        </div>

        <div className="flex justify-center ">
          <div className="animate-bounce text-xl text-white bg-black  rounded-full px-3 py-2 hover:bg-gray-300 hover:text-black">
            ↓
          </div>
        </div>
      </div>

      {/* SECTION 2 */}

      <div className="bg-white rounded-3xl max-w-6xl mx-auto p-4 sm:p-8 mb-8 mt-8">
        <div className="flex justify-between  gap-25 ">
          <motion.h1   initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="pt-13 pl-10 font-medium">Our Services</motion.h1>
          <motion.p   initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="font-semibold text-3xl pt-12 mb-16 align-text-top pr-25">
            Our Core Creative Offerings
          </motion.p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6">
  {car.map((carItem, index) => (
    <Card key={index} name={carItem.name} title={carItem.title} />
  ))}
</div>

      </div>

{/* SECTION 3 */}

     <div className="bg-white rounded-3xl max-w-6xl mx-auto p-4 sm:p-8 mb-8 mt-8">
  {/* Heading Section */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center px-4 sm:px-8 pt-3 sm:pt-20">
    <motion.h1 
        initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}  className="sm:text-2xl  font-medium  mb-3 sm:mb-0">
      Our Works
    </motion.h1>

    <motion.p
        initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="text-medium sm:text-3xl font-semibold">
      Check Our Featured Projects
    </motion.p>
  </div>

  {/* Slideshow Section */}
  <div className="flex justify-center pt-10 px-4">
    <div className="w-full  md:max-w-6xl translate-y-[1px]">
      <Slideshow />
    </div>
  </div>

  {/* Button Section */}
  <div className="flex justify-center">
    <a href="#">
      <button className="bg-black text-white hover:bg-slate-200 hover:text-black rounded-full  px-6 py-3 mb-4 ">
        All Projects
      </button>
    </a>
  </div>
</div>

{/* SECTION-4 */}

     <div className="bg-white rounded-3xl max-w-6xl mx-auto p-4 sm:p-8 mb-8 mt-8">
  <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-gray-50 rounded-3xl">
    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
      {/* Left Content Section */}
      <div className="flex-1 space-y-4 sm:space-y-6 max-w-full sm:max-w-lg">
        {/* Expertise Header */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <motion.h3    initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="text-base sm:text-lg font-medium text-gray-800">Expertise</motion.h3>
        </div>

        {/* Main Heading */}
        <div>
          <motion.h1 initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight mb-2 sm:mb-4 pt-4 sm:pt-8">
            We solve real problems
          </motion.h1>

          {/* Description Text */}
          <motion.p initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="text-gray-600 text-sm sm:text-base leading-normal sm:leading-relaxed">
            We combine years of expertise in UX/UI, Motion design, Webflow development, and Web design to build high-performance digital experiences that not only look great but drive engagement and results for our clients.
          </motion.p>
        </div>
        {/* CTA Button */}
        <div className="pt-10 sm:pt-16 lg:pt-20 hidden lg:block">
          <button className="relative px-5 py-2 sm:px-6 sm:py-3 overflow-hidden text-black bg-gray-200 hover:text-white rounded-3xl group w-full sm:w-auto">
            <span className="relative z-10">Let's Talk 👋</span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-200 ease-in-out group-hover:h-full"></span>
          </button>
        </div>
      </div>

      {/* Right Visual Section */}
      <div className="relative w-full h-48 sm:h-80 lg:w-[600px] lg:h-[380px] overflow-hidden rounded-2xl bg-slate-300 mt-6 lg:mt-0 flex-shrink-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="vdo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

       <div className="md:hidden pt-10 sm:pt-16 lg:pt-20 block mx-auto">
          <button className="relative px-5 py-2 sm:px-6 sm:py-3 overflow-hidden text-black bg-gray-200 hover:text-white rounded-3xl group w-full sm:w-auto">
            <span className="relative z-10">Let's Talk 👋</span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-200 ease-in-out group-hover:h-full"></span>
          </button>
        </div>
    </div>
  </div>
</div>

{/* <SECTION-5 */}

     <div className="bg-white rounded-3xl max-w-6xl mx-auto p-4 sm:p-8 mb-8 mt-8">
        <div className="max-w-7xl mx-auto p-0 bg-gray-50 rounded-3xl">
          <div className="flex flex-col md:flex md:flex-row  items-start gap-8">
            {/* Left Content Section */}
            <div className="flex-1 space-y-6 max-w-lg">
              {/* Expertise Header */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <motion.h3 initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="text-lg font-medium text-gray-800">
                  What makes us different?
                </motion.h3>
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-4 pt-3 md:pt-8">
                  Eloqwnt <br></br>in numbers
                </h1>

                {/* Description Text */}
          <p className="text-gray-600 text-sm sm:text-base leading-normal sm:leading-relaxed">
                  Design is more than aesthetics—it’s about <br></br> measurable
                  impact. Here’s how we make a difference.
                </p>
              </div>
              {/* relative z-10 transition-colors duration-300 group-hover:text-white */}
              {/* CTA Button */}
              <div className="pt-15 hidden md:block">
                <button className="relative px-6 py-3 overflow-hidden text-black bg-gray-200 hover:text-white rounded-3xl group">
                  <span className="relative z-10 ">Let's Talk 👋</span>
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-black  transition-all duration-200 ease-in-out group-hover:h-full"></span>
                </button>
              </div>
            </div>

            {/* Right Visual Section */}
            <div className="relative w-140  overflow-hidden rounded-3xl  ">
              <div className="  grid grid-cols-1 md:grid md:grid-cols-2 gap-3 px-2 py-6 md:gap-2 m-1 ">
                {box.map((boxItem, index) => (
                  <Reviewbox
                    name={boxItem.name}
                    title={boxItem.title}
                    description={boxItem.description}
                  />
                ))}
              </div>
            </div>
<div className="md:hidden pt-10 flex justify-center">
          <button className="relative px-5 py-2 sm:px-6 sm:py-3 overflow-hidden text-black bg-gray-200 hover:text-white rounded-3xl group w-full sm:w-auto">
            <span className="relative z-10">Let's Talk 👋</span>
            <span className="absolute bottom-0 left-0  h-0 bg-black transition-all duration-200 ease-in-out group-hover:h-full"></span>
          </button>
        </div>
          </div>
        </div>
      </div>


{/* section-6 */}

     <div className="bg-white rounded-3xl max-w-6xl mx-auto p-4 sm:p-8 mb-8 mt-8">
  {/* Heading Section */}
  <div className="flex items-center gap-3">
    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
    <div className="text-xl pt-2 sm:pt-6">FAQ</div>
  </div>

  <motion.div initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="mt-4 sm:mt-7 text-2xl sm:text-3xl font-semibold">
    Frequently <br /> Asked Questions
  </motion.div>

  {/* FAQ Grid Responsive */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
    <div className="sm:ml-10">
      {faqData.map((item, index) => (
        <Faq key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
    <div className="sm:mr-10">
      {faqData2.map((item, index) => (
        <Faq key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  </div>
</div>


{/* Section 7 */}
    <div className="bg-white rounded-3xl max-w-7xl mx-auto px-4 sm:px-10 pt-10 pb-10 mt-10 mb-10">
  {/* Flex layout responsive */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0">
    <motion.div initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="text-3xl sm:text-5xl font-semibold leading-tight">
      Let's make <br /> an impact
    </motion.div>
    {/* Checkbox or Form */}
    <div>
      <CheckBox />
    </div>
  </div>
</div>

{/* FOOTER SECTION */}
     <footer> 
  <div className="mb-4 px-4 sm:px-8">
    <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">

      {/* follow us with logo */}
      <div className="flex flex-col justify-start gap-4">
        <motion.div initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="pl-4 sm:pl-9 font-bold">Follow us on</motion.div>
        <div className="flex gap-2 sm:gap-1 pl-4 sm:pl-7 flex-wrap">
          <img src="/B1.avif" alt="dribble" className="h-10 w-10 sm:h-12 sm:w-12 border rounded-full hover:scale-110 transition-transform" />
          <img src="/B2.avif" alt="behance" className="h-10 w-10 sm:h-12 sm:w-12 border rounded-full hover:scale-110 transition-transform" />
          <img src="/B3.avif" alt="instagram" className="h-10 w-10 sm:h-12 sm:w-12 border rounded-full hover:scale-110 transition-transform" />
          <img src="/B4.avif" alt="linkedIn" className="h-10 w-10 sm:h-12 sm:w-12 border rounded-full hover:scale-110 transition-transform" />
          <img src="/B5.avif" alt="twitter" className="h-10 w-10 sm:h-12 sm:w-12 border rounded-full hover:scale-110 transition-transform" />
        </div>
      </div>

      {/* footer's links */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:mr-50 gap-10 sm:gap-15">
        
        {/* Company */}
        <div className="mb-6 sm:mb-10">
          <ul className="flex flex-col justify-center items-center gap-5">
            <motion.h2 initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="font-semibold">Company:</motion.h2>
            {["Home","About","Project","Services","Contact","Blog","Career","Lab"].map((link) => (
              <li key={link} className="text-sm">
                <a href="#" className="relative inline-block group">
                  {link}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="mb-6 sm:mb-10">
          <ul className="flex flex-col justify-center items-center gap-5">
            <motion.h2 initial={{ opacity: 0, y: 50 }}       // hidden state
        whileInView={{ opacity: 1, y: 0 }}    // visible state
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }} className="font-semibold">Services:</motion.h2>
            {["Web Design","Branding","UI/UX","Motion","SEO","Content Creation","Landing Page","Webflow Dev"].map((link) => (
              <li key={link} className="text-sm">
                <a href="#" className="relative inline-block group">
                  {link}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div className="mb-6 sm:mb-10">
          <ul className="flex flex-col justify-center items-center gap-5">
            <h2 className="font-semibold">Industries:</h2>
            {["Healthcare","Fintech","Web3","Technology","Corporate","AI","Real Estate","E-commerce"].map((link) => (
              <li key={link} className="text-sm">
                <a href="#" className="relative inline-block group">
                  {link}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Brand Title */}
    <div className="mt-6 sm:mt-0 px-4 sm:px-7">
      <h1 className="font-bold text-3xl sm:text-4xl text-left translate-y-2">Eloqwnt</h1>
    </div>

    {/* Bottom text */}
    <div className="font-light text-center flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 mt-4 px-4">
      <span>2025 Eloqwnt right reserved.</span>
      <span>Privacy Policies</span>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Homepage;
