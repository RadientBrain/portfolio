import { useEffect } from "react";
import { FaLinkedin, FaMedium } from "react-icons/fa";
import productIteration from "./assets/product_iteration.svg";
import dataProcessing from "./assets/data_processing.svg";
import dashboardIllustration from "./assets/dashboard.svg";
import socialNetworking from "./assets/social_networking.svg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SectionHeader from "./components/SectionHeader";
import SkillCard from "./components/SkillCard";
import ProjectCard from "./components/ProjectCard";
import TestimonialCard from "./components/TestimonialCard";
import ExperienceCard from "./components/ExperienceCard";
import {
  profile,
  skills,
  aboutHighlights,
  researchSpotlight,
  experience,
  projects,
  testimonials,
  socialLinks
} from "./data/portfolioData";

const App = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const progress =
        window.scrollY /
        Math.max(document.body.scrollHeight - window.innerHeight, 1);
      document.documentElement.style.setProperty(
        "--scroll",
        `${window.scrollY}`
      );
      document.documentElement.style.setProperty(
        "--scroll-progress",
        progress.toString()
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-ink-900">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] parallax-float" />
      <div className="pointer-events-none absolute right-[-120px] top-[280px] h-[380px] w-[380px] rounded-full bg-accent-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-180px] top-[640px] h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-[140px]" />
      <Navbar />

      <main>
        <section id="home" className="section-padding relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-6 top-10 h-40 w-40 rounded-full border border-brand-500/30" />
            <div className="absolute right-10 top-20 h-48 w-48 rounded-full border border-accent-500/30" />
            <div className="absolute bottom-10 left-1/2 hidden h-32 w-32 -translate-x-1/2 rounded-full border border-ink-900/15 sm:block" />
          </div>
          <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 reveal" data-reveal>
                <span className="rounded-full border border-ink-900/10 bg-canvas-50/80 px-4 py-2">
                  {profile.title}
                </span>
                <span className="rounded-full border border-ink-900/10 bg-canvas-50/80 px-4 py-2">
                  Leadership + Execution
                </span>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold text-brand-500 reveal" data-reveal style={{ "--reveal-delay": "80ms" }}>
                  {profile.name}
                </p>
                <h1
                  className="font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl lg:text-6xl reveal"
                  data-reveal
                  style={{ "--reveal-delay": "140ms" }}
                >
                  {profile.headline}
                </h1>
                <p
                  className="max-w-xl text-lg text-slate-700 reveal"
                  data-reveal
                  style={{ "--reveal-delay": "220ms" }}
                >
                  {profile.subheadline}
                </p>
              </div>
              <div
                className="flex flex-wrap items-center gap-4 reveal"
                data-reveal
                style={{ "--reveal-delay": "300ms" }}
              >
                <a
                  href="#projects"
                  className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  Explore projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-ink-900/20 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:border-ink-900/40"
                >
                  Start a conversation
                </a>
              </div>
              <div
                className="grid gap-4 sm:grid-cols-3 reveal"
                data-reveal
                style={{ "--reveal-delay": "380ms" }}
              >
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-ink-900/10 bg-canvas-50/80 p-4">
                    <p className="text-2xl font-semibold text-ink-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass relative overflow-hidden rounded-3xl p-6 reveal" data-reveal>
                <img
                  src={productIteration}
                  alt=""
                  className="pointer-events-none absolute right-6 top-6 h-36 w-36 object-contain opacity-70"
                  loading="eager"
                  aria-hidden="true"
                />
                <div className="relative space-y-3 pr-16">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    AI Product Blueprint
                  </p>
                  <h3 className="text-lg font-semibold text-ink-900">
                    From zero to production-ready, fast.
                  </h3>
                  <p className="text-sm text-slate-600">
                    Modular systems, reliable infrastructure, and measurable AI outcomes.
                  </p>
                </div>
              </div>
              <div
                className="glass relative overflow-hidden rounded-3xl p-6 reveal"
                data-reveal
                style={{ "--reveal-delay": "160ms" }}
              >
                <div className="absolute right-6 top-6 h-16 w-16 rounded-2xl bg-brand-500/15" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Signature strengths
                </p>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">Leadership that ships</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Strategy, execution, and deep technical ownership across the AI stack.
                </p>
                <div className="mt-5 grid gap-3">
                  {[
                    "System design + architecture reviews",
                    "LLM workflows with measurable outcomes",
                    "Reliability, evals, and safety guardrails"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-canvas-50/80 p-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
                      <p className="text-sm text-slate-600">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="glass rounded-3xl border border-ink-900/10 p-6 reveal"
                data-reveal
                style={{ "--reveal-delay": "240ms" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Availability
                </p>
                <p className="mt-3 text-lg font-semibold text-ink-900">{profile.availability}</p>
                <p className="mt-2 text-sm text-slate-600">
                  Open to leadership roles, architecture reviews, and AI product strategy.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {[
                    "Trustworthy",
                    "Perseverant",
                    "Accountable"
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-ink-900/10 bg-canvas-50/80 px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-padding relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-0 top-12 h-48 w-48 rounded-3xl border border-ink-900/10 bg-canvas-50/40" />
            <div className="absolute right-0 top-28 h-56 w-56 rounded-3xl border border-brand-500/20 bg-brand-500/5" />
            <div className="pattern-grid absolute bottom-0 left-1/2 h-40 w-[70%] -translate-x-1/2 rounded-3xl" />
          </div>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="About"
              title="Engineer-led AI delivery, grounded in research and production scale."
              subtitle="I specialize in full-stack AI systems, recommendation engines, and secure production deployment for enterprise teams."
            />
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-6 text-slate-600">
                <div className="glass rounded-3xl p-6 reveal" data-reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Narrative
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-ink-900">
                    Builder with research depth and operational rigor.
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    I am a senior AI software engineer with experience across
                    recommendation systems, LLM platforms, and cloud infrastructure. My
                    focus is building production-ready AI workflows that stay fast,
                    reliable, and measurable at scale.
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    Recent work includes collaborative filtering systems, AI agents for
                    personalized communications, and cloud-native pipelines serving
                    millions of daily requests.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "Leadership + management",
                      "Technical perseverance",
                      "Trustworthy delivery",
                      "Outcome-driven execution"
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-ink-900/10 bg-canvas-50/80 px-4 py-3 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-3xl border border-accent-500/30 bg-accent-500/5 p-6 reveal" data-reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-500">
                    Research Spotlight
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-ink-900">
                    {researchSpotlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{researchSpotlight.venue}</p>
                  <p className="mt-3 text-sm text-slate-600">
                    {researchSpotlight.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {researchSpotlight.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-canvas-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={researchSpotlight.link}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-500 transition hover:text-accent-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read the publication
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <div className="glass rounded-3xl p-5 reveal" data-reveal>
                  <p className="text-sm font-semibold text-ink-900">Awards + recognitions</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {aboutHighlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass rounded-3xl p-6 reveal" data-reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Core expertise
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {skills.map((skill, index) => (
                      <div
                        key={skill.label}
                        className="reveal"
                        data-reveal
                        style={{ "--reveal-delay": `${index * 60}ms` }}
                      >
                        <SkillCard {...skill} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-3xl border border-ink-900/10 p-6 reveal" data-reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Leadership style
                  </p>
                  <div className="mt-4 space-y-4">
                    {[
                      "Strategic planning with stakeholders",
                      "Mentorship and team enablement",
                      "Process rigor with fast iteration",
                      "Clear communication and accountability"
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
                        <p className="text-sm text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-3xl border border-ink-900/10 p-6 reveal" data-reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Operating cadence
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      "Weekly execution + stakeholder sync",
                      "Monthly roadmap + systems review",
                      "Quarterly outcomes + reliability audit"
                    ].map((item) => (
                      <div key={item} className="rounded-2xl bg-canvas-100 px-4 py-3 text-sm text-slate-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-3xl border border-ink-900/10 p-6 reveal" data-reveal>
                  <img
                    src={dataProcessing}
                    alt="Data processing illustration"
                    className="h-40 w-full object-contain"
                    loading="lazy"
                  />
                  <p className="mt-4 text-sm font-semibold text-ink-900">Research-driven craft</p>
                  <p className="mt-2 text-sm text-slate-600">
                    Blending academic rigor with pragmatic delivery for high-stakes AI systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-padding relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="sheen absolute left-10 top-10 h-64 w-64 rounded-full blur-2xl" />
            <div className="pattern-dots absolute right-0 top-20 h-40 w-40 rounded-3xl" />
          </div>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Experience"
              title="Senior AI engineering across product, infra, and research."
              subtitle="Leadership-minded delivery of AI platforms, evaluation systems, and scalable infrastructure."
            />
            <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
              <div className="space-y-6">
                <div className="glass rounded-3xl p-6 reveal" data-reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Leadership lens
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-ink-900">
                    Trusted to own outcomes, not just tickets.
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    I lead cross-functional delivery, align teams on the why, and
                    remove execution risk through tight technical ownership.
                  </p>
                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    {[
                      "Product vision → system design → launch",
                      "Mentorship, code quality, and operational rigor",
                      "Reliability, observability, and governance"
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-3xl border border-ink-900/10 p-6 reveal" data-reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Delivery reputation
                  </p>
                  <div className="mt-4 space-y-4">
                    {[
                      "Consistent stakeholder trust",
                      "Calm under high-stakes launches",
                      "Bias for clarity and measurable impact"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
                        <p className="text-sm text-slate-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass rounded-3xl border border-ink-900/10 p-6 reveal" data-reveal>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Leadership promise
                  </p>
                  <p className="mt-3 text-sm text-slate-600">
                    I drive clarity, create momentum, and keep teams aligned on
                    outcomes with transparent communication and rigorous engineering
                    practice.
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    {[
                      "Fast turnaround and high responsiveness",
                      "Clear, consistent communication",
                      "Reliable outcomes under pressure",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Ownership",
                      "Reliability",
                      "Trust"
                    ].map((item) => (
                      <span key={item} className="rounded-full bg-canvas-100 px-3 py-2 text-xs font-semibold text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div
                    key={item.company}
                    className="reveal"
                    data-reveal
                    style={{ "--reveal-delay": `${index * 80}ms` }}
                  >
                    <ExperienceCard {...item} index={index + 1} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-padding relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-10 top-16 h-40 w-56 rounded-3xl border border-brand-500/30 bg-canvas-50/70" />
            <div className="absolute right-10 bottom-10 h-52 w-52 rounded-full border border-accent-500/30" />
          </div>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Projects"
              title="Selected builds"
              subtitle="Production systems, research prototypes, and AI tooling shipped across multiple industries."
            />
            <div className="glass mb-6 grid gap-6 rounded-3xl p-6 lg:grid-cols-[0.6fr_0.4fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Impact stories</p>
                <h3 className="mt-3 text-2xl font-semibold text-ink-900">
                  Designed for measurable outcomes, built with scalable architecture.
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  These projects show the kind of end-to-end systems I can build for clients,
                  from data ingestion to AI decisioning and governance.
                </p>
              </div>
              <img
                src={dashboardIllustration}
                alt="Dashboard illustration"
                className="h-44 w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="reveal" data-reveal>
                <ProjectCard project={projects[0]} featured />
              </div>
              <div className="grid gap-6">
                {projects.slice(1, 3).map((project, index) => (
                  <div
                    key={project.name}
                    className="reveal"
                    data-reveal
                    style={{ "--reveal-delay": `${index * 70}ms` }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {projects.slice(3).map((project, index) => (
                <div
                  key={project.name}
                  className="reveal"
                  data-reveal
                  style={{ "--reveal-delay": `${index * 70}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section-padding relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="pattern-grid absolute left-0 top-16 h-40 w-64 rounded-3xl" />
            <div className="absolute right-10 top-20 h-36 w-36 rounded-full border border-brand-500/30" />
          </div>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Testimonials"
              title="Teams I have supported"
              subtitle="Feedback from leaders who needed reliable AI delivery at scale."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((column) => {
                const columnItems = testimonials.filter((_, index) => index % 3 === column);
                return (
                  <div className="v-marquee" key={`column-${column}`}>
                    <div
                      className={`v-marquee-track ${column === 1 ? "v-marquee-reverse" : ""}`}
                      style={{ "--marquee-duration": column === 0 ? "34s" : column === 1 ? "38s" : "36s" }}
                    >
                      {[...columnItems, ...columnItems].map((testimonial, index) => (
                        <div
                          className="reveal"
                          data-reveal
                          style={{ "--reveal-delay": `${index * 60}ms` }}
                          key={`${testimonial.name}-${column}-${index}`}
                        >
                          <TestimonialCard testimonial={testimonial} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="sheen absolute right-0 top-0 h-52 w-64 rounded-3xl blur-2xl" />
            <div className="pattern-dots absolute left-10 bottom-10 h-32 w-32 rounded-3xl" />
          </div>
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Contact"
              title="Let’s connect"
              subtitle="Reach me on LinkedIn or Medium for collaboration, thought leadership, or speaking requests."
            />
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="glass rounded-3xl p-6 reveal" data-reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Direct channels
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink-900">
                  Connect for AI leadership roles, partnerships, or speaking.
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  I share research insights, delivery playbooks, and AI product
                  strategy on Medium, and I respond quickly on LinkedIn.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  {socialLinks.map((link) => (
                    <span key={link.label} className="rounded-full border border-ink-900/10 bg-canvas-50/80 px-4 py-2 text-slate-600">
                      {link.label}
                    </span>
                  ))}
                </div>
                <img
                  src={socialNetworking}
                  alt="Social networking illustration"
                  className="mt-6 h-36 w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="grid gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="glass group flex items-center justify-between rounded-3xl border border-ink-900/10 p-6 transition hover:-translate-y-1 hover:shadow-glow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                        {link.label === "LinkedIn" ? (
                          <FaLinkedin className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <FaMedium className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink-900">{link.label}</p>
                        <p className="text-xs text-slate-500">Open profile</p>
                      </div>
                    </div>
                    <span className="text-lg text-slate-400 transition group-hover:text-ink-900">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
