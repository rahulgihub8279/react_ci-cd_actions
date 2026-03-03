import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Plus, User } from "lucide-react";

export default function Header() {
  return (
    <>
      <header className="bg-white border-b border-gray-200 px-6 flexBetween absolute top-0 left-0 right-0 w-full z-50 shadow">
        <Link to={"/"} className="flex cursor-pointer items-center">
          <img src="/logo1.png" alt="tripbuddy" className="w-[10vh]" />
          <span className="hidden sm:flex font-bold text-xl capitalize mt-1">
            TripBuddy
          </span>
        </Link>

        <div className="flex gap-x-4 sm:gap-x-8">
          <Button variant="outline" className={"mt-1 border-gray-300"}>
            <Plus></Plus> Create Trip
          </Button>
          <div className="flex mt-1">
            <Button className={"px-5!"} variant="destructive">
              <User></User>Login
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
