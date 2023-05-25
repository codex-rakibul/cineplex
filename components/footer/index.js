import React from "react";
import styles from "../../style";
import Head from "next/head";
const linkData = [
  {
    id: 1,
    title: "CATEGORIES",
    t1: "First Link",
    t2: "Second Link",
    t3: "Third Link",
    t4: "Fourth Link",
  },
  {
    id: 2,
    title: "CATEGORIES",
    t1: "First Link",
    t2: "Second Link",
    t3: "Third Link",
    t4: "Fourth Link",
  },
  {
    id: 3,
    title: "CATEGORIES",
    t1: "First Link",
    t2: "Second Link",
    t3: "Third Link",
    t4: "Fourth Link",
  },
  {
    id: 4,
    title: "CATEGORIES",
    t1: "First Link",
    t2: "Second Link",
    t3: "Third Link",
    t4: "Fourth Link",
  },
];
const renderData = (
  <div className={` bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
    <div className={`${styles.boxWidth} `}>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
      </Head>
      <div className="bg-black p-4 items-center">
        <div className="space-y-9 grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4  ">
          <div className="text-[#6d6d6d] font-[650] text-[16px] leading-7">
            <div className="flex justify-start md:mt-10">
              <h1 className="text-white pb-[36px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                Inform{" "}
              </h1>{" "}
              <span className="text-white font-sans uppercase font-normal tracking-wider">
                ation
              </span>
            </div>
            <p>Registration Start Date</p>
            <p>Registration End Date</p>
            <p>Exam Last Date </p>
          </div>
          <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide md:">
            <div>
              <pre className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                {" "}
                dates &nbsp;
              </pre>
            </div>
            <p>23 Dec 2021</p>
            <p>30 May 2022</p>
            <p>23 Dec 2021 to 31 May 2022</p>
          </div>
          <div className="md:flex flex-col justify-between">
            <div className="text-[#747474] text-[15px] font-[550] leading-7 tracking-wide">
              <div className="flex justify-start">
                <h1 className="text-white pb-[34px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  About{" "}
                </h1>{" "}
                <span className="text-white font-sans uppercase font-normal tracking-wider">
                  exam
                </span>
              </div>
              <p className="">
                {" "}
                <a className="hover:text-[#cacaca]" href="#">
                  Apply
                </a>{" "}
              </p>
              <p className="">
                {" "}
                <a className="hover:text-[#cacaca]" href="#">
                  Eligibility
                </a>{" "}
              </p>
              <p className="">
                {" "}
                <a className="hover:text-[#cacaca]" href="#">
                  Application Process
                </a>{" "}
              </p>
              <p className="">
                {" "}
                <a className="hover:text-[#cacaca]" href="#">
                  Syllabus
                </a>{" "}
              </p>
            </div>
            <div className="text-[#747474] text-[15px] font-[550] leading-6 tracking-wide mt-9 md:order-5 md:pt-32 lg:pb-28">
              <div className="flex justify-start md:-mt-32">
                <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                  suppor{" "}
                </h1>{" "}
                <span className="text-white font-sans uppercase font-normal tracking-wider">
                  t
                </span>
              </div>
              <p className="">
                {" "}
                <a href="#" className="hover:text-[#cacaca]">
                  FAQ's
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="text-[#797878] text-[15px] font-[550] leading-6 tracking-wide md:order-4 lg:">
            <div className="flex justify-start">
              <h1 className="text-white pb-[38px] font-sans uppercase font-normal tracking-wider underline underline-offset-[12px] decoration-red-500/90">
                get in t{" "}
              </h1>{" "}
              <span className="text-white font-sans uppercase font-normal tracking-wider">
                ouch
              </span>
            </div>
            <p className="space-x-3">
              {" "}
              <i className="fa fa-home text-[17px]" />
              <strong className="text-[#8b8b8b] text-[15px] tracking-wide">
                Our Company
              </strong>{" "}
            </p>
            <div className="leading-7">
              <p className="">
                {" "}
                NH-70 Chandigarh-Ludhiana Highway, <br /> Mohali, Punjab (INDIA){" "}
                <br /> General Helpline No:+91 987-6543-210{" "}
              </p>
            </div>
            <div className="leading-7 mt-4 text-[15px] font-[500]">
              <p className="space-x-3 hover:text-[#cacaca]">
                {" "}
                <i className="fa fa-phone text-[17px]" />{" "}
                <a href="#"> 1800 1800 88800</a>{" "}
              </p>
              <p className="space-x-3 hover:text-[#cacaca]">
                {" "}
                <i className="fa fa-phone text-[17px]" />{" "}
                <a href="#">
                  9946948000S ({" "}
                  <span className="text-[13px] font-[500]">
                    General Enquiry
                  </span>{" "}
                  )
                </a>{" "}
              </p>
              <p className="space-x-3 hover:text-[#cacaca]">
                {" "}
                <i className="fa fa-phone text-[17px]" />{" "}
                <a href="#">
                  994694700&nbsp;({" "}
                  <span className="text-[13px] font-[500]">
                    Technical Support: CUCET
                  </span>{" "}
                  )
                </a>{" "}
              </p>
              <p className="space-x-3 hover:text-[#cacaca]">
                {" "}
                <i className="fa fa-envelope text-[16px]" />{" "}
                <a href="#">admin@Company.in</a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="divide-y divide-[#747474] contrast-200 mt-3 mb-3 md:-mt-4 md:-mb-2 lg:-mt-16 xl:-mt-24">
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div className="flex justify-center mb-4 md:mb-1 text-[#afafaf] text-center text-xl space-x-3">
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[7px]"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-linkedin" />
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-youtube" />
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-pinterest" />
            </a>{" "}
          </p>
          <p>
            {" "}
            <a
              href="#"
              className="w-10 h-10 bg-[#474747] hover:text-blue-500 transform ease-in-out duration-500 hover:bg-white rounded-full inline-block pt-[6px]"
            >
              <i className="fa fa-telegram" />
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default function FooterCom() {
  return <>{renderData}</>;
}
