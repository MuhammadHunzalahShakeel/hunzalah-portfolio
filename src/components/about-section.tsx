import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-16 md:py-24" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
              <Image
                src="/hunzalah2.png?height=600&width=500"
                alt="Hunzalah - UI UX Designer"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                I started my journey with a degree in Computer Science from FAST
                University. While I enjoyed building tech, I found myself more
                curious about how users interact with products and where they
                struggle. That interest in problem-solving and user pain points
                slowly pulled me toward product designing.
              </p>

              <p>
                With a creative mindset and growing curiosity, I began exploring
                design. Over time, it became a clear path. Today, I have 4.5+
                years of experience working with both startups and enterprise
                company, designing meaningful, user-centered digital
                experiences.
              </p>

              <p>
                Outside of work, I love traveling, exploring new ideas, and
                playing cricket. These hobbies keep me inspired and help me
                bring fresh energy and perspective into my design work.
              </p>
            </div>

            <div className="pt-4">
              <a
              href="https://drive.google.com/file/d/1EvYoGZDhBGq3N1mxAlbCzouM7j6VTusQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="cursor-pointer bg-white text-black hover:bg-gray-100 border-white font-medium px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base"
              >
                View Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
