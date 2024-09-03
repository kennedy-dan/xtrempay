import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/HomeContent/Hero";
import Use from "@/components/HomeContent/Use";
import Do from "@/components/HomeContent/Do";
import Scroll from "@/components/HomeContent/Scroll";
import Reviews from "@/components/HomeContent/Reviews";
import Security from "@/components/HomeContent/Security";
import Agents from "@/components/HomeContent/Agents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <Layout>
    <Hero />
    <Use />
    <Do />
    <Scroll />
    <Reviews />
    {/* <Security /> */}
    <Agents />
  </Layout>
  );
}
