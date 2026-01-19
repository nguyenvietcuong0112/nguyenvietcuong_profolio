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
                Hello! I'm Cuong, a passionate Flutter & Android developer specializing in
                building high-performance mobile applications and intuitive user
                experiences.{" "}
                <span className="font-bold text-white">
                  I focus on crafting clean architectures and production-ready mobile
                  solutions
                </span>
                , from idea to release.
              </p>

              <p className="text-white">
                My work centers around Flutter and Android (Java/Kotlin), with a strong
                emphasis on scalability, performance, and maintainable code. I enjoy
                transforming complex requirements into smooth, reliable mobile apps that
                deliver real value to users.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a lifelong learner and mobile engineer, driven by a passion for
                    building impactful applications and improving development workflows.
                    Through Flutter and native Android, I aim to create robust systems and
                    seamless user experiences that scale.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Cuong, Flutter & Android Developer
                    </cite>
                    <div className="flex items-center gap-2">
                      {/* Optional: replace with your app logo */}
                      <span className="text-white">
                        Building mobile products with Flutter & Android
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
