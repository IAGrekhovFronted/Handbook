import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TwJIT from './TwJIT'
import DangerJIT from './DanderTW'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TwJIT></TwJIT>
    <DangerJIT content='<h2 class="bg-amber-900" >Тестовый див</h2>'></DangerJIT>
  </StrictMode>,
)
