import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header headerText="Creating a Simple React Application"/>
    <Content/>
    <Footer/>
    </>
  )
}

export default App
