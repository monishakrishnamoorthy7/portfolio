import { createFileRoute } from "@tanstack/react-router";
import { Cursor, Loader } from "@/components/portfolio/fx";
import { Nav, Hero, About, Work, Stack, Journey, Contact } from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monisha K — CSE Student, Developer & AI Builder" },
      { name: "description", content: "Portfolio of Monisha K, B.E. CSE student at Chennai Institute of Technology building full-stack and AI-powered applications." },
      { property: "og:title", content: "Monisha K — Developer & AI Builder" },
      { property: "og:description", content: "Full-stack and AI projects by Monisha K, open to software engineering internships." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-clip">
      <Loader />
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Work />
      <Stack />
      <Journey />
      <Contact />
    </main>
  );
}
