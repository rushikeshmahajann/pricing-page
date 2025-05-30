import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What’s included in the Starter Plan?",
    answer:
      "The Starter Plan is perfect for new creators or small businesses. It includes up to 10 video listings, 1 Mini Storefront setup, voice overlays, local search visibility, and integration with Instagram and WhatsApp. You’ll also get access to in-app chat and a basic analytics dashboard.",
  },
  {
    question: "Can I upgrade to the Pro Creator Plan anytime?",
    answer:
      "Absolutely! You can upgrade to the Pro Creator Plan at any point from your dashboard. All your existing content and settings will carry over, and you'll instantly unlock advanced features like unlimited listings, more storefronts, full social integration, and priority search placement.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 7-day free trial for both plans so you can explore all the features before committing. No credit card is required to start the trial — just sign up and start creating.",
  },
  {
    question: "How does the in-app chat work?",
    answer:
      "The in-app chat allows real-time messaging between buyers and sellers. On the Starter Plan, you can chat directly with potential customers. The Pro Plan enhances this with quick reply templates and message management tools to streamline communication.",
  },
  {
    question: "Will my videos show up on Google or in local search?",
    answer:
      "Yes. All listings are optimized for local search visibility. With the Pro Plan, your videos get priority placement in local searches, giving you more exposure and helping you reach customers nearby.",
  },
];

const AccordionComp = () => {
  return (
    <div className="max-w-5xl h-full mx-auto px-6 font-poppin py-24">
      <h2 className="tracking-tight my-12 font-semibold text-3xl md:text-5xl text-center text-purple-200">
        Pricing Questions
      </h2>

      <Accordion.Root type="single" collapsible className="w-full space-y-6 ">
        {faqs.map((faq, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="overflow-hidden py-8 px-6 bg-white/40 rounded-3xl"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full flex justify-between items-center px-4  text-left font-medium text-xl md:text-2xl text-purple-200 tracking-tight transition-all ease-in-out  ">
                {faq.question}
                <ChevronDown className="h-5 w-5 transition-transform duration-300 ease-in-out data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content
              className={`overflow-hidden text-lg md:text-xl tracking-tight text-gray-600 px-4
                data-[state=open]:[animation:var(--animation-slideDown)]
                data-[state=closed]:[animation:var(--animation-slideUp)]`}
            >
              <div className="py-3">{faq.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default AccordionComp;
