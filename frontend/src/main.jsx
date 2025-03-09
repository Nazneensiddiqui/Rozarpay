import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './pages/Store.jsx';
import {Provider} from "react-redux"
createRoot(document.getElementById('root')).render(
<Provider store={Store}>
<App />
</Provider>

 
)
