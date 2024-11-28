import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskContext from './context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContext>
    <App />
    </TaskContext>
  </StrictMode>
)
