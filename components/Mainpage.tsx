"use client";
import { useState, useEffect } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import HistoricalEvents from "@/components/HistoricalEvents";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { HistoryEvents } from "@/utils/data";
import { FaRegStar, FaStar } from "react-icons/fa";
import { HistoricalEventstypes } from "@/types";

const Mainpage = () => {
  const [activeEvent, setActiveEvent] = useState<HistoricalEventstypes|null|any>(
    null
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [favourites, setFavourites] = useState<number[]>(() => {
    const savedFavorites = localStorage.getItem("favourites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
 
  const icon: Icon = new Icon({
    iconUrl: "location.svg",
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41],
  });

  const positions: [number, number] = [30.0444, 31.2357];
  const handleFav = (eventId: number) => {
    let updatedFavs = favourites.filter((id) => id !== eventId);
    if (!favourites.includes(eventId)) {
      updatedFavs = [...updatedFavs, eventId];
    }
   
    setFavourites(updatedFavs);
    localStorage.setItem("favourites", JSON.stringify(updatedFavs));
  
  };
  return (
    <main className="w-full h-screen flex px-6 max-md:flex-col gap-4 mt-16">
      <MapContainer
        className="w-full h-[100%] relative flex-[3]"
        center={positions}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {HistoryEvents?.filter(
              (event) =>
                !selectedCategory || event.category === selectedCategory
            ).map((events) => (
            <>
            
            
          <Marker key={events.id} position={events.position} icon={icon} eventHandlers={{
            click:()=>setActiveEvent(events)
          }} />
          {
            activeEvent &&

            <Popup position={activeEvent?.position} className="dark:bg-black bg-white text-black dark:text-white rounded-lg">
              <div className=" flex flex-col gap-2">
                <h2 className="font-bold gap-1 text-green-600 flex flex-col w-[fit-content]">
                  {activeEvent.title} <span className="w-1/2 h-[2px] bg-green-400" />{" "}
                </h2>
                <span className="text-justify mt-2 text-gray-500">
                  {activeEvent.description}
                </span>

                <button
                  onClick={() => handleFav(activeEvent.id)}
                  className="mt-4 text-green-600 flex items-center gap-2"
                >
                {
                    favourites.includes(activeEvent.id)?<FaStar/>:<FaRegStar/> 
                }
                  add to Favourites
                </button>
              </div>
            </Popup>
          }
            </>
   
        ))}
      </MapContainer>
      <HistoricalEvents favourites={favourites} />
    </main>
  );
};

export default Mainpage;
