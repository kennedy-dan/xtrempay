/* eslint-disable */
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from  './faqs.module.css'
export function Arrow() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 7.5V28.5"
        stroke="#3D3D3D"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.5 18L18 28.5L7.5 18"
        stroke="#3D3D3D"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Accordion({ item }) {
  const [show, setShow] = useState(false);
  return (
    <div className={` ${styles.accordion} `}>
      <div
        className="flex items-center font-Poppins align-middle justify-between border-b border-b-black py-4 px-4"
        onClick={() => setShow(!show)}
      >
        <p className="text-left text-[17px] tracking-tight">{item.title}</p>
        <div className="">
          <IoIosArrowDown className="w-8 h-8" />
        </div>
      </div>

      {show && (
        <div className="text-left text-[16px] pl-1 bg-[#f5f7f7] tracking-tighter py-6">
          {item.details}
        </div>
      )}
    </div>
  );
}
