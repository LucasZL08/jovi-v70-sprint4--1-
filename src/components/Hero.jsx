function Hero() {
  return (
    <section className="mb-6 rounded-lg bg-superficie px-6 py-12 text-center">
      <h2 className="mb-3 text-3xl font-bold md:text-5xl">
        Estude sem distrações com o <span className="text-roxo">Jovi-v70</span>
      </h2>
      <p className="mx-auto mb-6 max-w-xl text-cinza">
        O aplicativo que bloqueia redes sociais, organiza seus estudos e transforma
        fotos do caderno em resumos.
      </p>
      <a
        href="#modo-estudo"
        className="inline-block rounded bg-roxo px-6 py-3 font-bold text-white transition-colors hover:bg-roxo-claro"
      >
        Testar o Modo Estudo
      </a>
    </section>
  )
}

export default Hero
