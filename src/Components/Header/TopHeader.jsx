import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlinePhoneInTalk,
} from "react-icons/md";

const TopHeader = () => {
  return (
    <div>
      <div>
        <div className="bg-black hidden lg:block text-gray-300 text-sm">
          <div className="flex items-center justify-between py-4 w-11/12 lg:w-9/12 mx-auto">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MdOutlinePhoneInTalk className="text-[#ff2626]" />
                <p>+8801580768366</p>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-[#ff2626]" />
                <p>+8801580768366</p>
              </div>
            </div>

            <div className="hidden xl:block">
              <p>Worls's Fastesr Online Shopping Destination</p>
            </div>

            <div className="flex items-center gap-4">
              <p>Help?</p>
              <p>Track Order?</p>
              <div className="flex items-center gap-1">
                <p>English </p>
                <MdOutlineKeyboardArrowDown />
              </div>
              <div className="flex items-center gap-1">
                <p>Dollar </p>
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
