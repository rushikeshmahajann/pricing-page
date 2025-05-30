import Footer from "../components/Footer";
import { Pricing } from "../pages/Pricing";
import "./App.css";
import * as React from "react";
import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Faq from "../pages/Faq";
import { CardStackDemo } from "../pages/Cards";
import Navbar from "../components/Navbar";

import { ReactLenis, useLenis } from "lenis/react";

function App() {
    const lenis = useLenis(({ scroll }) => {});
  return (
    <ReactLenis root options={{ smoothWheel: true }}>
      <main className="bg-green-200 w-screen min-h-screen [background-image:radial-gradient(68%_100%_at_bottom,rgba(255,255,255,0.18),rgba(255,255,255,0))]">
        <Navbar />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Pricing />

          <p className="text-white font-poppin tracking-tight font-light text-xs md:text-sm max-w-5xl mt-14 px-4">
            * Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Doloremque, quidem explicabo minus ex voluptas alias, ab corrupti
            harum hic sit voluptate deserunt commodi nam praesentium id porro
            expedita mollitia repudiandae. Lorem ipsum dolor sit amet
            consectetur <span className="">adipisicing</span> elit. Odit fugit
            corrupti velit ea eius quo sunt, optio adipisci impedit.
          </p>

          <h3 className="underline text-[#18be6b] my-14 text-xl font-poppin tracking-tight cursor-pointer">
            See all features
          </h3>

          <div className="flex flex-col md:flex-row px-4 mx-auto items-start justify-center">
            <div className="flex flex-col items-start">
              <h2 className="text-5xl mt-14 font-poppin tracking-tight text-left text-purple-100 font-medium">
                From people who loves us.
              </h2>
              <button className="bg-green-100 text-green-200 tracking-tight text-xl font-medium rounded-full px-6 py-2 mt-6 shadow-sm shadow-gray-600 hover:shadow-xl hover:bg-green-100/90 hover:shadow-gray-700 transition-all ease-in-out font-poppin">
                Find out more
              </button>
            </div>
            <CardStackDemo />
          </div>
        </div>
      </main>
      <Faq />
      <Footer />
    </ReactLenis>
  );
}

export default App;
