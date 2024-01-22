import { HistoryEvents } from "@/utils/data";
import { RiSwordLine } from "react-icons/ri";
import { MdHistoryEdu } from "react-icons/md";
import { MdSportsScore } from "react-icons/md";
import { HistoricalEventstypes } from "@/types";

const HistoricalEvents = ({ favourites }:any) => {
  console.log(favourites);
  return (
    <div className="flex-[1] max-md:mt-16 gap-4  md:border-l-2   flex    border-gray-200 flex-col h-full">
      <h1 className="flex text-center  mx-2  w-full  underline  font-bold">
        Favourite History Events ({favourites?.length})
      </h1>
      <div className="  flex flex-col gap-4">
        {favourites
          ?.map((id: number) => {
            return HistoryEvents.find((event) => event.id === id);
          })
          .map((e:HistoricalEventstypes) => {
            return (
              <div key={e.id} className="flex gap-2 items-center shadow-md shadow-gray-200 p-2 hover:scale-105 hover:shadow-md cursor-pointer">
                {
                  e.category === "war" ? (
                    <RiSwordLine />
                  ) : e.category === "historicalEvent" ? (
                    <MdHistoryEdu />
                  ) : (
                    <MdSportsScore />
                  )
           
                }
                <h2 className="text-sm w-full whitespace-nowrap" key={e.id}>{e?.title}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HistoricalEvents;
