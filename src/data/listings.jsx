// Amenities shared across rooms. AC rooms also include "AC".
const baseAmenities = [
  "Attached bathroom",
  "High-speed WiFi",
  "Security - CCTV surveillance",
  "Regular housekeeping",
  "Washing machine",
  "Refrigerator",
  "Water heater",
  "RO Water",
  "Terrace",
];
const acAmenities = ["AC", ...baseAmenities];

const images2 = [
  "/2_sharing_room.jpeg",
  
];

const images4 = [
  "/4_sharing_room.jpeg",
  "/4_sharing_cabinet.jpeg",
  "/table_littlemount.jpeg" 
  
]

const images1 = [
  "/thoraipakkam_building.jpeg",
  "/2sharing_thoraipakkam.jpeg",
  "/bed_thoraipakkam.jpeg",
]

export const cities = [
  {
    id: "chennai",
    name: "Chennai",
    image: "/Chennai.png",
    areas: [
      {
        id: "thoraipakkam",
        name: "Thoraipakkam",
        rooms: [
          { id: "room_1", sharing: 2, sharingType: "Two", ac: true, title: "2 Sharing AC Room", rent: 7500, amenities: acAmenities, images: images1, lat: 12.952417931305531, lng: 80.24105774407177, available: true },
          { id: "room_2", sharing: 2, sharingType: "Two", ac: false, title: "2 Sharing Non-AC Room", rent: 6500, amenities: baseAmenities, images: images1, lat: 12.952417931305531, lng: 80.24105774407177, available: true },
          // { id: "room_3", sharing: 3, sharingType: "Three", ac: true, title: "3 Sharing AC Room", rent: 7500, amenities: acAmenities, images: images1, lat: 12.952417931305531, lng: 80.24105774407177, available: true },
          // { id: "room_4", sharing: 3, sharingType: "Three", ac: false, title: "3 Sharing Non-AC Room", rent: 6500, amenities: baseAmenities, images: images1, lat: 12.952417931305531, lng: 80.24105774407177, available: true },
        ],
      },
      {
        id: "little-mount",
        name: "Little Mount",
        rooms: [
          { id: "room_1", sharing: 2, sharingType: "Two", ac: true, title: "2 Sharing AC Room", rent: 7500, amenities: acAmenities, images: images2, lat: 13.017683006454696, lng: 80.22828805968608, available: true },
          { id: "room_2", sharing: 4, sharingType: "Four", ac: true, title: "4 Sharing AC Room", rent: 6500, amenities: [...acAmenities, "Kitchen Utensils"], images: images4, lat: 13.017683006454696, lng: 80.22828805968608, available: true },
        ],
      },
    ],
  },
];
