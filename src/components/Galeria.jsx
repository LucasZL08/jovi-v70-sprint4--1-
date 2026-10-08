import Secao from './Secao'
import { galeria } from '../data/dados'

function Galeria() {
  return (
    <Secao id="galeria" titulo="Galeria">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {galeria.map((nome) => (
          <div
            key={nome}
            className="grid h-32 place-items-center rounded-md border-2 border-dashed border-roxo-forte bg-cartao text-center font-bold"
          >
            {nome}
          </div>
        ))}
      </div>
    </Secao>
  )
}

export default Galeria
