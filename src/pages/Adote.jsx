function Adote() {

  const pokemons = [
    {
      nome: "Eevee",
      tipo: "Normal",
      personalidade: "Carinhoso e curioso",
      emoji: "🦊"
    },
    {
      nome: "Pikachu",
      tipo: "Elétrico",
      personalidade: "Energético e amigável",
      emoji: "⚡"
    },
    {
      nome: "Vulpix",
      tipo: "Fogo",
      personalidade: "Inteligente e brincalhão",
      emoji: "🔥"
    },
    {
      nome: "Squirtle",
      tipo: "Água",
      personalidade: "Calmo e companheiro",
      emoji: "💧"
    }
  ];

  return (
    <main className="section">

      <h1>Adote aqui! 🐾</h1>

      <p>
        Conheça os Pokémon que estão esperando por um novo lar.
      </p>


      <div className="cards">

        {pokemons.map((pokemon) => (

          <div className="pokemon-card" key={pokemon.nome}>

            <div className="pokemon-image">
              {pokemon.emoji}
            </div>

            <h2>{pokemon.nome}</h2>

            <p>
              <strong>Tipo:</strong> {pokemon.tipo}
            </p>

            <p>
              <strong>Personalidade:</strong>{" "}
              {pokemon.personalidade}
            </p>

            <p className="available">
              🟢 Disponível
            </p>

            <button>Quero conhecer!</button>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Adote;