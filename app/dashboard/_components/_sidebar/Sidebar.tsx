import { LuStore, LuTruck, LuUser, LuUsers, LuWheat } from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <nav className="w-1/12 min-w-[8.333%] h-[90vh] bg-orange-200 flex flex-col items-center py-20 justify-center gap-5">
      <NavItem icon={<LuStore className="text-4x1" />} path="/dashboard" />
      <NavItem
        icon={<LuTruck className="text-4x1" />}
        path="/dashboard/providers"
      />
      <NavItem
        icon={<LuWheat className="text-4x1" />}
        path="/dashboard/products"
      />
      <NavItem
        icon={<LuUser className="text-4x1" />}
        path="/dashboard/managers"
      />
      <NavItem
        icon={<LuUsers className="text-4x1" />}
        path="/dashboard/employees"
      />
    </nav>
  );
}
