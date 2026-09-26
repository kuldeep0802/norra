export type Property = {
  id: string;
  title: string;
  city: string;
  neighbourhood: string;
  type: "studio" | "1bed" | "2bed" | "3bed" | "shared" | "basement";
  furnished: boolean;
  shared: boolean;
  familyFriendly: boolean;
  nearTransit: boolean;
  price: number;
  beds: number;
  baths: number;
  sqft?: number;
  image: string;
  images: string[];
  amenities: string[];
  verified: boolean;
  demo: boolean;
  description: string;
  transitNote: string;
};

export const properties: Property[] = [
  {
    id: "prop-1",
    title: "Bright furnished studio near Yonge-Bloor",
    city: "Toronto",
    neighbourhood: "Yorkville",
    type: "studio",
    furnished: true,
    shared: false,
    familyFriendly: false,
    nearTransit: true,
    price: 2150,
    beds: 0,
    baths: 1,
    sqft: 420,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    ],
    amenities: ["In-suite laundry", "Gym", "Concierge", "Wi-Fi included"],
    verified: false,
    demo: true,
    description: "Demo listing — sunlit studio with modern finishes, ideal for a single professional or student. Steps from Bloor-Yonge Station.",
    transitNote: "2 min walk to Bloor-Yonge subway",
  },
  {
    id: "prop-2",
    title: "2-bed family condo near Square One",
    city: "Mississauga",
    neighbourhood: "City Centre",
    type: "2bed",
    furnished: false,
    shared: false,
    familyFriendly: true,
    nearTransit: true,
    price: 2650,
    beds: 2,
    baths: 2,
    sqft: 890,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
    amenities: ["Parking", "Pool", "Kids play area", "Balcony"],
    verified: false,
    demo: true,
    description: "Demo listing — spacious two-bedroom with lake views on clear days. Close to Square One shopping and MiWay transit.",
    transitNote: "MiWay bus at door; GO nearby",
  },
  {
    id: "prop-3",
    title: "Shared room in heritage home — Plateau",
    city: "Montreal",
    neighbourhood: "Plateau-Mont-Royal",
    type: "shared",
    furnished: true,
    shared: true,
    familyFriendly: false,
    nearTransit: true,
    price: 850,
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    ],
    amenities: ["Furnished", "Utilities included", "Shared kitchen", "Bike storage"],
    verified: false,
    demo: true,
    description: "Demo listing — furnished private room in a shared Plateau flat. Great for students and young professionals. French-friendly household.",
    transitNote: "5 min to Mont-Royal Metro",
  },
  {
    id: "prop-4",
    title: "Modern 1-bed in Kitsilano",
    city: "Vancouver",
    neighbourhood: "Kitsilano",
    type: "1bed",
    furnished: true,
    shared: false,
    familyFriendly: false,
    nearTransit: true,
    price: 2450,
    beds: 1,
    baths: 1,
    sqft: 550,
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=800&q=80",
    ],
    amenities: ["Ocean breeze balcony", "In-suite laundry", "Pet-friendly", "Furnished"],
    verified: false,
    demo: true,
    description: "Demo listing — bright one-bedroom near Kits Beach. Walkable cafés and bus routes to downtown.",
    transitNote: "Bus to downtown in ~20 min",
  },
  {
    id: "prop-5",
    title: "3-bed townhouse in Brampton Meadows",
    city: "Brampton",
    neighbourhood: "Springdale",
    type: "3bed",
    furnished: false,
    shared: false,
    familyFriendly: true,
    nearTransit: false,
    price: 2890,
    beds: 3,
    baths: 2.5,
    sqft: 1450,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    ],
    amenities: ["Garage", "Backyard", "Washer/dryer", "Near schools"],
    verified: false,
    demo: true,
    description: "Demo listing — family townhouse with backyard. Ideal for newcomers settling with children. Car recommended.",
    transitNote: "Brampton Transit ~8 min walk",
  },
  {
    id: "prop-6",
    title: "Downtown Calgary loft with mountain views",
    city: "Calgary",
    neighbourhood: "Eau Claire",
    type: "1bed",
    furnished: true,
    shared: false,
    familyFriendly: false,
    nearTransit: true,
    price: 1750,
    beds: 1,
    baths: 1,
    sqft: 620,
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80",
    ],
    amenities: ["Gym", "Rooftop", "Parking available", "Furnished"],
    verified: false,
    demo: true,
    description: "Demo listing — industrial-chic loft near the Bow River pathway. CTrain access for downtown commuting.",
    transitNote: "CTrain 4 min walk",
  },
  {
    id: "prop-7",
    title: "Basement suite near University of Ottawa",
    city: "Ottawa",
    neighbourhood: "Sandy Hill",
    type: "basement",
    furnished: true,
    shared: false,
    familyFriendly: false,
    nearTransit: true,
    price: 1400,
    beds: 1,
    baths: 1,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
    ],
    amenities: ["Private entrance", "Utilities included", "Desk setup", "Quiet"],
    verified: false,
    demo: true,
    description: "Demo listing — private basement suite perfect for grad students. Walk to campus and ByWard Market.",
    transitNote: "OC Transpo bus on street",
  },
  {
    id: "prop-8",
    title: "Waterfront 2-bed in Halifax",
    city: "Halifax",
    neighbourhood: "Downtown",
    type: "2bed",
    furnished: false,
    shared: false,
    familyFriendly: true,
    nearTransit: true,
    price: 2100,
    beds: 2,
    baths: 1,
    sqft: 780,
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
    ],
    amenities: ["Harbour view", "In-building laundry", "Storage", "Near boardwalk"],
    verified: false,
    demo: true,
    description: "Demo listing — two-bedroom with harbour glimpses. Walkable to downtown employers and ferry.",
    transitNote: "Halifax Transit nearby",
  },
];

export function getPropertyById(id: string) {
  return properties.find((p) => p.id === id);
}
