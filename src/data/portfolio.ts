export type PortfolioCategory =
  | "All"
  | "Brochures & Pamphlets"
  | "Visiting Cards"
  | "Catalogues"
  | "Stickers & Labels"
  | "Posters & Banners"
  | "Books & Reports"
  | "Sticker Bands"
  | "Billbooks"
  | "Letterheads"
  | "Garment Tags"
  | "Food Menus"
  | "Wedding Cards";

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "Brochures & Pamphlets",
  "Visiting Cards",
  "Catalogues",
  "Stickers & Labels",
  "Posters & Banners",
  "Books & Reports",
  "Sticker Bands",
  "Billbooks",
  "Letterheads",
  "Garment Tags",
  "Food Menus",
  "Wedding Cards",
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  /** Path relative to /public */
  thumb: string;
  /** Path relative to /public — full-size for lightbox */
  full: string;
  alt: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "pamphlets-01",
    title: "Tri-fold Brochure",
    category: "Brochures & Pamphlets",
    thumb: "/images/portfolio/thumbs/portfolio_pamphlets_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_pamphlets_full.jpg",
    alt:   "Tri-fold brochure printed on 130 GSM gloss art paper for a lifestyle brand",
  },
  {
    id: "visiting-cards-01",
    title: "Premium Business Cards",
    category: "Visiting Cards",
    thumb: "/images/portfolio/thumbs/portfolio_visiting_cards_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_visiting_cards_full.jpg",
    alt:   "350 GSM business cards with matte lamination and spot-UV logo treatment",
  },
  {
    id: "catalogue-01",
    title: "Product Catalogue",
    category: "Catalogues",
    thumb: "/images/portfolio/thumbs/portfolio_catalogue_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_catalogue_full.jpg",
    alt:   "Saddle-stitched product catalogue for a fashion accessories brand",
  },
  {
    id: "stickers-01",
    title: "Die-cut Product Labels",
    category: "Stickers & Labels",
    thumb: "/images/portfolio/thumbs/portfolio_stickers_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_stickers_full.jpg",
    alt:   "Custom die-cut stickers and product labels for a D2C skincare brand",
  },
  {
    id: "flex-01",
    title: "Flex Banner",
    category: "Posters & Banners",
    thumb: "/images/portfolio/thumbs/portfolio_flex_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_flex_full.jpg",
    alt:   "Large-format flex banner for a retail store promotion",
  },
  {
    id: "bands-01",
    title: "Branded Sticker Bands",
    category: "Sticker Bands",
    thumb: "/images/portfolio/thumbs/portfolio_bands_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_bands_full.jpg",
    alt:   "Custom paper belly bands for product packaging of a D2C brand",
  },
  {
    id: "billbooks-01",
    title: "Duplicate Billbook",
    category: "Billbooks",
    thumb: "/images/portfolio/thumbs/portfolio_billbooks_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_billbooks_full.jpg",
    alt:   "Numbered duplicate invoice billbook with custom branding for a textile supplier",
  },
  {
    id: "letterheads-01",
    title: "Corporate Letterheads",
    category: "Letterheads",
    thumb: "/images/portfolio/thumbs/portfolio_letterheads_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_letterheads_full.jpg",
    alt:   "Official letterhead set printed on 100 GSM bond paper for a corporate client",
  },
  {
    id: "garment-tags-01",
    title: "Apparel Garment Tags",
    category: "Garment Tags",
    thumb: "/images/portfolio/thumbs/portfolio_garment_tags_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_garment_tags_full.jpg",
    alt:   "Custom die-cut garment tags with eyelet and string for an apparel brand",
  },
  {
    id: "menu-01",
    title: "Restaurant Food Menu",
    category: "Food Menus",
    thumb: "/images/portfolio/thumbs/portfolio_menu_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_menu_full.jpg",
    alt:   "Laminated bi-fold food menu for a restaurant with full-color photography",
  },
  {
    id: "wedding-cards-01",
    title: "Wedding Invitation Set",
    category: "Wedding Cards",
    thumb: "/images/portfolio/thumbs/portfolio_wedding_cards_thumb.jpg",
    full:  "/images/portfolio/full/portfolio_wedding_cards_full.jpg",
    alt:   "Premium wedding invitation cards with embossing and gold foil stamping",
  },
];
