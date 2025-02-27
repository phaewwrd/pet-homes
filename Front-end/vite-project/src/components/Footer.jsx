import React from "react";

function Footer() {
  return (
    <div>
        <footer className="footer p-10 bg-base-100 text-base-content h-[300px] flex justify-center ">
          <div className=" w-full flex justify-evenly">
            <div className="flex flex-col gap-5 w-[270px] place-items-start ">
              <div className="text-neutral z-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                sequi a deleniti reiciendis impedit facere quis mi molestiae
                excepturi distinctio officiis fugiat optio nesciunt illo.
              </div>
              <div className="z-10"> +66 621456941</div>
            </div>

            <div className="flex gap-10 ">
              <div className="flex flex-col gap-5">
                <div className="text-lg font-semibold">Company</div>
                <div className="flex flex-col gap-2">
                  <div className="text-neutral">About Pets Home</div>
                  <div className="text-neutral">Contact and Support</div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-lg font-semibold">Company</div>
                <div className="flex flex-col gap-2">
                  <div className="text-neutral">About Pets Home</div>
                  <div className="text-neutral">Contact and Support</div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-lg font-semibold">Company</div>
                <div className="flex flex-col gap-2">
                  <div className="text-neutral">About Pets Home</div>
                  <div className="text-neutral">Contact and Support</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}

export default Footer;
