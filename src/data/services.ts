export interface Service {
  id: string;
  name: string;
  description: string;
  /** Lucide icon name (used in the component via dynamic import) */
  iconName: string;
}

export const services: Service[] = [
  {
    id: "brochures-pamphlets",
    name: "Brochures & Pamphlets",
    description:
      "High-GSM tri-fold, bi-fold, and z-fold brochures that make your brand impossible to ignore. Crisp color reproduction and precision cutting for trade shows, retail, and direct mail.",
    iconName: "BookOpen",
  },
  {
    id: "visiting-cards",
    name: "Visiting Cards",
    description:
      "Premium business cards printed on 350–400 GSM stock with matte, gloss, or spot-UV finishes. Leave an impression that matches the quality of your work.",
    iconName: "CreditCard",
  },
  {
    id: "catalogues",
    name: "Catalogues",
    description:
      "Multi-page product catalogues with saddle-stitch or perfect binding. Ideal for seasonal lookbooks, wholesale line-sheets, and brand storytelling at scale.",
    iconName: "BookMarked",
  },
  {
    id: "stickers-labels",
    name: "Stickers & Labels",
    description:
      "Custom die-cut stickers and product labels on self-adhesive stock. Water-resistant options available for packaging, bottles, and outdoor applications.",
    iconName: "Tag",
  },
  {
    id: "posters-banners",
    name: "Posters & Banners",
    description:
      "Large-format flex banners and fine-art quality posters for retail, events, and outdoor advertising. Vibrant inks that hold up in sun and rain.",
    iconName: "Image",
  },
  {
    id: "books-reports",
    name: "Books & Reports",
    description:
      "Annual reports, corporate dossiers, and softcover books with professional binding. Consistent color across long print runs — every page, every copy.",
    iconName: "Library",
  },
  {
    id: "sticker-bands",
    name: "Sticker Bands",
    description:
      "Branded paper bands and belly bands for packaging D2C products, gift boxes, and retail bundles. Clean design, tight tolerances, fast turnaround.",
    iconName: "Layers",
  },
  {
    id: "billbooks",
    name: "Billbooks",
    description:
      "Numbered invoice books, receipt pads, and delivery challans with carbon copies. Available in single, duplicate, or triplicate sets with custom serial numbering.",
    iconName: "FileText",
  },
  {
    id: "letterheads",
    name: "Letterheads",
    description:
      "Official letterheads and envelope sets that reflect your corporate identity. Printed on premium 90–120 GSM stock for a professional, heavyweight feel.",
    iconName: "Mail",
  },
  {
    id: "garment-tags",
    name: "Garment Tags",
    description:
      "Woven-look printed tags for apparel and fashion brands. Custom shapes, eyelet punching, and string attachment available. MOQ-friendly for growing labels.",
    iconName: "Scissors",
  },
  {
    id: "food-menus",
    name: "Food Menus",
    description:
      "Restaurant and café menus with lamination and wipe-clean finishes. Available in single-sheet, bi-fold, or booklet formats — designed to match your interior.",
    iconName: "UtensilsCrossed",
  },
  {
    id: "wedding-cards",
    name: "Wedding Cards",
    description:
      "Luxurious wedding invitations with embossing, foil stamping, and premium card stock. Crafted to set the tone for your celebration before guests even arrive.",
    iconName: "Heart",
  },
];
