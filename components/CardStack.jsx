"use client";;
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; 
        newArray.unshift(newArray.pop()); 
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-full md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute  bg-white h-60 w-full md:h-60 md:w-96 rounded-3xl p-4 shadow-2xl border border-neutral-200  shadow-black/[0.1] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, 
              zIndex: cards.length - index, 
            }}>
            <div className="font-normal text-neutral-700 ">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium ">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal ">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
