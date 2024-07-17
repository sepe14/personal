import { NavigationRight } from "./navigation";

export default function DramaList({ className }: { className?: string }) {
  return (
    <div
      className={`${className} bg-gradient-to-r from-foreground to-primary text-secondary`}
    >
      <NavigationRight />
      lista
    </div>
  );
}
