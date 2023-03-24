import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact, NoPage,Skills } from '../screens';


export const Router = () => {
  return (
    <>
        <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </>
  )
}
