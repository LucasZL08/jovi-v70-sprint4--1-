import Header from './components/Header'
import Hero from './components/Hero'
import Solucao from './components/Solucao'
import Publico from './components/Publico'
import ModoEstudo from './components/ModoEstudo'
import Galeria from './components/Galeria'
import Equipe from './components/Equipe'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto my-5 max-w-5xl px-5">
        <Hero />
        <Solucao />
        <Publico />
        <ModoEstudo />
        <Galeria />
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App
