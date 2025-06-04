import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-8 md:gap-[150px] w-full py-10">
      <div className="flex items-center p-2.5">
        <img
          className="w-auto h-auto max-w-[485px] max-h-[501px]"
          alt="Logo SYMBOL"
          src="/logo-symbol.png"
        />
      </div>

      <Card className="border-0 bg-transparent max-w-[556px]">
        <CardContent className="flex flex-col items-start gap-2 p-0">
          <div className="flex items-center justify-center">
            <h2 className="w-fit [background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-heading-secondary font-[number:var(--heading-secondary-font-weight)] text-[length:var(--heading-secondary-font-size)] tracking-[var(--heading-secondary-letter-spacing)] leading-[var(--heading-secondary-line-height)]">
              Try It Right Now
            </h2>
          </div>

          <div className="font-['Poppins',Helvetica] text-text text-2xl">
            <p className="font-semibold tracking-[-0.29px] leading-8">
              No Demo Calls. No Sales Team.
            </p>
            <p className="tracking-[-0.29px] leading-8">
              Set up your first event now. If it takes more than 5 minutes,
              you&apos;re overthinking it.
            </p>
          </div>

          <Button className="mt-2 px-7 py-3 rounded-[5px] [background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)] hover:opacity-90 transition-opacity">
            <span className="font-button-text font-[number:var(--button-text-font-weight)] text-text text-[length:var(--button-text-font-size)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)]">
              Start Test Event — It&apos;s Free
            </span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
