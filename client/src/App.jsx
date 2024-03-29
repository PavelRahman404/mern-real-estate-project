import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <BrowserRouter>
      
      <Routes>
      <Header />
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        
       
      </Routes>
    </BrowserRouter>
  );
}
