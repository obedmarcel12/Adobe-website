import React from 'react'
import Header from './Header'
import firefly from '../assets/firefly.webp'
import photoshop from '../assets/photoshop.svg'
import xd from '../assets/xd.svg'
import acrobat from '../assets/acrobat.svg'
import adobeconsole from '../assets/adobe-console.svg'
import sign from '../assets/sign.svg'
import audience from '../assets/audiencemanager.svg'
import stock from '../assets/stock.svg'
import Adobe from '../assets/Adobe-img.webp'
import express from '../assets/express.webp'
import creativecloud from '../assets/creativecloud.webp'
const About = () => {
  return (
    <div>
      <Header />
      <main
        style={{
          backgroundImage: 'url(/About-back.webp)',
        }}
        className=" bg-cover bg-no-repeat md:h-[70vh] h-[105vh] border-[1px] border-[red] flex items-center justify-center"
      >
        <div className="flex items-center flex-col gap-5 ">
          <p className="font-serif text-white font-semibold md:text-[3vw] text-center text-[6.5vh]">
            Start <br className="md:hidden flex" /> building{' '}
            <br className="md:hidden flex" /> today
          </p>
          <small className=" font-sans text-gray-200 font-medium md:text-[1.2vw] text-[5vw]">
            Explore the APIs offered by <br className="md:hidden flex" />{' '}
            products and view documentation
          </small>
        </div>
      </main>

      <div className=" flex gap-2 font-sans md:font-normal font-medium items-end md:pb-7 pb-[5rem] justify-end md:pr-4 pr-12 w-full md:h-[20vh] h-[25vh]">
        <p>Sort by</p>
        <p>Last updated</p>
        <i className="bi bi-chevron-down"></i>
      </div>

      <div className="md:flex md:flex-row flex flex-col w-full pb-[1cm] md:pl-[5.5rem] pl-0 md:gap-9 gap-14">
        {/* section1 */}
        <section className=" flex flex-col gap-3 md:pl-0 pl-24 md:text-black text-neutral-600 font-medium md:text-sm text-base font-sans">
          <b className="md:text-base text-lg text-[#1d1d1d]">Filter by</b>
          <div className=" flex items-center md:gap-2 gap-3">
            <span
              className="md:w-[1.1vw] md:h-[1.1vw] w-[4.5vw] h-[4.5vw] rounded
             border-[2px] border-slate-600"
            ></span>
            <p>Adobe Creative Cloud</p>
          </div>

          <div className=" flex items-center md:gap-2 gap-3">
            <span
              className="md:w-[1.1vw] md:h-[1.1vw] w-[4.5vw] h-[4.5vw] rounded
             border-[2px] border-slate-600"
            ></span>
            <p>Adobe Document Cloud</p>
          </div>

          <div className=" flex items-center md:gap-2 gap-3">
            <span
              className="md:w-[1.1vw] md:h-[1.1vw] w-[4.5vw] h-[4.5vw] rounded
             border-[2px] border-slate-600"
            ></span>
            <p>Adobe Experience Platform </p>
          </div>

          <div className=" flex items-center md:gap-2 gap-3">
            <span
              className="md:w-[1.1vw] md:h-[1.1vw] w-[4.5vw] h-[4.5vw] rounded
             border-[2px] border-slate-600"
            ></span>
            <p>Adobe Experience Cloud</p>
          </div>
        </section>

        {/* section2 */}
        <section className=" flex flex-col gap-8 ">
          <div className="md:flex md:flex-row flex flex-col items-start md:pl-0 pl-10 justify-center gap-9">
            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-20 border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={firefly}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Firefly Services
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Firefly Services is a comprehensive set of <br /> generative
                    AI and creative APIs that <br /> automates workflows.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%]  border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex font-sans items-center pl-14 gap-7">
                  <b className=" text-gray-500 md:hover:w-[7.3vw] hover:w-[30vw] text-[2.2vh] font-bold hover:h-[5.5vh] hover:flex hover:items-center hover:justify-center hover:rounded-full hover:bg-gray-200">
                    Learn More
                  </b>
                  <button className="md:w-[7vw] h-[5.5vh] w-[30vw] font-sans font-bold text-gray-700 hover:bg-gray-600 hover:border-none hover:text-white text-sm rounded-full border-2 border-gray-700">
                    View Docs
                  </button>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[3.8rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={express}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Express add-ons
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Adobe Express add-ons are extensions and <br /> integrations
                    that enable connections to <br /> third-party tools and
                    unlock new capabilities <br /> and workflows.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex font-sans items-center pl-14 gap-7">
                  <b className=" text-gray-500 md:hover:w-[7.3vw] hover:w-[30vw] text-[2.2vh] font-bold hover:h-[5.5vh] hover:flex hover:items-center hover:justify-center hover:rounded-full hover:bg-gray-200">
                    Learn More
                  </b>
                  <button className="md:w-[7vw] h-[5.5vh] w-[30vw] font-sans font-bold text-gray-700 hover:bg-gray-600 hover:border-none hover:text-white text-sm rounded-full border-2 border-gray-700">
                    View Docs
                  </button>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-20 border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={express}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Express Embed SDK
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    The Adobe Express Embed SDK brings <br /> powerful Adobe
                    Express content creation to <br /> partners for integration.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex font-sans items-center pl-14 gap-7">
                  <b className=" text-gray-500 md:hover:w-[7.3vw] hover:w-[30vw] text-[2.2vh] font-bold hover:h-[5.5vh] hover:flex hover:items-center hover:justify-center hover:rounded-full hover:bg-gray-200">
                    Learn More
                  </b>
                  <button className="md:w-[7vw] h-[5.5vh] w-[30vw] font-sans font-bold text-gray-700 hover:bg-gray-600 hover:border-none hover:text-white text-sm rounded-full border-2 border-gray-700">
                    View Docs
                  </button>
                </ul>
              </div>
            </ul>
          </div>
          {/*  */}

          <div className="md:flex md:flex-row flex flex-col items-start md:pl-0 pl-10 justify-center gap-9">
            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-8 border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={creativecloud}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Creative Cloud{' '}
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Adobe Creative Cloud APIs and SDKs enable <br /> developers
                    to impact creative work for <br /> millions of users
                    worldwide. Build and <br /> distribute inspiring,
                    productivity-driving <br /> plugins and integrations—all
                    with Adobe <br /> Creative Cloud.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-8 border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={creativecloud}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Creative Cloud Libraries
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    The Libraries API lets you connect your app <br /> to
                    Creative Cloud and expand the reach of <br /> your users'
                    creative systems. Enable more <br /> efficient workflows by
                    providing users with <br /> access to their creative
                    elements, right inside <br /> your app.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>

            {/*  */}
            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[4.4rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={photoshop}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Photoshop
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    With Photoshop APIs and SDKs, build <br /> plugins and
                    integrations that harness the <br /> power of the world's
                    best image editing <br /> software to transform creative
                    workflows.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex   md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>
          </div>
          {/*  */}
          <div className="md:flex md:flex-row flex flex-col items-start md:pl-0 pl-10 justify-center gap-9">
            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[2rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={xd}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    XD
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Adobe XD’s powerful API platform lets <br /> developers and
                    users extend XD within the <br /> app, or in the cloud.
                    Automate complex <br /> tasks, modify and generate document{' '}
                    <br />
                    contents, integrate with external services,
                    <br /> and more.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[3.2rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={acrobat}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe PDF Embed API
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    With only a few lines of JavaScript, provide <br /> an
                    industry leading PDF viewing and <br /> collaboration
                    experience. Easily integrate <br /> discovery and engagement
                    data into <br /> Analytics platforms.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[4.3rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={Adobe}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Experience Platform
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Adobe Experience Platform provides a <br /> central service
                    for Data Ingestion, <br /> Governance, Insights, and
                    Actioning. These <br /> services are built API First.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>
          </div>

          {/*  */}
          <div className="md:flex md:flex-row flex flex-col items-start md:pl-0 pl-10 justify-center gap-9">
            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[3.1rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={acrobat}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Document Cloud
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Improve the way you engage <br /> with documents. With Adobe
                    services, you can <br /> extend applications like Adobe
                    Acrobat <br />
                    Reader DC and integrate our platform into <br /> your
                    systems and apps.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[8.4rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Analytics
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    The industry-leading solution for applying <br /> real-time
                    analytics and detailed <br /> segmentation across all of
                    your marketing <br /> channels.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <button className="md:w-[7vw] h-[5.5vh] w-[30vw] font-sans font-bold text-gray-700 hover:bg-gray-600 hover:border-none hover:text-white text-sm rounded-full border-2 border-gray-700">
                    View Docs
                  </button>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[3rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={adobeconsole}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Developer Console
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Adobe Developer Console is the ultimate <br /> developer
                    destination to access Adobe APIs <br /> & SDKs, listen to
                    near real-time Events, run <br /> functions on Runtime, or{' '}
                    build plugins or <br /> App Builder apps.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex font-sans items-center pl-14 gap-7">
                  <b className=" text-gray-500 md:hover:w-[7.3vw] hover:w-[30vw] text-[2.2vh] font-bold hover:h-[5.5vh] hover:flex hover:items-center hover:justify-center hover:rounded-full hover:bg-gray-200">
                    Learn More
                  </b>
                  <button className="md:w-[7vw] h-[5.5vh] w-[30vw] font-sans font-bold text-gray-700 hover:bg-gray-600 hover:border-none hover:text-white text-sm rounded-full border-2 border-gray-700">
                    View Docs
                  </button>
                </ul>
              </div>
            </ul>
          </div>
          {/*  */}
          <div className="md:flex md:flex-row flex flex-col items-start md:pl-0 pl-10 justify-center gap-9">
            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh]  flex flex-col gap-[7rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={sign}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Acrobat Sign
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Easily integrate e-signatures and 100% <br /> digital
                    workflows to your organization.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>

            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh]  flex flex-col gap-[4.6rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={audience}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Audience Manager
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Helps you build unique audience profiles so <br /> you can
                    identify your most valuable <br /> segments and use them
                    across any digital <br /> channel.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[8.7rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Developer App Builder
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Adobe Developer App Builder is a complete <br /> framework
                    for building custom cloud native <br /> Adobe apps that
                    extend Adobe solutions <br /> and run on our infrastructure.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex font-sans items-center pl-14 gap-7">
                  <b className=" text-gray-500 md:hover:w-[7.3vw] hover:w-[30vw] text-[2.2vh] font-bold hover:h-[5.5vh] hover:flex hover:items-center hover:justify-center hover:rounded-full hover:bg-gray-200">
                    Learn More
                  </b>
                  <button className="md:w-[7vw] h-[5.5vh] w-[30vw] font-sans font-bold text-gray-700 hover:bg-gray-600 hover:border-none hover:text-white text-sm rounded-full border-2 border-gray-700">
                    View Docs
                  </button>
                </ul>
              </div>
            </ul>
          </div>
          {/*  */}

          <div className="md:flex md:flex-row flex flex-col items-start md:pl-0 pl-10 justify-center gap-9">
            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[5.6rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={acrobat}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe PDF Services API
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    An easy-to-use cloud-based API that can <br /> automate
                    creation, manipulation and <br /> transformation of PDF
                    documents.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[9.8rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Campaign
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    A set of solutions that help you personalize <br /> and
                    deliver campaigns across all of your <br /> online and
                    offline channels.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[3.8rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Experience Platform Launch
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Adobe Experience Platform Launch, by <br /> Adobe is a
                    next-generation tag management <br /> system that unifies
                    the client-side marketing <br /> ecosystem by empowering
                    developers to <br /> build integrations on a robust,
                    extensible <br /> platform that partners, clients, and the{' '}
                    <br />
                    broader industry can build on and contribute <br /> to.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex justify-end pr-7 w-full items-center">
                  <b className=" md:hover:w-[7.3vw] hover:w-[30vw] flex items-center justify-center hover:h-[5.3vh] text-[2.1vh] text-neutral-500  font-bold hover:rounded-full hover:bg-gray-100">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>
          </div>
          {/*  */}

          <div className="md:flex md:flex-row flex flex-col items-start md:pl-0 pl-10 justify-center gap-9">
            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[9.5rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe Experience Manager
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    A comprehensive content management <br /> solution for
                    building websites, mobile apps <br /> and forms.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className="w-full flex font-sans items-center justify-end pr-8">
                  <b className=" text-gray-500 md:hover:w-[7.3vw] hover:w-[30vw] text-[2.2vh] font-bold hover:h-[5.5vh] hover:flex hover:items-center hover:justify-center hover:rounded-full hover:bg-gray-200">
                    Learn More
                  </b>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[5.9rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Adobe I/O Events
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Lightning-fast event-based integrations using <br />{' '}
                    WebHooks.With Adobe I/O Events, you can <br /> code
                    event-driven experiences, applications, <br /> and custom
                    workflows that leverage and <br /> combine Adobe Experience
                    Cloud, Creative <br /> Cloud, and Document Cloud.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex font-sans items-center pl-14 gap-7">
                  <b className=" text-gray-500 md:hover:w-[7.3vw] hover:w-[30vw] font-bold hover:h-[5.5vh] hover:flex hover:items-center hover:justify-center hover:rounded-full hover:bg-gray-200">
                    Learn More
                  </b>
                  <button className="md:w-[7vw] h-[5.5vh] w-[30vw] font-sans font-bold text-gray-700 hover:bg-gray-600 hover:border-none hover:text-white text-sm rounded-full border-2 border-gray-700">
                    View Docs
                  </button>
                </ul>
              </div>
            </ul>
            {/*  */}

            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[5.3rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <img
                  className="inline md:w-[4vw] md:h-[4vw] w-[15vw] h-[15vw] rounded-lg"
                  src={stock}
                  alt=""
                />
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Stock
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Give your users access to the perfect Adobe <br /> Stock
                    asset to enhance their creative <br /> projects.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex font-sans items-center pl-14 gap-7">
                  <b className=" text-gray-500 md:hover:w-[7.3vw] hover:w-[30vw] text-[2.2vh] font-bold hover:h-[5.5vh] hover:flex hover:items-center hover:justify-center hover:rounded-full hover:bg-gray-200">
                    Learn More
                  </b>
                  <button className="md:w-[7vw] h-[5.5vh] w-[30vw] font-sans font-bold text-gray-700 hover:bg-gray-600 hover:border-none hover:text-white text-sm rounded-full border-2 border-gray-700">
                    View Docs
                  </button>
                </ul>
              </div>
            </ul>
          </div>

          {/*  */}
          <div className="md:flex md:flex-row flex flex-col items-start md:pl-0 pl-10 justify-center">
            <ul className="md:w-[22vw] md:h-[55vh] w-[90vw] h-[50vh] flex flex-col gap-[10.5rem] border-[1px] border-gray-200 rounded-md">
              <div className=" justify-center pl-6 pt-5 flex flex-col gap-3">
                <span className="flex flex-col gap-2">
                  <p className="font-semibold font-sans md:text-[1.2vw] text-[5vw]">
                    Marketo Developer APIs
                  </p>
                  <small className="font-sans font-medium md:text-[2.1vh] text-[2vh] text-gray-700">
                    Detailed documentations that help you <br /> master the
                    Marketo APIs.
                  </small>
                </span>
              </div>

              <div className=" flex flex-col items-center   gap-4">
                <ul className=" flex items-center md:pl-0 pl-5 justify-center w-full">
                  <span className="flex  md:w-[85%] w-[95%] border-[1px] border-gray-100"></span>
                </ul>

                <ul className=" flex font-sans items-center pl-14 gap-7">
                  <b className=" text-gray-500 md:hover:w-[7.3vw] hover:w-[30vw] text-[2.2vh] font-bold hover:h-[5.5vh] hover:flex hover:items-center hover:justify-center hover:rounded-full hover:bg-gray-200">
                    Learn More
                  </b>
                  <button className="md:w-[7vw] h-[5.5vh] w-[30vw] font-sans font-bold text-gray-700 hover:bg-gray-600 hover:border-none hover:text-white text-sm rounded-full border-2 border-gray-700">
                    View Docs
                  </button>
                </ul>
              </div>
            </ul>
          </div>
        </section>
      </div>
      {/*  */}

      <section className="w-full md:h-[100vh] bg-gray-100 flex items-end justify-center">
        <section className=" w-full md:h-[90vh] h-[205vh] flex flex-col justify-center items-start md:bg-[#fdfdfd] bg-white">
          <div className="flex flex-col md:gap-20 gap-[5rem] font-sans md:pl-8 pl-7 ">
            <div className=" md:flex md:flex-row flex flex-col md:text-sm text-base md:gap-[3.2cm] gap-10">
              <section className=" flex flex-col gap-5">
                <b className="font-bold md:text-base text-lg">
                  APIs and Services
                </b>
                <p>Adobe Creative Cloud</p>
                <p>Adobe Experience Platform</p>
                <p>Adobe Document Cloud</p>
                <p>Adobe Cloud Manager</p>
                <p>Adobe Analytics</p>
                <p>App Builder</p>
                <b className="text-blue-700">View all</b>
              </section>
              <div className=" flex items-start gap-9">
                <span className="md:flex hidden border-[1px] border-gray-200 h-[50vh]"></span>
                <section className=" flex flex-col gap-5">
                  <b className="font-bold md:text-base text-lg">Community</b>
                  <p>Adobe Tech Blog</p>
                  <p>Adobe on GitHub</p>
                  <p>Adobe Developer on YouTube</p>
                  <p>Adobe Developer on X</p>
                  <p>Community Forums</p>
                </section>
              </div>

              <div className=" flex items-start gap-9">
                <span className="md:flex hidden border-[1px] border-gray-200 h-[50vh]"></span>
                <section className=" flex flex-col gap-5">
                  <b className="font-bold md:text-base text-lg">Support</b>
                  <p>Adobe Developer support</p>
                  <p>Adobe Product support</p>
                </section>
              </div>
              <div className=" flex items-start gap-9">
                <span className="md:flex hidden border-[1px] border-gray-200 h-[50vh]"></span>
                <section className=" flex flex-col gap-5">
                  <b className="font-bold md:text-base text-lg">
                    Adobe Developer
                  </b>
                  <p>Adobe Developer Console</p>
                  <p>Developer Distribution</p>
                  <p>Open source at Adobe</p>
                  <p>Download SDKs</p>
                  <p>Authentication</p>
                  <p>Careers</p>
                </section>
              </div>
            </div>
            {/*  */}

            <div className=" flex flex-col gap-4">
              <span className=" border-[1px] md:border-slate-300 border-gray-300 md:w-[92vw] w-[70vw]"></span>
              <ul className="md:flex md:flex-row flex flex-col md:items-center items-start font-sans font-medium md:text-[.8vw] text-sm md:gap-8 gap-1">
                <p className="hover:border-b-[1px] border-b-black cursor-pointer">
                  Privacy
                </p>
                <p className="hover:border-b-[1px] border-b-black cursor-pointer">
                  Terms of Use
                </p>
                <p className="hover:border-b-[1px] border-b-black cursor-pointer">
                  Cookie preferences
                </p>
                <p className="hover:border-b-[1px] border-b-black cursor-pointer">
                  Do not sell or share my personal{' '}
                  <br className="md:hidden flex" /> information
                </p>
                <span className="flex items-center">
                  <i className="bi bi-caret-right text-2xl"></i>
                  <p className="hover:border-b-[1px] border-b-black cursor-pointer">
                    AdChoices
                  </p>
                </span>

                <span className=" md:hidden flex text-xs font-serif items-center pt-5 pb-14">
                  <p>Copyright © 2024 OBETECH. All rights reserved.</p>
                </span>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default About
