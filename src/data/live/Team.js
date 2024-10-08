import Taaha from "@/public/board/taaha2024.webp"
import JonathanT from "@/public/board/jonathan2024.webp"
import Allison from "@/public/board/allison2024.webp"

// import { StaticImport } from "next/dist/shared/lib/get-img-props"

// type Team = "Director" | "Operations" | "Software" | "Marketing" | "UI/UX"

// type Member = {
//     name: string
//     link: string
//     image: string | StaticImport
//     team: Team
// }

export const COMMITTEES = {
    Operations: [
        "First Last",
        "First Last",
        "First Last",
        "First Last"
    ],
    Sponsorship: [
        "First Last",
        "First Last",
        "First Last",
        "First Last"
    ],
    Marketing: [
        "First Last",
        "First Last",
        "First Last",
        "First Last",
    ],
    Software: [
        "First Last",
        "First Last",
        "First Last",
        "First Last",
    ],
    "UI / UX": [
        "First Last",
        "First Last",
        "First Last",
        "First Last",
    ]
};

export const DIRECTORS = [
    {
        name: "Minnoli Nori",
        link: "/",
        image: ""
    },
    {
        name: "Jon Darius",
        link: "/",
        image: ""
    }
]

export const TEAMS = [
    // OPERATIONS
    {
        name: "Allison Pham",
        link: "/",
        image: Allison,
        team: "Operations"
    },
    {
        name: "Huong Le",
        link: "/",
        image: "",
        team: "Operations"
    },
    {
        name: "Mahiyat Bhuiyan",
        link: "/",
        image: "",
        team: "Operations"
    },
    {
        name: "Karan Dhawan",
        link: "/",
        image: "",
        team: "Operations"
    },
    // MARKETING
    {
        name: "Chandrahass Mariserla",
        link: "/",
        image: "",
        team: "Marketing"
    },
    {
        name: "Hannah Hwang",
        link: "/",
        image: "",
        team: "Marketing"
    },
    // SPONSORSHIP
    {
        name: "Rhea Verma",
        link: "/",
        image: "",
        team: "Sponsorship"
    },
    {
        name: "Cris LastName",
        link: "/",
        image: "",
        team: "Sponsorship"
    },
    // UI / UX
    {
        name: "Ananya Dharanikota",
        link: "/",
        image: "",
        team: "UI/UX"
    },
    {
        name: "Vishra Thakkar",
        link: "/",
        image: "",
        team: "UI/UX"
    },
    {
        name: "Dylan Vuong",
        link: "/",
        image: "",
        team: "UI/UX"
    },
    // SOFTWARE
    {
        name: "Jonathan Trujillo",
        link: "/",
        image: JonathanT,
        team: "Software"
    },
    {
        name: "Taaha Sayed",
        link: "/",
        image: Taaha,
        team: "Software"
    },
    {
        name: "Amir Shanti",
        link: "/",
        image: "",
        team: "Software"
    },
    {
        name: "Holland Pleskac",
        link: "/",
        image: "",
        team: "Software"
    }
];