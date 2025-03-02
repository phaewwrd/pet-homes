import React, { useEffect, useState } from "react";

import VetsMapLogo from "../Logo/VetsMapLogo";
import {MapContainer, TileLayer, Popup, Marker, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useSearchStore from "../../stores/search-store";
import useLocationStore from "../../stores/location-store";

function LocationFrom() {
  const { location } = useLocationStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const itemsPerPage = 4;

  // const  resLocation  = useLocationStore(state => state.location);
  // console.log(resLocation);
  
  //Calcutate
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = location?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(location?.length / itemsPerPage);

  const hdlPagesChange = (page) => {
    setCurrentPage(page);
  };

  const hdlSearch = (location) => {
    setSearchTerm(location);
  };

  useEffect(() => {
    console.log("LocationFrom received location data:", location);
  }, [location]);

  return (
    <div className="flex gap-10 w-full justify-center bg-accent p-10">
      <div className="bg-base-100 p-10 rounded-xl flex flex-col w-[500px] gap-10">
        {/* location 1 */}
        {currentItems?.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="text-accent border-b-[0.5px] border-accent pb-5">
              <div
                className="text-2xl text-primary cursor-pointer"
                onClick={() => hdlSearch(item)}
              >
                {item.name}
              </div>
              <div className="font-semibold">{item.type}</div>
              <div>{item.doctorName}</div>
              <div>{item.address}</div>
            </div>
          </div>
        ))}
        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                onClick={() => hdlPagesChange(pageNum)}
                className={`px-3 py-1 rounded ${
                  currentPage === pageNum
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {pageNum}
              </button>
            )
          )}
          {/* Map */}
        </div>
      </div>
      {/* Map */}
      <div className="flex flex-col gap-10  ">
        <VetsMapLogo />
        <div className="flex w-[700px] h-[200px] justify-center">
        <MapContainer
          className=" w-[700px] h-[500px]"
          center={
            searchTerm
              ? searchTerm.location
                  .split(",")
                  .map((coord) => Number(coord.trim()))
              : [13.7384, 100.5321]
          }
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={
              searchTerm
                ? searchTerm.location
                    .split(",")
                    .map((coord) => Number(coord.trim()))
                : [13.7384, 100.5321]
            }
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default LocationFrom;

// searchTerm
//               ? searchTerm.location
//                   .split(",")
//                   .map((coord) => parseFloat(coord.trim()))
//               :
