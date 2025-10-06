# Mohamed A. Maher - Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio is designed to be easily editable without requiring web development expertise.

## 🚀 Quick Start

1. **Open the website**: Simply open `index.html` in your web browser
2. **Edit your information**: Modify the `data.js` file to update your portfolio content
3. **Add images**: Place your images in the `assets` folder
4. **Refresh**: Reload the website to see your changes

## 📁 File Structure

```
native_portfolio/
├── index.html          # Main HTML file (don't edit unless necessary)
├── styles.css          # CSS styles (don't edit unless necessary)
├── script.js           # JavaScript functionality (don't edit unless necessary)
├── data.js            # YOUR DATA - Edit this file to update content
├── assets/            # Folder for images and other media
│   ├── profile.jpg    # Your profile photo
│   ├── project1.jpg   # Project images
│   ├── project2.jpg
│   └── ...
└── README.md          # This file
```

## ✏️ How to Edit Your Portfolio

### 1. Personal Information

Open `data.js` and find the `personal` section:

```javascript
personal: {
    name: "Your Name Here",
    title: "Your Job Title",
    email: "your.email@example.com",
    phone: "+1234567890",
    location: "Your Location",
    profileImage: "assets/profile.jpg", // Add your photo to assets folder
    
    social: {
        github: "https://github.com/yourusername",
        portfolio: "https://yourwebsite.com",
        linkedin: "https://linkedin.com/in/yourprofile",
        // Add or remove social links as needed
    }
}
```

### 2. About Section

Update your summary and skills:

```javascript
about: {
    summary: "Write your professional summary here...",
    
    skills: {
        "Category Name": [
            "Skill 1", "Skill 2", "Skill 3"
        ],
        "Another Category": [
            "More skills here"
        ]
    }
}
```

### 3. Experience

Add or modify your work experience:

```javascript
experience: [
    {
        title: "Job Title",
        company: "Company Name",
        period: "Start Date - End Date",
        location: "Location",
        description: [
            "Achievement or responsibility 1",
            "Achievement or responsibility 2",
            "Achievement or responsibility 3"
        ],
        link: "https://company-website.com" // Optional
    }
    // Add more experiences as needed
]
```

### 4. Projects

Showcase your projects:

```javascript
projects: [
    {
        title: "Project Name",
        description: "Brief description of the project",
        technologies: ["Tech 1", "Tech 2", "Tech 3"],
        image: "assets/project-image.jpg", // Add image to assets folder
        links: {
            github: "https://github.com/yourproject",
            demo: "https://your-demo-link.com",
            playstore: "https://play.google.com/store/apps/details?id=your.app"
            // Add relevant links, remove unused ones
        },
        featured: true // Set to true for important projects
    }
    // Add more projects
]
```

### 5. Services

Update the services you offer:

```javascript
services: [
    {
        title: "Service Name",
        description: "Description of what you offer",
        icon: "📱" // Use emoji or change to Font Awesome class
    }
    // Add more services
]
```

### 6. Contact Information

Update your contact details:

```javascript
contact: {
    title: "Your Contact Section Title",
    subtitle: "Your contact subtitle",
    
    methods: [
        {
            type: "Email",
            value: "your.email@example.com",
            icon: "✉️",
            link: "mailto:your.email@example.com"
        }
        // Add more contact methods
    ]
}
```

## 🎨 Customization

### Colors and Theme

To change the website colors, modify the `theme` section in `data.js`:

```javascript
settings: {
    theme: {
        primaryColor: "#2563eb",    // Main blue color
        secondaryColor: "#1e40af",  // Darker blue
        accentColor: "#f59e0b",     // Accent color (yellow/orange)
        backgroundColor: "#f8fafc", // Light background
        textColor: "#1f2937",       // Dark text
        lightTextColor: "#6b7280"   // Light gray text
    }
}
```

### SEO Settings

Update SEO information for better search engine visibility:

```javascript
seo: {
    title: "Your Name - Your Profession",
    description: "Your professional description for search engines",
    keywords: "your, relevant, keywords, separated, by, commas"
}
```

## 📸 Adding Images

1. **Profile Photo**: Add your profile photo as `assets/profile.jpg`
2. **Project Images**: Add project screenshots as `assets/project1.jpg`, `assets/project2.jpg`, etc.
3. **Supported Formats**: JPG, PNG, WebP, SVG

### Image Guidelines:
- **Profile Photo**: 400x400px, square format works best
- **Project Images**: 800x600px or similar aspect ratio
- **File Size**: Keep images under 1MB for faster loading

## 🌐 Publishing Your Website

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository named `your-username.github.io`
3. Upload all your files to the repository
4. Your website will be available at `https://your-username.github.io`

### Option 2: Netlify (Free)
1. Create a Netlify account
2. Drag and drop your portfolio folder to Netlify
3. Get a free subdomain or connect your custom domain

### Option 3: Vercel (Free)
1. Create a Vercel account
2. Import your project from GitHub or upload directly
3. Get automatic deployments and a free domain

## 🔧 Troubleshooting

### Common Issues:

1. **Images not showing**: 
   - Check that image files are in the `assets` folder
   - Verify the file names match exactly in `data.js`
   - Ensure image file extensions are correct (.jpg, .png, etc.)

2. **Changes not appearing**:
   - Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
   - Clear browser cache
   - Check for JavaScript errors in browser console (F12)

3. **Layout issues on mobile**:
   - The website is responsive and should work on all devices
   - If issues persist, try different browsers

4. **Contact form not working**:
   - The form opens your default email client
   - Make sure you have an email client installed
   - Alternatively, users can copy your email address

## 📱 Mobile Responsiveness

Your portfolio is fully responsive and will look great on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🆘 Need Help?

If you need assistance:

1. **Check this README** for common solutions
2. **Browser Console**: Press F12 and check for error messages
3. **Backup**: Always keep a backup of your working `data.js` file
4. **Start Simple**: Make small changes and test frequently

## 📋 Checklist Before Publishing

- [ ] Updated all personal information in `data.js`
- [ ] Added profile photo to `assets` folder
- [ ] Added project images to `assets` folder
- [ ] Updated all social media links
- [ ] Tested website in different browsers
- [ ] Checked mobile responsiveness
- [ ] Verified all links work correctly
- [ ] Updated SEO information
- [ ] Spell-checked all content

## 🎯 Tips for Success

1. **Keep it Updated**: Regularly update your projects and experience
2. **Quality Images**: Use high-quality, professional images
3. **Clear Descriptions**: Write clear, concise project descriptions
4. **Show Results**: Include metrics and achievements in your experience
5. **Test Everything**: Always test your website after making changes

## 📄 License

This portfolio template is free to use for personal and commercial purposes. Feel free to customize it to match your needs!

---

**Happy Portfolio Building! 🚀**

Remember: The key to a great portfolio is keeping it updated with your latest work and achievements. Make it a habit to update your portfolio regularly as you grow in your career.
