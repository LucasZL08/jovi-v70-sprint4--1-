import Secao from './Secao'
import { equipe } from '../data/dados'

function Equipe() {
  return (
    <Secao id="equipe" titulo="Nossa Equipe">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {equipe.map((pessoa) => (
          <article key={pessoa.nome} className="rounded-md bg-cartao p-4">
            <h3 className="mb-2 text-lg font-bold text-verde">{pessoa.nome}</h3>
            <p>
              <strong>Função:</strong> {pessoa.funcao}
            </p>
            <p>{pessoa.descricao}</p>
          </article>
        ))}
      </div>
    </Secao>
  )
}

export default Equipe
