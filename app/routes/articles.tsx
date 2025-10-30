import type { Route } from "./+types/home";
import { NavLink } from "react-router";
import { Welcome } from "../welcome/welcome";
import Navbar from "../components/navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wil Zuber" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return [
    <div className="flex flex-col">


      <Navbar title="Articles"></Navbar>


      <div className="flex flex-row gap-5 bg-nlpgrey justify-center h-screen">
        
        <div className="min-w-72 mt-8">
          
        </div>

        <div className="flex-col gap-1.5 flex max-w-3xl bg-nlpgrey p-9 px-16 w-3xl min-w-100">
          <h1 id='person-first' className='text-xl font-bold mt-4'>Peer-Reviewed Journal and Conference Papers</h1>
          <p> Adrian Heffelman*, Wilson Zuber*, Mitrasree Deb, Aishwarya Manjunath, Hanze Aggabao, Hamza Magsi, Maya Galley, Mirza Tairin, Moushumi Sharmin. The Good, the Bad, and the Potential of AI-based Systems in Computing Education. IEEE COMPSAC 2025</p>
        </div>
        <div className="min-w-72"></div>
      </div>

    </div>
  ];
}
