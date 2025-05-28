import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero1 = ({
  badge = "🔬 CCIS Laboratory",
  heading = "CCIS Laboratory Room Reservation System",
  description = "Your virtual laboratory for innovation and collaboration. Join us to explore, experiment, and create together in a modern digital workspace.",

  buttons = {
    primary: {
      text: "Get Started",
      url: "/login",
    },
    secondary: {
      text: "Learn More",
      url: "#features",
    },
  },

  image = {
    src: "/pup_ccis_logo.png",
    alt: "CCIS Laboratory Logo",
  }
}) => {
  return (
    <section className="px-4 py-24 md:px-6 md:py-32 lg:px-8 lg:py-40">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div
            className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-4xl font-bold text-pretty lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              {description}
            </p>
            <div
              className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-md object-contain bg-background"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
