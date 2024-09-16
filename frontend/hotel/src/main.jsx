import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Addstaff from './components/addstaff'
import Addmenu from './components/addmenu'
import Showstaff from './components/showstaff'
import Showmenu from './components/showmenu'
import Updatestaff from './components/updatestaff'
import Updatemenu from './components/updatemenu'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Addstaff/>}/>
    <Route path='/menu' element={<Addmenu/>}/>
    <Route path='/showstaff' element={<Showstaff/>}/>
    <Route path='/showmenu' element={<Showmenu/>}/>
    <Route path='/updatestaaff/:id' element={<Updatestaff/>}/>
    <Route path='/updatemenu/:id' element={<Updatemenu/>}/>
  </Routes>
  </BrowserRouter>
  
  
)
