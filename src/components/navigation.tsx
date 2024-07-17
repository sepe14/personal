import { Button } from "./ui/button";

export function NavigationLeft() {
  return (
    <div className="flex gap-3 items-center flex-row bg-primary text-secondary px-6 h-20 my-6 ml-6 rounded-l-2xl">
      <Button className="m-0" variant={"secondary"}>
        Rólam
      </Button>
      <Button className="m-0" variant={"secondary"}>
        Projektek
      </Button>
    </div>
  );
}

export function NavigationRight() {
  return (
    <div className="flex flex-row items-center bg-secondary text-primary px-6 h-20 my-6 mr-6 rounded-r-2xl">
      <div>Sorozatok listája</div>
    </div>
  );
}
