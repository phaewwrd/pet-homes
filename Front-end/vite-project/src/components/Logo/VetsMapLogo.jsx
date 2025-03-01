import React from 'react'
import { PawLogoReverse } from '../../Icons'

function VetsMapLogo() {
  return (
    <div>
        <div>
              {/* Title */}
              <div className=" flex relative justify-center gap-3 z-10 text-base-100 place-items-end py-5">
                {/* Vets */}
                
                  <PawLogoReverse className="w-[90px] h-[90px] text-secondary left-[700px] -top-12 z-0" />
                  <div className="text-8xl font-bold z-10 text-base-100" style={{ fontStyle: "italic" }}> Vets </div>
               
                {/* map */}
                <div className="flex z-100 text-6xl  ">Maps</div>
              </div>
            </div>
    </div>
  )
}

export default VetsMapLogo