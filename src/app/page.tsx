import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="lg:h-screen flex flex-col">
      <div className="flex flex-row">
        <div className="pr-2 h-72 w-72 bg-slate-300 flex items-end justify-end">
          <PageTitle>Sélley</PageTitle>
        </div>
        <div className="ml-1 flex items-end">
          <PageTitle>Péter</PageTitle>
        </div>
      </div>
      <div className="h-[90px] main-gradient"></div>
      <div className="p-12 gap-12 h-full lg:grid lg:grid-cols-3">
        <HomeCard>
          <div className="p-4 px-10">
            <PageSubtitle>
              <Link href="/projektek">Projektek »</Link>
            </PageSubtitle>
            <div className="grid grid-col2 gap-6 mt-4 h-96">
              <div className="ease-in-out transition transform duration-200 hover:scale-105 bg-gray-200 p-6 h-full col-span-2 font-light text-2xl">
                Megnézett <br />
                sorozatok listája
              </div>
              <a href="https://tokajiandrás.hu">
                <div className="ease-in-out overflow-hidden transition transform duration-200 hover:scale-105 bg-gray-200 p-6 h-full ">
                  Dr. Tokaji András honlapja
                  <WPLogo />
                </div>
              </a>{" "}
              <a href="https://molnarzsolttortenelem.hu">
                <div className="ease-in-out overflow-hidden transition transform duration-200 hover:scale-105 bg-gray-200 p-6 h-full ">
                  Molnár Zsolt honlapja
                  <WPLogo />
                </div>
              </a>
            </div>
          </div>
        </HomeCard>
        <HomeCard>
          <div className="transition hover:opacity-90 duration-1000 ease-in-out h-full w-full main-gradient2 opacity-20"></div>
        </HomeCard>
        <HomeCard>
          <div className="p-4 px-10">
            <PageSubtitle>Elérhetőségek</PageSubtitle>
            <ul className="font-light">
              <li className="mt-4">E-mail: selley.pite@gmail.com</li>
              <li className="mt-4">Telefon: +36 30 899 5630</li>
              <li className="mt-4">
                Instagram:{" "}
                <a href="https://www.instagram.com/selley.peter14/">
                  @selley.peter14
                </a>{" "}
              </li>
            </ul>
          </div>
        </HomeCard>
      </div>
    </main>
  );
}

function PageTitle({ children }: { children: React.ReactNode }) {
  return <p className="font-serif text-[44px] mb-5">{children}</p>;
}

function PageSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="hover:underline underline-offset-4 font-serif text-[24px]">
      {children}
    </h2>
  );
}

function HomeCard({ children }: { children: React.ReactNode }) {
  return <div className="bg-slate-100">{children}</div>;
}

function WPLogo() {
  return (
    <Image
      src="/WordPress-logotype-wmark.png"
      alt="WordPress"
      width={200}
      height={200}
      layout=""
      className="absolute bottom-[-65px] right-[-48px] opacity-10"
    />
  );
}
