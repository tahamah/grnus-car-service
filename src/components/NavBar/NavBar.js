import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container px-6 py-4 mx-auto">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex items-center justify-between">
                        <div class="text-xl font-semibold text-gray-700">
                            <Link
                                class="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                                to="/"
                            >
                                Brand
                            </Link>
                        </div>

                        <div class="flex md:hidden">
                            <button
                                type="button"
                                class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    class="w-6 h-6 fill-current"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="flex-1 md:flex md:items-center md:justify-between">
                        <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                            <Link
                                to="/"
                                class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                            >
                                Join Slack
                            </Link>
                            <Link
                                to="/"
                                class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                            >
                                Browse Topics
                            </Link>
                            <Link
                                to="/"
                                class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                            >
                                Random Item
                            </Link>
                            <Link
                                to="/"
                                class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
                            >
                                Experts
                            </Link>
                        </div>

                        <div class="flex items-center mt-4 md:mt-0">
                            <button
                                class="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                                aria-label="show notifications"
                            >
                                <svg
                                    class="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </button>

                            <button
                                type="button"
                                class="flex items-center focus:outline-none"
                                aria-label="toggle profile dropdown"
                            >
                                <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        class="object-cover w-full h-full"
                                        alt="avatar"
                                    />
                                </div>

                                <h3 class="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                                    Khatab wedaa
                                </h3>
                            </button>
                            <div class="inline-flex items-center gap-2 list-none lg:ml-auto">
                                <button
                                    class="
                items-center
                block
                px-10
                py-2.5
                text-base
                font-medium
                text-center text-blue-600
                transition
                duration-500
                ease-in-out
                transform
                border-2 border-white
                shadow-md
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-gray-500
              "
                                >
                                    {' '}
                                    Sign in{' '}
                                </button>
                                <button
                                    class="
                items-center
                block
                px-10
                py-3
                text-base
                font-medium
                text-center text-white
                transition
                duration-500
                ease-in-out
                transform
                bg-blue-600
                rounded-xl
                hover:bg-blue-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-blue-500
              "
                                >
                                    {' '}
                                    Sign up{' '}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
