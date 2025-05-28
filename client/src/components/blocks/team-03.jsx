import { Button } from "@/components/ui/button";
import { DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Jhon Roy Ilao",
    title: "Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.",
    imageUrl: "/snoopy.jpeg"
  },
  {
    name: "John Eric Samillano",
    title: "Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do",
    imageUrl: "/snoopy.jpeg"
  },
  {
    name: "Luis Miguel Dela Cruz",
    title: "Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do",
    imageUrl: "/snoopy.jpeg"
  },
 
];

const Team03Page = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center py-8 sm:py-16 px-6 lg:px-8 max-w-screen-xl mx-auto gap-14">
      <div className="sm:max-w-sm lg:max-w-xs">
        <b className="text-muted-foreground font-semibold">Our team</b>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
          Meet Our Team
        </h2>
        <p className="mt-4 text-base sm:text-lg">
          Our dedicated team of professionals ensures smooth operation of CCIS laboratory facilities.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row-reverse sm:justify-end gap-3">
          <Button size="lg" className="bg-[#FF2E63] hover:bg-[#FF2E63]/90">Contact Us</Button>
          <Button size="lg" variant="outline">About Us</Button>
        </div>
      </div>
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-12">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex items-start md:flex-col gap-4">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover bg-secondary"
            />
            <div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              <div className="mt-4 flex items-center gap-2.5">
                <Button className="bg-accent hover:bg-accent shadow-none" size="icon" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className="stroke-muted-foreground" />
                  </a>
                </Button>
                <Button className="bg-accent hover:bg-accent shadow-none" size="icon" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <DribbbleIcon className="stroke-muted-foreground" />
                  </a>
                </Button>
                <Button className="bg-accent hover:bg-accent shadow-none" size="icon" asChild>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <TwitchIcon className="stroke-muted-foreground" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team03Page;
