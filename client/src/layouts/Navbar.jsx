import React, { useContext } from "react";
import navLogo from "../assets/eggysPlaceBurger.png";
import locationIcon from "../assets/location-icon.svg";
// import dropdownIcon from "../assets/dropDownIcon.svg";
import cartImg from "../assets/cart-icon.svg";
import loginImg from "../assets/login-icon (1).svg";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
// import SignIn from "../utils/SignIn";
import searchIcon from "../assets/search_35dp_F3F3F3_FILL0_wght400_GRAD0_opsz40.svg";
import SignInOut from "../Btn/SignInOut";
import CartContext from "../context/CartContext";

const Navbar = () => {
  const [isloggedIn, setIsloggedIn] = useState(false);
  const { cart } = useContext(CartContext);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Location");
  const [IsSignInOutOpen, setIsSignInOutOpen] = useState(false);
  // const [showLocationIcon, setShowLocationIcon] = useState(false);
  // const locationRef = useRef(null);

  const handleSelectedLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  console.log("Selected Location:", selectedLocation);

  return (
    <>
      <header className="bg-[#100101] ">
        <nav className=" wrapper flex justify-between items-center ">
          <div to="/" className="flex gap-4 items-center ">
            <img
              className=" md:w-[70px] w-[55px] h-auto md:mx-10"
              src={navLogo}
              alt="nav-logo"
            />
          </div>
          {/* div for location */}
          <div
            className="dropdown dropdown-center "
            tabIndex={0}
            role="button"
            onClick={() => setIsClicked(isClicked)}
          >
            <form>
              <div className="flex items-center bg-transparent ">
                <img
                  className="w-auto h-auto pr-2 hidden md:block"
                  src={locationIcon}
                  alt="location icon"
                />
                <h4 className="text-[#F0F0F0] md:block hidden text-[13px] md:text-[12px] font-[500]">
                  {selectedLocation}
                </h4>
                <div role="button" className="bg-transparent m-1" tabIndex={0}>
                  <img
                    src={searchIcon}
                    alt="drop-down-img"
                    className="cursor-pointer w-full md:hidden  "
                  />

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-auto p-2 shadow-sm"
                  >
                    <li className="hover:text-red-600 cursor-pointer">
                      {/* <label id="location1"> */}
                      Lagos{" "}
                      {/* <input
                      type=""
                      name="location"
                      value=""
                      id="location1"
                      onChange={handleSelectedLocation}
                    /> */}
                      {/* </label> */}
                    </li>
                    <li className="hover:text-red-600 cursor-pointer">
                      {/* <label className="" id="location2"> */}
                      Abuja{" "}
                      {/* <input
                      type=""
                      name="location"
                      value=""
                      id="location2"
                      onChange={handleSelectedLocation}
                    /> */}
                      {/* </label> */}
                    </li>
                    <li className="hover:text-red-600 cursor-pointer">
                      {/* <label id="location3"> */}
                      Benin{" "}
                      {/* <input
                      type=""
                      name="location"
                      value=""
                      id="location3"
                      onChange={handleSelectedLocation}
                    /> */}
                      {/* </label> */}
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>

          {/* div for form search input  */}
          <div className="hidden lg:block">
            {/* form input for search bar  */}
            <form>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="w-[300px] h-[56px] rounded-[32px] bg-[#F0F0F0] placeholder:text-[#100101] outline-none ps-[30px] border font-[400] text-[20px]"
              />
              {/* <img className='ab' src={searchBar} alt="" /> */}
            </form>
          </div>

          {/* div for All products  */}
          <div className="flex gap-4 items-center">
            {/* <h2 className="font-[500] text-[13px] md:ml-4 text-[#FBFBFB] hidden md:block">
              All Products
            </h2> */}
            {/* Ul for cart and login section */}
            <ul className="flex gap-[28px]">
              <li className="flex gap-2 bg-[#B67B0F] md:rounded-[32px] md:ml-9 ml-4 rounded-full py-[15px] px-[20px] md:w-[142px] w-[80px] h-[50px] ">
                <img className="md:w-10  w-15" src={cartImg} alt="cartLogo" />
                <Link>
                  <span className=" hidden md:inline-block ">Cart</span>2
                  {cart.length}
                </Link>
              </li>
              <li>
                {/* You can open the modal using document.getElementById('ID').showModal() method  */}
                <button
                  className="btn flex gap-2 bg-white md:rounded-[32px] rounded-full py-[15px] px-[20px] md:w-[142px] w-[80px] h-[50px]"
                  onClick={() => setIsSignInOutOpen(true)}
                >
                  <img
                    className="md:w-20 w-15"
                    src={loginImg}
                    alt="loginLogo"
                  />
                  {isloggedIn ? (
                    " Hi eggys "
                  ) : (
                    <Link>
                      <span className="hidden md:inline-block ">Login</span>
                    </Link>
                  )}
                </button>
                <SignInOut
                  isOpen={IsSignInOutOpen}
                  onClose={() => setIsSignInOutOpen(false)}
                />
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-black w-screen max-w-5xl">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 text-white top-2">
                        ✕
                      </button>
                    </form>
                  </div>
                </dialog>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
