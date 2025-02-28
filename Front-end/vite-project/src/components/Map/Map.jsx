import React from "react";
import VetsMapLogo from "../Logo/VetsMapLogo";
import MapImg from "./MapImg";




function Map() {
  return (
    <div className="w-full  bg-amber-700 flex justify-center">
      <div className="bg-purple-200 flex justify-evenly gap-20 w-full mt-10 mb-10">
        {/* Location info. */}
        <div className="bg-yellow-300 flex flex-col w-[300px] gap-10">
          location
          <div className="bg-slate-400">
            location 1<div className="text-2xl">Head</div>
            <div>descriptions</div>
          </div>
          <div className="bg-slate-400">
            location 2<div className="text-2xl">Head</div>
            <div>descriptions</div>
          </div>
          <div className="bg-slate-400">
            location 3<div className="text-2xl">Head</div>
            <div>descriptions</div>
          </div>
        </div>
        <div className="bg-slate-400 flex flex-col w-[742px] gap-10">
          <div className=" flex justify-end">
            <VetsMapLogo className="w-[400px]" />
          </div>

          {/* Map */}
          <div className="bg-red-500 w-[500px] h-[200px]">
            
          <MapImg/>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
