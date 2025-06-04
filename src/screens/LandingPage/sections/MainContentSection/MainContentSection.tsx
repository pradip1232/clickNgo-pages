import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const MainContentSection = (): JSX.Element => {
  // Navigation items data
  const navItems = ["How It Works", "Features", "Why Us", "Pricing"];

  return (
    <section className="flex flex-col items-center w-full">
      {/* Navigation Bar */}
      <div className="flex w-full max-w-[1198px] items-center justify-between py-6">
        <div className="flex items-start">
          <img
            className="w-[166px] h-[78px]"
            alt="Complete LOGO"
            src="/complete-logo.png"
          />
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-10">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="font-nav-bar-text text-[length:var(--nav-bar-text-font-size)] text-text tracking-[var(--nav-bar-text-letter-spacing)] leading-[var(--nav-bar-text-line-height)] [font-style:var(--nav-bar-text-font-style)]">
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="px-7 py-3 rounded-[5px] [background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)] hover:opacity-90">
          <span className="font-button-text text-[length:var(--button-text-font-size)] text-text tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] [font-style:var(--button-text-font-style)]">
            Create a Free Test Event
          </span>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col w-full items-center relative">
        {/* Background Elements */}
        <div className="relative w-full h-[736px]">
          <img
            className="absolute w-full h-[474px] bottom-0 left-0"
            alt="Subtract"
            src="/subtract.svg"
          />

          <div className="absolute w-[538px] h-[538px] top-0 left-1/2 -translate-x-1/2 rounded-[269px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(34,34,40,1)_0%,rgba(34,34,40,0)_100%)]" />

          <div className="absolute w-24 h-24 top-[333px] right-[214px] rounded-[48px] blur-[10px] [background:radial-gradient(50%_50%_at_43%_-7%,rgba(73,73,85,1)_0%,rgba(20,20,20,1)_100%)]" />

          <div className="absolute w-16 h-16 top-[100px] left-1/2 -translate-x-[41px] rounded-[32px] blur-[10px] [background:radial-gradient(50%_50%_at_43%_-7%,rgba(73,73,85,1)_0%,rgba(20,20,20,1)_100%)]" />

          <div className="absolute w-[130px] h-[130px] top-[430px] left-[125px] rounded-[65px] blur-[15px] [background:radial-gradient(50%_50%_at_43%_-7%,rgba(73,73,85,1)_0%,rgba(20,20,20,1)_100%)]" />
        </div>

        {/* Content Overlay */}
        <div className="flex flex-col max-w-[1077px] items-center gap-[30px] absolute top-[144px]">
          <div className="flex flex-col items-center pt-[60px]">
            <h1 className="w-full font-heading font-[number:var(--heading-font-weight)] text-text text-[length:var(--heading-font-size)] text-center tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
              No More Messy Events. Just
            </h1>

            <img
              className="w-[706px] h-[398px]"
              alt="Click and Go"
              src="/name.png"
            />
          </div>

          <div className="max-w-[762px] text-center">
            <span className="font-semibold italic text-white leading-[0.1px] [font-family:'Playfair_Display',Helvetica] text-2xl">
              Build Out Your Event Experience Faster Than Your Food Delivery.
            </span>

            <span className="[font-family:'Poppins',Helvetica] text-white text-lg leading-7">
              {" "}
            </span>

            <p className="font-body-text text-white text-[length:var(--body-text-font-size)] leading-[var(--body-text-line-height)] [font-style:var(--body-text-font-style)] font-[number:var(--body-text-font-weight)] tracking-[var(--body-text-letter-spacing)]">
              From registration forms to QR-based check-ins, it&apos;s all DIY —
              zero calls, no downloads, no chaos. No middlemen. Just Click. And
              Go.
            </p>
          </div>

          <Button className="px-7 py-3 rounded-[5px] [background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)] hover:opacity-90">
            <span className="font-button-text text-[length:var(--button-text-font-size)] text-text tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] [font-style:var(--button-text-font-style)]">
              Create a Free Test Event
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
