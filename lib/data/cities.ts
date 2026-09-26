export type City = {
  slug: string;
  name: string;
  province: string;
  tagline: string;
  population: string;
  image: string;
  /** Attribution for non-Unsplash images (e.g. Wikimedia Commons, CC BY) */
  imageCredit?: { text: string; href: string };
  highlights: string[];
  housingNote: string;
  jobsNote: string;
  transitNote: string;
  healthcareNote: string;
  educationNote: string;
  settlementNote: string;
  thingsToKnow: string[];
  govLinks: { label: string; href: string }[];
};

export const cities: City[] = [
  {
    slug: "toronto",
    name: "Toronto",
    province: "Ontario",
    tagline: "Canada's largest city — diverse, ambitious, and always in motion.",
    population: "3.0M+",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sunset_Toronto_Skyline_Panorama_Crop_from_Snake_Island.jpg/1280px-Sunset_Toronto_Skyline_Panorama_Crop_from_Snake_Island.jpg",
    imageCredit: {
      text: "Photo: Jchmrt, CC BY-SA 4.0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Sunset_Toronto_Skyline_Panorama_Crop_from_Snake_Island.jpg",
    },
    highlights: ["Financial & tech hub", "World-class transit (TTC)", "Global food scene", "Strong newcomer networks"],
    housingNote: "Competitive rental market. Expect higher rents downtown and near subway lines. Consider Midtown, North York, Scarborough, or Etobicoke for value.",
    jobsNote: "Finance, tech, healthcare, education, and hospitality dominate. Many entry and mid-level roles for newcomers with Canadian experience strategies.",
    transitNote: "TTC subway, streetcars, and buses. PRESTO card for GTA transit. Pearson (YYZ) is the main international airport.",
    healthcareNote: "OHIP registration after meeting residency requirements. Walk-in clinics and hospitals across the GTA.",
    educationNote: "U of T, York, TMU, colleges like Seneca and Humber. Strong public school boards.",
    settlementNote: "Settlement agencies across the city offer language, employment, and community programs.",
    thingsToKnow: [
      "Winters are cold; invest in proper outerwear.",
      "Neighbourhoods vary widely — visit before signing a lease.",
      "Job market values Canadian experience; volunteering and networking help.",
      "Norra serves people across Canada, not only Toronto.",
    ],
    govLinks: [
      { label: "City of Toronto", href: "https://www.toronto.ca" },
      { label: "Ontario.ca", href: "https://www.ontario.ca" },
      { label: "Canada.ca", href: "https://www.canada.ca" },
    ],
  },
  {
    slug: "brampton",
    name: "Brampton",
    province: "Ontario",
    tagline: "A vibrant GTA city with strong South Asian and newcomer communities.",
    population: "650K+",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Brampton_ON_Downtown_2022-01-30.jpg/1280px-Brampton_ON_Downtown_2022-01-30.jpg",
    imageCredit: {
      text: "Photo: Milan Suvajac, CC BY-SA 4.0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Brampton_ON_Downtown_2022-01-30.jpg",
    },
    highlights: ["Family-friendly suburbs", "Growing job corridors", "GO Transit access", "Rich cultural communities"],
    housingNote: "More spacious housing than downtown Toronto at generally lower rents. Popular with families.",
    jobsNote: "Logistics, manufacturing, healthcare, retail, and airport-adjacent employers.",
    transitNote: "Brampton Transit + GO trains to Union. Close to Pearson Airport.",
    healthcareNote: "OHIP; William Osler Health System hospitals nearby.",
    educationNote: "Peel District schools; Sheridan College campus nearby.",
    settlementNote: "Active settlement and community organizations serving newcomers.",
    thingsToKnow: [
      "Car ownership is common but transit is improving.",
      "Strong faith and cultural communities.",
      "Commutable to Mississauga and Toronto jobs.",
    ],
    govLinks: [
      { label: "City of Brampton", href: "https://www.brampton.ca" },
      { label: "Ontario.ca", href: "https://www.ontario.ca" },
    ],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    province: "Ontario",
    tagline: "Corporate towers, lakefront parks, and a major airport gateway.",
    population: "720K+",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Burnhamthorpe_Road_Mississauga_City_Centre.jpg",
    imageCredit: {
      text: "Photo: Transportfan70, CC0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Burnhamthorpe_Road_Mississauga_City_Centre.jpg",
    },
    highlights: ["Pearson Airport hub", "Corporate headquarters", "Square One area", "Lakefront trails"],
    housingNote: "Condos near Square One and family homes in established neighbourhoods. Mid-range GTA pricing.",
    jobsNote: "Pharma, logistics, aviation, IT, and corporate offices.",
    transitNote: "MiWay buses + GO. Direct airport access is a major plus.",
    healthcareNote: "Trillium Health Partners; OHIP coverage applies.",
    educationNote: "Peel schools; University of Toronto Mississauga (UTM).",
    settlementNote: "Well-established newcomer services and libraries.",
    thingsToKnow: [
      "Excellent for airport-related work and travel.",
      "Suburban feel with urban amenities.",
    ],
    govLinks: [
      { label: "City of Mississauga", href: "https://www.mississauga.ca" },
      { label: "Ontario.ca", href: "https://www.ontario.ca" },
    ],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    province: "Ontario",
    tagline: "North of Toronto — malls, industry, and growing subway access.",
    population: "330K+",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Vaughan_Metropolitan_Centre_aerial_view_2022.jpg/1280px-Vaughan_Metropolitan_Centre_aerial_view_2022.jpg",
    imageCredit: {
      text: "Photo: Canmenwalker, CC BY 4.0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Vaughan_Metropolitan_Centre_aerial_view_2022.jpg",
    },
    highlights: ["Subway extension", "Industrial parks", "Canada's Wonderland nearby", "Family suburbs"],
    housingNote: "Newer builds and townhomes; pricing reflects GTA demand.",
    jobsNote: "Manufacturing, warehousing, retail, and construction.",
    transitNote: "Yonge-University subway to Vaughan Metropolitan Centre + YRT/Viva.",
    healthcareNote: "Mackenzie Health; OHIP.",
    educationNote: "York Region schools; proximity to York University.",
    settlementNote: "York Region settlement programs available.",
    thingsToKnow: ["Car-friendly city with improving rapid transit.", "Popular with families seeking space."],
    govLinks: [
      { label: "City of Vaughan", href: "https://www.vaughan.ca" },
      { label: "Ontario.ca", href: "https://www.ontario.ca" },
    ],
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    province: "Ontario",
    tagline: "The capital — bilingual, green, and government-centred.",
    population: "1.0M+",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Parliament_Hill_from_the_Ottawa_River.JPG/1280px-Parliament_Hill_from_the_Ottawa_River.JPG",
    imageCredit: {
      text: "Photo: \u00d3\u00f0inn, CC BY-SA 2.5 ca, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Parliament_Hill_from_the_Ottawa_River.JPG",
    },
    highlights: ["Federal government jobs", "Bilingual opportunities", "Tech corridor", "Parks & pathways"],
    housingNote: "More affordable than Toronto/Vancouver. Centretown, Glebe, Kanata, Orleans, and Barrhaven offer different lifestyles.",
    jobsNote: "Public service, tech, education, healthcare, and tourism.",
    transitNote: "OC Transpo LRT and buses. Ottawa International (YOW).",
    healthcareNote: "OHIP; The Ottawa Hospital and community clinics.",
    educationNote: "uOttawa, Carleton, Algonquin College.",
    settlementNote: "Strong francophone and anglophone settlement services.",
    thingsToKnow: [
      "French is a professional asset for many roles.",
      "Winters are cold; summers are lovely for outdoor life.",
    ],
    govLinks: [
      { label: "City of Ottawa", href: "https://ottawa.ca" },
      { label: "Canada.ca", href: "https://www.canada.ca" },
    ],
  },
  {
    slug: "calgary",
    name: "Calgary",
    province: "Alberta",
    tagline: "Prairie energy meets mountain weekends.",
    population: "1.4M+",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Calgary_Skyline_from_Prince%27s_Island_Park.jpg/1280px-Calgary_Skyline_from_Prince%27s_Island_Park.jpg",
    imageCredit: {
      text: "Photo: Tamsintj, CC BY-SA 4.0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Calgary_Skyline_from_Prince%27s_Island_Park.jpg",
    },
    highlights: ["Energy & tech", "Rockies nearby", "No provincial sales tax", "Growing startup scene"],
    housingNote: "Generally more affordable than Toronto/Vancouver. Suburbs and inner-city options.",
    jobsNote: "Energy, tech, construction, logistics, and professional services.",
    transitNote: "CTrain LRT + buses. Calgary International (YYC).",
    healthcareNote: "Alberta Health Care Insurance Plan (AHCIP).",
    educationNote: "University of Calgary, SAIT, MRU.",
    settlementNote: "Immigrant-serving agencies across the city.",
    thingsToKnow: ["Chinooks can warm winter days quickly.", "Outdoor lifestyle is a big draw."],
    govLinks: [
      { label: "City of Calgary", href: "https://www.calgary.ca" },
      { label: "Alberta.ca", href: "https://www.alberta.ca" },
    ],
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    province: "Alberta",
    tagline: "Festival city with a strong public sector and growing tech scene.",
    population: "1.0M+",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edmonton_Skyline_%284232809768%29.jpg/1280px-Edmonton_Skyline_%284232809768%29.jpg",
    imageCredit: {
      text: "Photo: Heidi G, CC BY 2.0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Edmonton_Skyline_(4232809768).jpg",
    },
    highlights: ["Government & education", "Affordable housing", "Festivals year-round", "River valley parks"],
    housingNote: "Among Canada's more affordable major cities for renters and buyers.",
    jobsNote: "Public sector, healthcare, education, energy services, and retail.",
    transitNote: "ETS LRT and buses. Edmonton International (YEG).",
    healthcareNote: "AHCIP; Alberta Health Services facilities.",
    educationNote: "University of Alberta, NAIT, MacEwan.",
    settlementNote: "Well-established settlement agencies.",
    thingsToKnow: ["Cold winters — plan wardrobe and transit carefully.", "Strong arts and festival culture."],
    govLinks: [
      { label: "City of Edmonton", href: "https://www.edmonton.ca" },
      { label: "Alberta.ca", href: "https://www.alberta.ca" },
    ],
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    province: "British Columbia",
    tagline: "Mountains, ocean, and one of Canada's most competitive housing markets.",
    population: "700K+ (metro 2.6M)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Skyline_of_Vancouver%2C_BC.jpg/1280px-Skyline_of_Vancouver%2C_BC.jpg",
    imageCredit: {
      text: "Photo: Quintin Soloviev, CC BY 4.0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Skyline_of_Vancouver,_BC.jpg",
    },
    highlights: ["Pacific gateway", "Film & tech", "Outdoor lifestyle", "Diverse communities"],
    housingNote: "High rents — consider Burnaby, Surrey, Richmond, New Westminster for alternatives.",
    jobsNote: "Tech, film, trade, tourism, healthcare, and education.",
    transitNote: "TransLink SkyTrain, buses, SeaBus. YVR airport.",
    healthcareNote: "MSP (Medical Services Plan) after residency waiting period.",
    educationNote: "UBC, SFU, BCIT, and strong college system.",
    settlementNote: "Extensive settlement and language programs.",
    thingsToKnow: [
      "Milder winters, rainy seasons — pack layers.",
      "Housing competition is intense; start early and stay scam-aware.",
    ],
    govLinks: [
      { label: "City of Vancouver", href: "https://vancouver.ca" },
      { label: "Gov.bc.ca", href: "https://www2.gov.bc.ca" },
    ],
  },
  {
    slug: "montreal",
    name: "Montreal",
    province: "Quebec",
    tagline: "European flair, francophone culture, and creative energy.",
    population: "1.8M+",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Montreal_-_QC_-_Skyline.jpg/1280px-Montreal_-_QC_-_Skyline.jpg",
    imageCredit: {
      text: "Photo: Taxiarchos228, CC BY 3.0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Montreal_-_QC_-_Skyline.jpg",
    },
    highlights: ["Bilingual advantage", "Arts & startups", "Affordable relative to TO/Van", "Metro system"],
    housingNote: "Plateau, Mile End, Griffintown, and suburbs offer varied price points. French lease documents are common.",
    jobsNote: "AI, aerospace, gaming, education, and creative industries. French often required or preferred.",
    transitNote: "STM Metro and buses. Trudeau Airport (YUL).",
    healthcareNote: "RAMQ after meeting Quebec residency rules.",
    educationNote: "McGill, Concordia, UdeM, Polytechnique.",
    settlementNote: "Quebec has distinct immigration and settlement pathways — verify on official sites.",
    thingsToKnow: [
      "French language skills open more doors.",
      "Quebec immigration programs differ from federal pathways.",
      "Norra provides navigation only — not Quebec immigration advice.",
    ],
    govLinks: [
      { label: "Ville de Montréal", href: "https://montreal.ca" },
      { label: "Québec.ca", href: "https://www.quebec.ca" },
    ],
  },
  {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "Manitoba",
    tagline: "Central Canada — welcoming, affordable, and community-focused.",
    population: "750K+",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Winnipeg_skyline_snowy.jpg/1280px-Winnipeg_skyline_snowy.jpg",
    imageCredit: {
      text: "Photo: Quintin Soloviev, CC0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Winnipeg_skyline_snowy.jpg",
    },
    highlights: ["Affordable living", "PNP pathways history", "Cultural diversity", "Arts scene"],
    housingNote: "Among the more affordable major Canadian cities.",
    jobsNote: "Agriculture-related industry, healthcare, manufacturing, and public sector.",
    transitNote: "Winnipeg Transit. Richardson International (YWG).",
    healthcareNote: "Manitoba Health coverage after eligibility requirements.",
    educationNote: "University of Manitoba, University of Winnipeg, Red River College.",
    settlementNote: "Strong settlement sector and newcomer-friendly reputation.",
    thingsToKnow: ["Very cold winters.", "Close-knit communities and lower living costs."],
    govLinks: [
      { label: "City of Winnipeg", href: "https://www.winnipeg.ca" },
      { label: "Manitoba.ca", href: "https://www.gov.mb.ca" },
    ],
  },
  {
    slug: "halifax",
    name: "Halifax",
    province: "Nova Scotia",
    tagline: "Atlantic warmth — ocean air, universities, and a growing newcomer scene.",
    population: "440K+",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Halifax_Waterfront_%2841039142235%29.jpg/1280px-Halifax_Waterfront_%2841039142235%29.jpg",
    imageCredit: {
      text: "Photo: daryl_mitchell, CC BY-SA 2.0, via Wikimedia Commons",
      href: "https://commons.wikimedia.org/wiki/File:Halifax_Waterfront_(41039142235).jpg",
    },
    highlights: ["Ocean lifestyle", "Universities", "Atlantic immigration programs", "Compact downtown"],
    housingNote: "Tightening market but still often below Toronto/Vancouver. Plan ahead for September student demand.",
    jobsNote: "Ocean industries, government, healthcare, education, and growing tech.",
    transitNote: "Halifax Transit. Stanfield International (YHZ).",
    healthcareNote: "MSI (Medical Services Insurance) after eligibility.",
    educationNote: "Dalhousie, Saint Mary's, NSCAD, and community colleges.",
    settlementNote: "ISANS and other agencies support newcomers across Nova Scotia.",
    thingsToKnow: [
      "Atlantic Immigration Program and provincial streams may be relevant — verify on official sites.",
      "Fog and coastal weather are part of the charm.",
    ],
    govLinks: [
      { label: "Halifax.ca", href: "https://www.halifax.ca" },
      { label: "Nova Scotia", href: "https://novascotia.ca" },
    ],
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
