# TradeX - Trading Platform

A comprehensive trading platform built with modern web technologies, featuring a dashboard for traders and a landing page for potential users.

## 🌐 Live Demo

**Live Application:** [https://trade-x-6snf.vercel.app/](https://trade-x-6snf.vercel.app/)

## 📋 Project Overview

TradeX is a full-stack trading platform that provides users with tools to manage their trading activities, including portfolio tracking, order management, watchlists, and real-time market data visualization.

## ✨ Features

### Dashboard
- **Portfolio Management**: Track holdings and positions
- **Order Management**: Place and monitor trading orders
- **Watchlist**: Maintain personalized watchlists
- **Real-time Charts**: Interactive charts for market analysis
- **Fund Management**: Track available funds and margins
- **Chat Integration**: Built-in chat system for user support

### Landing Page
- **Modern UI/UX**: Responsive design with beautiful animations
- **Product Showcase**: Detailed information about trading products
- **Pricing Plans**: Transparent pricing structure
- **About Section**: Company information and team details
- **Support System**: Ticket creation and support resources

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling and animations
- **Responsive Design** - Mobile-first approach

### Dashboard
- **React.js** - Component-based architecture
- **Custom Components** - Modular and reusable UI components
- **Real-time Data** - Live market data integration

### Backend
- **Node.js** - Server-side runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **JWT Authentication** - Secure user authentication
- **RESTful APIs** - Clean API architecture

### Database Models
- **User Management** - User authentication and profiles
- **Holdings** - Portfolio holdings tracking
- **Orders** - Trading order management
- **Positions** - Current trading positions
- **Watchlists** - Personalized market watchlists

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB instance

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TradeX
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install dashboard dependencies**
   ```bash
   cd ../dashboard
   npm install
   ```

### Configuration

1. **Backend Environment Setup**
   - Create a `.env` file in the `backend` directory
   - Configure MongoDB connection string
   - Set JWT secret token

2. **Frontend Configuration**
   - Update API endpoints in configuration files
   - Configure environment variables if needed

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   ```

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Start Dashboard Development Server**
   ```bash
   cd dashboard
   npm run dev
   ```

## 📁 Project Structure

```
TradeX/
├── backend/                 # Node.js backend server
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── schemas/            # Data validation schemas
│   ├── AuthController.js   # Authentication logic
│   └── index.js            # Server entry point
├── frontend/               # Landing page application
│   ├── src/
│   │   ├── landing_page/   # Landing page components
│   │   ├── components/     # Reusable components
│   │   └── main.jsx        # Application entry point
│   └── public/             # Static assets
├── dashboard/              # Trading dashboard application
│   ├── src/
│   │   ├── components/     # Dashboard components
│   │   ├── data/          # Data management
│   │   └── main.jsx       # Dashboard entry point
│   └── public/             # Dashboard assets
└── README.md               # Project documentation
```

## 🔧 API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile

### Trading Data
- `GET /holdings` - Get user holdings
- `GET /positions` - Get current positions
- `GET /orders` - Get order history
- `GET /watchlist` - Get user watchlist

## 🚀 Deployment

The application is deployed on Vercel for the frontend and dashboard, with a separate backend deployment.

### Frontend & Dashboard
- **Platform**: Vercel
- **URL**: [https://trade-x-6snf.vercel.app/](https://trade-x-6snf.vercel.app/)
- **Auto-deployment**: Connected to Git repository

### Backend
- **Platform**: Node.js hosting service
- **Database**: MongoDB Atlas (recommended)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Create a support ticket through the application
- Contact the development team
- Check the documentation and FAQ sections

## 🔮 Future Enhancements

- **Real-time Trading**: Live order execution
- **Advanced Charts**: Technical analysis tools
- **Mobile App**: Native mobile applications
- **AI Integration**: Smart trading recommendations
- **Social Trading**: Copy trading features
- **Multi-language Support**: Internationalization

---

**Built with ❤️ by the TradeX Team**

