"use client";

import { useState } from "react";
import Image from "next/image";

interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  imagens: string[];
  tecnologias: string[];
}

const projetos: Projeto[] = [
  {
    id: 1,
    nome: "Sistema de Gerenciamento",
    descricao: "Sistema completo para gerenciamento de empresas com dashboard, relatórios e controle de usuários.",
    imagens: ["/projeto1/img1.jpg", "/projeto1/img2.jpg", "/projeto1/img3.jpg"],
    tecnologias: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    nome: "API RESTful",
    descricao: "API robusta com autenticação JWT, documentação Swagger e testes automatizados.",
    imagens: ["/projeto2/img1.jpg", "/projeto2/img2.jpg", "/projeto2/img3.jpg"],
    tecnologias: ["Python", "FastAPI", "PostgreSQL"],
  },
  {
    id: 3,
    nome: "E-commerce Platform",
    descricao: "Plataforma de e-commerce com carrinho de compras, integração de pagamento e painel admin.",
    imagens: ["/projeto3/img1.jpg", "/projeto3/img2.jpg", "/projeto3/img3.jpg"],
    tecnologias: ["Next.js", "Tailwind", "Stripe"],
  },
  {
    id: 4,
    nome: "Dashboard Analytics",
    descricao: "Dashboard interativo com gráficos em tempo real e exportação de dados.",
    imagens: ["/projeto4/img1.jpg", "/projeto4/img2.jpg", "/projeto4/img3.jpg"],
    tecnologias: ["Vue.js", "D3.js", "Firebase"],
  },
  {
    id: 5,
    nome: "App Mobile",
    descricao: "Aplicativo mobile para gestão de tarefas com sincronização em tempo real.",
    imagens: ["/projeto5/img1.jpg", "/projeto5/img2.jpg", "/projeto5/img3.jpg"],
    tecnologias: ["React Native", "Node.js", "Socket.io"],
  },
  {
    id: 6,
    nome: "Chat em Tempo Real",
    descricao: "Plataforma de chat com salas privadas, notificações e envio de arquivos.",
    imagens: ["/projeto6/img1.jpg", "/projeto6/img2.jpg", "/projeto6/img3.jpg"],
    tecnologias: ["Next.js", "WebSocket", "Prisma"],
  },
];

function ProjectImageCarousel({ imagens, nome }: { imagens: string[]; nome: string }) {
  const [imagemAtual, setImagemAtual] = useState(0);

  const proximaImagem = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagemAtual((prev) => (prev + 1) % imagens.length);
  };

  const imagemAnterior = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagemAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="relative w-full h-[200px] group overflow-hidden rounded-t-2xl">
      <Image
        src={imagens[imagemAtual]}
        alt={`${nome} - imagem ${imagemAtual + 1}`}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-105"
      />
          {imagens.length > 1 && (
        <>
          <button
            onClick={imagemAnterior}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Imagem anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={proximaImagem}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Próxima imagem"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {imagens.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setImagemAtual(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === imagemAtual
                    ? "bg-[#62a358] w-4"
                    : "bg-white/60 w-1.5 hover:bg-white/80"
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <section className="py-16 bg-[#20251d]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Meus Projetos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="bg-[#1f1f1f] rounded-2xl overflow-hidden border border-[#62a358]/30 hover:border-[#62a358] transition-all duration-300 hover:shadow-xl hover:shadow-[#62a358]/10 hover:-translate-y-1"
            >
              <ProjectImageCarousel imagens={projeto.imagens} nome={projeto.nome} />
              
              <div className="p-5">
                <h3 className="text-[#62a358] text-xl font-bold mb-2">
                  {projeto.nome}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                  {projeto.descricao}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#62a358]/20 text-[#62a358] text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-[#62a358] text-white rounded-lg text-sm font-medium hover:bg-[#4f8a47] transition-colors">
                    Ver Demo
                  </button>
                  <button className="flex-1 px-4 py-2 border border-[#62a358] text-[#62a358] rounded-lg text-sm font-medium hover:bg-[#62a358]/10 transition-colors">
                    Código
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}