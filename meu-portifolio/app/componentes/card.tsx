import { FaPython, FaJs, FaReact, FaJava, FaNodeJs, FaCss3Alt, FaHtml5, FaAngular, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql } from "react-icons/si";

interface SkillCardProps {
  nome: string;
  Icon: React.ElementType;
}

const skillsPorCategoria = {
  Linguagens: [
    { nome: "Python", Icon: FaPython },
    { nome: "JavaScript", Icon: FaJs },
    { nome: "TypeScript", Icon: SiTypescript },
    { nome: "Java", Icon: FaJava },
    { nome: "Git", Icon: FaGitAlt }, 
  ],
  Frontend: [
    { nome: "HTML", Icon: FaHtml5 },
    { nome: "CSS", Icon: FaCss3Alt },
    { nome: "React", Icon: FaReact },
    { nome: "Angular", Icon: FaAngular },
    { nome: "Tailwind", Icon: SiTailwindcss },
    { nome: "Next Js", Icon: SiNextdotjs },
  ],
  Backend: [
    { nome: "Node Js", Icon: FaNodeJs },
  ],
  "Banco de Dados": [
    { nome: "MySql", Icon: SiMysql },
    { nome: "Mongo DB", Icon: SiMongodb },
  ],
};

function SkillCard({ nome, Icon }: SkillCardProps) {
  return (
    <div className="w-[150px] h-[150px] border-2 border-[#599636] bg-[#1f1f1f] rounded-3xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform duration-300">
      <Icon className="text-white text-5xl mb-3" />
      <h2 className="text-white text-lg font-medium">{nome}</h2>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#20251d] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {Object.entries(skillsPorCategoria).map(([categoria, skills]) => (
          <div key={categoria} className="mb-16 last:mb-0">
            <h2 className="text-3xl font-bold text-white mb-8 text-center border-b-2 border-[#599636] inline-block w-full pb-2">
              {categoria}
            </h2>

            <div className="flex flex-wrap justify-center gap-10">
              {skills.map((skill, index) => (
                <SkillCard key={index} nome={skill.nome} Icon={skill.Icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
