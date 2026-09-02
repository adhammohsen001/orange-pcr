import { Link } from "@tanstack/react-router";
import { FlaskConical } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <FlaskConical className="size-4" />
            </span>
            <span className="font-semibold">Amplitek</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            PCR reagents, consumables and thermal cyclers for research and diagnostic laboratories.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Catalog</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-primary">All products</Link></li>
            <li><Link to="/thermal-cyclers" className="hover:text-primary">Thermal cyclers</Link></li>
            <li><Link to="/products" search={{ category: "master-mixes" }} className="hover:text-primary">Master mixes</Link></li>
            <li><Link to="/products" search={{ category: "consumables" }} className="hover:text-primary">Consumables</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact & quotes</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Get in touch</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>orders@amplitek.example</li>
            <li>+1 (555) 902-7788</li>
            <li>Mon-Fri, 08:00-18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Amplitek Life Sciences. For research use only.
      </div>
    </footer>
  );
}
