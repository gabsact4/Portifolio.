import Image from "next/image";
import Navbar from "../componentes/navbar";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#2a2929] font-sans">
      <Navbar />

      <main className="relative pt-35 px-9 md:px-16 bg-[#599636] overflow-hidden min-h-screen">
        
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "rgba(27, 27, 27, 0.92)",
            clipPath: "polygon(0 8%, 100% 58%, 100% 100%, 0 100%)",
          }}
        ></div>

        <section className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-white">
            <h1 className="text-9xl md:text-7xl font-bold leading-tight">
              Bem Vindo
            </h1>

            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              Desenvolvedor Backend
            </h1>

            <p className="mt-6 max-w-xl text-lg md:text-xl leading-8 text-zinc-300">
              Desenvolvedor Back-End focado em criar sistemas robustos, APIs eficientes e soluções escaláveis.
              Aqui você encontrará meus projetos, habilidades e experiências voltadas ao desenvolvimento de software
              e arquitetura de aplicações.
            </p>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
              <Image
                className="object-cover w-full h-full"
                src="/urahara.webp"
                alt="Trocar para minha foto logo"
                width={600}
                height={600}
                priority
                />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
