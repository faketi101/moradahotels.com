# Morada Hotels Website

A modern, responsive website for Morada Hotels, a boutique hotel located in the serene Awuse Estate, Opebi, Ikeja, Lagos, Nigeria. This project showcases the hotel's accommodations, services, and special offers with a focus on user experience and visual appeal.

## Features

- **Hero Section**: Engaging landing page with hotel branding
- **Room Gallery**: Interactive display of available rooms (Standard, Superior, Deluxe, Executive)
- **Services**: Overview of hotel amenities and offerings
- **Special Offers**: Highlighted promotions and packages
- **Contact Section**: Easy-to-use contact form and information
- **Responsive Design**: Optimized for all devices
- **Smooth Animations**: Powered by Framer Motion for enhanced user experience

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd moradahotels.com/client
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the website.

### Build for Production

```bash
pnpm build
# or
npm run build
```

### Preview Production Build

```bash
pnpm preview
# or
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AnimationWrappers.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── OffersComponent.jsx
│   ├── RoomGallery.jsx
│   ├── Services.jsx
│   └── staticData.js
├── pages/               # Page components
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   ├── RestaurantPage.jsx
│   └── RoomsPage.jsx
├── utils/               # Utility functions
│   └── animations.js
└── assets/              # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Morada Hotels.

## Contact

For inquiries about the hotel or this website, please visit [Morada Hotels](https://moradahotels.com) or contact us through the website.
