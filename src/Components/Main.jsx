import React from 'react'
import firefly from '../assets/firefly.webp'
import appicon from '../assets/dc-appicon.webp'
import Adobe from '../assets/Adobe-img.webp'
import express from '../assets/express.webp'
import creativecloud from '../assets/creativecloud.webp'
import homeillust from '../assets/home-illustration.webp'
import homeillust2 from '../assets/home-illustration2.webp'
import homeillust3 from '../assets/home-illustration3.webp'
import fund from '../assets/fund.webp'
import max from '../assets/max.webp'
import block from '../assets/blocky-computer.webp'
const Main = () => {
  return (
    <main>
      <div
        style={{
          width: '100%',
          height: '100vh',
          backgroundImage: 'url(src/assets/main-background.png)',
        }}
        className="bg-cover h-screen flex items-center justify-center relative top-[1.8cm] "
      >
        <div className=" flex flex-col text-white gap-5   justify-center items-center">
          <b className="md:flex hidden md:font-bold font-semibold font-serif text-center text-[6.8vh]">
            The most memorable digital <br /> experiences are unleashed by{' '}
            <br />
            developer creativity
          </b>
          {/* sm */}
          <b className=" md:hidden flex font-bold text-center text-[5.5vh] font-serif">
            The most <br /> memorable
            <br /> digital <br /> experiences are <br /> unleashed by <br />
            developer <br /> creativity
          </b>
          <span className=" md:flex hidden font-medium text-[3.2vh]">
            Adobe products and services empower developers
          </span>

          <button className=" md:flex hidden items-center justify-center md:w-[10vw] md:h-[6vh] w-[40vw] h-[5vh] text-base font-medium font-sans bg-blue-600 rounded-full md:text-sm">
            Explore our APIs
          </button>
          {/* sm */}
          <div className="md:hidden  flex flex-col items-center gap-12">
            <span className="md:hidden flex text-center font-medium text-[3.2vh]">
              Adobe products and <br /> services empower <br /> developers
            </span>
            <button className=" md:w-[10vw] md:h-[6vh] w-[40vw] h-[5.5vh] text-base font-medium font-sans bg-blue-600 rounded-full md:text-sm">
              Explore our APIs
            </button>
          </div>
        </div>
      </div>
      {/*  */}

      <section className="w-full pt-28 md:gap-10 gap-[1.8cm] pb-10 flex items-center flex-col justify-center">
        <div className="  font-sans font-semibold md:text-3xl text-[8.1vw]">
          <p>Featured Products</p>
        </div>

        <div className=" flex items-center flex-col gap-10">
          <ul className=" flex flex-col md:gap-4 gap-7">
            <div className=" md:flex md:flex-row flex flex-col items-center md:gap-3 gap-7">
              <section className="flex items-center font-sans font-medium border-[1px] md:border-slate-400 border-slate-300">
                <img src={firefly} alt="" />
                <b className=" md:flex hidden w-[12vw] text-start pl-5">
                  Adobe Firefly <br /> Services
                </b>
                {/* sm */}
                <b className=" md:hidden flex md:w-[12vw] w-[35vw] font-bold font-sans text-start pl-5">
                  Adobe <br /> Firefly <br /> Services
                </b>
              </section>
              <section className="flex items-center font-sans font-medium border-[1px] md:border-slate-400 border-slate-300">
                <img src={appicon} alt="" />
                <b className=" md:w-[11vw] w-[34vw] text-start pl-5">
                  Adobe <br /> Document <br /> Cloud
                </b>
              </section>
              <section className="flex items-center font-sans font-medium border-[1px] md:border-slate-400 border-slate-300">
                <img src={Adobe} alt="" />
                <b className=" md:w-[12vw] w-[35vw] text-start pl-5">
                  Adobe <br /> Experience <br /> Platform
                </b>
              </section>
            </div>
            {/* 2 */}
            <div className=" md:flex md:flex-row flex flex-col items-center md:gap-3 gap-7">
              <section className="flex items-center font-sans font-medium border-[1px] md:border-slate-400 border-slate-300">
                <img src={express} alt="" />
                <b className=" md:w-[12vw] w-[35vw] text-start pl-5">
                  Adobe <br /> Express
                </b>
              </section>
              <section className="flex items-center font-sans font-medium border-[1px] md:border-slate-400 border-slate-300">
                <img src={Adobe} alt="" />
                <b className=" md:w-[11vw] w-[34vw] text-start pl-5">
                  Adobe <br /> Developer <br /> App Builder
                </b>
              </section>
              <section className="flex items-center font-sans font-medium border-[1px] md:border-slate-400 border-slate-300">
                <img src={Adobe} alt="" />
                <b className=" md:w-[12vw] w-[35vw] text-start pl-5">
                  Adobe Commerce{' '}
                </b>
              </section>
            </div>
            {/* 3 */}
            <div className=" md:flex md:flex-row flex flex-col items-center md:gap-3 gap-7">
              <section className="flex items-center font-sans font-medium border-[1px] md:border-slate-400 border-slate-300">
                <img src={creativecloud} alt="" />
                <b className=" md:w-[12vw] w-[35vw] text-start pl-5">
                  Adobe <br /> Creative <br className="md:hidden flex" /> Cloud{' '}
                </b>
              </section>
              <section className="flex items-center font-sans font-medium border-[1px] md:border-slate-400 border-slate-300">
                <img src={appicon} alt="" />
                <b className=" md:w-[11vw] w-[34vw] text-start pl-5">
                  Adobe <br /> PDF Embed API{' '}
                </b>
              </section>
              <section className="flex items-center font-sans font-medium border-[1px] md:border-slate-400 border-slate-300">
                <img src={Adobe} alt="" />
                <b className=" md:w-[12vw] w-[35vw] text-start pl-5">
                  Adobe <br /> Analytics API{' '}
                </b>
              </section>
            </div>
          </ul>
          {/*  */}
          <span className=" flex flex-col md:gap-20 gap-16 items-center ">
            <button className=" md:w-[16vw] h-[5.5vh] w-[65vw] text-[1rem] bg-blue-600 rounded-full text-white font-sans font-bold md:text-[1vw]">
              View All Developers Products
            </button>
            <p className="md:flex hidden font-sans font-semibold  md:text-3xl text-3xl">
              Get started building with Adobe
            </p>
            {/* sm */}
            <p className="md:hidden flex text-center text-pretty font-sans font-semibold  md:text-3xl text-[2rem]">
              Get started building <br /> with Adobe
            </p>
          </span>
        </div>
      </section>
      {/*  */}

      <section className="w-full pt-[2.3cm] pb-[3.3cm] md:flex md:flex-row flex flex-col  md:items-start items-center justify-center md:gap-[2.2cm] gap-40">
        <div className=" flex-col flex gap-7 items-center justify-center">
          <img
            className="inline md:h-[14vh] h-[25vh]"
            src={homeillust}
            alt=""
          />
          <small className=" font-sans md:text-start text-center font-medium md:text-[1.1vw] text-base">
            <span className=" text-blue-600">
              Launch the Adobe Developer Console:
              <br className="md:hidden flex" />
            </span>
            The ultimate <br className=" md:flex hidden" />
            developer destination to <br className="md:hidden flex" /> access
            Adobe APIs & SDKs.
          </small>
        </div>

        <div className=" flex-col flex gap-7 items-center text-center">
          <img
            className="inline md:h-[14vh] h-[25vh]"
            src={homeillust2}
            alt=""
          />
          <small className=" font-sans font-medium md:text-[1.1vw] text-base">
            See what Adobe Developers have <br className="md:hidden flex" />{' '}
            created on the
            <span className=" text-blue-600">
              Adobe <br className="md:flex hidden" /> Exchange{' '}
              <br className="md:hidden flex" /> Marketplace
            </span>
          </small>
        </div>

        <div className=" flex-col flex gap-7 items-center">
          <img
            className="inline md:h-[14vh] h-[25vh]"
            src={homeillust3}
            alt=""
          />
          <small className=" font-sans font-medium md:text-[1.1vw] text-center text-base">
            Never miss a story from the{' '}
            <span className=" text-blue-600">
              Adobe Tech <br className="md:hidden flex" /> Blog
            </span>
          </small>
        </div>
      </section>
      {/*  */}

      <section className=" w-full pb-16 flex flex-col items-center justify-center gap-12">
        <div className=" font-sans font-semibold text-3xl">
          <p className="text-center">
            Latest Developer <br className="md:hidden flex" /> News
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center gap-9 ">
          <section className=" md:flex md:flex-row flex flex-col items-center justify-center gap-6">
            <ul className=" cursor-pointer border-[1px] border-gray-300 hover:border-gray-400 md:pb-24 pb-[4.5rem] rounded flex flex-col md:gap-3 gap-20">
              <img
                className=" inline md:h-[27.6vh] h-[18vh]"
                src={fund}
                alt=""
              />
              <span className="flex flex-col gap-4 pl-5">
                <b className="md:font-bold font-bold md:text-[0.4cm] text-[5.3vw] font-sans">
                  Adobe Fund for Design
                </b>
                <small className="font-sans font-medium md:text-[0.9vw] text-[3.7vw]">
                  Get funding to build Adobe Express add-{' '}
                  <br className="md:hidden flex" />
                  ons — plugins and <br className="md:flex hidden" />
                  integrations that <br className="md:hidden flex" /> unleash
                  the creativity of millions of users.
                </small>
              </span>
            </ul>

            <ul className="md:mx-0 mx-6 cursor-pointer border-[1px] border-gray-300 hover:border-gray-400 md:pb-24 pb-[4rem] rounded flex flex-col md:gap-3 gap-20">
              <img
                className=" inline md:h-[28vh] h-[18vh] "
                src={block}
                alt=""
              />
              <span className="flex flex-col gap-4 pl-5">
                <b className="md:font-bold font-bold md:text-[0.4cm] text-[5.3vw]">
                  Adobe Developers Live
                </b>
                <small className="font-sans font-medium md:text-[0.9vw] text-[3.7vw]">
                  Join us June 19-20 for a 2-day virtual event{' '}
                  <br className="md:hidden flex" /> for Adobe Express{' '}
                  <br className="md:flex hidden" />
                  and Creative Cloud <br className="md:hidden flex" />{' '}
                  developers
                </small>
              </span>
            </ul>

            <ul className="md:mx-0  mx-6 cursor-pointer border-[1px] border-gray-300 hover:border-gray-400 md:pb-20 pb-[4rem] rounded flex flex-col md:gap-3 gap-20">
              <img className=" inline md:h-[28vh] h-[18vh]" src={max} alt="" />
              <span className="flex flex-col gap-4 pl-5">
                <b className="md:font-bold font-bold md:text-[0.4cm] text-[5.3vw]">
                  Adobe MAX
                </b>
                <small className="font-sans font-medium md:text-[0.9vw] text-[3.7vw]">
                  Our creativity conference is Oct 14-16 in Miami Beach. <br />
                  Subscribe to our newsletter to be the first to know when{' '}
                  <br />
                  registration opens in May.
                </small>
              </span>
            </ul>
          </section>
          <span>
            <button className="md:w-[8vw] h-[5.5vh] w-[35vw] bg-blue-600 text-white font-sans font-black  md:text-xs text-base rounded-full">
              Learn More
            </button>
          </span>
        </div>
      </section>
      {/*  */}

      <section className=" w-full md:h-[70vh] h-[205vh] flex flex-col justify-center items-start md:bg-[#fdfdfd] bg-white">
        <div className="flex flex-col md:gap-7 gap-[5rem] font-sans md:pl-8 pl-14 ">
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

              <span className=" md:hidden flex  items-center pt-5 pb-14">
                <p>Copyright © 2024 OBETECH. All rights reserved.</p>
              </span>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
