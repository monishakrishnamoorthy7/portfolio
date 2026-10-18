import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Mail, FileText, Menu, X, Code2, Sparkles, Trophy, Plus } from "lucide-react";
import { profile, about, snapshot, projects, skills, experience, achievements, type Project } from "@/data/portfolio";
import { Reveal, SectionHeading, Magnetic, Tilt, Particles } from "./fx";

const nav = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

function LinkBtn({ href, children, variant = "ghost", placeholder }: { href: string; children: ReactNode; variant?: "primary" | "ghost"; placeholder?: string }) {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all";
  const styles = variant === "primary"
    ? "bg-gradient-brand text-primary-foreground shadow-glow hover:brightness-110"
    : "glass text-foreground hover:border-primary/60";
  if (!href) {
    return (
      <span title={placeholder ?? "Coming soon"} aria-disabled className={`${base} glass cursor-not-allowed text-muted-foreground opacity-60`}>
        {children}<span className="font-mono text-[10px] uppercase tracking-wider">soon</span>
      </span>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-bold"><span className="text-gradient">MK</span><span className="text-muted-foreground">.</span></a>
        <nav aria-label="Main" className="glass hidden rounded-full p-1 md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {active === n.id && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-secondary" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
              <span className={`relative ${active === n.id ? "text-foreground" : ""}`}>{n.label}</span>
            </a>
          ))}
        </nav>
        <div className="hidden md:block"><LinkBtn href={profile.links.linkedin}>Hire me <ArrowUpRight className="h-4 w-4" /></LinkBtn></div>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="glass rounded-full p-3 md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass mx-5 mt-3 rounded-2xl p-3 md:hidden">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-display text-lg hover:bg-secondary">{n.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Rotator() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((v) => (v + 1) % profile.rotating.length), 2400); return () => clearInterval(t); }, []);
  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span key={i} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="text-gradient">
          {profile.rotating[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function CodeOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden>
      <div className="absolute inset-8 animate-spin-slow rounded-full border border-dashed border-primary/30" />
      <div className="absolute inset-20 animate-spin-slow rounded-full border border-accent/20 [animation-direction:reverse]" />
      <div className="absolute inset-1/4 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 30, rotate: -4 }} animate={{ opacity: 1, y: 0, rotate: -4 }} transition={{ delay: 1.8, duration: 0.9 }} className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2">
        <div className="glass animate-float rounded-2xl p-5 font-mono text-xs leading-6 shadow-glow">
          <div className="mb-3 flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-destructive/70" /><span className="h-2.5 w-2.5 rounded-full bg-accent/70" /><span className="h-2.5 w-2.5 rounded-full bg-primary/70" /></div>
          <p><span className="text-primary">const</span> monisha = {"{"}</p>
          <p className="pl-4">role: <span className="text-accent">"CSE Student"</span>,</p>
          <p className="pl-4">builds: [<span className="text-accent">"web"</span>, <span className="text-accent">"AI"</span>],</p>
          <p className="pl-4">openTo: <span className="text-accent">"internships"</span>,</p>
          <p>{"}"};</p>
        </div>
      </motion.div>
      {["React", "Python", "RAG", "Java"].map((t, k) => (
        <motion.span key={t} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2 + k * 0.15 }}
          className="glass animate-float absolute rounded-full px-3 py-1 font-mono text-xs text-muted-foreground"
          style={{ top: ["8%", "20%", "78%", "70%"][k], left: ["15%", "78%", "10%", "75%"][k], animationDelay: `${k * 0.8}s` }}>{t}</motion.span>
      ))}
    </div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const words = ["Hi,", "I'm", `${profile.name}.`];
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -left-40 top-20 h-[30rem] w-[30rem] animate-blob rounded-full bg-violet/25 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] animate-blob rounded-full bg-cyan/15 blur-[120px] [animation-delay:-6s]" />
      <Particles />
      <motion.div style={{ y }} className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-75" /><span className="h-2 w-2 rounded-full bg-accent" /></span>
            CSE Student · Open to Opportunities
          </motion.div>
          <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            {words.map((w, k) => (
              <span key={k} className="inline-block overflow-hidden whitespace-nowrap pb-1 align-bottom">
                <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: 1.4 + k * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>{w}&nbsp;</motion.span>
              </span>
            ))}
            <br /><Rotator />
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.9 }} className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.1 }} className="mt-10 flex flex-wrap gap-4">
            <Magnetic><LinkBtn href="#work" variant="primary">Explore My Work <ArrowRight className="h-4 w-4" /></LinkBtn></Magnetic>
            <Magnetic><LinkBtn href="#contact">Let's Connect</LinkBtn></Magnetic>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }} className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span>{profile.college}</span><span className="text-primary">/</span><span>{profile.role}</span>
          </motion.div>
        </div>
        <div className="hidden md:block"><CodeOrb /></div>
      </motion.div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-32">
      <SectionHeading eyebrow="01 — About" title={<>Curious engineer, <span className="text-gradient">practical builder.</span></>} />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="text-xl leading-relaxed text-muted-foreground">
            I'm a Computer Science and Engineering student at {profile.college}, drawn to <span className="text-foreground">full-stack development</span>, <span className="text-foreground">AI-powered applications</span> and the craft of turning messy problems into products people actually use.
          </p>
        </Reveal>
        <div className="relative space-y-4 border-l border-border pl-8">
          {about.map((a, k) => (
            <Reveal key={a.k} delay={k * 0.1} className="relative">
              <span className="absolute -left-[37px] top-6 h-3 w-3 rounded-full bg-gradient-brand shadow-glow" />
              <div className="glass glow-border rounded-2xl p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">{a.k}</p>
                <h3 className="mt-1 text-xl font-semibold">{a.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {snapshot.map((s, k) => (
          <Reveal key={s.label} delay={k * 0.08}>
            <Tilt className="glass glow-border h-full rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
              <p className="mt-4 font-display text-xl font-semibold">{s.value}</p>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <Reveal>
      <Tilt className="glass glow-border group relative overflow-hidden rounded-3xl p-8 md:p-12" style={{ ["--accent-color" as string]: p.accent }}>
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(500px circle at var(--mx) var(--my), color-mix(in oklab, ${p.accent} 18%, transparent), transparent 60%)` }} />
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest">
              <span style={{ color: p.accent }}>Project 0{index + 1}</span>
              <span className="text-muted-foreground">{p.category}</span>
              <span className="rounded-full border px-2.5 py-0.5" style={{ borderColor: p.accent, color: p.accent }}>{p.status}</span>
            </div>
            <h3 className="mt-4 text-5xl font-bold md:text-6xl">{p.name}</h3>
            <p className="mt-4 text-lg text-muted-foreground">{p.concept}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div><p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Problem</p><p className="mt-2 text-sm">{p.problem}</p></div>
              <div><p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Solution</p><p className="mt-2 text-sm">{p.solution}</p></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {p.stack.map((s) => <span key={s} className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">{s}</span>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkBtn href={p.github}><Github className="h-4 w-4" /> GitHub</LinkBtn>
              <LinkBtn href={p.demo}>Live Demo</LinkBtn>
              <LinkBtn href={p.caseStudy}>Case Study</LinkBtn>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border bg-background/60 p-5">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">Architecture</p>
              <div className="space-y-2">
                {p.architecture.map((a, k) => (
                  <motion.div key={a} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + k * 0.12 }} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs" style={{ background: `color-mix(in oklab, ${p.accent} 20%, transparent)`, color: p.accent }}>{k + 1}</span>
                    <span className="text-sm">{a}</span>
                    {k < p.architecture.length - 1 && <span className="ml-auto h-px flex-1 bg-border" />}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Planned features</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {p.features.map((f) => <li key={f} className="flex gap-2"><span style={{ color: p.accent }}>▹</span>{f}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </Tilt>
    </Reveal>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-32">
      <SectionHeading eyebrow="02 — Featured work" title={<>Things I'm <span className="text-gradient">building.</span></>} />
      <div className="space-y-10">{projects.map((p, k) => <ProjectCard key={p.id} p={p} index={k} />)}</div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-32">
      <SectionHeading eyebrow="03 — Tech stack" title={<>Tools I can <span className="text-gradient">talk shop about.</span></>} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, k) => (
          <Reveal key={g.group} delay={k * 0.06}>
            <div className="glass glow-border h-full rounded-2xl p-6">
              <div className="flex items-center gap-2"><Code2 className="h-4 w-4 text-accent" /><h3 className="font-semibold">{g.group}</h3></div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <motion.span key={s} whileHover={{ y: -3, scale: 1.05 }} className="rounded-lg border bg-background/50 px-3 py-1.5 text-sm transition-colors hover:border-primary/60 hover:text-primary">{s}</motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Placeholder({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-dashed p-6 text-sm text-muted-foreground">
      <Plus className="h-4 w-4" />{text}
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-32">
      <SectionHeading eyebrow="04 — Journey" title={<>Experience, wins & <span className="text-gradient">profiles.</span></>} />
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold"><Sparkles className="h-5 w-5 text-primary" />Experience & certifications</h3>
          <div className="space-y-4 border-l border-border pl-6">
            {experience.map((e) => (
              <Reveal key={e.title} className="relative">
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-primary" />
                <p className="font-mono text-xs text-accent">{e.date}</p>
                <h4 className="mt-1 font-semibold">{e.title}</h4>
                <p className="text-sm text-muted-foreground">{e.org} — {e.detail}</p>
              </Reveal>
            ))}
            <Placeholder text="Internships, training & certifications will appear here once added." />
          </div>
        </div>
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold"><Trophy className="h-5 w-5 text-accent" />Achievements</h3>
          {achievements.length ? (
            <div className="space-y-3">{achievements.map((a) => <div key={a.title} className="glass rounded-2xl p-5"><p className="font-mono text-xs text-accent">{a.kind}</p><h4 className="font-semibold">{a.title}</h4><p className="text-sm text-muted-foreground">{a.detail}</p></div>)}</div>
          ) : <Placeholder text="Hackathons, coding milestones & academic wins — coming soon." />}
          <h3 className="mb-6 mt-12 text-xl font-semibold">Coding profiles</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {[{ n: "GitHub", h: profile.links.github, i: Github }, { n: "LinkedIn", h: profile.links.linkedin, i: Linkedin }, { n: "LeetCode", h: profile.links.leetcode, i: Code2 }].map(({ n, h, i: Icon }) => (
              h ? (
                <a key={n} href={h} target="_blank" rel="noreferrer" className="glass glow-border group flex items-center justify-between rounded-2xl p-5">
                  <span className="flex items-center gap-3"><Icon className="h-5 w-5" />{n}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              ) : <Placeholder key={n} text={`${n} — link coming soon`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const l = profile.links;
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-40">
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-violet/20 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal><p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent">05 — Contact</p></Reveal>
        <Reveal delay={0.1}><h2 className="text-5xl font-bold md:text-7xl">Have an interesting <span className="text-gradient">problem to solve?</span></h2></Reveal>
        <Reveal delay={0.2}><p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">I'm always interested in building useful products, learning new technologies and collaborating on meaningful ideas.</p></Reveal>
        <Reveal delay={0.3} className="mt-12 flex flex-wrap justify-center gap-4">
          <Magnetic><LinkBtn href={l.email ? `mailto:${l.email}` : ""} variant="primary"><Mail className="h-4 w-4" /> Email</LinkBtn></Magnetic>
          <Magnetic><LinkBtn href={l.linkedin}><Linkedin className="h-4 w-4" /> LinkedIn</LinkBtn></Magnetic>
          <Magnetic><LinkBtn href={l.github}><Github className="h-4 w-4" /> GitHub</LinkBtn></Magnetic>
          <Magnetic><LinkBtn href={l.resume} placeholder="Resume coming soon"><FileText className="h-4 w-4" /> Resume</LinkBtn></Magnetic>
        </Reveal>
      </div>
      <footer className="relative mx-auto mt-32 flex max-w-6xl flex-wrap justify-between gap-4 border-t pt-8 font-mono text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.location}</span>
      </footer>
    </section>
  );
}
