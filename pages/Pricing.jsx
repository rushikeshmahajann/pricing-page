"use client";
import React, { useState } from "react";
import { WobbleCard } from "../components/Wobble-card";
import Toggle from "../components/Toggle";
import Arrow from "../icons/Arrow";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const data = [
    {
      title: "Starter Plan",
      description:
        "For new creators & small businesses looking to make a splash.",
      monthlyPrice: "$4.99/mo",
      cancelledPrice: "$4.99",
      yearlyPrice: "$2.99/mo",
      bg: "bg-green-100 text-green-200",
      buttonBg: "hover:bg-green-200 hover:text-white",
      features: [
        "Create up to 10 video listings",
        "1 Mini Storefront setup",
        "Add voice overlays to videos",
        "Local search visibility",
        "Connect Instagram & WhatsApp",
        "In-app chat with buyers",
        "Basic analytics dashboard",
      ],
    },
    {
      title: "Pro Creator Plan",
      description:
        "For growing sellers ready to scale their reach & engagement.",
      monthlyPrice: "$10.99/mo",
      cancelledPrice: "$10.99",
      yearlyPrice: "$7.99/mo",
      bg: "bg-purple-100 text-purple-200",
      buttonBg: "hover:bg-purple-200 hover:text-white",
      features: [
        "Unlimited video listings",
        "Manage up to 3 Mini Storefronts",
        "Full social integration (Instagram, WhatsApp)",
        "Voice overlays + video editing tools",
        "Priority local search placement",
        "In-app chat + quick reply templates",
        "Advanced analytics & trends",
      ],
    },
  ];

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };
  return (
    <section className="mt-32">
      <div className="my-18 w-full flex flex-col justify-center items-center">
        <h2 className="text-4xl max-w-xs md:max-w-full md:text-5xl font-poppin tracking-tight text-center text-purple-100 font-medium">
          Priced for impact at scale
        </h2>

        <Toggle isYearly={isYearly} handleToggle={handleToggle} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto w-full px-4">
        {data &&
          data.map((item, index) => (
            <WobbleCard
              key={index}
              containerClassName={`col-span-1 h-full ${item.bg} min-h-[500px] lg:min-h-[300px]`}
              className=""
            >
              <div className="w-full">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold font-poppin tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-3 text-left text-lg/6 font-poppin tracking-tight">
                  {item.description}
                </p>

                <p className="font-poppin text-4xl tracking-tighter mt-18 font-semibold flex items-end gap-3">
                  {isYearly ? `${item.yearlyPrice}` : item.monthlyPrice}{" "}
                  {isYearly ? (
                    <span className="text-xs md:text-lg tracking-tight flex gap-1 opacity-40">
                      <span className="line-through opacity-90">
                        {item.cancelledPrice}
                      </span>
                      (billed annually)
                    </span>
                  ) : (
                    <span onClick={handleToggle} className="flex justify-center items-center underline text-lg tracking-tight opacity-50 hover:opacity-80 cursor-pointer stroke-black transition-opacity ease-in-out">save 20% annually<Arrow /></span>
                  )}
                  
                </p>
                <button
                  className={`${item.buttonBg} bg-white/60  transition-colors ease-in-out text-xl rounded-full w-full py-4 font-poppin tracking-tight font-base mt-4`}
                >
                  Get started
                </button>

                <div className="h-[1px] mt-14 mb-4 bg-green-200/20 w-full"></div>

                {item.features.map((item, index) => (
                  <div key={index}>
                    <p className="font-poppin tracking-tight text-xl font-base">
                      {item}
                    </p>
                    <div className="h-[1px] my-4 bg-green-200/20 w-full"></div>
                  </div>
                ))}
              </div>
            </WobbleCard>
          ))}
      </div>
    </section>
  );
}
