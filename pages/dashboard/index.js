import React, { useState } from "react";
import Movie from "./movie";
import DashboardCom from "./dashboard";
import {
  FileOutlined,
  HomeOutlined,
  InsertRowAboveOutlined,
  PlaySquareOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import CineplexCom from "./cineplexCom";
import UserCom from "./userCom";
import InvoicesCom from "./invoicesCom";
import SettingCom from "./settingCom";
import { useDispatch, useSelector } from "react-redux";
import MovieDataEdit from "./editData/movieDataEdit";
import {
  addEditMovie,
  addEdituser,
  addNewMovie,
} from "@/app/features/dashboardSlicer/editSlice";
import { addEditMovieData } from "@/app/features/dashboardSlicer/allMovieSlice";
import UserDataEdit from "./editData/userDataEdit";
import Link from "next/link";
import Head from "next/head";
const navData = [
  {
    id: 1,
    title: "Dashboard",
    com: <DashboardCom />,
    desc: "Data Overview",
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    title: "Movie",
    com: <Movie />,
    desc: "Manage Movie",
    icon: <PlaySquareOutlined />,
  },
  {
    id: 3,
    title: "Cineplex",
    com: <CineplexCom />,
    desc: "Manage Cineplex",
    icon: <InsertRowAboveOutlined />,
  },
  {
    id: 4,
    title: "Invoices",
    com: <InvoicesCom />,
    desc: "Manage Invoices",
    icon: <FileOutlined />,
  },
  {
    id: 5,
    title: "Users",
    com: <UserCom />,
    desc: "Manage Users",
    icon: <TeamOutlined />,
  },
  {
    id: 6,
    title: "Settings",
    com: <SettingCom />,
    desc: "Edit Settings",
    icon: <SettingOutlined />,
  },
];

export default function Dashboard() {
  const dispatch = useDispatch();
  const { editMovie, addMovie, editUser } = useSelector(
    (state) => state.editReducer
  );
  const [contentCom, setContentCom] = useState();
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (navItem) => {
    dispatch(addEditMovieData(""));
    dispatch(addEditMovie(false));
    dispatch(addNewMovie(false));
    dispatch(addEdituser(false));
    setSelectedNavItem(navItem.id);
    setContentCom(navItem.com);
  };
  const renderData = (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl md:my-10 my-4 px-2">
          {/* <AdminNavBar/> */}
          <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4 ">
            <Link href="/">
              <p className="text-slate-400 text-sm md:text-3xl mb-2">
                CINEPLEX BD
              </p>
            </Link>
            <a
              href="#"
              className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2"
            >
              <div>
                <img
                  className="rounded-full w-10 h-10 relative object-cover"
                  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/330385579_218641000678253_7500246096659885133_n.jpg?stp=dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFmLraWdyhVYB1BWMbfbf2GQvShbJkQ3VJC9KFsmRDdUgHyXB58N8bZ5LsXDp1igbW1WBx5heTD-4wB8dwKyRE-&_nc_ohc=wOPYYWSpe_sAX_zxuTl&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfB8kX1flu1-wPnELFuGPlr8hDbBHvQpfkTMUBR1sDPFfA&oe=6482A623"
                  alt=""
                />
              </div>
              <div>
                <p className="font-medium group-hover:text-indigo-400 leading-4">
                  Sony
                </p>
                <span className="text-xs text-slate-400">Owner</span>
              </div>
            </a>
            <hr className="my-2 border-slate-700" />
            <div id="menu" className="flex flex-col space-y-2 my-5">
              {navData.map((navIteam) => {
                const { id, title, desc, icon } = navIteam;
                return (
                  <button
                    key={id}
                    onClick={() => handleNavItemClick(navIteam)}
                    className={`${
                      selectedNavItem === id ? "bg-white/10" : "" // Apply the "bg-white/10" background for the selected nav item
                    } bg-black hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2`}
                  >
                    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2  items-center">
                      <div className="text-2xl">{icon}</div>
                      <div className="">
                        <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-indigo-400 hidden md:block">
                          {title}
                        </p>
                        <p className="text-slate-400 text-sm hidden md:block">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            <p className="text-sm text-center text-gray-600">
              © 2023 Cineplex BD
            </p>
          </div>
          <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
            {contentCom == null || undefined ? (
              <DashboardCom />
            ) : editMovie || addMovie ? (
              <MovieDataEdit />
            ) : editUser ? (
              <UserDataEdit />
            ) : (
              contentCom
            )}
            {/* <MovieDataEdit /> */}
          </div>
        </div>
      </div>
    </>
  );
  return <>{renderData}</>;
}

Dashboard.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
