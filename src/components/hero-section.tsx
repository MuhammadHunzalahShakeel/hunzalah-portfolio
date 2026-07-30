import Link from "next/link";

export function HeroSection() {
  return (
    <section className=" px-6 py-16 md:px-12 lg:px-16 md:py-24 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight mb-6 md:mb-8">
          <span className="block">Hey, I&apos;m Hunzalah —</span>
          <span className="block">UI UX & Product Designer</span>
          <span className="block">
            currently at{" "}
            <Link
              href="https://www.cloudlogically.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity decoration-2 underline-offset-4"
            >
              CloudLogically
            </Link>
          </span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg lg:text-xl">
          Previously at{" "}
          <Link
            href="https://asaanretail.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity decoration-1 underline-offset-2"
          >
            Asaan Retail
          </Link>
        </p>
      </div>
    </section>
  );
}
