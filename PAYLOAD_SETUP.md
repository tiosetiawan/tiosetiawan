# Payload CMS Blog Setup Guide

Your Payload CMS blog is now configured and ready to use! Here's what was set up:

## 📁 Project Structure

```
src/
├── app/
│   ├── admin/              # Admin dashboard
│   ├── api/
│   │   └── payload/        # API routes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
payload.config.ts           # Payload CMS configuration
.env.local                  # Environment variables
```

## 🗄️ Collections Set Up

### 1. **Posts** (`/admin/collections/posts`)
- **title** - Blog post title
- **slug** - URL-friendly identifier
- **content** - Rich text editor (Lexical)
- **excerpt** - Short description
- **author** - Author relationship
- **featuredImage** - Uploaded image
- **categories** - Multiple category relationships
- **publishedAt** - Publication date
- **status** - Draft or Published

### 2. **Categories** (`/admin/collections/categories`)
- **name** - Category name
- **slug** - URL identifier
- **description** - Category description

### 3. **Users** (`/admin/collections/users`)
- **email** - User email (username)
- **name** - User display name
- Built-in authentication

### 4. **Media** (`/admin/collections/media`)
- File uploads for featured images
- Stored in `public/uploads/`

## 🚀 Getting Started

### Start Development Server
```bash
pnpm dev
```
The server will run on `http://localhost:3000` (or 3001 if 3000 is in use)

### Access Admin Dashboard
Open `http://localhost:3000/admin` in your browser

### Default Admin Setup
- Create the first admin user when prompted
- Set your email and password

## 🔐 Environment Variables

Edit `.env.local` to configure:
```
PAYLOAD_SECRET=your-secure-secret-key-change-this
DATABASE_URL=file:./payload.db
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

**Important:** Change `PAYLOAD_SECRET` to a secure random string in production.

## 📝 Creating Your First Blog Post

1. Go to `http://localhost:3000/admin`
2. Navigate to **Posts** collection
3. Click **Create New**
4. Fill in:
   - Title
   - Slug (auto-generates from title)
   - Content (use the rich text editor)
   - Select Author
   - Set Status to "Published"
5. Click **Publish**

## 🎨 Rich Text Editor

Posts use **Lexical** - a modern rich text editor supporting:
- Bold, italic, underline, strikethrough
- Headings (H1-H6)
- Lists (ordered & unordered)
- Code blocks
- Quotes
- Links
- And more

## 📦 Database

Using **SQLite** for development:
- Database stored as `payload.db` in project root
- Great for local development
- Can be easily migrated to PostgreSQL or MongoDB in production

## 🔗 API Routes

All REST API endpoints are available at `/api/payload/`:
- `GET /api/payload/posts` - List all posts
- `POST /api/payload/posts` - Create new post
- `GET /api/payload/posts/:id` - Get specific post
- `PATCH /api/payload/posts/:id` - Update post
- `DELETE /api/payload/posts/:id` - Delete post

Same pattern applies to `categories`, `users`, and `media`.

## 🏗️ Building for Production

```bash
pnpm build
pnpm start
```

## 📚 Next Steps

### Query Blog Posts in Your Components
Create a component to fetch and display blog posts:

```typescript
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getPosts() {
  const payload = await getPayload({ config })
  return payload.find({
    collection: 'posts',
    where: {
      status: { equals: 'published' },
    },
    sort: '-publishedAt',
  })
}
```

### Connect Frontend
- Update your homepage to display featured posts
- Create a blog listing page
- Create individual post pages

## 🆘 Troubleshooting

**Admin won't load?**
- Clear browser cache and hard refresh
- Check that dev server is running

**Database reset?**
- Delete `payload.db` to start fresh
- Restart dev server

**Port already in use?**
- Change `NEXT_PUBLIC_SERVER_URL` in `.env.local`
- Or kill the process using port 3000

## 📖 Resources

- [Payload CMS Docs](https://payloadcms.com/docs)
- [Next.js Integration](https://payloadcms.com/docs/plugins/next)
- [Lexical Editor](https://lexical.dev)

---

Your blog CMS is ready! Happy blogging! 🎉
