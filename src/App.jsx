import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from '@/pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { Toaster } from "@/components/ui/toaster";

function App() {


  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>    
      </BrowserRouter>
    </>
  )
}

export default App
