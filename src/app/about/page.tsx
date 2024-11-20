"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
// import Layout from "../layout";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export default function About() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const members: TeamMember[] = [
        { name: "John Doe", role: "Chef", image: "/images/pug1.jpg" },
        {
          name: "Jane Smith",
          role: "Manager",
          image: "/images/black-pug.jpeg",
        },
        {
          name: "Alice Johnson",
          role: "Server",
          image: "/images/munchkin-cat.jpg",
        },
      ];
      setTeamMembers(members);
    };

    fetchTeamMembers();
  }, []);

  return (
    <>
      <div className="p-2 bg-gray-100">
        <h1 className="text-4xl font-bold text-center my-6 text-amber-700">
          About Us
        </h1>
        <p className="text-lg text-center mb-8">
          At Eleven Cafe Labuan Bajo, our team is dedicated to providing you
          with the best dining experience.
        </p>
        <h1 className="text-2xl font-semibold text-amber-700 text-center">
          Meet Our Team
        </h1>
        <h1 className="text-lg text-center text-gray-500 mb-6">
          We look sassy, but we&#39;re not!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden p-4 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
