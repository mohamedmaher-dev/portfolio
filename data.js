// Portfolio Data - Edit this file to update your portfolio information
// Simply change the values below and refresh your website to see updates

const portfolioData = {
    // Personal Information
    personal: {
        name: "Mohamed A. Maher",
        title: "Mobile App Developer",
        email: "mohamedmaher.personal@gmail.com",
        phone: "+20 106 502 7589",
        location: "Egypt",
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
        summary: "Passionate Mobile App Developer with expertise in Flutter and native Android development. I create innovative, user-friendly mobile applications with a focus on performance and exceptional user experience. Experienced in working with various technologies and delivering high-quality solutions.",

        // Skills organized by category
        skills: {
            "Mobile Development": [
                "Flutter", "Dart", "Android Studio", "Firebase",
                "REST APIs", "State Management", "UI/UX Design"
            ],
            "Programming Languages": [
                "Dart", "Java", "JavaScript", "Python", "C++"
            ],
            "Tools & Technologies": [
                "Git", "GitHub", "VS Code", "Figma",
                "Adobe XD", "Postman", "SQLite"
            ],
            "Other Skills": [
                "Problem Solving", "Team Collaboration",
                "Project Management", "Agile Development"
            ]
        }
    },

    // Experience Section
    experience: [
        {
            title: "Freelance Mobile App Developer",
            company: "Mostaql Platform",
            period: "2020 - Present",
            location: "Remote",
            description: [
                "Developed multiple mobile applications for various clients",
                "Specialized in Flutter cross-platform development",
                "Maintained high client satisfaction ratings",
                "Delivered projects on time and within budget"
            ],
            link: "https://mostaql.com/u/mmaher_gd"
        }
    ],

    // Education Section
    education: [
        {
            degree: "Bachelor's Degree",
            field: "Computer Science / Software Engineering",
            institution: "University Name", // Update with your actual university
            period: "2018 - 2022", // Update with your actual dates
            description: "Focused on software development, mobile technologies, and computer science fundamentals."
        }
    ],

    // Projects Section
    projects: [
        {
            title: "Al Alamia Admin App",
            description: "Administrative mobile application for Al Alamia organization with comprehensive management features.",
            technologies: ["Flutter", "Firebase", "REST API"],
            image: "assets/project1.jpg", // Add project images to assets folder
            links: {
                playstore: "https://play.google.com/store/apps/details?id=com.alalamia.admin",
                demo: null,
                github: null
            },
            featured: true
        },
        {
            title: "Bari Al Shamal App",
            description: "Mobile application for Bari Al Shamal with user-friendly interface and modern design.",
            technologies: ["Flutter", "Dart", "Firebase"],
            image: "assets/project2.jpg",
            links: {
                apkpure: "https://apkpure.net/ar/%D8%A8%D8%B1%D9%8A-%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84/com.bariyalshamal.maher",
                demo: null,
                github: null
            },
            featured: true
        },
        {
            title: "Flutter Projects Collection",
            description: "A collection of various Flutter projects showcasing different features and implementations.",
            technologies: ["Flutter", "Dart", "Various APIs"],
            image: "assets/project3.jpg",
            links: {
                drive: "https://drive.google.com/drive/folders/10XCPKI2znTyu6mTINaYqrZMrOG1XurYU",
                demo: null,
                github: null
            },
            featured: false
        },
        {
            title: "BRISC Detector",
            description: "Advanced detection system built with modern technologies for enhanced security and monitoring.",
            technologies: ["Python", "Machine Learning", "Computer Vision"],
            image: "assets/project4.jpg",
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
            title: "UI/UX Design",
            description: "User-centered design approach to create intuitive and engaging mobile interfaces.",
            icon: "🎨"
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
