import { Home, Settings, Info, Phone } from "lucide-react";
import { FaHome } from "react-icons/fa";
import { GrServices, GrCircleInformation } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";

export const routes = [
    {
        name: "Home",
        path: "/",
        icon: FaHome,
    },
    {
        name: "Services",
        path: "/services",
        icon: GrServices,
    },
    {
        name: "About",
        path: "/about",
        icon: GrCircleInformation,
    },
    {
        name: "Contact",
        path: "/contact",
        icon: MdContactPhone,
    },
]

export default routes
