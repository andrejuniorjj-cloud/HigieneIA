# Overview

HigieneIA is an interactive hand hygiene training application that combines video-based learning with AI-powered guidance. The system displays first-person view videos of proper handwashing techniques while providing real-time narration and step-by-step instructions. Users can interact with the system through voice commands and follow along with WHO-compliant hygiene protocols. The application includes QR code generation for easy mobile access and features a modern, responsive interface built for educational environments.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using React with TypeScript and follows a component-based architecture:

- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Styling**: Tailwind CSS with shadcn/ui components for consistent, accessible UI elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

The application uses a modular component structure with reusable UI components from shadcn/ui library, providing a consistent design system. The main application logic is contained in the home page component, which handles video playback, AI narration, and user interactions.

## Backend Architecture

The backend follows a simple Express.js server pattern:

- **Server Framework**: Express.js with TypeScript for API development
- **Architecture Pattern**: RESTful API design with modular route handlers
- **Development Setup**: Hot-reload development server with production build optimization
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

The server structure separates concerns between routing, storage, and middleware, making it easy to extend with additional features or swap storage implementations.

## Data Storage Solutions

The application uses a dual-database approach:

- **Primary Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Development Storage**: In-memory storage implementation for rapid prototyping
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless PostgreSQL for production deployment

The storage layer is abstracted through interfaces, allowing for easy switching between in-memory development storage and production PostgreSQL database.

## Authentication and Authorization

The system includes a basic user management structure:

- **User Schema**: Simple username/password model with UUID primary keys
- **Session Management**: Session-based authentication with PostgreSQL session storage
- **Validation**: Zod schema validation for user input and data consistency

The authentication system is designed to be extensible for additional security features like role-based access control or OAuth integration.

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives for form controls, dialogs, and interactive elements
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **shadcn/ui**: Pre-built component library with consistent design tokens
- **Lucide React**: Icon library for UI elements

### Development and Build Tools
- **Vite**: Fast build tool with React plugin and development server
- **TypeScript**: Type safety and enhanced developer experience
- **PostCSS**: CSS processing with Tailwind CSS integration
- **ESBuild**: Fast JavaScript bundler for production builds

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with schema inference
- **Neon Database**: Serverless PostgreSQL database service
- **Drizzle Kit**: Database toolkit for migrations and schema management

### Video and Media
- **HTML5 Video API**: Native video playback with programmatic control
- **Canvas API**: Custom QR code generation without external dependencies
- **Web Speech API**: Voice recognition and text-to-speech functionality

### Deployment and Hosting
- **Replit**: Development environment with integrated deployment
- **Node.js**: Runtime environment for server-side JavaScript execution

The application is designed to work primarily with web-standard APIs to minimize external dependencies while providing a rich, interactive learning experience.