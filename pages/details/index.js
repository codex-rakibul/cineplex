import Head from "next/head";
import React from "react";
import styles from "../../components/style";
import { useRouter } from "next/router";
export default function DetailsPage() {
  const router = useRouter();
  const renderData = (
    <>
      <Head>
        <title>Details</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossorigin="anonymous"
        />
      </Head>
      <div className={`  ${styles.paddingX} sm:${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className=" py-10 ">
              <div className="lg:w-4/5 flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                  src="https://dummyimage.com/400x400"
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    The Catcher in the Rye
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-red-600"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-red-600"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-red-600"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-red-600"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-red-600"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-gray-600 ml-3">20.53K Reviews</span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed">
                    Fam locavore kickstarter distillery. Mixtape chillwave
                    tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam
                    indxgo juiceramps cornhole raw denim forage brooklyn.
                    Everyday carry +1 seitan poutine tumeric. Gastropub blue
                    bottle austin listicle pour-over, neutra jean shorts keytar
                    banjo tattooed umami cardigan.
                  </p>

                  <div className="flex mt-4">
                    <div
                      onClick={() =>router.push("ticket_booking") }
                    >
                      <button className="btns">Buy Ticket</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-10 text-gray-600 body-font">
            <div className="   flex flex-wrap">
              <div className="flex w-full mb-20 flex-wrap">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                  Some Photos From This Movie
                </h1>
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven't heard of them man bun deep jianbing
                  selfies heirloom.
                </p>
              </div>
              <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap w-1/2">
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/500x300"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/501x301"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-full">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block"
                      src="https://dummyimage.com/600x360"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="md:p-2 p-1 w-full">
                    <img
                      alt="gallery"
                      className="w-full h-full object-cover object-center block"
                      src="https://dummyimage.com/601x361"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/502x302"
                    />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-full object-center block"
                      src="https://dummyimage.com/503x303"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
  return <>{renderData}</>;
}
