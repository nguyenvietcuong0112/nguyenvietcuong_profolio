import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Cuong, a <span className="text-cyan-400 font-bold">Mobile Engineer</span> specializing in <span className="text-purple-400 font-bold">Kotlin</span>, <span className="text-red-400 font-bold">Java</span>, and <span className="text-cyan-400 font-bold">Flutter</span>. I have a proven track record of building and scaling high-performance mobile applications reaching <span className="text-cyan-400 font-bold">5M+ downloads</span> across global markets.
              </p>

              <p className="text-white">
                My primary focus lies in Native Android (<span className="text-purple-400 font-semibold">Kotlin & Java</span>) and cross-platform development with <span className="text-cyan-400 font-semibold">Flutter</span>, paired with deep expertise in <span className="font-bold border-b-2 border-blue-500/50">Monetization & Analytics SDK Integration</span>. I've designed and built centralized libraries integrating AdMob, AppLovin, AppsFlyer, and Adjust—optimizing eCPM, ARPDAU, and ROAS through data-driven ad architecture and precise event tracking.
              </p>

              <p className="text-white">
                I am passionate about building products with measurable business impact, transforming technical complexity into smooth 60 FPS mobile user experiences.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Driven by a passion for clean architecture and robust mobile systems.
                    Leveraging Kotlin, Java, and Flutter to create high-performing apps that scale seamlessly to millions of users.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Cuong, Mobile Engineer
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-white">
                        Building mobile products with Kotlin, Java & Flutter
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
