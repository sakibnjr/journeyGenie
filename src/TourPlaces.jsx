const TourList = ({ place }) => {
  return (
    <div
      className="card card-normal w-auto h-96 bg-base-100 shadow-xl"
      key={place.id}
    >
      <figure>
        <img src={place.image} className="w-full h-60 mb-2" alt="placePhoto" />
      </figure>
      <div className="text-center">
        <div className="p-2">
          <h2 className="text-2xl uppercase tracking-wider mb-2">
            {place.title}
          </h2>
          <p className="text-xs mb-2">{place.shortDescription}</p>
          <p className="font-bold text-lg font-sans mb-2">BDT: {place.cost}</p>
        </div>

        <div className="card-actions justify-end items-end align-bottom">
          <button className="btn bg-sky-400 rounded-b-2xl rounded-t-none text-white w-full">
            Get Ticket
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourList;
