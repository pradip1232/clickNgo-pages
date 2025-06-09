import React from "react";
import { Button } from "../../../../components/ui/button";

import ffl from '../../../../assets/img/name-1.png';
import tt from '../../../../assets/img/Twitter X.webp';
import ii from '../../../../assets/img/Instagram.webp';
import ff from '../../../../assets/img/Facebook.webp';
import li from '../../../../assets/img/LinkedIn.webp';
import MM from '../../../../assets/img/Mail.webp';

export const FooterLinksSection = (): JSX.Element => {
  // Footer links data
  const footerLinks = [
    { id: 1, text: "Terms & Conditions" },
    { id: 2, text: "Privacy Policy" },
    { id: 3, text: "Refund Policy" },
  ];

  // Social media icons data
  const socialIcons = [
    {
      id: 1,
      alt: "Vector",
      src: tt,
      width: "25.69px",
      height: "21.2px",
    },
    {
      id: 2,
      alt: "Vector",
      src: ii,
      width: "29.98px",
      height: "29.99px",
    },
    {
      id: 3,
      alt: "Vector",
      src: ff,
      width: "18.67px",
      height: "34.52px",
    },
    {
      id: 4,
      alt: "Vector",
      src: li,
      width: "29.15px",
      height: "27.89px",
    },
    {
      id: 5,
      alt: "Icon",
      src: MM,
      width: "43.62px",
      height: "37.33px",
    },
  ];

  return (
    <footer className="flex flex-col w-full items-center gap-2.5 relative">
      <div className="flex flex-col items-start gap-2.5 relative">
        <img
          className="relative w-[471.27px] h-[262.58px]"
          alt="Name"
          src={ffl}
        />
      </div>

      <div className="flex items-center gap-9 relative">
        {footerLinks.map((link) => (
          <Button
            key={link.id}
            variant="ghost"
            className="p-2.5 text-white hover:bg-transparent hover:text-white/80"
          >
            <span className="font-nav-bar-text font-[number:var(--nav-bar-text-font-weight)] text-[length:var(--nav-bar-text-font-size)] tracking-[var(--nav-bar-text-letter-spacing)] leading-[var(--nav-bar-text-line-height)] [font-style:var(--nav-bar-text-font-style)]">
              {link.text}
            </span>
          </Button>
        ))}
      </div>

      <div className="flex items-start gap-6 relative">
        {socialIcons.map((icon) => (
          <Button
            key={icon.id}
            variant="outline"
            className="flex items-center justify-center w-[77px] h-[77px] p-3 bg-[#18181c] rounded-2xl border-none hover:bg-[#18181c]/80"
          >
            <img
              className="relative"
              style={{ width: icon.width, height: icon.height }}
              alt={icon.alt}
              src={icon.src}
            />
          </Button>
        ))}
      </div>
    </footer>
  );
};
