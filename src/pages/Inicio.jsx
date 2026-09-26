function Inicio() {
  return (
    <main>

      <section className="hero">
        <h1>Bem-vindo ao PokéHome! 🏠</h1>

        <p>
          Encontre um novo companheiro Pokémon para chamar de seu.
        </p>

        <button>Adote agora!</button>
      </section>


      <section className="section">

        <h2>Conheça o PokéHome</h2>

        <p>
          O PokéHome é um centro de adoção dedicado a conectar
          Pokémon que procuram um lar com novos treinadores.
        </p>

      </section>


      <section className="section">

        <h2>Explore nosso site</h2>

        <div className="cards">

          <div className="card">
            <h3>🐾 Adote um Pokémon</h3>
            <p>
              Encontre Pokémon que estão esperando por um novo lar.
            </p>
          </div>

          <div className="card">
            <h3>📋 Como adotar?</h3>
            <p>
              Descubra como funciona o processo de adoção.
            </p>
          </div>

          <div className="card">
            <h3>🛍️ Produtos</h3>
            <p>
              Encontre itens para cuidar do seu Pokémon.
            </p>
          </div>

          <div className="card">
            <h3>❤️ Sobre nós</h3>
            <p>
              Conheça a história e a missão do PokéHome.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Inicio;