# Overview

This is a modern full-stack cannabis brand landing page for "Chronic Guru" built with React, TypeScript, Express.js, and PostgreSQL. The application features a responsive design with rich scroll-based animations, hover interactions, and smooth transitions using Framer Motion. The landing page showcases premium THCa cannabis products with sections for hero content, company information, product carousel, feature highlights, and customer testimonials, along with newsletter subscription functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom cannabis brand color palette (forest green, sage, gold, ivory, charcoal)
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Animations**: Framer Motion for scroll-based reveals, hover effects, and page transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API calls
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **API Design**: RESTful endpoints for newsletter subscription functionality
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot reload with tsx for server-side TypeScript execution

## Data Storage
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **Schema Management**: Drizzle Kit for migrations and schema definitions
- **Tables**: Users table for authentication, newsletters table for email subscriptions
- **Validation**: Zod schemas for runtime type validation on API requests

## Authentication & Authorization
- **User Management**: Basic user table structure with username/password fields
- **Session Storage**: PostgreSQL-backed sessions for persistent login state
- **API Security**: Input validation and sanitization using Zod schemas

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect configuration

## UI & Animation Libraries
- **Radix UI**: Headless component primitives for accessibility and customization
- **Framer Motion**: Animation library for scroll reveals and micro-interactions
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Frontend build tool with React plugin and runtime error overlay
- **TanStack Query**: Server state management and caching
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **TypeScript**: Static type checking across frontend and backend

## Deployment Configuration
- **Replit Integration**: Cartographer plugin for development environment
- **Environment Variables**: Database URL configuration for different environments
- **Build Process**: Separate client and server build pipelines with ESBuild bundling