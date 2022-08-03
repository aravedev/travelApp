import React from "react";

export default function Card(props) {
  const str = props.item;

  return (
    <>
      <div className="flex justify-center">
        <div className=" text-textDarkBlue flex flex-col md:flex-row md:max-w-xl   p-6 space-y-3 my-3 md:border md:border-b-gray-300 ">
          <div className="w-full md:h-auto object-cover md:w-48   md:flex md:justify-end">
            <img className="w-full md:w-52 " src={str.imageUrl} alt="" />
          </div>

          {/*Info-Text*/}
          <div className="py-2 mx-4 md:w-2/3">
            {/*Header*/}
            <div className="space-x-2 text-sm flex items-center mt-2">
              <img
                src="/images/placeholder.png"
                className="w-3 text-gray-600"
                alt="Pin icons created by Freepik - Flaticon"
              />
              <span className="tracking-widest">
                {str.location.toUpperCase()}
              </span>
              <a href="#" className="ml-3 text-subtitleViewGoogle">
                View on Google Maps
              </a>
            </div>
            {/*Body*/}
            <div className="md:max-w-sm">
              <h2 className="text-3xl font-bold mb-4">{str.title}</h2>
              <p className="font-bold text-sm mb-3">
                {str.startDate} - {str.endDate}
              </p>
              <p className="text-sm">{str.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*

<div className="container text-textDarkBlue flex flex-col md:flex-row  mx-auto border border-black p-8 ">
        <div className="w-full  border border-b-gray-500 md:w-1/3 md:flex md:justify-end">
          <img className="max-w-full md:w-52 " src={str.imageUrl} alt="" />
        </div>

        
        <div className="py-2 mx-4 md:w-2/3">
          
          <div className="space-x-2 text-sm flex items-center mt-2">
            <img
              src="/images/placeholder.png"
              className="w-3 text-gray-600"
              alt="Pin icons created by Freepik - Flaticon"
            />
            <span className="tracking-widest">
              {str.location.toUpperCase()}
            </span>
            <a href="#" className="ml-3 text-subtitleViewGoogle">
              View on Google Maps
            </a>
          </div>
         
          <div className="md:max-w-sm">
            <h2 className="text-3xl font-bold mb-4">{str.title}</h2>
            <p className="font-bold text-sm mb-3">
              {str.startDate} - {str.endDate}
            </p>
            <p className="text-sm">{str.description}</p>
          </div>
        </div>
      </div>

*/
