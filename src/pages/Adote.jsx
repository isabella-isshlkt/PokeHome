import { Link } from "react-router-dom";

export const pokemons = [
  {
    id: 1,
    nome: "Eevee",
    tipo: "Normal",
    personalidade: "Carinhoso e curioso",
    emoji: "🦊",
    descricao:
      "Eevee é um Pokémon muito amigável, curioso e cheio de energia. Ele adora brincar e explorar novos lugares."
  },
  {
    id: 2,
    nome: "Pikachu",
    tipo: "Elétrico",
    personalidade: "Energético e amigável",
    emoji: "⚡",
    descricao:
      "Pikachu é um Pokémon alegre e energético que gosta de brincar e passar tempo com seu treinador."
  },
  {
    id: 3,
    nome: "Vulpix",
    tipo: "Fogo",
    personalidade: "Inteligente e brincalhão",
    emoji: "🔥",
    descricao:
      "Vulpix é inteligente, elegante e brincalhão. Ele gosta de receber carinho e atenção."
  },
  {
    id: 4,
    nome: "Squirtle",
    tipo: "Água",
    personalidade: "Calmo e companheiro",
    emoji: "💧",
    descricao:
      "Squirtle é um Pokémon tranquilo e companheiro que gosta de passar tempo ao lado de seu treinador."
  }
];

function Adote() {
  return (
    <main className="section">

      <h1>Adote aqui! 🐾</h1>

      <p>
        Conheça os Pokémon que estão esperando por um novo lar.
      </p>

      <div className="cards">

        {pokemons.map((pokemon) => (

          <div
            className="pokemon-card"
            key={pokemon.id}
          >

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

            <Link
              to={`/pokemon/${pokemon.id}`}
              className="button-link"
            >
              Conhecer Pokémon
            </Link>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Adote;