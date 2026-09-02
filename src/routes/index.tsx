import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Thermometer, ShieldCheck, Truck, Beaker } from "lucide-react";

import hero from "@/assets/hero-thermal-cycler.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amplitek — PCR Reagents & Thermal Cyclers" },
      {
        name: "description",
        content:
          "Polymerases, master mixes, plates and thermal cyclers for research and diagnostic labs. Validated lot-to-lot, shipped worldwide.",
      },
      { property: "og:title", content: "Amplitek — PCR Reagents & Thermal Cyclers" },
      {
        property: "og:description",
        content: "Everything your PCR workflow needs: enzymes, master mixes, consumables and instruments.",
      },
    ],
  }),
  component: Index,
});

const perks = [
  { icon: ShieldCheck, title: "Lot-tested quality", text: "Every batch is activity- and contamination-tested with a downloadable CoA." },
  { icon: Thermometer, title: "Instruments & service", text: "Cyclers with ±0.2 °C uniformity, installation and 3-year warranty." },
  { icon: Truck, title: "Cold-chain shipping", text: "Validated dry-ice and gel-pack logistics to 40+ countries." },
  { icon: Beaker, title: "Application support", text: "PhD-level scientists help you optimise primers and cycling protocols." },
];

function Index() {
  const featured = products.filter((p) =>
    ["hot-start-master-mix", "hifi-polymerase", "gradient-thermal-cycler-96", "96-well-pcr-plates"].includes(p.slug),
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden" style={{ backgroundImage: "var(--gradient-soft)" }}>
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              For research use only
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              PCR components and thermal cyclers, <span className="text-primary">built for reproducibility</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              From hot-start polymerases and ready-to-use master mixes to gradient and real-time instruments — one supplier
              for the whole amplification workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
              >
                Browse the catalog <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/thermal-cyclers"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
              >
                See thermal cyclers
              </Link>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {[
                ["±0.2 °C", "Block uniformity"],
                ["48 h", "Quote turnaround"],
                ["40+", "Countries served"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-semibold text-primary">{v}</dt>
                  <dd className="text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-lift)]">
            <img src={hero} alt="Thermal cycler on a clean laboratory bench" width={1600} height={1000} className="size-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Shop by category</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.id}
                to="/products"
                search={{ category: c.id }}
                className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <h3 className="font-semibold group-hover:text-primary">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                  View <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured products</h2>
          <Link to="/products" className="text-sm text-primary hover:underline">
            All products
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div
          className="rounded-2xl px-8 py-12 text-center text-primary-foreground"
          style={{ backgroundImage: "var(--gradient-primary)" }}
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">Need bulk pricing or a full lab setup?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm opacity-90">
            Tell us your throughput and targets — we'll put together reagent volumes, consumables and the right instrument.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
          >
            Request a quote <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
