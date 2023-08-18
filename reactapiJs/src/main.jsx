import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { About } from './components/about/index.jsx';
import { Student } from './components/student/index.jsx';
import { Addstudent } from './components/AddStudent';
import { Editstudents } from './components/Editstudents';
import { Redirect } from './components/redirect';
import { NotFound } from './components/notFound';
import { Mensagem, Posts } from './components/Post';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route path='/redirect' element={<Redirect/>}/>
        <Route path='/about/:id' element={<About/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Student/>}/>
        <Route path='/add-student' element={<Addstudent/>}/>
        <Route path='/edit-student/:id' element={<Editstudents/>}/>
        
        {/* tratamento para página que não existe */}
        <Route path='*' element={<NotFound/>}/>
        
        {/* rotas alinhadas */}
        <Route path='/posts' element={<Posts/>}>
          <Route path=':id' element={<Mensagem/>}/>
        </Route>
        
      </Routes>

    </Router>
  </React.StrictMode>,
)
