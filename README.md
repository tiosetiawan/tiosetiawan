# Tio Setiawan - Personal Website 🌐

Welcome to my personal website! This project showcases my portfolio, skills, and professional journey as a **Software Engineer**. Built with **Next.js**, this website is designed to be fast, responsive, and visually appealing.

Note: this project now integrates a lightweight CMS using **Payload CMS** to manage posts and media used on the site.
---

## 🚀 Features

- **Hero Section**: A welcoming introduction with a dynamic wavy background.
- **About Section**: Highlights my skills, experience, and GitHub activity.
- **Contact Section**: Links to my GitHub, LinkedIn, and Dribbble profiles.
- **Responsive Design**: Optimized for all devices, from mobile to desktop.
- **Static Export**: Fully static website for easy deployment on shared hosting.

- **CMS (Payload)**: Manage `posts`, `media`, `categories`, and `users` from an admin UI. The site fetches published posts from Payload and displays them on the home page. Individual posts are available at `/posts/{slug}`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Hosting**: Compatible with shared hosting or platforms like Vercel and Netlify.

- **CMS / Admin**: [Payload CMS](https://payloadcms.com/) (local admin available at http://localhost:3001/admin by default)

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
│   ├── app/               # Next.js App Router (frontend and Payload routes)
│   ├── components/        # Reusable UI components
│   ├── sections/          # Page sections (Hero, About, Contact, Posts)
│   ├── collections/       # Payload collections (posts, media, categories, users)
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

3. **Run the Development Server & Payload Admin**:

There are two parts to run during development:

- Start the Next.js frontend:

```bash
pnpm dev
```

Open the site at http://localhost:3000.

- Start the Payload CMS (admin API & UI). From another terminal run:

```bash
pnpm payload serve
```

The Payload admin UI is available at http://localhost:3001/admin by default. If the port differs, check your `payload.config.*` settings.

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

## 📝 Posts & CMS (Payload)

- Collections included: `posts`, `media`, `categories`, `users`.
- To add a post that appears on the homepage, create a `posts` entry in Payload admin and set:
   - `status` → `published`
   - `publishedAt` → (choose publish date)

- The homepage automatically loads published posts (up to 6 newest). Click a post to open its detail page at `/posts/{slug}`.

- Helpful scripts:

```bash
pnpm run generate:types      # Generate TypeScript types from Payload
pnpm run generate:importmap  # Generate admin import map (used by Payload admin)
```

If you encounter issues starting Payload, ensure environment variables (if any) are set and that the `payload` binary is available via the project dependencies (you can run `pnpm payload serve`).

---

## 📄 License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this project as long as you include the original license.
