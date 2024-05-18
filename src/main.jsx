import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/UserContext.jsx';
import { TaskProvider } from './context/TaskContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
     <TaskProvider>
     <UserProvider>
    <App />
    </UserProvider>
    </TaskProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
