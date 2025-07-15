import { Smartphone, Laptop, Gamepad2 } from "lucide-react";

import { FaVideo } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiGameConsole } from "react-icons/gi";
import { GiLaptop } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";

export const featuresData = [
    {
        title: "Mobile Games",
        icon: Smartphone,
        description:
            "Take your gaming anywhere! Top titles and exclusive rewards right from your mobile device. Whether you're on a quick break or diving deep into an adventure, we've got you covered.",
        backgroundImage: "/img/Easplay/Mobile_Games.png",
    },
    {
        title: "PC Games",
        icon: Laptop,
        description: "Want a bigger screen and more exciting games from the biggest publishers?",
        backgroundImage: "/img/Easplay/PC_games.png",
    },
    {
        title: "Console Games",
        icon: Gamepad2,
        description:
            "Get ready to elevate your gaming experience! EasPlay Console is on its way, bringing seamless play, powerful performance, and all your favourite games in one place. The future of gaming is almost here!",
        backgroundImage: "/img/Easplay/Console_Games.png",
    },
]
