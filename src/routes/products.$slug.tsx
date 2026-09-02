import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { categories, formatPrice, getProduct, products } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — Amplitek" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Amplitek` },
        { name: "description", content: product.tagline },
        { property: "og:title", content: `${product.name} — Amplitek` },
        { property: "og:description", content: product.tagline },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-4 py-24 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-primary hover:underline">
          Back to catalog
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const categoryName = categories.find((c) => c.id === product.category)?.name;
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="size-4" /> Catalog
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary/40">
            <img src={product.image} alt={product.name} width={1200} height={900} className="size-full object-cover" />
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-wide text-primary">{categoryName}</span>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">{product.name}</h1>
            <p className="mt-3 text-muted-foreground">{product.description}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-semibold text-primary">{formatPrice(product.price)}</span>
              <span className="text-sm text-muted-foreground">per {product.unit}</span>
            </div>

            <ul className="mt-6 space-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-opacity hover:opacity-90"
              >
                Request a quote
              </Link>
              <a
                href="mailto:orders@amplitek.example"
                className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
              >
                Ask a specialist
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Online checkout is coming soon — orders are currently placed through our sales team.
            </p>

            <div className="mt-10 rounded-xl border border-border">
              <h2 className="border-b border-border px-5 py-3 text-sm font-semibold">Specifications</h2>
              <dl className="divide-y divide-border">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 px-5 py-3 text-sm">
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Related products</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
