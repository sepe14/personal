import DramaList from "@/components/dramalist";
import Welcome from "@/components/welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row h-screen">
      <Welcome className="basis-3/4" />
      <DramaList className="basis-1/4" />
    </main>
  );
}
