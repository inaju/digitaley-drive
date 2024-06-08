'use client'
import React from 'react'
import RoundedButton from '../components/custom/RoundedButton/RoundedButton'
import { IoMailOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import Link from "next/link";
import logo from "../../public/digitaley-logo.png";
import Image from 'next/image';
const page = () => {
    return (
<>
      
      <div className="flex h-[100vh] lato flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <div className='w-[100%] flex items-center justify-center'>
          <Link
            className="flex hover:no-underline w-fit items-center gap-1 font-semibold text-grey-800"
            href="/"
          >
            <Image src={logo} alt="logo" height={60} width={60} className="w-16"/>
            {/* <p className="text-xl mt-3 font-bold flex flex-col text-end raleway text-greenPrimary">digitaley <span className="text-sm font-[500]">drive</span></p> */}
          </Link>
          </div>

          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-greenPrimary">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-greenPrimary hover:text-greenPrimary">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block px-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-greenPrimary px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-greenPrimary hover:text-greenPrimary">
              Create An Account
            </a>
          </p>
        </div>
      </div>
    </>
       
    )
}

export default page