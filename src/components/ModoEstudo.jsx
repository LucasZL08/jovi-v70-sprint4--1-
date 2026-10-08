import { useState } from 'react'
import Secao from './Secao'
import { apps } from '../data/dados'

function ModoEstudo() {
  const [ativo, setAtivo] = useState(false)

  return (
    <Secao id="modo-estudo" titulo="Experimente o Modo Estudo">
      <p className="mb-4">
        Ligue o Modo Estudo e veja como o Jovi-v70 bloqueia as redes sociais e libera
        apenas os sites educativos.
      </p>

      <div className="flex flex-col items-center gap-4 rounded-md bg-cartao p-6">
        <p className={`text-xl font-bold ${ativo ? 'text-verde' : 'text-cinza'}`}>
          {ativo ? '🔒 Modo Estudo ligado' : 'Modo Estudo desligado'}
        </p>

        <button
          type="button"
          onClick={() => setAtivo(!ativo)}
          className="rounded bg-roxo px-6 py-3 font-bold text-white transition-colors hover:bg-roxo-claro"
        >
          {ativo ? 'Desligar' : 'Ligar'}
        </button>

        <ul className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => {
            const bloqueado = ativo && !app.educativo

            return (
              <li
                key={app.nome}
                className="flex items-center justify-between rounded bg-fundo p-3"
              >
                <span>{app.nome}</span>
                <span className={bloqueado ? 'font-bold text-red-400' : 'font-bold text-verde'}>
                  {bloqueado ? 'Bloqueado' : 'Liberado'}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </Secao>
  )
}

export default ModoEstudo
