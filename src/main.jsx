import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { WithAuthProtection } from '../Pages/authprotected.jsx'
import UserProfile from '../Pages/userProfile.jsx'
import PaymentProceed from '../Pages/paymentProceed.jsx'
import SearchPage from '../Pages/searchPage.jsx'
import Success from '../components/HomePage/Success.jsx'
import Error from '../components/HomePage/error.jsx'

const Home = lazy(() => import('../Pages/Home.jsx'))
const ShopPage = lazy(() => import('../Pages/shopPage.jsx'))
const Category = lazy(() => import('../Pages/Category.jsx'))
const LoginPage = lazy(() => import('../Pages/login.jsx'))
const CategoryMainPage = lazy(() => import('../Pages/categoryMainPage.jsx'))
const SignUp = lazy(() => import('../Pages/signup.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <WithAuthProtection>
          <Home />
        </WithAuthProtection>
      },
      {
        path: '/shopPage',
        element:
          <ShopPage />
      },
      {
        path: '/category/:type',
        element: <Category />
      },

      {
        path: '/login',
        element: <LoginPage />
      },

      {
        path: '/allcategory',
        element: <CategoryMainPage />
      },
      {
        path: '/signup',
        element: <SignUp />
      },

      {
        path: '/userprofile',
        element: <UserProfile />
      },

      {
        path: '/userAddressFill',
        element: <PaymentProceed />
      },
      {
        path: '/searchPage/:title',
        element: <SearchPage />
      },
      {
        path: '/success',
        element: <Success />
      },
      {
        path: '/error',
        element: <Error />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={'loading...'}>
      <RouterProvider router={router} />
    </Suspense>
  // </React.StrictMode>,
)
