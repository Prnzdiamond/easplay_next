import Image from "next/image";
import { BtnO } from "@/components/ui/btn-o";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white py-16 px-4 mb-1">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start lg:pr-10">
            <div className="bg-black p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#F97316]">
                About Easplay
              </h2>
              <p className="text-lg mb-4">
                Easplay is an innovative entertainment platform dedicated to
                providing gamers with a space to play, connect, and thrive. Our
                vision is to create a vibrant community that unites gamers of
                all levels through shared experiences and competitive
                challenges.
              </p>
              <p className="text-lg mb-4">
                We stand out by offering a diverse range of services, including:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Games:</strong> Access a wide array of games, from
                  casual play to competitive tournaments.
                </li>
                <li>
                  <strong>Videos:</strong> Enjoy engaging content, tutorials,
                  and gameplay highlights to enhance your skills.
                </li>
                <li>
                  <strong>Leaderboards:</strong> Compete with other players to
                  climb the ranks and earn rewards.
                </li>
              </ul>
              <p className="text-lg mb-4">
                At Easplay, we are committed to enhancing your gaming journey by
                fostering collaboration and camaraderie within our community.
                Join us and discover a world of entertainment tailored just for
                you!
              </p>
              <BtnO href="" title="Discover More" />
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full flex justify-center mb-8 lg:mb-0">
            <div className="bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 relative">
              <Image
                src="/img/about_img.jpeg"
                alt="About Easplay"
                width={300}
                height={400}
                className="rounded-lg max-w-[300px] lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
