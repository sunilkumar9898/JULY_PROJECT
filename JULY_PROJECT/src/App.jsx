import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer';




function App() {
  const [count, setCount] = useState(0)

  return (
      <>

              <Navbar />

              <Footer />

      </>
  );
}

export default App
