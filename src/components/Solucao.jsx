import Secao from './Secao'
import { funcionalidades } from '../data/dados'

function Solucao() {
  return (
    <Secao id="solucao" titulo="A Solução">
      <p>
        O <strong>Jovi-v70</strong> é um aplicativo focado na produtividade dos estudantes.
        Ele ajuda a manter o foco bloqueando redes sociais e organizando os estudos.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {funcionalidades.map((item) => (
          <article key={item.titulo} className="rounded-md bg-cartao p-4">
            <h3 className="mb-2 text-lg font-bold text-verde">{item.titulo}</h3>
            <p>{item.texto}</p>
          </article>
        ))}
      </div>
    </Secao>
  )
}

export default Solucao
