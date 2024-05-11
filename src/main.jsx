import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import Upload from './pages/Upload.jsx'
import NotesForverification from './pages/notesForverification.jsx'
import ViewNotes from './pages/viewNotes.jsx'
import Image from './pages/image.jsx'

const router= createBrowserRouter(
              createRoutesFromElements(
                <Route path='/' element={<App/>}>
                  <Route path='' element={<Home/>}/>
                  <Route path='login' element={<LoginPage/>}/>
                  <Route path='register' element={<SignUpPage/>}/>
                  <Route path='upload' element={<Upload/>}/>
                  <Route path='forAdmin' element={<NotesForverification/>}/>
                  <Route path='viewNotes' element={<ViewNotes/>} />
                  <Route path='imgView/:img' element={<Image/>}/>
                  </Route>
                
)
)



ReactDOM.createRoot(document.getElementById('root')).render(
 
 <Provider store={store}>
 <RouterProvider router={router}/>
 </Provider>
)
