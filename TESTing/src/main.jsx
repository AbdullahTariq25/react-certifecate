import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import ApiContaxt from './contaxt/apiContaxt.jsx'
import { BrowserRouter } from 'react-router-dom'






createRoot(document.getElementById('root')).render(

<BrowserRouter>
<ApiContaxt>
    <App />
    </ApiContaxt>
</BrowserRouter>

  
)
