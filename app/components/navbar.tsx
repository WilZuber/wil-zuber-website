import { NavLink } from "react-router";

export default function Navbar (props: {title: string}) {
    return <div className="flex-1 flex-col sticky top-0 w-screen bg-nlpdarkgrey justify-center">  {/* header */}

        <div className="flex flex-col">
          <nav className="pr-6 py-3 pl-4">
            <div className="flex flex-row">
              <nav className="w-14 flex-4"><h1 className="text-2xl text-nlppurple"><NavLink to="/" end className="hover:text-nlplight">Wil Zuber</NavLink></h1></nav>
              <div className="flex-1 text-xl text-right text-nlppurple"><NavLink to="/articles" end className="hover:text-white">Publications</NavLink></div>
              <div className="flex-1 text-xl text-right text-nlppurple"><NavLink to="/contact" end className="hover:text-white">Contact</NavLink></div>
            </div>
          </nav>
        </div>
      </div>
}