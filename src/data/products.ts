import reagents from "@/assets/reagents.jpg";
import consumables from "@/assets/consumables.jpg";
import cycler from "@/assets/cycler.jpg";

export type Category = "enzymes" | "master-mixes" | "consumables" | "instruments";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  price: number;
  unit: string;
  image: string;
  specs: { label: string; value: string }[];
  description: string;
  highlights: string[];
};

export const categories: { id: Category; name: string; blurb: string }[] = [
  { id: "enzymes", name: "Polymerases & Enzymes", blurb: "Taq, high-fidelity and hot-start enzymes for every amplicon." },
  { id: "master-mixes", name: "Master Mixes", blurb: "2X ready-to-use mixes for endpoint, qPCR and RT-PCR." },
  { id: "consumables", name: "Plates & Consumables", blurb: "Thin-wall tubes, 96-well plates, seals and strips." },
  { id: "instruments", name: "Thermal Cyclers", blurb: "Gradient, high-throughput and real-time instruments." },
];

export const products: Product[] = [
  {
    slug: "taq-dna-polymerase",
    name: "Taq DNA Polymerase",
    category: "enzymes",
    tagline: "Robust, economical amplification up to 5 kb",
    price: 89,
    unit: "500 U",
    image: reagents,
    description:
      "Recombinant Taq DNA polymerase purified from E. coli, supplied with 10X reaction buffer and 25 mM MgCl2. Ideal for routine endpoint PCR, colony screening and genotyping.",
    specs: [
      { label: "Concentration", value: "5 U/µL" },
      { label: "Amplicon length", value: "Up to 5 kb" },
      { label: "Extension rate", value: "1 kb/min" },
      { label: "Storage", value: "-20 °C" },
    ],
    highlights: ["3'-A overhang products for TA cloning", "Glycerol-free format available", "Lot-to-lot activity tested"],
  },
  {
    slug: "hifi-polymerase",
    name: "HiFi Proofreading Polymerase",
    category: "enzymes",
    tagline: "50X fidelity for cloning and NGS library prep",
    price: 179,
    unit: "200 U",
    image: reagents,
    description:
      "Engineered proofreading polymerase with exceptional fidelity and processivity for long or GC-rich templates, delivering blunt-ended products ready for downstream cloning.",
    specs: [
      { label: "Fidelity", value: "50X Taq" },
      { label: "Amplicon length", value: "Up to 20 kb" },
      { label: "Extension rate", value: "15 s/kb" },
      { label: "Storage", value: "-20 °C" },
    ],
    highlights: ["Hot-start activation at 98 °C", "Tolerant of GC-rich templates", "NGS-grade purity"],
  },
  {
    slug: "hot-start-master-mix",
    name: "2X Hot-Start Master Mix",
    category: "master-mixes",
    tagline: "Room-temperature setup, no primer-dimer",
    price: 129,
    unit: "500 rxn",
    image: reagents,
    description:
      "A 2X ready-to-use mix containing hot-start polymerase, dNTPs, MgCl2 and a loading dye. Just add template and primers for reproducible endpoint PCR at scale.",
    specs: [
      { label: "Format", value: "2X, with loading dye" },
      { label: "Reactions", value: "500 x 25 µL" },
      { label: "Setup", value: "Room temperature" },
      { label: "Storage", value: "-20 °C, 25 freeze-thaws" },
    ],
    highlights: ["Direct gel loading", "Suppresses non-specific priming", "Bulk fill sizes on request"],
  },
  {
    slug: "qpcr-sybr-mix",
    name: "qPCR SYBR Green Mix",
    category: "master-mixes",
    tagline: "Wide dynamic range dye-based quantitation",
    price: 149,
    unit: "1000 rxn",
    image: reagents,
    description:
      "Optimised SYBR Green I chemistry with passive reference dye options for accurate relative quantitation across 8 logs of template input.",
    specs: [
      { label: "Chemistry", value: "SYBR Green I" },
      { label: "Reference dye", value: "ROX optional" },
      { label: "Dynamic range", value: "8 logs" },
      { label: "Efficiency", value: "95-105%" },
    ],
    highlights: ["Fast and standard cycling", "Melt-curve validated", "Compatible with all major cyclers"],
  },
  {
    slug: "rt-pcr-one-step",
    name: "One-Step RT-PCR Kit",
    category: "master-mixes",
    tagline: "cDNA synthesis and amplification in one tube",
    price: 199,
    unit: "200 rxn",
    image: reagents,
    description:
      "Thermostable reverse transcriptase paired with hot-start polymerase for single-tube RNA workflows, from total RNA down to 10 pg input.",
    specs: [
      { label: "RT temperature", value: "45-60 °C" },
      { label: "RNA input", value: "10 pg - 1 µg" },
      { label: "Workflow", value: "Single tube" },
      { label: "Storage", value: "-20 °C" },
    ],
    highlights: ["RNase inhibitor included", "Robust with structured RNA", "Validated on viral targets"],
  },
  {
    slug: "96-well-pcr-plates",
    name: "96-Well Thin-Wall PCR Plates",
    category: "consumables",
    tagline: "Uniform wall thickness for even heat transfer",
    price: 96,
    unit: "50 plates",
    image: consumables,
    description:
      "Ultra-clear polypropylene plates moulded to ANSI/SLAS dimensions with a raised rim for reliable sealing and low evaporation during long protocols.",
    specs: [
      { label: "Format", value: "96 x 0.2 mL" },
      { label: "Wall", value: "Thin-wall, 0.2 mm" },
      { label: "Purity", value: "DNase/RNase free" },
      { label: "Compatibility", value: "ANSI/SLAS decks" },
    ],
    highlights: ["Semi- and full-skirt options", "Autoclavable", "Barcode labelling available"],
  },
  {
    slug: "tube-strips-seals",
    name: "0.2 mL Tube Strips & Optical Seals",
    category: "consumables",
    tagline: "Low-evaporation strips for small batch runs",
    price: 64,
    unit: "500 strips",
    image: consumables,
    description:
      "Eight-tube strips with attached or separate domed caps, plus optically clear adhesive seals for real-time PCR applications.",
    specs: [
      { label: "Volume", value: "0.2 mL per tube" },
      { label: "Caps", value: "Domed / flat" },
      { label: "Seal clarity", value: ">95% transmission" },
      { label: "Purity", value: "Certified nucleic-acid free" },
    ],
    highlights: ["Fits all 96-well blocks", "Non-fluorescent resin", "Individually bagged"],
  },
  {
    slug: "gradient-thermal-cycler-96",
    name: "TC-96 Gradient Thermal Cycler",
    category: "instruments",
    tagline: "Peltier gradient block with 6 °C/s ramping",
    price: 6450,
    unit: "instrument",
    image: cycler,
    description:
      "A 96-well gradient cycler with a six-zone Peltier block, adjustable heated lid and a colour touchscreen for protocol editing at the bench.",
    specs: [
      { label: "Block", value: "96 x 0.2 mL" },
      { label: "Gradient", value: "1-30 °C across 6 zones" },
      { label: "Ramp rate", value: "6 °C/s" },
      { label: "Uniformity", value: "±0.2 °C" },
    ],
    highlights: ["7\" capacitive touchscreen", "USB + Ethernet protocol export", "3-year instrument warranty"],
  },
  {
    slug: "dual-block-thermal-cycler",
    name: "TC-Duo Dual-Block Cycler",
    category: "instruments",
    tagline: "Two independent blocks, one footprint",
    price: 9950,
    unit: "instrument",
    image: cycler,
    description:
      "Run two fully independent protocols side by side. Each 48-well block has its own lid, gradient capability and programme queue.",
    specs: [
      { label: "Blocks", value: "2 x 48 x 0.2 mL" },
      { label: "Independence", value: "Fully separate control" },
      { label: "Ramp rate", value: "5 °C/s" },
      { label: "Programmes", value: "500 stored" },
    ],
    highlights: ["Halves bench space", "Per-block audit logs", "Optional 384-well conversion"],
  },
  {
    slug: "realtime-cycler-rt5",
    name: "RT-5 Real-Time PCR System",
    category: "instruments",
    tagline: "Five-channel optics for multiplex qPCR",
    price: 24500,
    unit: "instrument",
    image: cycler,
    description:
      "A five-colour real-time system with LED excitation and photodiode detection, delivering fast 40-cycle runs in under 30 minutes with single-copy sensitivity.",
    specs: [
      { label: "Channels", value: "5 (FAM to Cy5)" },
      { label: "Run time", value: "<30 min / 40 cycles" },
      { label: "Sensitivity", value: "1 copy" },
      { label: "Block", value: "96-well, fast" },
    ],
    highlights: ["Absolute and relative quantitation", "Melt and HRM analysis", "21 CFR Part 11 ready software"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
