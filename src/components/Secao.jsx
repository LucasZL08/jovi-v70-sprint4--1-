function Secao({ id, titulo, children }) {
  return (
    <section id={id} className="mb-6 scroll-mt-24 rounded-lg bg-superficie p-6">
      <h2 className="mb-4 border-b-2 border-cartao pb-1 text-2xl font-bold text-roxo">
        {titulo}
      </h2>
      {children}
    </section>
  )
}

export default Secao
