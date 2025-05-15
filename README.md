# Tio Setiawan - Personal Website 🌐

Welcome to my personal website! This project showcases my portfolio, skills, and professional journey as a **Software Engineer**. Built with **Next.js**, this website is designed to be fast, responsive, and visually appealing.

---

## 🚀 Features

- **Hero Section**: A welcoming introduction with a dynamic wavy background.
- **About Section**: Highlights my skills, experience, and GitHub activity.
- **Contact Section**: Links to my GitHub, LinkedIn, and Dribbble profiles.
- **Responsive Design**: Optimized for all devices, from mobile to desktop.
- **Static Export**: Fully static website for easy deployment on shared hosting.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Hosting**: Compatible with shared hosting or platforms like Vercel and Netlify.

---

## 📂 Project Structure

````plaintext
tio_project/
├── public/                # Static assets (images, icons, etc.)
│   ├── assets/
│   │   ├── images/        # Images used in the project
│   │   └── icons/         # Icons for buttons and links
│   └── favicon.ico        # Favicon for the website
├── src/                   # Source code
│   ├── app/               # Next.js App Router
│   ├── components/        # Reusable UI components
│   ├── sections/          # Page sections (Hero, About, Contact)
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── [next.config.js](http://_vscodecontentref_/1)         # Next.js configuration
├── [package.json](http://_vscodecontentref_/2)           # Project dependencies
├── [tsconfig.json](http://_vscodecontentref_/3)          # TypeScript configuration
└── [README.md](http://_vscodecontentref_/4)              # Project documentation

---

## 📦 Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/tiosetiawan/tio_project.git
   cd tio_project
````

2. **Install Dependencies**:
   Pastikan Anda sudah menginstal **pnpm**. Jika belum, instal dengan:

   ```bash
   npm install -g pnpm
   ```

   Kemudian jalankan:

   ```bash
   pnpm install
   ```

3. **Run the Development Server**:
   Untuk menjalankan proyek dalam mode pengembangan:

   ```bash
   pnpm dev
   ```

   Akses proyek Anda di [http://localhost:3000](http://localhost:3000).

4. **Build for Production**:
   Untuk membangun proyek dalam mode produksi:

   ```bash
   pnpm build
   ```

5. **Export Static Files**:
   Jika Anda ingin mengekspor proyek sebagai file statis:

   ```bash
   pnpm export
   ```

   File statis akan tersedia di folder `out/`.

6. **Deploy**:
   Unggah folder `out/` ke hosting Anda (shared hosting, Netlify, Vercel, dll.).

---

## 🌐 Deployment

Proyek ini dapat di-deploy ke berbagai platform hosting, seperti:

- **Shared Hosting**: Unggah folder `out/` ke direktori `public_html` atau subdirektori hosting Anda.
- **Netlify**: Drag and drop folder `out/` ke dashboard Netlify.
- **Vercel**: Deploy langsung dari repository GitHub Anda.

---

## 📄 License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project as long as you include the original license.
