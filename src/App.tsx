import { useState } from "react";

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <path d="M2 9L9 2M9 2H3M9 2V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const projects = [
  {
    id: 1,
    title: "Sistema de Automação Residencial",
    tag: "Python · IoT",
    year: "2025",
    description: "Automação com Raspberry Pi e Python para controle de iluminação e sensores via interface web local.",
    bg: "#1A1A1A",
    accent: "#4A7A4A",
  },
  {
    id: 2,
    title: "Portfólio Pessoal",
    tag: "HTML · CSS",
    year: "2025",
    description: "Portfólio desenvolvido com HTML e CSS puro, focado em design limpo e apresentação de projetos.",
    bg: "#161620",
    accent: "#6A5A9A",
  },
  {
    id: 3,
    title: "Análise de Dados com Python",
    tag: "Python · Pandas",
    year: "2024",
    description: "Ferramenta para leitura, limpeza e visualização de dados CSV usando Pandas e Matplotlib.",
    bg: "#1A1610",
    accent: "#8A6A30",
  },
];

const skills = [
  "Python", "HTML", "CSS", "Lógica de Programação",
  "Git & GitHub", "Estrutura de Dados", "Resolução de Problemas",
];

export default function App() {
  const [activeTab, setActiveTab] = useState<"projetos" | "sobre">("projetos");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-full bg-[#0C0C0C] text-[#F0EDE8]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
        style={{ background: "linear-gradient(to bottom, #0C0C0C 60%, transparent)" }}>
        <div>
          <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-[15px] font-semibold text-[#F0EDE8] leading-tight">
            Yuri Matheus
          </p>
          <p className="text-[10px] text-[#555] tracking-widest uppercase mt-0.5">Engenharia de Computação</p>
        </div>

        <div className="flex items-center gap-1 bg-[#1A1A1A] rounded-full px-1.5 py-1.5 border border-[#2A2A2A]">
          {(["projetos", "sobre"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-1.5 rounded-full text-[12px] font-medium capitalize transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#F0EDE8] text-[#0C0C0C]"
                  : "text-[#666] hover:text-[#F0EDE8]"
              }`}
            >
              {tab === "projetos" ? "Projetos" : "Sobre"}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-[12px] text-[#666] hover:text-[#F0EDE8] transition-colors flex items-center gap-1.5">
            LinkedIn <ArrowIcon />
          </a>
          <a href="#" className="text-[12px] text-[#666] hover:text-[#F0EDE8] transition-colors flex items-center gap-1.5">
            GitHub <ArrowIcon />
          </a>
        </div>
      </nav>

      {/* ABA PROJETOS */}
      {activeTab === "projetos" && (
        <div>
          {/* Hero */}
          <section className="min-h-screen flex flex-col justify-center px-8 max-w-5xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A7A4A] animate-pulse" />
              <span className="text-[11px] text-[#555] tracking-widest uppercase">Aberto a oportunidades</span>
            </div>

            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-[clamp(3rem,7vw,6.5rem)] leading-[1.05] text-[#F0EDE8] mb-8"
            >
              Construo sistemas,
              <br />
              soluções &{" "}
              <em className="italic text-[#555]">experiências.</em>
            </h1>

            <div className="flex flex-col gap-1.5 text-[15px] text-[#555]">
              <p>Desenvolvedor em formação · São Luís, Maranhão</p>
              <p>CEUMA · Engenharia de Computação</p>
            </div>

            <div className="mt-16 flex items-center gap-1 text-[13px] text-[#444]">
              <span>Role para ver os projetos</span>
              <svg className="mt-0.5" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 2v8M3 7l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </section>

          {/* Lista de projetos */}
          <section className="px-8 max-w-5xl mx-auto pb-32">
            <div className="border-t border-[#1E1E1E]">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group border-b border-[#1E1E1E] transition-all duration-300 cursor-pointer"
                  style={{ background: hoveredProject === project.id ? project.bg : "transparent" }}
                >
                  <div className="py-10 px-6 flex items-start gap-8">
                    {/* Número */}
                    <span className="text-[11px] text-[#333] mt-1.5 w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full border"
                          style={{
                            color: project.accent,
                            borderColor: project.accent + "40",
                            background: project.accent + "15",
                          }}
                        >
                          {project.tag}
                        </span>
                        <span className="text-[11px] text-[#444]">{project.year}</span>
                      </div>

                      <h2
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-[1.8rem] text-[#F0EDE8] leading-snug mb-2 group-hover:text-white transition-colors"
                      >
                        {project.title}
                      </h2>
                      <p className="text-[13px] text-[#555] max-w-md leading-relaxed">{project.description}</p>
                    </div>

                    {/* Seta */}
                    <div className="shrink-0 mt-2 text-[#333] group-hover:text-[#F0EDE8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      <ArrowIcon />
                    </div>
                  </div>

                  {/* Banner visual */}
                  <div
                    className="mx-6 mb-6 rounded-2xl overflow-hidden transition-all duration-500"
                    style={{
                      height: hoveredProject === project.id ? "180px" : "0px",
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg, ${project.accent}20, ${project.accent}08)` }}
                    >
                      <p
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-[2rem] italic text-[#333]"
                      >
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ABA SOBRE */}
      {activeTab === "sobre" && (
        <div className="pt-36 pb-32 px-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Esquerda */}
            <div>
              <h2
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-[clamp(2.2rem,4vw,3.8rem)] leading-tight text-[#F0EDE8] mb-8"
              >
                Olá, sou o<br />
                <em className="italic text-[#555]">Yuri.</em>
              </h2>

              <div className="flex flex-col gap-4 text-[14px] text-[#666] leading-relaxed">
                <p>
                  Tenho 18 anos e moro em São Luís do Maranhão, Brasil. Curso
                  Engenharia de Computação na Universidade CEUMA e tenho grande
                  interesse pela tecnologia — especialmente programação e
                  desenvolvimento de sistemas.
                </p>
                <p>
                  Tenho experiência com Python, HTML e CSS. Estou sempre em
                  busca de novos aprendizados e formas de evoluir na área que
                  amo e pretendo trabalhar.
                </p>
                <p>
                  Acredito que a tecnologia tem o poder de transformar
                  realidades — e quero construir soluções que realmente importam.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 border-t border-[#1E1E1E] pt-8">
                {[
                  { label: "oyurilima13@gmail.com", href: "mailto:oyurilima13@gmail.com" },
                  { label: "LinkedIn", href: "#" },
                  { label: "GitHub", href: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center justify-between py-2 text-[13px] text-[#555] hover:text-[#F0EDE8] border-b border-[#1A1A1A] hover:border-[#333] transition-all duration-200"
                  >
                    {link.label}
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 transition-all duration-200">
                      <ArrowIcon />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direita */}
            <div className="flex flex-col gap-5">
              {/* Habilidades */}
              <div className="bg-[#111] rounded-2xl p-7 border border-[#1E1E1E]">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[1rem] text-[#F0EDE8] mb-5"
                >
                  Habilidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium text-[#666] bg-[#1A1A1A] border border-[#252525] px-3 py-1.5 rounded-full hover:border-[#444] hover:text-[#F0EDE8] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Formação */}
              <div className="bg-[#111] rounded-2xl p-7 border border-[#1E1E1E]">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[1rem] text-[#F0EDE8] mb-5"
                >
                  Formação
                </h3>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[13px] font-medium text-[#F0EDE8]">Engenharia de Computação</p>
                    <p className="text-[12px] text-[#555] mt-1">Universidade CEUMA · São Luís, MA</p>
                  </div>
                  <span className="text-[10px] text-[#555] bg-[#1A1A1A] border border-[#252525] px-2.5 py-1 rounded-full shrink-0 ml-4">
                    Em andamento
                  </span>
                </div>
              </div>

              {/* Objetivos */}
              <div className="bg-[#111] rounded-2xl p-7 border border-[#1E1E1E]">
                <h3
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-[1rem] text-[#F0EDE8] mb-5"
                >
                  Objetivos
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    "Aprofundar conhecimentos em desenvolvimento back-end",
                    "Contribuir com projetos de código aberto",
                    "Construir soluções de impacto real",
                  ].map((goal) => (
                    <div key={goal} className="flex items-start gap-3">
                      <span className="w-px h-4 bg-[#333] shrink-0 mt-0.5" />
                      <p className="text-[13px] text-[#666] leading-relaxed">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-[#1A1A1A] px-8 py-7 flex items-center justify-between max-w-5xl mx-auto">
        <p className="text-[11px] text-[#333]">© 2026 Yuri Matheus</p>
        <p style={{ fontFamily: "'Playfair Display', serif" }} className="text-[11px] text-[#333] italic">
          Feito com cuidado em São Luís, MA.
        </p>
      </footer>
    </div>
  );
}
