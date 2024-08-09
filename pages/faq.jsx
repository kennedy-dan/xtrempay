import Layout from "@/components/Layout/Layout";
import FAQ from "@/components/UI/FAQ";
import React from "react";

const Faqq = () => {
  return (
    <Layout>
      <div className="bg-[url('/images/faqbg.png')] bg-cover w-full flex items-center bg-center h-[199px]">
        <p className="text-white font-bold text-[53px] text-center w-full " >FAQ</p>
      </div>
      <FAQ />
    </Layout>
  );
};

export default Faqq;
