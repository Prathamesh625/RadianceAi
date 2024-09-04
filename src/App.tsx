
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/Login/LoginPage'
import SignUpPage from './Pages/SignUp/SignUpPage'
import DashboardPage from './Pages/DashBoard/DashboardPage'
import AppointmentPage from './Pages/Appointment/AppointmentPage'
import PatientManagerPage from './Pages/PatientManager/PatientManagerPage'
import PatientAnalysisPage from './Pages/PatientAnalysis/PatientAnalysisPage'
import { ImageAnalyserPage } from './Pages/ImageAnalyser/ImageAnalyserPage'
import { NewPatientPage } from './Pages/NewPatient/NewPatientPage'
import { ReportPage } from './Pages/Report/ReportPage'
import { ThemeContext } from './Context/ThemeContext'
import AuthContext from './Context/AuthContext'
import { LocalActivity } from '@mui/icons-material'
import { loadDashboard, loader } from './service'


function App() {



  const router = createBrowserRouter([

    {
      path: "/", 
      element: <LoginPage />,
    },
     {
      path: "/page/register", 
      element:<SignUpPage/>
    },
      {
      path: "/page/dashboard", 
        element: <DashboardPage />, 
        loader:loadDashboard
    },
    {
      path: "/page/appointments", 
      element:<AppointmentPage/>
    },
    {
       path: "/page/patients", 
      element:<PatientManagerPage/>
    },
    {
       path: "/patients/analysis", 
      element:<PatientAnalysisPage/>
    },
    {
       path: "/image/editor", 
      element:<ImageAnalyserPage/>
    },
    {
      path: "/add/new/patient",
      element: <NewPatientPage />,
      },
    {
      path: "/create/report",
      element: <ReportPage />,
  
      }

  ])



  return ( 
    <ThemeContext>
      <AuthContext>
        <RouterProvider router={router} />
       </AuthContext> 
  </ThemeContext>
  )
}

export default App
