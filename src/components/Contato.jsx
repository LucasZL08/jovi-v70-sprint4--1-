import { useState } from 'react'
import Secao from './Secao'

const campoClasse =
  'rounded border bg-fundo p-3 text-white placeholder:text-cinza focus:outline-none focus:ring-2 focus:ring-roxo'

function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [erros, setErros] = useState({})
  const [enviado, setEnviado] = useState(false)

  function aoDigitar(evento) {
    const { name, value } = evento.target
    setForm({ ...form, [name]: value })
  }

  function validar() {
    const novosErros = {}

    if (form.nome.trim().length < 3) {
      novosErros.nome = 'Digite seu nome (mínimo 3 letras).'
    }
    if (!form.email.includes('@') || !form.email.includes('.')) {
      novosErros.email = 'Digite um e-mail válido.'
    }
    if (form.mensagem.trim().length < 10) {
      novosErros.mensagem = 'A mensagem precisa ter pelo menos 10 caracteres.'
    }

    return novosErros
  }

  function aoEnviar(evento) {
    evento.preventDefault()

    const novosErros = validar()
    setErros(novosErros)

    if (Object.keys(novosErros).length === 0) {
      setEnviado(true)
      setForm({ nome: '', email: '', mensagem: '' })
    } else {
      setEnviado(false)
    }
  }

  return (
    <Secao id="contato" titulo="Contato">
      <form onSubmit={aoEnviar} noValidate className="flex flex-col gap-2">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={form.nome}
          onChange={aoDigitar}
          placeholder="Seu nome"
          className={`${campoClasse} ${erros.nome ? 'border-red-500' : 'border-cartao'}`}
        />
        {erros.nome && <p className="text-sm text-red-400">{erros.nome}</p>}

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={aoDigitar}
          placeholder="Seu e-mail"
          className={`${campoClasse} ${erros.email ? 'border-red-500' : 'border-cartao'}`}
        />
        {erros.email && <p className="text-sm text-red-400">{erros.email}</p>}

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="4"
          value={form.mensagem}
          onChange={aoDigitar}
          placeholder="Escreva sua mensagem"
          className={`${campoClasse} ${erros.mensagem ? 'border-red-500' : 'border-cartao'}`}
        />
        {erros.mensagem && <p className="text-sm text-red-400">{erros.mensagem}</p>}

        <button
          type="submit"
          className="mt-2 rounded bg-roxo p-3 font-bold text-white transition-colors hover:bg-roxo-claro"
        >
          Enviar
        </button>

        {enviado && (
          <p className="rounded bg-cartao p-3 font-bold text-verde" role="status">
            ✅ Mensagem enviada com sucesso! Obrigado pelo contato.
          </p>
        )}
      </form>
    </Secao>
  )
}

export default Contato
