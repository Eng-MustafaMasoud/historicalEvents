import dynamic from "next/dynamic";


const MapApp=dynamic(()=>import ("@/components/Mainpage"),{
  ssr:false
}
)
export default function Home() {
  return (
    <div className="">
    <MapApp/>

    </div>
   );
}
