import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Amplitek — PCR Reagent & Instrument Supplier" },
      {
        name: "description",
        content:
          "Amplitek manufactures and supplies PCR enzymes, master mixes, consumables and thermal cyclers to research and diagnostic laboratories worldwide.",
      },
      { property: "og:title", content: "About Amplitek" },
      { property: "og:description", content: "A molecular biology supplier focused on reproducible amplification." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Manufactured in-house", text: "Enzymes are expressed, purified and QC-released in our own ISO 13485 facility." },
  { title: "Documented performance", text: "Certificates of analysis, activity assays and inhibition data ship with every lot." },
  { title: "Scientists on the phone", text: "Our support team runs PCR daily — expect protocol-level answers, not scripts." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="border-b border-border" style={{ backgroundImage: "var(--gradient-soft)" }}>
          <div className="mx-auto max-w-3xl px-4 py-16">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Reproducible amplification, end to end</h1>
            <p className="mt-4 text-muted-foreground">
              Amplitek was founded in 2012 by a group of molecular biologists tired of inconsistent reagent lots. We now
              manufacture polymerases and master mixes, mould our own consumables and engineer thermal cyclers designed
              around the way laboratories actually work.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl border border-border bg-card p-6">
                <h2 className="font-semibold">{v.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 rounded-2xl border border-border bg-secondary/40 p-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Who we work with</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Academic core facilities, clinical molecular labs, agricultural genotyping services, food-safety testing
                and biotech R&D teams running from a handful of reactions a week to tens of thousands.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-6">
              {[
                ["2012", "Founded"],
                ["ISO 13485", "Quality system"],
                ["40+", "Countries served"],
                ["1,800+", "Labs supplied"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-2xl font-semibold text-primary">{v}</dt>
                  <dd className="text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Talk to our team
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
