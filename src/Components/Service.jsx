import React from 'react'
import './Service.css'
import adobeLogo from '../assets/Adobe-logo.png'
import thumb from '../assets/thumb.jpg'
import kang from '../assets/kang.jpg'
import room from '../assets/room.jpg'
import tallNightHouse from '../assets/tall-night-house.jpg'
import preview from '../assets/preview.png'
import propTwo from '../assets/prop-two.jpg'
import propThree from '../assets/prop-three.jpg'
import propFour from '../assets/prop-four.jpg'
const Service = () => {
  return (
    <div>
      <nav className="w-full h-[47vh] bg-neutral-800 flex flex-col gap-[1cm] items-center justify-center">
        <ul className=" text-white w-[75%] flex items-center  justify-between ">
          <p className="font-serif text-[2.8vw] font-medium">Medium</p>
          <div className=" flex items-center gap-5">
            <p>sign in</p>
            <button className="w-[8vw] h-[6vh] cursor-pointer border-[1px] text-white rounded-full">
              Get Started
            </button>
          </div>
        </ul>
        {/*  */}
        <ul className=" w-[75%] items-start">
          <img className="inline h-[17vh]" src={adobeLogo} alt="" />
        </ul>
        {/*  */}
        <ul className="w-[84%] flex items-center cursor-pointer justify-start  gap-10 pl-[1.6cm]">
          <div className="flex items-center gap-7 text-white font-sans text-[1vw] ">
            <p>ADOBE DEVELOPER PLATFORM</p>
            <p>CREATIVE CLOUD</p>
            <p>EXPERIENCE CLOUD</p>
            <p>DOCUMENT CLOUD</p>
            <p>ENGINEERING</p>
            <p>SECURITY</p>
          </div>
          <div className="flex gap-6 items-center">
            <i className="bi bi-search text-white"></i>
            <i className="bi bi-twitter-x"></i>
            <button className="w-[6vw] h-[4.5vh] cursor-pointer text-white border-[1px] rounded-full">
              Follow
            </button>
          </div>
        </ul>
      </nav>
      {/*  */}

      <main className="w-full flex gap-8">
        {/* ist section */}
        <section className="background-img w-[65vw] h-[107vh]  pl-10 pb-8 flex items-end">
          <div className="flex flex-col gap-6 text-white ">
            <ul className="font-sans flex flex-col">
              <h1 className="font-semibold text-3xl">
                Universal Audience Onboarding Framework: <br /> Fast Track to
                Navigate Beyond Cookies
              </h1>
              <small className=" font-normal text-[2.9vh]">
                An essential update to Adobe Advertising to meet the evolving
                requirements and <br /> standards of first-party data solutions.
              </small>
            </ul>

            <ul className=" flex items-center gap-3">
              <img
                className="inline w-[3vw] h-[3vw] rounded-full "
                src={thumb}
                alt=""
              />
              <p>
                Kamal Gulati <br /> Jul 17
              </p>
            </ul>
          </div>
        </section>

        {/* second section */}
        <section className=" flex flex-col gap-5 py-6 items-start border-[px] justify-center">
          <div className="flex flex-col gap-2">
            <h2 className=" font-sans font-semibold text-lg">
              Universal Audience Onboarding <br /> Framework: Fast Track to
              Navigate...
            </h2>
            <small className="font-sans font-medium text-neutral-600">
              Kamal Gulati{' '}
            </small>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className=" font-sans font-semibold text-lg">
              Adobe Express Launches New Print <br /> Capabilities — Enabled by
              Partners
            </h2>
            <small className="font-sans font-medium text-neutral-600">
              Adobe Devs
            </small>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className=" font-sans font-semibold text-lg">
              Cybersecurity Red Teaming: When <br /> Assumptions Aren’t Enough
            </h2>
            <small className="font-sans font-medium text-neutral-600">
              Renae Kang{' '}
            </small>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className=" font-sans font-semibold text-lg">
              Behind the Scenes with Bridget: <br /> From Bowie State Intern to
              Full-Time
            </h2>
            <small className="font-sans font-medium text-neutral-600">
              Renae Kang{' '}
            </small>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className=" font-sans font-semibold text-lg">
              Build Powerful and Compelling <br /> Charts in React with Ease
            </h2>
            <small className="font-sans font-medium text-neutral-600">
              Marshall Peterson
            </small>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className=" font-sans font-semibold text-lg">
              How LINE Creative Lab Built an <br /> Adobe Express Integration
              with th...
            </h2>
            <small className="font-sans font-medium text-neutral-600">
              Colene Chow
            </small>
          </div>
        </section>
      </main>

      <section className="w-full pt-10 justify-center flex items-center">
        <div className="w-[80%] gap-8 flex flex-col">
          <ul className="flex gap-3 flex-col">
            <p className="font-sans font-medium text-neutral-700">
              Creative Cloud & Adobe Express
            </p>
            <span className="border-[1px] border-[gray] w-full"></span>
          </ul>
          {/*  */}

          <ul className=" flex gap-10">
            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={room}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Get Funding to Build Adobe <br /> Express Add-Ons
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  Discover what features Adobe Express <br /> users request the
                  most, and get your <br /> creative idea backed by the Adobe
                  Fund <br />
                  for Design.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    Alex Castanheira <br /> May 10
                  </p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={tallNightHouse}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Trip Report: Winter ISO C++ <br /> Standards Meeting{' '}
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  Ville wins the Sankel Award, a new <br /> [[nodiscard]]
                  policy, and more.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    David Sankel <br /> May 10
                  </p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={preview}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Design Better Add-Ons for <br /> Adobe Express with Our UX{' '}
                  <br /> Guidelines{' '}
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  To help you get started with our <br /> documentation, we
                  present 5 practical <br /> tips for the design of Adobe
                  Express add-
                  <br />
                  ons.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    Joel Ebner <br /> Mar 5
                  </p>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </section>
      {/* 1 */}

      <section className="w-full pt-20 justify-center flex items-center">
        <div className="w-[80%] gap-8 flex flex-col">
          <ul className="flex gap-3 flex-col">
            <p className="font-sans font-medium text-neutral-700">
              Creative Cloud & Adobe Express
            </p>
            <span className="border-[1px] border-[gray] w-full"></span>
          </ul>
          {/*  */}

          <ul className=" flex gap-10">
            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={room}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Get Funding to Build Adobe <br /> Express Add-Ons
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  Discover what features Adobe Express <br /> users request the
                  most, and get your <br /> creative idea backed by the Adobe
                  Fund <br />
                  for Design.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    Alex Castanheira <br /> May 10
                  </p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={tallNightHouse}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Trip Report: Winter ISO C++ <br /> Standards Meeting{' '}
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  Ville wins the Sankel Award, a new <br /> [[nodiscard]]
                  policy, and more.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    David Sankel <br /> May 10
                  </p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={preview}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Design Better Add-Ons for <br /> Adobe Express with Our UX{' '}
                  <br /> Guidelines{' '}
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  To help you get started with our <br /> documentation, we
                  present 5 practical <br /> tips for the design of Adobe
                  Express add-
                  <br />
                  ons.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    Joel Ebner <br /> Mar 5
                  </p>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </section>
      {/* 2 */}

      <section className="w-full pt-14 justify-center flex items-center">
        <div className="w-[80%] gap-8 flex flex-col">
          <ul className="flex gap-3 flex-col">
            <p className="font-sans font-medium text-neutral-700">
              Creative Cloud & Adobe Express
            </p>
            <span className="border-[1px] border-[gray] w-full"></span>
          </ul>
          {/*  */}

          <ul className=" flex gap-10">
            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={room}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Get Funding to Build Adobe <br /> Express Add-Ons
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  Discover what features Adobe Express <br /> users request the
                  most, and get your <br /> creative idea backed by the Adobe
                  Fund <br />
                  for Design.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    Alex Castanheira <br /> May 10
                  </p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={tallNightHouse}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Trip Report: Winter ISO C++ <br /> Standards Meeting{' '}
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  Ville wins the Sankel Award, a new <br /> [[nodiscard]]
                  policy, and more.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    David Sankel <br /> May 10
                  </p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={preview}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Design Better Add-Ons for <br /> Adobe Express with Our UX{' '}
                  <br /> Guidelines{' '}
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  To help you get started with our <br /> documentation, we
                  present 5 practical <br /> tips for the design of Adobe
                  Express add-
                  <br />
                  ons.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    Joel Ebner <br /> Mar 5
                  </p>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </section>
      {/* 3 */}

      <section className="w-full pt-14 justify-center flex items-center">
        <div className="w-[80%] gap-8 flex flex-col">
          <ul className="flex gap-3 flex-col">
            <p className="font-sans font-medium text-neutral-700">
              Creative Cloud & Adobe Express
            </p>
            <span className="border-[1px] border-[gray] w-full"></span>
          </ul>
          {/*  */}

          <ul className=" flex gap-10">
            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={room}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Get Funding to Build Adobe <br /> Express Add-Ons
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  Discover what features Adobe Express <br /> users request the
                  most, and get your <br /> creative idea backed by the Adobe
                  Fund <br />
                  for Design.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    Alex Castanheira <br /> May 10
                  </p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={tallNightHouse}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Trip Report: Winter ISO C++ <br /> Standards Meeting{' '}
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  Ville wins the Sankel Award, a new <br /> [[nodiscard]]
                  policy, and more.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    David Sankel <br /> May 10
                  </p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={preview}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Design Better Add-Ons for <br /> Adobe Express with Our UX{' '}
                  <br /> Guidelines{' '}
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  To help you get started with our <br /> documentation, we
                  present 5 practical <br /> tips for the design of Adobe
                  Express add-
                  <br />
                  ons.
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={thumb}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    Joel Ebner <br /> Mar 5
                  </p>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </section>
      {/* 4 */}

      <section className="w-full pt-14 justify-center flex items-center">
        <div className="w-[80%] gap-8 flex flex-col">
          <ul className="flex gap-3 flex-col">
            <p className="font-sans font-medium text-neutral-700">Security </p>
            <span className="border-[1px] border-[gray] w-full"></span>
          </ul>
          {/*  */}

          <ul className=" flex gap-10">
            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={propFour}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Behind the Scenes with <br /> Bridget: From Bowie State <br />{' '}
                  Intern to Full-Time Employee{' '}
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  By Bridget Oppong, Technology <br /> Compliance Product Owner{' '}
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={kang}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    Alex Castanheira <br /> May 10 . 5mins
                  </p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={propThree}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Getting a Pulse on the Success <br /> of Your Security Program{' '}
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  By Ningjing Gao, Senior Group Program <br /> Manager, Security
                  PMO
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={kang}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    David Sankel <br /> May 10
                  </p>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ul>
                <img
                  className="w-[25.5vw] h-[30vh] rounded"
                  src={propTwo}
                  alt=""
                />
              </ul>

              <ul className="font-sans font-bold text-[1.7vw] text-neutral-800">
                <p>
                  Behind the Scenes with <br /> Serena Zhao
                </p>
              </ul>

              <div className=" flex flex-col gap-5">
                <span className="font-sans text-neutral-600 text-lg">
                  By Serena Zhao, Principal Security <br /> Program Manager
                </span>

                <ul className="flex gap-3">
                  <img
                    className="inline w-[3vw] h-[3vw] rounded-full "
                    src={kang}
                    alt=""
                  />
                  <p className="font-sans text-neutral-600">
                    Joel Ebner <br /> Mar 5
                  </p>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </section>
      {/* 5 */}

      <footer className=" w-full pt-20 flex flex-col gap-14 items-center justify-center">
        <div className="flex items-center justify-center text-center flex-col gap-7">
          <span>
            <p className="font-sans text-[1.7rem] text-neutral-600">
              Integrate, extend, or create apps and experiences with <br />{' '}
              Adobe products and technology{' '}
            </p>
          </span>

          <ul className=" cursor-pointer font-sans text-[0.88rem] flex items-center justify-center border-[1px] border-neutral-400 w-[18vw] h-[6vh] rounded-full">
            <button>Visit developer.adobe.com</button>
          </ul>
        </div>

        <div className="flex items-center justify-end  bg-neutral-800 w-full h-[14vh]">
          <span className="cursor-pointer flex gap-2 text-neutral-400  pr-[5cm] font-sans  text-sm">
            <p>About Adobe Tech Blog</p>
            <p>.Latest Stories</p>
            <p>.Archive</p>
            <p>.About Medium</p>
            <p>.Terms</p>
            <p>.Privacy</p>
            <p>.Teams</p>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Service
