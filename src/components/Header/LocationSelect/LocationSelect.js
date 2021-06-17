import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function LocationSelect() {
  //set State for Location
  const [location, setlocation] = useState({ id: 1, name: "Hồ Chí Minh" });
  //get data from redux
  const locationRedux = useSelector(
    (state) => state.LocationSelect.locationList
  );

  //Render Location List
  const renderLocationList = () => {
    return locationRedux.map((location, index) => {
      return (
        <li
          key={index}
          className="hover:bg-blue-400 hover:text-white transition-all delay-70 cursor-pointer rounded-lg"
          onClick={() => {
            setlocation({
              ...location,
              name: location.name,
            });
          }}
        >
          {location.name}
        </li>
      );
    });
  };
  return (
    <div className="cursor-pointer" style={{ width: "150px" }}>
      <div className="group flex flex-row text-gray-500 w-full lg:justify-between p-2 mx-3">
        <img
          width="20px"
          height="20px"
          className="rounded-full hidden lg:block  "
          src="https://tix.vn/app/assets/img/icons/location-header.png"
          alt="avatar"
        />
        <div>
          <span className="login_location_style ">{location.name}</span>
        </div>
        <i class="fas fa-angle-down my-auto mx-2 text-black lg:text-gray-500"></i>
        <div
          className="z-10 absolute mt-8 rounded-lg bg-gray-50 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-7  lg:right-5 cursor-pointer transition-all duration-500"
          style={{ width: "120px", textAlign: "center" }}
        >
          <ul>{renderLocationList()}</ul>
        </div>
      </div>
      <div classname="flex flex-row text-gray-400 w-full justify-between cursor-pointer"></div>
    </div>
  );
}
