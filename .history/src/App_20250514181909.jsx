import Banner from "./components/Banner/Banner"
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import './index.css'

function App() {
  return (
    <main className="w-main mx-auto">
      <Header />
      <Banner />
      <Content />
      <Footer />
    </main>
  )
}

export default App
