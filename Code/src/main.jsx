import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseProvider } from './context/firebase.jsx'

createRoot(document.getElementById('root')).render(
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
,
)
