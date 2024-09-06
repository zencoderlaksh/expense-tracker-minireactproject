import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './ErrorBoundary';
import { ExpenseProvider } from './context/ExpenseContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <ExpenseProvider>
      <App />
      </ExpenseProvider>
  
    </ErrorBoundary>
   
  </StrictMode>,
)
