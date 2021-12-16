import {Fragment} from 'react'
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header"

const App = () => {
  return (
    <Fragment>
      <Header  />
      <main className="h-screen bg-red-400">

      </main>
      <Footer />
      {/* <footer className="bg-blue-600 h-24"></footer> */}
    </Fragment>
  )
}

export default App
