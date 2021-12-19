import { FC } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css';
import { RegisterCat } from './Module/RegisterCat/RegisterCat'

export const routes = {
  register: '/register',
}
const App: FC = () => {
  return (
  //   <RegisterCat/>
    <BrowserRouter>
        <Routes>
          <Route path={routes.register} element={<RegisterCat/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
