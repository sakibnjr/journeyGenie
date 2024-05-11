import { useState } from "react";
import Places from "./Places.json";
import TourPlaces from "./TourPlaces";

const TourList = ({ tourTitle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Places.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Places.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const categoryTitle = tourTitle;
  // const [categoryTitle, setCategoryTitle] = useState("");
  // setCategoryTitle(tourTitle);

  const mostPopular = Places.filter(
    (place) => place.category === `${categoryTitle}`
  );

  return (
    <div>
      <p className="text-lg lg:text-3xl mb-4 m-2 lg:mx-12 text-sky-950 dark:text-white">
        Availabe tour packages
      </p>
      <div className="mx-2 lg:mx-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center py-2 rounded-xl text-center">
        {categoryTitle === null
          ? records.map((place) => <TourPlaces key={place.id} place={place} />)
          : mostPopular.map((place) => (
              <TourPlaces key={place.id} place={place} />
            ))}
      </div>
      <nav className="mt-4">
        <ul className="flex gap-1 justify-center">
          <li>
            <a href="#" onClick={prePage} className="btn btn-outline">
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
                  d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
                />
              </svg>
            </a>
          </li>
          {numbers.map((n, i) => (
            <li key={i} className="flex items-center btn btn-circle">
              <a href="#" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li>
            <a href="#" onClick={nextPage} className="btn btn-outline">
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
                  d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
};

export default TourList;
