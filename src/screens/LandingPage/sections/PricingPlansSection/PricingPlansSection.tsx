import { CheckIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

import ff from '../../../../assets/img/Freemium.webp';
import ee from '../../../../assets/img/Enterprise.webp';

// Feature data for pricing plans
const freemiumFeatures = [
  "100 attendee tokens free per event",
  "After 100 attendees, a per-user charge applies.",
  "QR-based check-ins, customizable forms, automated communication, analytics & reporting",
];

const enterpriseFeatures = [
  ...freemiumFeatures,
  "Whitelabel experience — your branding, your domain",
  "Advanced customization of forms & workflows",
];

export const PricingPlansSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[90px] w-full max-w-[1156px]">
      <div className="flex flex-col items-start gap-[90px] w-full">
        <div className="flex flex-col items-start">
          <div className="relative">
            <h2 className="font-headline font-[number:var(--headline-font-weight)] text-text text-[length:var(--headline-font-size)] tracking-[var(--headline-letter-spacing)] leading-[var(--headline-line-height)] [font-style:var(--headline-font-style)]">
              Pricing
            </h2>
          </div>

          <p className="font-sub-heading font-[number:var(--sub-heading-font-weight)] text-text text-[length:var(--sub-heading-font-size)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
            Start Free. Scale Effortlessly. No Hidden Charges
          </p>
        </div>

        <div className="flex items-center justify-center gap-[104px] px-[90px] w-full">
          {/* Freemium Card */}
          <Card className="flex flex-col w-[350px] items-center bg-[#18181c] rounded-[20px] relative">
            <div className="flex flex-col w-[76px] h-[76px] items-center justify-center absolute -top-11 left-1/2 -translate-x-1/2 bg-[#222228] rounded-[38px]">
              <img
                className="w-[28.62px] h-[37.18px]"
                alt="Freemium icon"
                src={ff}
              />
            </div>

            <CardContent className="flex flex-col w-full items-center px-0 py-[35px]">
              <div className="flex flex-col items-center gap-2.5 mb-6">
                <h3 className="font-card-headline font-[number:var(--card-headline-font-weight)] text-text text-[length:var(--card-headline-font-size)] text-center tracking-[var(--card-headline-letter-spacing)] leading-[var(--card-headline-line-height)] [font-style:var(--card-headline-font-style)]">
                  Freemium
                </h3>

                <p className="font-emphasis-taglines-card font-[number:var(--emphasis-taglines-card-font-weight)] [font-style:var(--emphasis-taglines-card-font-style)] text-text text-[length:var(--emphasis-taglines-card-font-size)] text-center tracking-[var(--emphasis-taglines-card-letter-spacing)] leading-[var(--emphasis-taglines-card-line-height)]">
                  Perfect for small events
                </p>
              </div>

              <Separator className="w-[287px] bg-text/20 mb-8" />

              <div className="flex flex-col items-start gap-6 w-full px-4 mb-10">
                {freemiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 w-full">
                    <div className="flex w-[29px] h-[29px] items-center justify-center bg-[#222228] rounded-[10px]">
                      <CheckIcon className="w-[5px] h-[7px] text-text" />
                    </div>
                    <p className="font-body-text-smaller font-[number:var(--body-text-smaller-font-weight)] text-text text-[length:var(--body-text-smaller-font-size)] tracking-[var(--body-text-smaller-letter-spacing)] leading-[var(--body-text-smaller-line-height)] [font-style:var(--body-text-smaller-font-style)]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="w-[287px] bg-text/20 mb-4" />

              <Button className="px-7 py-3 rounded-[5px] [background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)] hover:opacity-90">
                <span className="font-button-text font-[number:var(--button-text-font-weight)] text-text text-[length:var(--button-text-font-size)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] [font-style:var(--button-text-font-style)]">
                  Create Your Free Event Now
                </span>
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Card */}
          <Card className="flex flex-col w-[391px] items-center bg-[#18181c] rounded-[20px] relative">
            <div className="flex flex-col w-[76px] h-[76px] items-center justify-center absolute -top-11 left-1/2 -translate-x-1/2 bg-[#222228] rounded-[38px]">
              <img
                className="w-[36.84px] h-[38.49px]"
                alt="Enterprise icon"
                src={ee}
              />
            </div>

            <CardContent className="flex flex-col w-full items-center px-0 py-[35px]">
              <div className="flex flex-col items-center gap-2.5 mb-6">
                <h3 className="font-card-headline font-[number:var(--card-headline-font-weight)] text-text text-[length:var(--card-headline-font-size)] text-center tracking-[var(--card-headline-letter-spacing)] leading-[var(--card-headline-line-height)] [font-style:var(--card-headline-font-style)]">
                  Enterprise
                </h3>

                <p className="font-emphasis-taglines-card font-[number:var(--emphasis-taglines-card-font-weight)] [font-style:var(--emphasis-taglines-card-font-style)] text-text text-[length:var(--emphasis-taglines-card-font-size)] text-center tracking-[var(--emphasis-taglines-card-letter-spacing)] leading-[var(--emphasis-taglines-card-line-height)]">
                  For pro organizers who want full control
                </p>
              </div>

              <Separator className="w-[318px] bg-text/20 mb-8" />

              <div className="flex flex-col items-start gap-6 w-full px-4 mb-4">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 w-full">
                    <div className="flex w-[29px] h-[29px] items-center justify-center bg-[#222228] rounded-[10px]">
                      <CheckIcon className="w-[5px] h-[7px] text-text" />
                    </div>
                    <p className="font-body-text-smaller font-[number:var(--body-text-smaller-font-weight)] text-text text-[length:var(--body-text-smaller-font-size)] tracking-[var(--body-text-smaller-letter-spacing)] leading-[var(--body-text-smaller-line-height)] [font-style:var(--body-text-smaller-font-style)]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="w-[287px] bg-text/20 mb-4" />

              <Button className="px-7 py-3 rounded-[5px] [background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)] hover:opacity-90">
                <span className="font-button-text font-[number:var(--button-text-font-weight)] text-text text-[length:var(--button-text-font-size)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] [font-style:var(--button-text-font-style)]">
                  Create Your Free Event Now
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Button className="flex items-center gap-3 px-7 py-3 rounded-[5px] [background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)] hover:opacity-90">
        <span className="font-button-text font-[number:var(--button-text-font-weight)] text-text text-[length:var(--button-text-font-size)] tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] [font-style:var(--button-text-font-style)]">
          Get Custom Pricing
        </span>
        <img className="w-[17.63px] h-[17.63px]" alt="Icon" src="/icon-1.svg" />
      </Button>
    </section>
  );
};
