# 🎬 Movie App

A modern, high-performance movie discovery application built with Next.js 15, TypeScript, and Tailwind CSS. Search through millions of movies, explore detailed information, and save your favorites with a beautiful, accessible interface.

## ✨ Features

- **Movie Search**: Real-time search through TMDB's extensive movie database
- **Movie Details**: Comprehensive movie information including cast, crew, ratings, and genres
- **Favorites System**: Save and manage your favorite movies with persistent storage
- **Featured Movies**: Discover popular movies curated for you
- **Trending Movies**: Stay updated with this week's trending films
- **Responsive Design**: Optimized for all devices and screen sizes
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance Optimized**: Lighthouse scores of 100 across all metrics (Perfomance 98%)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- TMDB API key

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/youssefwaheedd/movies-app
   cd movies-app
   ```

2. **Install dependencies**

   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Copy the example environment file
   cp .env.example .env.local
   ```

   Then edit `.env.local` and add your TMDB API credentials:

   ```env
   TMDB_BASE_URL=https://api.themoviedb.org/3 (already given in the example)
   TMDB_API_READ_ACCESS_TOKEN=your_tmdb_api_token_here (already given in the example but if you want to put your own key go ahead)
   ```

4. **Run the development server**

   ```bash
   # Using Bun
   bun run dev

   # Or using npm
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:3000`
   - **Important**: Run in incognito/private mode to avoid hydration errors caused by browser extensions in development mode

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand with persistence
- **Icons**: Lucide React
- **UI Components**: Custom components with Shadcn UI components
- **API**: TMDB (The Movie Database)
- **Package Manager**: Bun (recommended) / npm

## 🎨 Design Decisions

### Architecture

- **App Router**: Leveraged Next.js 15's App Router for better performance and SEO
- **Server Components**: Used React Server Components where possible to reduce client-side JavaScript
- **Component Structure**: Modular, reusable components with clear separation of concerns
- **Type Safety**: Full TypeScript implementation for better development experience and error prevention

### Performance Optimizations

- **Image Optimization**: Implemented responsive images with proper sizing and priority loading
- **Bundle Optimization**: Removed heavy dependencies (Framer Motion) in favor of lightweight CSS animations
- **Code Splitting**: Dynamic imports for non-critical components
- **Caching Strategy**: Efficient data fetching with proper error handling

### Accessibility

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader Support**: ARIA labels, roles, and descriptions
- **Color Contrast**: WCAG AA compliant color scheme (chatgpt helped with this)
- **Skip Links**: Quick navigation for keyboard users (chatgpt helped with this)

## 🚧 Challenges Faced & Solutions

### 1. Performance Optimization

**Challenge**: Initial Lighthouse performance score was 76% due to heavy animations and unoptimized images.

**Solution**:

- Replaced Framer Motion with lightweight CSS animations
- Implemented responsive image sizing with proper `sizes` attributes (chatgpt helped with this)
- Added priority loading for above-the-fold images
- Optimized bundle size by removing unused dependencies

**Result**: Performance score improved to 98%

### 2. Layout Shift Issues

**Challenge**: Cumulative Layout Shift (CLS) score was 0.331 due to dynamic content loading.

**Solution**:

- Added `min-height` to section containers to reserve space
- Ensured skeletons match the exact dimensions of loaded content
- Implemented proper aspect ratios for all images

**Result**: CLS score improved to 0.

### 3. Accessibility Compliance

**Challenge**: Initial accessibility score was 89% due to missing ARIA labels and focus management.

**Solution**:

- Added comprehensive ARIA labels and roles
- Implemented proper focus management with `focus-visible`
- Enhanced keyboard navigation
- Added semantic HTML structure

**Result**: Accessibility score improved to 100%

### 4. Animation Performance

**Challenge**: Heavy Framer Motion animations were causing Total Blocking Time (TBT) issues.

**Solution**:

- Replaced JavaScript animations with CSS transitions
- Used `transform` and `opacity` for GPU-accelerated animations
- Implemented lightweight fade-in effects

**Result**: TBT reduced significantly, maintaining smooth user experience.

## 📊 Performance Results

![Lighthouse Results](/assets/images/lighthouse_results.png)

- **Performance**: 98%
- **Accessibility**: 100%
- **Best Practices**: 100%
- **SEO**: 100%

## 🔧 Additional Features Implemented

### Enhanced Movie Discovery

- **Featured Movies**: Curated selection of popular movies
- **Trending Movies**: Real-time trending films for the current week
- **Smart Search**: Debounced search with real-time results

### User Experience

- **Clean Animations**: Lightweight CSS transitions for smooth interactions
- **Loading States**: Skeleton loading for better perceived performance
- **Error Handling**: Graceful error states with user-friendly messages
- **Responsive Design**: Optimized for mobile, tablet, and desktop

## 🎭 Animation Implementation

Initially, I implemented animations using **Framer Motion** for smooth, complex animations. However, during performance optimization, I discovered that Framer Motion was causing significant Total Blocking Time (TBT) issues, impacting the overall performance score.

**Alternative Considered**: I planned to migrate to **GSAP** for better performance, but due to time constraints, I opted for a more efficient solution.

**Final Solution**: I replaced all heavy JavaScript animations with lightweight **CSS transitions and keyframes**. This approach:

- Reduces bundle size significantly
- Improves performance by leveraging GPU acceleration
- Maintains smooth user experience
- Eliminates JavaScript execution overhead

## 🎯 Future Improvements

### Technical Debt

During the final review of requirements, I noticed that the project specifications called for **vanilla CSS** instead of Tailwind CSS. Unfortunately, I discovered this requirement late in the development process and didn't have sufficient time to refactor the entire styling system. I sincerely apologize for this oversight.

**Potential Solutions for Future**:

- Migrate to vanilla CSS with CSS custom properties
- Implement a design system with CSS modules

### Additional Optimizations

- **Pagination**: For large lists of cast/crew (this project did not need pagination so I just saved time)

## 📝 Scripts

```bash
# Development
bun run dev          # Start development server
npm run dev

# Production
bun run build        # Build for production
npm run build

bun run start        # Start production server
npm run start

# Linting
bun run lint         # Run ESLint
npm run lint
```

## 🙏 Acknowledgments

- [Github Repo](https://github.com/youssefwaheedd/movies-app)

---
