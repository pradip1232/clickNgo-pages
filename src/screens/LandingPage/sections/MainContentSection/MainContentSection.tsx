import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

import logo from '../../../../assets/img/nav bar logo.webp';
import hh from '../../../../assets/img/hero section background.webp';

import namee from '../../../../assets/img/name.png';

const navItems = ["How It Works", "Features", "Why Us", "Pricing"];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full">
      {/* Navigation Bar */}
      <div className="flex w-full max-w-[1198px] items-center justify-between py-6">
        <div className="flex items-start">
          <img src={logo} alt="Complete LOGO" className="w-[166px] h-[78px]" />
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

        <GradientButton label="Create a Free Test Event" />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col w-full items-center relative">
        {/* Background Layer */}
        <div className="relative w-full h-[736px]">
          <img
            src={hh}
            alt="Background"
            className="absolute w-full h-[474px] bottom-0 left-0"
          />

          <div className="absolute w-[538px] h-[538px] top-0 left-1/2 -translate-x-1/2 rounded-full [background:radial-gradient(50%_50%_at_50%_50%,rgba(34,34,40,1)_0%,rgba(34,34,40,0)_100%)]" />

          <div className="absolute w-24 h-24 top-[333px] right-[214px] rounded-[48px] blur-[10px] [background:radial-gradient(50%_50%_at_43%_-7%,rgba(73,73,85,1)_0%,rgba(20,20,20,1)_100%)]" />

          <div className="absolute w-16 h-16 top-[100px] left-1/2 -translate-x-[41px] rounded-[32px] blur-[10px] [background:radial-gradient(50%_50%_at_43%_-7%,rgba(73,73,85,1)_0%,rgba(20,20,20,1)_100%)]" />

          <div className="absolute w-[130px] h-[130px] top-[430px] left-[125px] rounded-[65px] blur-[15px] [background:radial-gradient(50%_50%_at_43%_-7%,rgba(73,73,85,1)_0%,rgba(20,20,20,1)_100%)]" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col max-w-[1077px] items-center gap-[30px] absolute top-[144px]">
          <div className="flex flex-col items-center pt-[60px]">
            <h1 className="w-full font-heading font-[number:var(--heading-font-weight)] text-text text-[length:var(--heading-font-size)] text-center tracking-[var(--heading-letter-spacing)] leading-[var(--heading-line-height)] [font-style:var(--heading-font-style)]">
              No More Messy Events. Just
            </h1>

            <img
              src={namee}
              alt="Click and Go"
              className="w-[706px] h-[398px]"
            />
          </div>

          <div className="max-w-[762px] text-center">
            <p className="font-semibold italic text-white text-2xl leading-[0.1px] [font-family:'Playfair_Display',Helvetica]">
              Build Out Your Event Experience Faster Than Your Food Delivery.
            </p>
            <p className="mt-4 font-body-text text-white text-[length:var(--body-text-font-size)] leading-[var(--body-text-line-height)] tracking-[var(--body-text-letter-spacing)] font-[number:var(--body-text-font-weight)] [font-style:var(--body-text-font-style)]">
              From registration forms to QR-based check-ins, it&apos;s all DIY —
              zero calls, no downloads, no chaos. No middlemen. Just Click. And
              Go.
            </p>
          </div>

          <GradientButton label="Create a Free Test Event" />
        </div>
      </div>
    </section>
  );
};

// Reusable Gradient Button
const GradientButton = ({ label }: { label: string }) => (
  <Button className="px-7 py-3 rounded-[5px] [background:linear-gradient(132deg,rgba(255,152,152,1)_0%,rgba(153,24,196,0.53)_100%)] hover:opacity-90">
    <span className="font-button-text text-[length:var(--button-text-font-size)] text-text tracking-[var(--button-text-letter-spacing)] leading-[var(--button-text-line-height)] [font-style:var(--button-text-font-style)]">
      {label}
    </span>
  </Button>
);
