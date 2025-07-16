"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Gamepad2, Users, Video } from "lucide-react";
import { BtnO } from "@/components/ui/btn-o";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const movies = [
  {
    src: "/img/videos/mv1.jpeg",
    title: "Movie Title 1",
    description: "A thrilling journey awaits.",
  },
  {
    src: "/img/videos/mv2.jpeg",
    title: "Movie Title 2",
    description: "Experience an epic adventure.",
  },
  {
    src: "/img/videos/mv3.jpeg",
    title: "Movie Title 3",
    description: "A tale of mystery and suspense.",
  },
];

const gameImages = [
  {
    imgSrc:
      "https://games.easplay.com/_next/image?url=https%3A%2F%2Fadmin.fundam.ng%2Fstorage%2Fgames%2F41%2F1724745195.jpg&w=640&q=75",
    alt: "game carousel images",
  },
  {
    imgSrc:
      "https://games.easplay.com/_next/image?url=https%3A%2F%2Fadmin.fundam.ng%2Fstorage%2Fgames%2F51%2F1724747724.jpg&w=640&q=75",
    alt: "game carousel images",
  },
  {
    imgSrc:
      "https://games.easplay.com/_next/image?url=https%3A%2F%2Fadmin.fundam.ng%2Fstorage%2Fgames%2F59%2F1724748370.jpg&w=640&q=75",
    alt: "game carousel images",
  },
  {
    imgSrc:
      "https://games.easplay.com/_next/image?url=https%3A%2F%2Fadmin.fundam.ng%2Fstorage%2Fgames%2F76%2F1724751245.jpg&w=640&q=75",
    alt: "game carousel images",
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white py-16 px-6 mb-1">
        <div className="container mx-auto text-center">
          {/* Main Services Header */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-10">
            Discover What Easplay Offers
          </h2>

          {/* Services List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {/* Service 1: Games */}
            <div className="bg-white text-black border border-transparent shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl will-change-transform rounded-lg">
              <div className="flex flex-col items-center text-center p-8">
                <Gamepad2 className="text-5xl mb-4 text-black w-12 h-12" />
                <h4 className="text-xl font-semibold mb-2">Play Games</h4>
                <p className="mb-4">
                  Subscribe to play a range of exciting games and tournaments.
                </p>
                <a href="https://games.easplay.com">
                  <Button
                    variant="outline"
                    className="mt-4 border-black text-black hover:bg-black hover:text-white bg-transparent"
                  >
                    Visit Games
                  </Button>
                </a>
              </div>
            </div>

            {/* Service 2: Videos */}
            <div className="bg-white text-black border border-transparent shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl will-change-transform rounded-lg">
              <div className="flex flex-col items-center text-center p-8">
                <Video className="text-5xl mb-4 text-black w-12 h-12" />
                <h4 className="text-xl font-semibold mb-2">Watch Videos</h4>
                <p className="mb-4">
                  Access a wide range of gaming videos, tutorials, and
                  highlights.
                </p>
                <a href="https://videos.easplay.com">
                  <Button
                    variant="outline"
                    className="mt-4 border-black text-black hover:bg-black hover:text-white bg-transparent"
                  >
                    Explore Videos
                  </Button>
                </a>
              </div>
            </div>

            {/* Service 3: Community */}
            <div className="bg-white text-black border border-transparent shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl will-change-transform rounded-lg">
              <div className="flex flex-col items-center text-center p-8">
                <Users className="text-5xl mb-4 text-black w-12 h-12" />
                <h4 className="text-xl font-semibold mb-2">Join Community</h4>
                <p className="mb-4">
                  Connect with fellow gamers, discuss strategies, and build
                  friendships.
                </p>
                <a href="https://videos.easplay.com/">
                  <Button
                    variant="outline"
                    className="mt-4 border-black text-black hover:bg-black hover:text-white bg-transparent"
                  >
                    Join Community
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Attractive Highlights Section */}
          <div className="mb-10 bg-white p-8 rounded-lg shadow-lg">
            <div className="w-[80%] bg-black text-white p-4 rounded-xl mx-auto shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-3xl font-bold mb-4">
                Accumulate Points and Top the Leaderboard!
              </h3>
              <p className="text-md md:text-lg mb-4">
                Engage in games, complete challenges, and earn rewards!
              </p>
              <BtnO
                href="https://games.easplay.com/leaderboard"
                title="View Leaderboard"
              />
            </div>
          </div>

          {/* Most Played Games Carousel */}
          <h4 className="text-2xl font-semibold mb-4">
            Discover Our Most Played Games
          </h4>
          <div className="flex justify-center w-full">
            <div className="w-[90%]">
              <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={2000}
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
              >
                {gameImages.map(({ imgSrc, alt }, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden flex items-center justify-center h-[50vh] bg-black"
                  >
                    <Image
                      loading="lazy"
                      src={imgSrc || "/placeholder.svg"}
                      alt={alt}
                      width={800}
                      height={400}
                      className="w-full h-full object-fill transition-transform duration-300 transform hover:scale-105"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* Play Now Button */}
          <div className="flex justify-center mt-6">
            <BtnO href="https://games.easplay.com" title="Play Now" />
          </div>

          {/* Videos Section */}
          <div className="mt-10 text-center">
            <h4 className="text-3xl font-semibold mb-4 text-white">
              Explore Our Top Movies
            </h4>
            <p className="text-lg mb-8 text-gray-300">
              Enjoy top selections from our movie collection!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {movies.map((movie, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 bg-black"
                >
                  <Image
                    src={movie.src || "/placeholder.svg"}
                    alt={movie.title}
                    width={400}
                    height={350}
                    className="w-full h-[350px] object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="text-center text-white p-4">
                      <p className="text-xl font-semibold">{movie.title}</p>
                      <p className="text-sm text-gray-300">
                        {movie.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <BtnO href="https://videos.easplay.com" title="Watch Now" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
