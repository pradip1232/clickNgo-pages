import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowItWorksSection = (): JSX.Element => {
  // Data for the step cards
  const stepCards = [
    {
      step: "Step 1",
      title: "Define Your Event Flow",
      description:
        "Paid or free? One attendee category or five? Food passes? Tell us once — we got you.",
      backgroundImage: "/mask-group.png",
    },
    {
      step: "Step 2",
      title: "Build Your Registration Form",
      description:
        "Pick from pre-built templates or make it yours — no coding, no fuss.",
      backgroundImage: "/mask-group-1.png",
    },
    {
      step: "Step 3",
      title: "Set Up Your Crew",
      description:
        "Assign volunteers, set roles, and give secure QR access only to your team.",
      backgroundImage: "/mask-group-2.png",
    },
    {
      step: "Step 4",
      title: "Automate All Communication",
      description:
        "Choose email & WhatsApp templates. Real-time updates — no manual follow-ups needed.",
      backgroundImage: "/mask-group-3.png",
    },
    {
      step: "Step 5",
      title: "Go Live & Breathe Easy",
      description:
        "Check-ins, access control, category validation — all automatic. No printed lists. No shouting.\nEvent = handled.",
      backgroundImage: "/mask-group-4.png",
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1156px] items-start gap-[50px]">
      <div className="flex flex-col items-start">
        <h2 className="font-headline text-text text-[length:var(--headline-font-size)] font-[number:var(--headline-font-weight)] tracking-[var(--headline-letter-spacing)] leading-[var(--headline-line-height)] [font-style:var(--headline-font-style)]">
          How It Works
        </h2>

        <p className="font-sub-heading text-text text-[length:var(--sub-heading-font-size)] font-[number:var(--sub-heading-font-weight)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
          Event setup that&apos;s easier than ordering takeout.
          <br />
          Because your energy belongs to the event, not the operations
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-[60px] w-full">
        {/* First row of cards */}
        <div className="flex flex-wrap justify-center gap-[60px]">
          {stepCards.slice(0, 3).map((card, index) => (
            <Card
              key={index}
              className="w-[345px] h-[427px] bg-[#18181c] rounded-[40px] overflow-hidden"
            >
              <CardContent
                className="p-0 h-[421px]"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="flex flex-col w-[290px] items-start gap-[39px] pt-11 pl-[27px]">
                  <div className="inline-flex items-start rounded-[5px]">
                    <div className="[background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold italic text-transparent text-[32px] leading-5">
                      {card.step}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[60px] w-full">
                    <h3 className="font-card-headline text-text text-[length:var(--card-headline-font-size)] font-[number:var(--card-headline-font-weight)] tracking-[var(--card-headline-letter-spacing)] leading-[var(--card-headline-line-height)] [font-style:var(--card-headline-font-style)]">
                      {card.title}
                    </h3>

                    <div className="w-[303px] h-[104px] flex items-center">
                      <p className="[font-family:'Poppins',Helvetica] font-normal text-text text-base leading-7">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row of cards */}
        <div className="flex flex-wrap justify-center gap-[60px]">
          {stepCards.slice(3, 5).map((card, index) => (
            <Card
              key={index + 3}
              className="w-[345px] h-[427px] bg-[#18181c] rounded-[40px] overflow-hidden"
            >
              <CardContent
                className="p-0 h-[421px]"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="flex flex-col w-[290px] items-start gap-[39px] pt-11 pl-[27px]">
                  <div className="inline-flex items-start rounded-[5px]">
                    <div className="[background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold italic text-transparent text-[32px] leading-5">
                      {card.step}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[60px] w-full">
                    <h3 className="font-card-headline text-text text-[length:var(--card-headline-font-size)] font-[number:var(--card-headline-font-weight)] tracking-[var(--card-headline-letter-spacing)] leading-[var(--card-headline-line-height)] [font-style:var(--card-headline-font-style)]">
                      {card.title}
                    </h3>

                    <div className="w-[303px] h-[104px] flex items-center">
                      <p className="[font-family:'Poppins',Helvetica] font-normal text-text text-base leading-7">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
