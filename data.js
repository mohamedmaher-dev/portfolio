// Portfolio Data - Edit this file to update your portfolio information
// Simply change the values below and refresh your website to see updates

const portfolioData = {
    // Personal Information
    personal: {
        name: "Mohamed A. Maher",
        title: "Mobile Developer",
        email: "mohamedmaher.personal@gmail.com",
        phone: "+20 106 502 7589",
        location: "Mansoura, Egypt",
        profileImage: "assets/profile.jpg", // Add your profile image to assets folder

        // Social Links
        social: {
            github: "https://github.com/mohamedmaher-dev",
            portfolio: "https://mohamedmaher-dev.github.io/portfolio",
            linkedin: "https://www.linkedin.com/in/mohamed-maher-579a08276/",
            mostaql: "https://mostaql.com/u/mmaher_gd"
        }
    },

    // About Section
    about: {
        summary: "Mobile Developer with 3 years of freelance experience specializing in cross-platform app development using Flutter. Proven ability to build and deploy high-quality applications for both Android and iOS, focusing on performance, clean architecture, and excellent user experience.",

        stats: [
            { value: "3+", label: "Years Experience" },
            { value: "20+", label: "Projects Completed" },
            { value: "15+", label: "Happy Clients" }
        ],

        // Skills organized by category
        skills: {
            "Core Development": ["Flutter", "Dart", "BloC", "Cubit", "Provider", "Riverpod", "Responsive UI"],
            "Services & APIs": ["Firebase", "Supabase", "REST APIs", "Dio", "Retrofit", "Push Notifications"],
            "Architecture & Patterns": ["Clean Architecture", "MVVM", "MVC", "SOLID", "OOP"],
            "Tools & Infrastructure": ["Git", "GitHub", "CI/CD", "Fastlane", "VS Code", "Android Studio", "Hive", "SQLite"]
        }
    },

    // Experience Section
    experience: [
        {
            title: "Mobile Developer, Freelancer",
            company: "Mostaql, Kafiil and others",
            period: "2023 - Present",
            location: "Egypt",
            description: [
                "Completed +20 projects with a 5 star rating and +15 client, delivering scalable, high-performance mobile applications.",
                "Specialized in end-to-end development, agile collaboration, and creating polished user experiences that consistently exceed client expectations."
            ],
            link: "https://mostaql.com/u/mmaher_gd"
        }
    ],

    // Education Section
    education: [
        {
            degree: "Bachelor of Science",
            field: "Computer Science",
            institution: "Mansoura University",
            period: "2021 - 2026",
            description: "Completed a Bachelor's degree in Science from Mansoura University."
        }
    ],

    // Projects Section
    projects: [
        {
            title: "Alalamia Admin",
            description: "Admin app for Alalamia Spices with features like order management, statistics, and notifications.",
            technologies: ["Flutter", "MVVM", "Firebase", "Retrofit", "Hive"],
            image: "assets/default-project.svg",
            links: { playstore: null, demo: null, github: null },
            featured: true
        },
        {
            title: "Commuter (Driver - Client)",
            description: "A ride-sharing app with features like scheduling, chat, transactions, and location tracking.",
            technologies: ["Flutter", "BLoC", "MVVM", "Go Router", "Socket.io"],
            image: "assets/default-project.svg",
            links: { apkpure: null, demo: null, github: null },
            featured: true
        },
        {
            title: "Bariy Alshamal (Admin - Store)",
            description: "E-commerce app for Bariy Alshamal with product and order management, user profiles, and notifications.",
            technologies: ["Flutter", "BLoC", "MVC", "Firebase"],
            image: "assets/default-project.svg",
            links: { drive: null, demo: null, github: null },
            featured: false
        },
        {
            title: "Mahatati",
            description: "App for car management, including adding, updating, and QR code scanning.",
            technologies: ["Flutter", "BLoC", "MVC", "Dio"],
            image: "assets/default-project.svg",
            links: { github: null, demo: null, playstore: null },
            featured: true
        },
        {
            title: "BRISC Detector",
            description: "A personal project for image detection using modern animations and image processing.",
            technologies: ["Flutter", "Dart", "MVC", "TFLite"],
            image: "assets/default-project.svg",
            links: {
                github: "https://github.com/mohamedmaher-dev/brisc_detector",
                demo: null,
                playstore: null
            },
            featured: true
        }
    ],

    // Services Section
    services: [
        {
            title: "Mobile App Development",
            description: "Custom mobile applications for iOS and Android using Flutter and native technologies.",
            icon: "📱"
        },
        {
            title: "Cross-Platform Development",
            description: "Efficient cross-platform solutions that work seamlessly on multiple devices.",
            icon: "🔄"
        },
        {
            title: "App Maintenance",
            description: "Ongoing support, updates, and maintenance for existing mobile applications.",
            icon: "🔧"
        }
    ],

    // Contact Section
    contact: {
        title: "Let's Work Together",
        subtitle: "I'm always interested in new opportunities and exciting projects.",

        // Contact methods
        methods: [
            {
                type: "Email",
                value: "mohamedmaher.personal@gmail.com",
                icon: "✉️",
                link: "mailto:mohamedmaher.personal@gmail.com"
            },
            {
                type: "Phone",
                value: "+20 106 502 7589",
                icon: "📞",
                link: "tel:+201065027589"
            },
            {
                type: "Location",
                value: "Egypt",
                icon: "📍",
                link: null
            }
        ]
    },

    // Website Settings
    settings: {
        theme: {
            // Light mode colors
            light: {
                primaryColor: "#2563eb", // Blue
                secondaryColor: "#1e40af", // Darker blue
                accentColor: "#f59e0b", // Amber
                backgroundColor: "#f8fafc", // Light gray
                surfaceColor: "#ffffff", // White
                textColor: "#1f2937", // Dark gray
                lightTextColor: "#6b7280", // Medium gray
                borderColor: "#e5e7eb" // Light border
            },
            // Dark mode colors
            dark: {
                primaryColor: "#3b82f6", // Lighter blue for dark mode
                secondaryColor: "#2563eb", // Blue
                accentColor: "#fbbf24", // Lighter amber
                backgroundColor: "#0f172a", // Dark slate
                surfaceColor: "#1e293b", // Dark surface
                textColor: "#f1f5f9", // Light text
                lightTextColor: "#94a3b8", // Medium light text
                borderColor: "#334155" // Dark border
            },
            defaultMode: "dark" // Set dark as default
        },

        // SEO Settings
        seo: {
            title: "Mohamed A. Maher - Mobile App Developer",
            description: "Professional Mobile App Developer specializing in Flutter and Android development. Creating innovative mobile solutions with exceptional user experience.",
            keywords: "mobile app developer, flutter developer, android developer, mobile development, app development, egypt developer"
        },

        // Animation settings
        animations: {
            enabled: true,
            duration: 300
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
