import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { formatPrice, products } from "@/data/products";

export const Route = createFileRoute("/thermal-cyclers")({
  head: () => ({
    meta: [
      { title: "Thermal Cyclers & Real-Time PCR Systems — Amplitek" },
      {
        name: "description",
        content:
          "Gradient, dual-block and five-channel real-time thermal cyclers with ±0.2 °C uniformity, fast ramping and a 3-year warranty.",
      },
      { property: "og:title", content: "Thermal Cyclers & Real-Time PCR Systems — Amplitek" },
      {
        property: "og:description",
        content: "Compare gradient, dual-block and real-time PCR instruments side by side.",
      },
    ],
  }),
  component: CyclersPage,
});

function CyclersPage() {
  const instruments = products.filter((p) => p.category === "instruments");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border" style={{ backgroundImage: "var(--gradient-soft)" }}>
          <div className="mx-auto max-w-6xl px-4 py-16">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Thermal cyclers</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Peltier-driven blocks engineered for tight well-to-well uniformity, fast ramping and years of unattended
              cycling. Every instrument ships with installation, calibration records and a three-year warranty.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-4 py-14">
          {instruments.map((p) => (
            <article key={p.slug} className="grid gap-8 rounded-2xl border border-border bg-card p-6 lg:grid-cols-[1fr_1.2fr]">
              <div className="overflow-hidden rounded-xl bg-secondary/40">
                <img src={p.image} alt={p.name} loading="lazy" width={1200} height={900} className="size-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-tight">{p.name}</h2>
                <p className="mt-1 text-sm text-primary">{p.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>

                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  {p.specs.map((s) => (
                    <div key={s.label} className="rounded-lg bg-secondary/50 px-3 py-2">
                      <dt className="text-xs text-muted-foreground">{s.label}</dt>
                      <dd className="font-medium">{s.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-5 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <span className="text-2xl font-semibold text-primary">{formatPrice(p.price)}</span>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    Full details
                  </Link>
                  <Link
                    to="/contact"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Request a quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
