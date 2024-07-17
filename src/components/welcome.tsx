import { NavigationLeft } from "./navigation";

export default function Welcome({ className }: { className?: string }) {
  return (
    <div className={`${className} bg-secondary shadow-2xl`}>
      <NavigationLeft />
      <section className="text-center">
        {" "}
        <h1 className="font-bold text-xl">Sélley Péter</h1>
        <a href="mailto:selley.pite@gmail.com">
          <p>selley.pite@gmail.com</p>
        </a>
        <div className="rounded-xl bg-slate-200 p-3 w-fit mx-auto my-3">
          cd server/personal && git pull && npm install && npm run build && pm2
          restart nextjs-app
        </div>
      </section>
    </div>
  );
}
