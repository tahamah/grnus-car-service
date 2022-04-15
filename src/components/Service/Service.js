import React from 'react'
import { Link } from 'react-router-dom'

const Service = ({ service }) => {
    const { name, img, body, title, location } = service
    return (
        <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
                class="object-cover object-center w-full h-56"
                src={img}
                alt="avatar"
            />

            <div class="flex items-center px-6 py-3 bg-gray-900">
                <svg
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path d="M4.342 12.166l-4.342-4.343 1.358-1.358s1.092.735 1.982-.156c.969-.969.68-2.413 2.828-4.03 1.276-.961 2.769-1.279 4.187-1.279 2.793 0 5.3 1.234 5.3 1.234-4.531.453-6.236 2.25-4.363 4.123l1.096 1.095-3.535 3.535-1.072-1.071c-.564-.564-1.417-1.197-2.048-.567-.699.698-.033 1.458-.033 1.458l-1.358 1.359zm8.753-4.007l-3.535 3.535 10.173 10.574c.488.488 1.128.732 1.767.732 1.39 0 2.5-1.128 2.5-2.5 0-.663-.264-1.299-.732-1.768l-10.173-10.573zm-3.441 6.518l-4.634 4.484c-.229.229-.503.407-.79.558l-.58.302-1.025 2.146.833.833 2.101-1.07.301-.58c.151-.286.347-.545.574-.774l4.607-4.457-1.387-1.442zm6.148-6.589l3.914-3.867c.169-.17.443-.168.611 0 .169.17.169.442.001.611l-3.926 3.879.872.907 3.943-3.896c.168-.169.441-.168.611.001.168.168.169.441 0 .609l-3.956 3.909 1.018 1.058 4.236-4.187c.583-.582.874-1.346.874-2.11 0-.768-.293-1.537-.88-2.125-.585-.585-1.35-.877-2.114-.877-.766 0-1.53.293-2.114.877l-4.154 4.105 1.064 1.106z" />
                </svg>

                <h1 class="mx-3 text-lg font-semibold text-white">{name}</h1>
            </div>

            <div class="px-6 py-4">
                <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
                    {title}
                </h1>

                <p class="py-2 text-gray-700 dark:text-gray-400">
                    {body.slice(0, 100)}
                </p>

                <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <svg
                        class="w-6 h-6 fill-current"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                        />
                    </svg>

                    <h1 class="px-2 text-sm">{location}</h1>
                </div>

                <div class="mt-4">
                    <Link
                        to="/"
                        class="
                  inline-flex
                  items-center
                  mt-4
                  font-semibold
                  text-blue-600
                  lg:mb-0
                  hover:text-neutral-600
                "
                        title="read more"
                    >
                        {' '}
                        Read More »{' '}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Service
