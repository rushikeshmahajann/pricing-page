"use client";
import { CardStack } from "../components/CardStack";
import { cn } from "../lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-max my-14 pb-12 flex items-center justify-start md:justify-end w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({
  children,
  className
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-green-100 text-green-200 px-1 py-0.5",
        className
      )}>
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Rushikesh Mahajan",
    designation: "Frontend Sorcerer",
    content: (
      <p>
        HIRE ME — not just because I said so, but because{" "}
        <Highlight>I’ll make your storefront smoother than your best transition edit</Highlight>.
        From <Highlight>Framer Motion</Highlight> to pixel-perfection, I gotchu fam. 💻✨
      </p>
    ),
  },
  {
    id: 1,
    name: "Rushikesh Mahajan",
    designation: "React Jedi",
    content: (
      <p>
        Imagine your UI is a mess. Now imagine me,{" "}
        <Highlight>wrangling your DOM like it owes me money</Highlight>. Tailwind, GSAP, ShadCN?{" "}
        Already in my utility belt. Let's build something that drops jaws.
      </p>
    ),
  },
  {
    id: 2,
    name: "Rushikesh Mahajan",
    designation: "Chief Scroll Enthusiast",
    content: (
      <p>
        Your website's scroll shouldn't feel like a PowerPoint from 2004.{" "}
        <Highlight>I bring buttery-smooth scroll vibes</Highlight>, Locomotive or Lenis — pick your weapon.
        Let's make users scroll and say “DAMN.” 🤌
      </p>
    ),
  },
  {
    id: 3,
    name: "Rushikesh Mahajan",
    designation: "Your Future Teammate 👀",
    content: (
      <p>
        You: “We need a frontend dev who gets it.” <br />
        Me: <Highlight>Already here, already coding</Highlight>. Let’s make Sellou so slick that users think it’s magic.
        Also, I make a mean cup of chai. ☕
      </p>
    ),
  },
];

