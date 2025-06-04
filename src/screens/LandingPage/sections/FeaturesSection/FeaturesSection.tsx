import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature card data for mapping
const featureCards = [
  {
    icon: "/vector-7.svg",
    title: "DIY & Fully Customizable Setup",
    shortDescription: "Your event, your rules. No development, no delays.",
    features: [
      "Build forms using smart templates or make your own from scratch",
      "Configure ticket types (free, paid, food passes, VIP, etc.)",
      "Create an event microsite in minutes",
      "All drag, drop, click — no coding needed",
    ],
  },
  {
    icon: "/vector-5.svg",
    title: "Smart & Efficient",
    shortDescription:
      "Everything auto-updated. Runs faster than your ops team ever could.",
    features: [
      "QR-based check-ins — no printouts, no drama",
      "Automated emails & WhatsApp flows for confirmations, reminders, and check-ins",
      "RSVP nudges and real-time push alerts",
      "No more follow-up fatigue",
    ],
  },
  {
    icon: "/vector-4.svg",
    title: "Locked & Secured Control",
    shortDescription: "Only your team gets the keys to the kingdom.",
    features: [
      "Assign QR scan access only to verified volunteers",
      "Create crew roles with tiered permissions",
      "External scans redirect to event microsite — not user data",
      "Lockdown-grade privacy for your attendee info",
    ],
  },
  {
    icon: "/vector-6.svg",
    title: "Real-Time Insights & Analytics",
    shortDescription: "Run your event like a data-driven boss.",
    features: [
      "Track registrations and check-ins live",
      "Exportable reports on attendance, ticket types, and more",
      "Capture leads and post-event feedback easily",
      "Turn every event into a growth opportunity",
    ],
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-[73px] w-full">
      <div className="flex flex-col items-start">
        <div className="flex items-center w-full">
          <h2 className="font-headline text-text text-[length:var(--headline-font-size)] font-[number:var(--headline-font-weight)] tracking-[var(--headline-letter-spacing)] leading-[var(--headline-line-height)] [font-style:var(--headline-font-style)]">
            Features
          </h2>
        </div>

        <div className="flex flex-col items-start gap-2.5">
          <h3 className="font-sub-heading text-text text-[length:var(--sub-heading-font-size)] font-[number:var(--sub-heading-font-weight)] tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)]">
            Everything You Need. Nothing, You Don&apos;t.
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-[60px_95px] w-full">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="w-[410px] bg-[#18181c] rounded-[20px] border-none"
          >
            <CardContent className="flex flex-col items-center gap-2.5 px-5 py-[30px]">
              <div className="flex flex-col w-[104px] h-[104px] items-center justify-center gap-2.5 p-[29px] bg-[#222228] rounded-[30px]">
                {card.icon === "/vector-5.svg" ? (
                  <div className="relative w-[44.78px] h-[45.96px]">
                    <div className="w-[45px] h-[46px] overflow-hidden">
                      <div className="relative w-[38px] h-[46px] left-[3px] bg-[url(/vector-5.svg)] bg-[100%_100%]" />
                    </div>
                  </div>
                ) : card.icon === "/vector-4.svg" ? (
                  <div className="relative w-[44.78px] h-[45.96px]">
                    <div className="w-[45px] h-[46px] overflow-hidden">
                      <div className="h-[45px] bg-[url(/vector-4.svg)] bg-[100%_100%]" />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-[45px] h-[46px] bg-[url(${card.icon})] bg-[100%_100%]" />
                )}
              </div>

              <div className="inline-flex items-center justify-center gap-2.5 p-2.5">
                <h4 className="font-card-headline-secondary text-text text-[length:var(--card-headline-secondary-font-size)] font-[number:var(--card-headline-secondary-font-weight)] tracking-[var(--card-headline-secondary-letter-spacing)] leading-[var(--card-headline-secondary-line-height)] text-center [font-style:var(--card-headline-secondary-font-style)]">
                  {card.title}
                </h4>
              </div>

              <div className="inline-flex items-center justify-center gap-2.5 p-2.5">
                <p className="font-body-text-smaller text-text text-[length:var(--body-text-smaller-font-size)] font-[number:var(--body-text-smaller-font-weight)] tracking-[var(--body-text-smaller-letter-spacing)] leading-[var(--body-text-smaller-line-height)] text-center [font-style:var(--body-text-smaller-font-style)]">
                  {card.shortDescription}
                </p>
              </div>

              <div className="inline-flex items-center justify-center gap-2.5 p-2.5">
                <div className="w-[303px] font-body-text-smaller text-text text-[length:var(--body-text-smaller-font-size)] font-[number:var(--body-text-smaller-font-weight)] tracking-[var(--body-text-smaller-letter-spacing)] leading-[var(--body-text-smaller-line-height)] [font-style:var(--body-text-smaller-font-style)]">
                  {card.features.map((feature, idx) => (
                    <React.Fragment key={idx}>
                      {feature}
                      {idx < card.features.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
