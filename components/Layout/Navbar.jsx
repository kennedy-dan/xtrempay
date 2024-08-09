import React, { useState } from "react";
import { Drawer, Space } from "antd/lib";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
const Navbar = () => {
  const [advplacement, setadvPlacement] = useState("left");
  const [openadv, setOpenAdv] = useState(false);
  const showDrawerAdv = () => {
    setOpenAdv(true);
  };

  const onCloseadv = () => {
    setOpenAdv(false);
  };
  return (
    <section className="md:px-20 px-5 pt-6 font-Poppins ">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div>
            <img src="/images/logo1.png" alt="" />
          </div>
        </Link>

        <div className="hidden space-x-6 md:flex ">
          <Link href="/">
            <p>Home</p>
          </Link>

          <Link href="/moola">
            <p>Moola</p>
          </Link>

          <Link href="/passabi">
            <p>Passabi</p>
          </Link>

          <Link href="/contactus">
            <p>About Us</p>
          </Link>

          <Link href="/faq">
          <p>Faq</p>
          </Link>
        </div>

        <div className="md:block hidden">
          <button className="px-5 py-3 uppercase rounded-md border border-1 border-primary">
            DOWNLOAD APP
          </button>
        </div>

        <div className="md:hidden block" onClick={showDrawerAdv}>
          <IoIosMenu />
        </div>
      </div>
      <Drawer
        // title="WeOut"
        placement={advplacement}
        closable={false}
        onClose={onCloseadv}
        open={openadv}
        key={advplacement}
        extra={
          <Space>
            <button onClick={onCloseadv}>
              <MdOutlineCancel className="w-8 h-8" />
            </button>
          </Space>
        }
      >
        <section className="font-poppins">
          <div className="flex justify-end ">
            <button onClick={onCloseadv}>
              <MdOutlineCancel className="w-8 h-8" />
            </button>
          </div>
          <div>
            <img src="/images/navbarlogo.png" alt="" className=" " />
          </div>
          <div className=" space-y-9 font-Poppins  ">
          <Link  href="/">
            <p className='mt-6'>Home</p>
          </Link>

          <Link  href="/moola">
            <p className='mt-6'>Moola</p>
          </Link>

          <Link  href="/passabi">
            <p className='mt-6'>Passabi</p>
          </Link>

          <Link  href="/contactus">
            <p className='mt-6'>About Us</p>
          </Link>

          <Link  href="/faq">
          <p className='mt-6'>Faq</p>
          </Link>
          <button className="px-5 py-3 uppercase rounded-md border border-1 border-primary">
            DOWNLOAD APP
          </button>
        </div>
        </section>
      </Drawer>
    </section>
  );
};

export default Navbar;
