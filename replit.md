# Red Ark Cinema

## Overview

Red Ark Cinema is a professional cinema production and post-production services website built as a modern single-page application. The application showcases comprehensive film production services including equipment rentals (cameras, lighting, sound), post-production facilities (editing, color grading, VFX, CGI), and project support for feature films, short films, documentaries, and music albums. The site features a cinematic design inspired by leading cinema technology companies like RED Digital Cinema and ARRI, with bold typography, dramatic imagery, and a focus on technical precision.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight routing library. The application follows a multi-page structure with dedicated routes for Home, Services, Equipment, Portfolio, and Contact pages.

**Component Strategy**: Component-based architecture using functional components with hooks. The codebase separates presentational components (sections, cards) from page-level components and UI primitives.

**UI Component Library**: Extensive use of Radix UI primitives wrapped with custom Tailwind styling through shadcn/ui. This provides accessible, unstyled components that are themed consistently across the application.

**Styling System**: 
- Tailwind CSS for utility-first styling with custom design tokens
- CSS custom properties for theming (defined in `index.css`)
- Custom utility classes like `hover-elevate` and `light-reflection` for interactive effects
- Dark mode support built into the theme system
- Typography system using "Inter" for body text and "Bebas Neue" for display/headers (loaded from Google Fonts)

**State Management**: 
- React Query (TanStack Query) for server state management with custom query client configuration
- Local component state using React hooks
- Form state managed through React Hook Form with Zod validation

**Design Philosophy**: The application implements a "cinematic drama" approach with high contrast, bold typography, asymmetric layouts, and strategic use of negative space. The design guidelines emphasize technical precision while maintaining visual impact.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript.

**Development vs Production**: 
- Development mode uses Vite middleware for hot module replacement and fast refresh
- Production mode serves pre-built static assets from the `dist/public` directory
- The server handles both API routes (prefixed with `/api`) and serves the SPA for all other routes

**Security Implementation**: Comprehensive security headers middleware including:
- XSS Protection
- Clickjacking prevention (X-Frame-Options)
- MIME type sniffing protection
- Content Security Policy
- HSTS in production
- Referrer policy controls

**API Structure**: Currently minimal - the routes are designed to be extended but the application is primarily a static showcase site with contact form functionality. The storage interface is prepared for future CRUD operations.

### Data Storage Solutions

**ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach.

**Database Provider**: Configured to work with Neon Database (serverless PostgreSQL) as indicated by the `@neondatabase/serverless` dependency.

**Schema Design**: Currently implements a basic user schema with username/password fields. The schema uses Drizzle Zod for runtime validation and type safety.

**Migration Strategy**: Database migrations stored in the `migrations` directory, managed through Drizzle Kit with the `db:push` command.

**Development Storage**: In-memory storage implementation (`MemStorage`) provided as a fallback for development/testing without requiring database setup.

### Build and Development Workflow

**TypeScript Configuration**: 
- Strict mode enabled for type safety
- Path aliases configured for clean imports (`@/` for client code, `@shared/` for shared types, `@assets/` for static assets)
- ESNext module system with bundler resolution

**Build Process**:
- Client: Vite builds React app to `dist/public`
- Server: esbuild bundles server code to `dist/index.js` as ESM
- Single `npm run build` command orchestrates both builds

**Development Environment**: Special Replit integrations including error overlay, cartographer for deployment, and dev banner (only in development).

### Asset Management

**Static Assets**: Images stored in `attached_assets/generated_images/` directory and imported directly into components using Vite's asset handling.

**Image Optimization**: Preloading of critical hero image in HTML for performance. Lazy loading implemented on other images throughout the application.

**Font Loading**: Google Fonts (Inter and Bebas Neue) preconnected and loaded in the HTML head for optimal performance.

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Complete suite of accessible, unstyled UI primitives (accordion, dialog, dropdown, select, etc.)
- **shadcn/ui**: Pre-styled components built on Radix UI with Tailwind CSS
- **Lucide React**: Icon library for consistent iconography

### Styling and Design
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Utility for creating component variants
- **clsx & tailwind-merge**: Class name manipulation utilities

### State Management and Data Fetching
- **TanStack Query (React Query)**: Server state management with caching, background updates, and request deduplication
- **React Hook Form**: Performant form state management
- **Zod**: Schema validation for forms and data structures

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM for TypeScript
- **Neon Database**: Serverless PostgreSQL provider
- **Drizzle Zod**: Bridge between Drizzle schemas and Zod validation

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **cmdk**: Command menu component (Command+K interface)
- **embla-carousel-react**: Carousel/slider functionality

### Development Tools
- **Vite**: Build tool and dev server with fast HMR
- **esbuild**: Fast JavaScript/TypeScript bundler for server code
- **tsx**: TypeScript execution for Node.js
- **Replit plugins**: Development experience enhancements (error overlay, deployment tools)

### HTTP and Sessions
- **Express.js**: Web server framework
- **connect-pg-simple**: PostgreSQL session store for Express (configured but not actively used in current implementation)