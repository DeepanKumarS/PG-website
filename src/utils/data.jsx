import {cities} from "../data/listings.jsx"

export function getAllRooms(){
    const rooms = []; 
    for (const city of cities){
        for (const area of city.areas){
            for (const room of area.rooms){
                rooms.push({...room, 
                uid: `${area.id}_${room.id}`,
                cityId: city.id,
                cityName: city.name,
                areaId: area.id,
                areaName: area.name,                   
                });
            }
        }
    }
    return rooms; 
}


export function getStats(){
    const areas = cities.reduce((sum, c)=> sum + c.areas.length, 0);
    const rooms = cities.reduce((sum, c)=>c.areas.reduce((s, a)=> s+a.rooms.length, 0),0);

    return {cities: cities.length, areas, rooms};
}

export function getRoomById(id){
    return getAllRooms().find((room)=>room.uid===id)||null; 
}


export function getSharingTypes() {
  return [...new Set(getAllRooms().map((r) => r.sharingType))];
}



export function formatRent(rent) {
  return `₹${rent.toLocaleString("en-IN")}/mo`;
}