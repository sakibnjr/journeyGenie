const placeCategory = [
  { id: 1, title: "Family Friendly", icon: "img/family.jpg" },
  { id: 2, title: "Friend Circle", icon: "img/friend.jpg" },
  { id: 3, title: "River Side", icon: "img/river.jpg" },
  { id: 4, title: "Hill Side", icon: "img/hill.jpg" },
  { id: 5, title: "Most Popular", icon: "img/popular.jpg" },
];

const Category = ({ open, changeCategory }) => {
  return (
    <>
      <p className="text-lg lg:text-3xl mb-4 m-2 lg:mx-12 text-sky-950 dark:text-white">
        Or select from a category
      </p>
      <div className="mx-2 lg:mx-12 grid grid-cols-2 md:grid-cols-5 gap-4 justify-center">
        {placeCategory.map((place) => (
          <div
            className="card w-auto bg-base-100 shadow-xl image-full"
            key={place.id}
          >
            <figure>
              <img src={place.icon} alt={place.title} />
            </figure>
            <div className="card-body flex flex-col justify-center items-center">
              <h2 className="card-title dark:text-white">{place.title}</h2>
              <button
                className="btn btn-outline text-white"
                onClick={() => changeCategory(place.title)}
              >
                View Packages
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
