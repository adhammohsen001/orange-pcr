import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { products } from "@/data/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Amplitek PCR Supplies" },
      {
        name: "description",
        content:
          "Tell us your throughput and targets and our specialists will quote reagents, consumables and thermal cyclers within 48 hours.",
      },
      { property: "og:title", content: "Request a Quote — Amplitek" },
      { property: "og:description", content: "Quotes for PCR reagents, consumables and instruments within 48 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Request a quote</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Share what you're running and we'll come back with pricing, lead times and protocol recommendations.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form
            className="space-y-5 rounded-2xl border border-border bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast.success("Quote request received — we'll reply within 48 hours.");
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Institution / company" name="org" required />
              <Field label="Country" name="country" required />
            </div>

            <div>
              <label htmlFor="product" className="text-sm font-medium">
                Product of interest
              </label>
              <select
                id="product"
                name="product"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              >
                <option value="">Not sure yet</option>
                {products.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                What are you running?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Targets, reactions per week, current instrument..."
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
            >
              Send request
            </button>
            {sent && (
              <p className="text-sm text-primary">
                Thanks — your request is with our sales team. Online checkout is coming soon.
              </p>
            )}
          </form>

          <aside className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "orders@amplitek.example" },
              { icon: Phone, label: "Phone", value: "+1 (555) 902-7788" },
              { icon: MapPin, label: "Head office", value: "184 Helix Way, Cambridge, MA" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <c.icon className="size-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-xl bg-secondary/50 p-5 text-sm text-muted-foreground">
              Reagent orders ship within 2 business days. Instrument lead time is typically 3-4 weeks including
              installation.
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
