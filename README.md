# Multimodal Video Analysis System

A production-ready Next.js application that enables natural language chat and visual search within YouTube videos using Gemini AI.

## Features

- **YouTube Video Processing**: Upload any YouTube URL for AI analysis
- **Smart Section Breakdown**: Automatically generated timestamped sections
- **AI Chat Interface**: Ask questions about video content with cited responses
- **Visual Search**: Search for specific visual content within videos
- **Real-time Navigation**: Click timestamps to jump to specific video moments
- **Modern UI**: Dark theme with responsive design

## Deployment to Vercel (Free)

### Prerequisites
1. GitHub account
2. Vercel account (free tier)
3. Gemini API key from Google AI Studio

### Steps

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/video-analysis
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Add environment variable: `GEMINI_API_KEY`
   - Deploy

3. **Environment Variables**:
   In Vercel dashboard → Project Settings → Environment Variables:
   - `GEMINI_API_KEY`: Your Gemini API key

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set environment variables**:
   Create `.env.local`:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **AI**: Google Gemini API
- **Build**: Vite
- **Deployment**: Vercel

## API Endpoints

- `POST /api/videos/process` - Process YouTube video
- `GET /api/videos/:id` - Get video details
- `POST /api/videos/:id/chat` - Chat with video content
- `GET /api/videos/:id/messages` - Get chat history
- `POST /api/videos/:id/search` - Visual search

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Application pages
│   │   ├── lib/            # Utilities and API client
│   │   └── types/          # TypeScript definitions
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # In-memory storage
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
└── vercel.json           # Vercel deployment config
```

## Core Features Explained

### Video Processing
- Extracts YouTube video metadata and transcripts
- Uses Gemini AI to analyze content and create logical sections
- Generates timestamped navigation points

### AI Chat
- Contextual responses based on video content
- Automatic citation generation with timestamps
- Real-time message exchange

### Visual Search
- Search for specific visual elements in videos
- Thumbnail-based result display
- Direct navigation to relevant timestamps

## Free Deployment Benefits

- **Vercel Free Tier**: 100GB bandwidth, unlimited personal projects
- **Serverless Functions**: Automatic scaling, pay-per-use
- **Global CDN**: Fast worldwide access
- **HTTPS**: Built-in SSL certificates
- **GitHub Integration**: Automatic deployments on push

This system is production-ready and can handle real-world traffic on Vercel's free tier.