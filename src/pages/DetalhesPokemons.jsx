import { Link, useParams } from "react-router-dom";
import { pokemons } from "./Adote";

function DetalhesPokemons() {

  const { id } = useParams();

  const pokemon = pokemons.find(
    (pokemon) => pokemon.id === Number(id)
  );

  if (!pokemon) {
    return (
      <main className="section">

        <h1>Pokémon não encontrado 😢</h1>

        <Link to="/adote">
          Voltar para os Pokémon
        </Link>

      </main>
    );
  }

  return (
    <main className="section">

      <div className="pokemon-details">

        <div className="pokemon-details-image">
          {pokemon.emoji}
        </div>

        <div className="pokemon-details-info">

          <h1>{pokemon.nome}</h1>

          <p>
            <strong>Tipo:</strong> {pokemon.tipo}
          </p>

          <p>
            <strong>Personalidade:</strong>{" "}
            {pokemon.personalidade}
          </p>

          <p>
            {pokemon.descricao}
          </p>

          <p className="available">
            🟢 Disponível para adoção
          </p>

          <Link
            to={`/adotar/${pokemon.id}`}
            className="button-link"
          >
            Quero adotar! 💚
          </Link>

          <Link
            to="/adote"
            className="back-link"
          >
            ← Voltar para os Pokémon
          </Link>

        </div>

      </div>

    </main>
  );
}

export default DetalhesPokemons;