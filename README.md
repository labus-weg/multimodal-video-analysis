# Multimodal Video Analysis System

A full-stack Next.js application that enables natural language chat and visual search within YouTube videos using the Gemini API.

## Features

- **YouTube Video Processing** – Analyze any public YouTube URL
- **Smart Section Breakdown** – Auto-generated timestamps for key segments
- **AI Chat Interface** – Ask questions about video content with cited responses
- **Visual Search** – Find visual content from specific parts of a video
- **Jump-to-Timestamp** – Click timestamps to navigate the video

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS  
- **Backend**: Express.js, Node.js  
- **AI**: Google Gemini API  
- **Deployment**: Vercel  

## Getting Started

### Prerequisites

- GitHub account  
- Vercel account (free tier)  
- Gemini API key from [Google AI Studio](https://aistudio.google.com/)

### 1. Clone & Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/video-analysis
git push -u origin main
````

### 2. Deploy to Vercel

* Go to [vercel.com](https://vercel.com)
* Sign in with your GitHub account
* Click **New Project** and import your repository
* Set the environment variable:

  * `GEMINI_API_KEY=your_gemini_api_key`
* Click **Deploy**

## Local Development

```bash
npm install
```

Create a `.env.local` file in the root:

```
GEMINI_API_KEY=your_gemini_api_key
```

Start the development server:

```bash
npm run dev
```
#Courtesy
Credits

1. Hassan Syed for the challenge
2. Headstarter AI (Yasin Ehsan & Faizan Ahmed) for the platform and tech support

Nafisa Nawrin Labonno
