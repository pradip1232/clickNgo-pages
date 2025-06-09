import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

import aa from '../../../../assets/img/group-1.png';
import bb from '../../../../assets/img/group-2.png';
import cc from '../../../../assets/img/group-3.png';
import dd from '../../../../assets/img/group-4.png';
import ee from '../../../../assets/img/group-5.png';


// Feature card data for mapping
const featureCards = [
  {
    id: 1,
    iconUrl: aa,
    description: "Fully automated workflows from start to finish.",
  },
  {
    id: 2,
    iconUrl: bb,
    description: "No follow-ups, no scrambling, no micromanaging. Just flow.",
  },
  {
    id: 3,
    iconUrl: cc,
    description:
      "Designed for small teams or even solo organizers with big plans.",
  },
  {
    id: 4,
    iconUrl: dd,
    description: "No hidden charges, no surprises",
  },
  {
    id: 5,
    iconUrl: ee,
    description: "Works behind-the-scenes, 24/7 — even when you're not.",
  },
];

export const WhyChooseUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-2.5 p-2.5 w-full max-w-[1156px] mt-[55px] mx-auto">
      <div className="flex flex-col items-center gap-[35px] w-full">
        <div className="flex flex-col items-center gap-12">
          <header>
            <h2 className="font-['Poppins',Helvetica] font-extrabold text-text text-9xl tracking-[0] leading-[65px]">
              Why Us
            </h2>
          </header>

          <div className="flex flex-col items-center gap-[5px]">
            <p className="font-['Playfair_Display',Helvetica] font-normal italic text-text text-[32px] text-center tracking-[0] leading-[normal]">
              Built So You Don&apos;t Have to Babysit It.
            </p>

            <p className="font-card-headline-secondary font-[number:var(--card-headline-secondary-font-weight)] text-text text-[length:var(--card-headline-secondary-font-size)] text-center tracking-[var(--card-headline-secondary-letter-spacing)] leading-[var(--card-headline-secondary-line-height)] whitespace-nowrap [font-style:var(--card-headline-secondary-font-style)]">
              ClicknGO takes over the boring bits so you can focus on the big
              moments.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 p-2.5 w-full">
          {featureCards.map((feature) => (
            <Card
              key={feature.id}
              className="flex flex-col w-[213px] h-[236px] items-center justify-center gap-5 p-2.5 bg-[#18181c] rounded-[20px] overflow-hidden border-none"
            >
              <CardContent className="flex flex-col items-center justify-center gap-5 p-0 pt-2.5">
                <div className="flex flex-col w-[60px] h-[57px] items-center justify-center px-[13px] py-3 rounded-[238px] overflow-hidden [background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)]">
                  <div
                    className="w-[34px] h-[33px] bg-[100%_100%]"
                    style={{ backgroundImage: `url(${feature.iconUrl})` }}
                  />
                </div>

                <p className="w-[180.47px] font-body-text font-[number:var(--body-text-font-weight)] text-text text-[length:var(--body-text-font-size)] text-center tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
