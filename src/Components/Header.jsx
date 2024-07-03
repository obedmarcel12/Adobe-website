import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const ToggleMenu = () => {
    if (isVisible) {
      // Start slide-out animation
      setIsAnimating(true)
      setTimeout(() => {
        setIsAnimating(false)
        setIsVisible(false)
      }, 500) // Match this duration with your animation duration
    } else {
      // Show menu immediately and start slide-in animation
      setIsVisible(true)
    }
  }

  const navigate = useNavigate()
  const handleHome = () => {
    navigate('/home')
  }

  const handleAbout = () => {
    navigate('/about')
  }

  const handleService = () => {
    navigate('/service')
  }

  const handleContact = () => {
    navigate('/contact')
  }

  return (
    <nav>
      {/* md */}
      <header className=" md:w-full md:h-[12vh] md:flex hidden items-center shadow-lg fixed z-50 bg-white ">
        <nav className=" md:w-full md:h-[12vh] md:flex items-center justify-between px-12  ">
          <div className=" flex items-center font-sans cursor-pointer text-sm font-medium  gap-8">
            <p
              onClick={handleHome}
              className="hover:text-text-sky-900 hover:border-b-[2px] border-[#000] hover:pb-1 "
            >
              Home
            </p>
            <p
              onClick={handleAbout}
              className="hover:text-sky-900 hover:border-b-[2px] border-[#000] hover:pb-1"
            >
              About
            </p>
            <p
              onClick={handleService}
              className=" w-full hover:text-sky-900 hover:border-b-[2px] border-[#000] hover:pb-1"
            >
              Services
            </p>
            <p
              onClick={handleContact}
              className="hover:text-text-sky-900 hover:border-b-[2px] border-[#000] hover:pb-1"
            >
              Contact
            </p>
          </div>
          <div className=" flex font-sans font-medium text-sm items-center gap-3">
            <ul className=" relative left-8">
              <button className=" w-[8vw] h-[6.5vh] bg-black hover:bg-white hover:text-black border-[1px] border-[black] text-white rounded-[20px]">
                Log In
              </button>
            </ul>

            <button className=" w-[8vw] h-[6.5vh] border-[1px] border-black hover:bg-black hover:text-white rounded-[20px]">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      {/* sm */}
      <header className=" md:hidden flex w-full h-[12vh] bg-white shadow-2xl items-center px-5 fixed z-50">
        <nav className=" flex items-center justify-between w-full h-[12vh]">
          <div onClick={ToggleMenu}>
            <i className="bi bi-list text-3xl"></i>
          </div>

          <ul className=" flex items-center font-sans text-base gap-3">
            <button className=" w-[20vw] h-[6vh] bg-black text-white rounded">
              Log In
            </button>
            <button className=" w-[20vw] h-[6vh] bg-black text-white rounded">
              Sign Up
            </button>
          </ul>
        </nav>

        {isVisible && (
          <div
            className={`w-[100%] flex bg-[#fff] pt-9 h-[90vh] flex-col pl-10 absolute left-0 top-[2cm] items-start gap-6 ${
              isAnimating ? 'slide-out-left' : 'slide-in-left'
            }`}
          >
            <p className=" w-[90%] flex items-center  hover:bg-slate-300 hover:h-[6vh] pl-3 rounded  text-base font-medium">
              Home
            </p>
            <p className=" w-[90%] flex items-center  hover:bg-slate-300 hover:h-[6vh] pl-3 rounded text-base font-medium">
              About
            </p>
            <p className=" w-[90%] flex items-center hover:bg-slate-300 hover:h-[6vh] pl-3 rounded  text-base font-medium">
              Services
            </p>
            <p className=" w-[90%] flex items-center hover:bg-slate-300 hover:h-[6vh] pl-3 rounded text-base font-medium">
              Contact
            </p>
          </div>
        )}
      </header>
    </nav>
  )
}

export default Header
