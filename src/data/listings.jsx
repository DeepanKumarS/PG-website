// Amenities and images are the same across every room.
const amenities = [
  "AC",
  "Attached bathroom",
  "High-speed WiFi",
  "Security - CCTV surveillance",
  "Food",
  "Regular housekeeping",
  "Washing machine",
  "Refrigerator",
  "Water heater",
  "Parking",
  "RO Water",
  "Terrace",
];

const images = [
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=60",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=60",
];

// The sharing options offered in every area, with their monthly rent.
const sharingOptions = [
  { id: "room_1", sharing: 1, sharingType: "One", title: "Single Sharing Room", rent: 10000 },
  { id: "room_2", sharing: 2, sharingType: "Two", title: "Two Sharing Room", rent: 8500 },
  { id: "room_3", sharing: 3, sharingType: "Three", title: "Three Sharing Room", rent: 7500 },
  { id: "room_4", sharing: 4, sharingType: "Four", title: "Four Sharing Room", rent: 6500 },
];

// Build the room list for an area from the shared sharing options.
function roomsFor(lat, lng) {
  return sharingOptions.map((option) => ({
    ...option,
    amenities,
    images,
    lat,
    lng,
    available: true,
  }));
}

export const cities = [
  {
    id: "chennai",
    name: "Chennai",
    image: "/Chennai.png",
    areas: [
      {
        id: "thoraipakkam",
        name: "Thoraipakkam",
        rooms: roomsFor(12.95246951423535, 80.24108232732772),
      },
      {
        id: "little-mount",
        name: "Little Mount",
        rooms: roomsFor(13.017777484205233, 80.2283132220984),
      },
    ],
  },
];
