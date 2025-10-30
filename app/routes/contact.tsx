import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import { Welcome } from "../welcome/welcome";
import Navbar from "../components/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Autism Language" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return [
    <div className="flex flex-col">


      <Navbar title="Contact Us"></Navbar>


      <div className="flex flex-row gap-5 bg-greyperiwinkle justify-center h-screen">
        
        <div className="min-w-72 mt-8">
          
        </div>

        <div className="flex-col gap-1.5 flex max-w-3xl bg-white p-9 px-16 w-3xl min-w-100">
          <h1 id='person-first' className='text-xl font-bold mt-4'><NavLink to="/" end className="hover:text-periwinkle">Send us an email!</NavLink></h1>
          <p className='text-md'>It's generally a bad idea to put raw emails on a web page as data scrapers will harvest and you will get scam texts and calls.</p>
        </div>
        <div className="min-w-72"></div>
      </div>

    </div>
  ];
}
