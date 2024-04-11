import Header from "@/components/Header";
import Review from "@/components/ReviewCard";
import Image from "next/image";
import Reviews from "./reviews/page";
import Products from "./products/page";
import Basket from "@/components/Basket";
import Loader from "@/components/Loader";
import Product from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen text-white flex flex-col p-5 gap-32">
      <Header />
      <Reviews />
      <Basket />
      {/* <Loader /> */}
      <Products />
    </main>
  );
}
