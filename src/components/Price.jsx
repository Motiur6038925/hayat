// "use client";

const Price = (props) => {
  const data = props.props;
  console.log(data);
  return (
    <section
      className="py-20 xl:bg-contain bg-top bg-no-repeat"
      style={{
        backgroundImage: 'url("metis-assets/backgrounds/intersect.svg")',
      }}
    >
      <div className="container  mx-auto">
        <div className="text-center mb-16">
          <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading">
            <span>{data[0]?.title}</span>
            {/* <span className="text-blue-600">choose</span>
            <span>your best plan</span> */}
          </h2>
          <p className="max-w-sm mx-auto text-lg text-gray-400">
            {data[0]?.content}
          </p>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="pt-16 pb-8 px-4 text-center bg-white rounded shadow">
              <img
                className="h-20 mb-6 mx-auto"
                src="images/people.png"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">
                {data[0]?.catagorises}
              </h3>
              <span className="text-4xl text-blue-600 font-bold font-heading">
                {data[0]?.price}
              </span>
              <p className="mt-2 mb-8 text-gray-400">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-gray-400">
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features1}</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features2}</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features3}</span>
                  </li>
                  <li className="flex">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features4}</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="block sm:inline-block py-4 px-6 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="pt-16 pb-8 px-4 text-center bg-white rounded shadow">
              <img
                className="h-20 mb-6 mx-auto"
                src="images/people.png"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">
                {data[0]?.catagorises}
              </h3>
              <span className="text-4xl text-blue-600 font-bold font-heading">
                {data[0]?.price}
              </span>
              <p className="mt-2 mb-8 text-gray-400">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-gray-400">
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features1}</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features2}</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features3}</span>
                  </li>
                  <li className="flex">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features4}</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="block sm:inline-block py-4 px-6 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
            <div className="pt-16 pb-8 px-4 text-center bg-white rounded shadow">
              <img
                className="h-20 mb-6 mx-auto"
                src="images/people.png"
                alt=""
              />
              <h3 className="mb-2 text-4xl font-bold font-heading">
                {data[0]?.catagorises}
              </h3>
              <span className="text-4xl text-blue-600 font-bold font-heading">
                {data[0]?.price}
              </span>
              <p className="mt-2 mb-8 text-gray-400">user per month</p>
              <div className="flex flex-col items-center mb-8">
                <ul className="text-gray-400">
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features1}</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features2}</span>
                  </li>
                  <li className="flex mb-3">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features3}</span>
                  </li>
                  <li className="flex">
                    <svg
                      className="w-6 h-6 mr-2 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{data[0]?.features4}</span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
                  href="#"
                >
                  Start Free Trial
                </a>
                <a
                  className="block sm:inline-block py-4 px-6 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-white border border-gray-200 hover:border-gray-300 rounded"
                  href="#"
                >
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
