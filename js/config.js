const portfolioData = {
    profile: {
        name: "Akhil Sharma",
        title: "Product Manager",
        email: "akhil@drunkdiary.com",
        profilePic: "assets/pfp.png"
    },
    about: {
        text: "I'm a product manager with a passion for building products that are simply...cool"
    },
    projects: [
        {
            date: "Dec 2025 — Now",
            title: "Drunk Diary",
            description: "Letterboxd for alcohol",
            link: "https://drunkdiary.com",
            images: []
        },
        {
            date: "Aug 2021 — Nov 2023",
            title: "HackerDen - what do hackers want?",
            description: "Won SocialBlitz in CodewithKiro Hackathon",
            link: "https://devpost.com/software/hackerden",
            images: [
                "assets/project_1.png",
                "assets/project_2.png",
                "assets/project_3.png"
            ]
        },
        {
            date: "Apr 2024 — July 2024",
            title: "Shatranj",
            description: "The unbeatable chess game",
            link: "https://github.com/ictinus0222/shatranj"
        }
    ],
    writing: {
        featured: {
            title: "DrunkDiary Product Requirements Document",
            info: "A comprehensive documentation for a product that I'm building ",
            image: "assets/writing_featured.png",
            link: "https://docs.google.com/document/d/15Vlys_En1KmZwuODzXu0zWQ1k98tnmy439_Now-n0AI/edit?usp=sharing"
        },
        posts: [
            {
                date: "2025",
                title: "How students choose alcohols",
                description: "Research for DrunkDiary (ongoing)",
                link: "#"
            }
        ]
    },
    speaking: {
        featured: {
            title: "How to spend your 20s as a software engineer",
            info: "A YC styled talk with Pranav Kumar and Lovleen Kaur",
            image: "assets/project_1.png",
            link: "https://www.linkedin.com/posts/sharmakhil_devdecoded-2025-activity-7365022606036553729-UmZO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbVnpkBiyeV2ThNlSPO0Zs_dMYe9ygnv48"
        },
        talks: [
            {
                date: "2025",
                title: "Understanding Kiro",
                description: "A talk about how to use Kiro to build cool products and how i built HackerDen using it",
                link: "https://www.linkedin.com/posts/sharmakhil_specdrivencoding-hackathon-kiro-activity-7372334465114791936-JKpj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbVnpkBiyeV2ThNlSPO0Zs_dMYe9ygnv48"
            },
            {
                date: "2026",
                title: "Explaining a product resume and PRDs",
                description: "Conducted a PRD making session for the students of CGC, Landran",
                link: "https://www.instagram.com/p/DUuYQafAUg4/?igsh=YzNnNWN1d2dsODV1"
            },
            {
                date: "2025",
                title: "Coffee Chats",
                description: "A series of casual conversations with people I admire",
                link: "https://www.youtube.com/@coffeebrewer-yt"
            }
        ]
    },
    podcasts: [
        {
            date: "Apr 2025",
            title: "He did it before it was cool",
            description: "Episode 04 ft. Pranav Kumar",
            link: "https://www.youtube.com/watch?v=z5xNtXoGNqo&pp=0gcJCaIKAYcqIYzv"
        },
        {
            date: "Feb 2025",
            title: "Building Android Apps? Watch this first!",
            description: "Episode 03 ft. Lovleen Kaur",
            link: "https://www.youtube.com/watch?v=H0kOTv11M9E"
        },
        {
            date: "Jan 2025",
            title: "Why Flutter is Perfect for your first Project?",
            description: "Episode 02 ft. Luxmi Gupta",
            link: "https://www.youtube.com/watch?v=pP1_JM3Sveg"
        },
        {
            date: "Jan 2024",
            title: "Getting into tech and life at Google",
            description: "Episode 01 ft. Vrinda Gupta",
            link: "https://www.youtube.com/watch?v=9NHnBigR_pI"
        },
        {
            date: "Jan 2024",
            title: "Talking Web Development and Industry before A.I.",
            description: "Pilot Episode ft. Sarabjeet Singh",
            link: "https://www.youtube.com/watch?v=gbrVriSXD34&pp=0gcJCaIKAYcqIYzv"
        },
    ],
    sideProjects: [
        {
            date: "2024",
            title: "PlayDrumsWithNieman - A web based drum kit",
            link: "https://github.com/ictinus0222/playdrumswithnieman"
        },
        {
            date: "2020",
            title: "College Attendence Management System reworked UI",
            description: "Won UI/UX challenge in college"
        }
    ],
    education: [
        {
            date: "2023 — 2027",
            title: "Bachelor's in Artificial Intelligence and Data Science",
            description: "at Chandigarh Group of Colleges, Landran"
        }
    ],
    socials: [
        { name: "Instagram", value: "@shutupakhil", link: "https://www.instagram.com/shutupakhil/" },
        { name: "X", value: "@sharmakhil22", link: "https://x.com/sharmakhil22" },
        { name: "Linkedin", value: "sharmakhil", link: "https://www.linkedin.com/in/sharmakhil/" },
        { name: "Github", value: "ictinus0222", link: "https://github.com/ictinus0222" },
        { name: "Youtube", value: "coffeebrewer-yt", link: "https://www.youtube.com/@coffeebrewer-yt" },
        { name: "Resume", value: "Link", link: "https://drive.google.com/file/d/1vj1eW4-Zll-Wva8XWk36aAeTdpkTnGOw/view?usp=sharing" }
    ]
};

// export default portfolioData;
window.portfolioData = portfolioData;
