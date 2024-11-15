interface Item {
  id: number;
  text: string;
  image: string;
}

export const gameItems: Record<string, Item[]> = {
  animals: [
    {
      id: 1,
      text: "Lion",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      text: "Eagle",
      image: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      text: "Dolphin",
      image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 4,
      text: "Elephant",
      image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 5,
      text: "Tiger",
      image: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 6,
      text: "Penguin",
      image: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ],
  kitchen: [
    {
      id: 1,
      text: "Coffee Maker",
      image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      text: "Toaster",
      image: "https://images.unsplash.com/photo-1625806786037-2af608423424?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      text: "Blender",
      image: "https://images.unsplash.com/photo-1619847909018-baafab6d1a25?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 4,
      text: "Kettle",
      image: "https://images.unsplash.com/photo-1594213114663-d94db9b17125?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 5,
      text: "Microwave",
      image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 6,
      text: "Mixer",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ],
  house: [
    {
      id: 1,
      text: "Sofa",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      text: "Lamp",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      text: "Clock",
      image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 4,
      text: "Mirror",
      image: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 5,
      text: "Bookshelf",
      image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 6,
      text: "Plant",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ]
};