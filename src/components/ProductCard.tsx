import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary/50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold tracking-tight">{product.name}</h3>
        <p className="mt-1 flex-1 text-sm text-muted-foreground">{product.tagline}</p>
        <div className="mt-4 flex items-baseline justify-between">
          <span className="text-lg font-semibold text-primary">{formatPrice(product.price)}</span>
          <span className="text-xs uppercase tracking-wide text-muted-foreground">{product.unit}</span>
        </div>
      </div>
    </Link>
  );
}
