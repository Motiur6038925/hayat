"use client";

const Team = (props) => {
  const data = props.props;

  console.log(data);
  return (
    <section className="py-20">
      <div className="container  mx-auto text-center">
        <div className="max-w-lg mx-auto mb-12">
          <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
            {data[0]?.title}
          </h2>
          <p className="text-blueGray-400 leading-loose">{data[0]?.content}</p>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
            <img
              className="h-64 w-64 mx-auto rounded object-cover object-top"
              src={data[0]?.imgCDN}
              alt=""
            />
            <p className="mt-6 text-xl">{data[0]?.name}</p>
            <p className="mt-2 mb-4 text-blue-600">CEO</p>
            <div className="flex py-1 justify-center space-x-2">
              <img src="metis-assets/icons/facebook.svg" alt="" />
              <img src="metis-assets/icons/twitter.svg" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
            <img
              className="h-64 w-64 mx-auto rounded object-cover object-top"
              src={data[1]?.imgCDN}
              alt=""
            />
            <p className="mt-6 text-xl">{data[1]?.name}</p>
            <p className="mt-2 mb-4 text-blue-600">Head of Development</p>
            <div className="flex py-1 justify-center space-x-2">
              <img src="metis-assets/icons/facebook.svg" alt="" />
              <img src="metis-assets/icons/twitter.svg" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
            <img
              className="h-64 w-64 mx-auto rounded object-cover object-top"
              src={data[2]?.imgCDN}
              alt=""
            />
            <p className="mt-6 text-xl">{data[2]?.name}</p>
            <p className="mt-2 mb-4 text-blue-600">Head of Operations</p>
            <div className="flex py-1 justify-center space-x-2">
              <img src="metis-assets/icons/facebook.svg" alt="" />
              <img src="metis-assets/icons/twitter.svg" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
            <img
              className="h-64 w-64 mx-auto rounded object-cover object-top"
              src={data[3]?.imgCDN}
              alt=""
            />
            <p className="mt-6 text-xl">{data[3]?.name}</p>
            <p className="mt-2 mb-4 text-blue-600">Senior Developer</p>
            <div className="flex py-1 justify-center space-x-2">
              <img src="metis-assets/icons/facebook.svg" alt="" />
              <img src="metis-assets/icons/twitter.svg" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
            <img
              className="h-64 w-64 mx-auto rounded object-cover object-top"
              src={data[4]?.imgCDN}
              alt=""
            />
            <p className="mt-6 text-xl">{data[4]?.name}</p>
            <p className="mt-2 mb-4 text-blue-600">Head of Development</p>
            <div className="flex py-1 justify-center space-x-2">
              <img src="metis-assets/icons/facebook.svg" alt="" />
              <img src="metis-assets/icons/twitter.svg" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
            <img
              className="h-64 w-64 mx-auto rounded object-cover object-top"
              src={data[5]?.imgCDN}
              alt=""
            />
            <p className="mt-6 text-xl">{data[5]?.name}</p>
            <p className="mt-2 mb-4 text-blue-600">Head of Operations</p>
            <div className="flex py-1 justify-center space-x-2">
              <img src="metis-assets/icons/facebook.svg" alt="" />
              <img src="metis-assets/icons/twitter.svg" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
            <img
              className="h-64 w-64 mx-auto rounded object-cover object-top"
              src={data[6]?.imgCDN}
              alt=""
            />
            <p className="mt-6 text-xl">{data[6]?.name} </p>
            <p className="mt-2 mb-4 text-blue-600">Junior Developer</p>
            <div className="flex py-1 justify-center space-x-2">
              <img src="metis-assets/icons/facebook.svg" alt="" />
              <img src="metis-assets/icons/twitter.svg" alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12">
            <img
              className="h-64 w-64 mx-auto rounded object-cover object-top"
              src={data[7]?.imgCDN}
              alt=""
            />
            <p className="mt-6 text-xl">{data[7]?.name}</p>
            <p className="mt-2 mb-4 text-blue-600">Head of Development</p>
            <div className="flex py-1 justify-center space-x-2">
              <img src="metis-assets/icons/facebook.svg" alt="" />
              <img src="metis-assets/icons/twitter.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
