import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { close, menu } from "../../assets";
import { navLinks } from "../../dummyData/dummyData";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addAuth } from "@/app/features/basicAuthSlicer/basicAuthSlice";
import { message } from "antd";
import { svg1, svg2 } from "./svg";

const NavbarCom = () => {
  const [logoutData, setLogoutData] = useState(false);
  const [localStorageUserData, setLocalStorageUserData] = useState();
  const loginCheck = useSelector(
    (state) => state.basicAuthReducer.loginChecked
  );
  const dispatch = useDispatch();

  const router = useRouter();

  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    setLogoutData(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const person = {
      ...user,
      status: "inactive",
    };
    localStorage.setItem("user", JSON.stringify(person));
    message.success("Safely log out your account");
    dispatch(addAuth(false));
    router.push("");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("click-----", user.status);
      setLocalStorageUserData(user);
    }
  }, [loginCheck,logoutData]);

  const renderData = (
    <div>
      <nav className="z-10 w-full  py-6 flexStyle navbar">
        {/* <Image src={logo} alt="hoobank" className="w-[124px] h[32px]" /> */}
        <Link href="/">
          <h1 className={`font-poppins font-semibold cursor-pointer mainLogo `}>
            <i
              style={{ fontSize: "20px" }}
              className="png fas fa-play mr-2 w-4 h-4"
            />
            CINEPLEX BD
          </h1>
        </Link>

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => {
            const { id, title } = nav;
            return (
              <li
                key={id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                }  ${
                  router.pathname == `/${nav.id}` ? "active" : ""
                } text-white`}
              >
                {id != "signin" ? (
                  <Link href={`/${nav.id}`}>{title}</Link>
                ) : localStorageUserData?.status !== "inactive" ? (
                  <div
                    className="inline-flex items-center text-[16px]"
                    onClick={() => handleLogout()}
                  >
                    LOGOUT
                    {svg1}
                  </div>
                ) : (
                  <Link href={`/${nav.id}`}>
                    <div className="inline-flex items-center text-[16px]">
                      {title}
                      {svg2}
                    </div>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden z-10 flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black bg-blackgradient absolute top-20 right-0 mx-4 my-2 mi-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex  flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => {
                const { id, title } = nav;
                return (
                  <li
                    key={id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${
                      index === navLinks.length - 1 ? "mr-0" : "mb-4"
                    } text-white`}
                  >
                    {id != "signin" ? (
                      <Link href={`/${nav.id}`}>{title}</Link>
                    ) : localStorageUserData?.status !== "inactive" ? (
                      <div
                        className="inline-flex items-center text-[16px]"
                        onClick={() => handleLogout()}
                      >
                        LOGOUT
                        {svg1}
                      </div>
                    ) : (
                      <Link href={`/${nav.id}`}>
                        <div className="inline-flex items-center text-[16px]">
                          {title}
                          {svg2}
                        </div>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

  return <>{renderData}</>;
};

export default NavbarCom;
