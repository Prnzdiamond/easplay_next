"use client";

import Image from "next/image";
import { Fingerprint } from "lucide-react";
import { BtnO } from "@/components/ui/btn-o";
import { FeatureCard } from "@/components/ui/feature-card";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { featuresData } from "@/data/features-data";
import { contactData } from "@/data/contact-data";
import { useState, useEffect } from "react";

const banners = [
  {
    id: 1,
    title: "Let AI power your product experience!",
    subtitle:
      "Unleash the power of AI to transform your products through tailored gamification for your acquisition and loyalty campaigns.",
    image: "/img/Easplay/1.png",
    buttonText: "Contact Us Now",
    buttonLink: "/contact",
  },
  {
    id: 2,
    title: "Play Hard, Win Easy with EasPlay!",
    subtitle:
      "Unleash endless gaming adventures. Dive into a world of games, rewards, and pure excitement – all in one place.",
    image: "/img/Easplay/11.png",
    buttonText: "Start Playing Now",
    buttonLink: "https://games.easplay.com/subscribe",
  },
  {
    id: 3,
    title: "Play Anytime, Anywhere",
    subtitle:
      "Stream exclusive content anytime, tailored for your lifestyle. Take Gaming with you! Enjoy gaming on the go, anytime, anywhere with our mobile games.",
    image: "/img/banners/xbox1.jpg",
    buttonText: "Discover Top Games",
    buttonLink: "https://games.easplay.com",
  },
  {
    id: 4,
    title: "Level Up Your Rewards!",
    subtitle:
      "Earn points as you play and unlock amazing rewards. How far can you go? Get to the top of the Leaderboard.",
    image: "/img/Easplay/Easplay-4.png",
    buttonText: "Get Rewards",
    buttonLink: "/contact",
  },
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const banner = banners[currentBanner];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex h-[70vh] w-full items-center justify-between bg-black">
        <div
          className="absolute top-0 h-full w-full bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${banner.image})` }}
        />

        <div className="container relative mx-auto flex h-full items-center px-5">
          <div className="w-1/2 space-y-4">
            <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-shadow-lg text-white">
              {banner.title}
            </h1>
            <p className="opacity-100 text-lg md:text-xl lg:text-2xl text-white">
              {banner.subtitle}
            </p>
            <BtnO href={banner.buttonLink} title={banner.buttonText} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white text-black px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4 text-3xl">Discover Our Features</h2>
            <h4 className="text-blue-gray-600 text-xl">
              Explore what makes Easplay the ultimate entertainment platform.
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(
              ({ title, icon: Icon, description, backgroundImage }) => (
                <FeatureCard
                  key={title}
                  title={title}
                  icon={<Icon className="h-10 w-10 text-white" />}
                  description={description}
                  backgroundImage={backgroundImage}
                  className="bg-black text-white shadow-lg"
                />
              )
            )}
          </div>

          <div className="my-12 border-b border-blue-gray-400" />

          {/* Join Community Section */}
          <div className="mt-32 flex flex-wrap items-center justify-center bg-black rounded-lg py-12 text-white">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-800 p-2 text-center shadow-lg">
                <Fingerprint className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 font-extrabold text-2xl">
                Join the Easplay Community
              </h3>
              <p className="mb-8 font-normal text-blue-gray-300 text-lg">
                Experience top-tier gaming and video content with our seamless
                subscription service. Dive into your favorite games and shows
                without any hassle.
                <br />
                <br />
                With Easplay, you get access to exclusive content and features
                tailored just for you.
              </p>
              <BtnO href="" title="Learn More" />
            </div>

            <div className="mx-auto mt-24 flex w-full justify-center md:w-4/12 lg:mt-0">
              <div className="shadow-lg border rounded-lg bg-black transition-transform transform hover:scale-105 p-0">
                <div className="p-0">
                  <Image
                    alt="Easplay Experience"
                    src="/img/Easplay/Gaming_Community.png"
                    width={400}
                    height={300}
                    className="h-full w-full rounded-lg shadow-lg object-cover transition-transform transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Working Section */}
      <section className="relative py-24 px-4 text-black">
        <div className="container mx-auto">
          <h3 className="mb-3 font-extrabold text-2xl text-center">
            Connect with your gaming community and elevate your experience. Join
            us at Easplay.
          </h3>

          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon: Icon, description }) => (
              <FeatureCard
                key={title}
                title={title}
                icon={<Icon className="h-10 w-10 text-white" />}
                description={description}
                className="bg-black text-white shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
