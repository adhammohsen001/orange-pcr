import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, type Category } from "@/data/products";

type ProductSearch = { category?: Category };

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    const valid = categories.map((c) => c.id);
    const category = typeof search.category === "string" && valid.includes(search.category as Category)
      ? (search.category as Category)
      : undefined;
    return category ? { category } : {};
  },
  head: () => ({
    meta: [
      { title: "PCR Products Catalog — Amplitek" },
      {
        name: "description",
        content:
          "Browse polymerases, master mixes, PCR plates and thermal cyclers. Full specifications, pricing and application notes.",
      },
      { property: "og:title", content: "PCR Products Catalog — Amplitek" },
      { property: "og:description", content: "Enzymes, master mixes, consumables and instruments for PCR." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { category } = Route.useSearch();
  const list = category ? products.filter((p) => p.category === category) : products;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-3xl font-semibold tracking-tight">Product catalog</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Reagents, consumables and instruments for endpoint PCR, qPCR and RT-PCR workflows.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            to="/products"
            search={{}}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              category ? "border-border hover:bg-accent" : "border-primary bg-primary text-primary-foreground"
            }`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c.id}
              to="/products"
              search={{ category: c.id }}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                category === c.id ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-accent"
              }`}
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
