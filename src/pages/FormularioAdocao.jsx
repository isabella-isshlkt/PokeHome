import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { pokemons } from "./Adote";
import { salvarAdocao } from "../utils/adocoes";


function FormularioAdocao() {

  const { id } = useParams();

  const pokemon = pokemons.find(
    (pokemon) => pokemon.id === Number(id)
  );


  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [motivo, setMotivo] = useState("");

  const [enviado, setEnviado] = useState(false);


  function enviarFormulario(event) {

    event.preventDefault();


    const novaAdocao = {

      id: Date.now(),

      pokemonId: pokemon.id,

      pokemonNome: pokemon.nome,

      pokemonEmoji: pokemon.emoji,

      nomeUsuario: nome,

      emailUsuario: email,

      motivo: motivo,

      status: "Em análise"

    };


    salvarAdocao(novaAdocao);


    setEnviado(true);
  }


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


  if (enviado) {

    return (

      <main className="section success">

        <h1>Pedido enviado! 🎉</h1>

        <p>
          Seu pedido de adoção do{" "}
          <strong>{pokemon.nome}</strong>{" "}
          foi enviado para análise.
        </p>

        <p>
          Você poderá acompanhar o status
          através do seu perfil.
        </p>


        <Link
          to="/perfil"
          className="button-link"
        >
          Ver minhas adoções
        </Link>

      </main>

    );

  }


  return (

    <main className="section">

      <h1>Pedido de adoção 📝</h1>

      <p>
        Você está solicitando a adoção de:
      </p>


      <div className="selected-pokemon">

        <span>
          {pokemon.emoji}
        </span>

        <h2>
          {pokemon.nome}
        </h2>

      </div>


      <form
        className="adoption-form"
        onSubmit={enviarFormulario}
      >

        <label>
          Seu nome
        </label>

        <input
          type="text"
          value={nome}
          onChange={(event) =>
            setNome(event.target.value)
          }
          placeholder="Digite seu nome"
          required
        />


        <label>
          E-mail
        </label>

        <input
          type="email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          placeholder="Digite seu e-mail"
          required
        />


        <label>
          Por que você gostaria de adotar este Pokémon?
        </label>

        <textarea
          value={motivo}
          onChange={(event) =>
            setMotivo(event.target.value)
          }
          placeholder="Conte um pouco sobre o motivo..."
          rows="5"
          required
        />


        <button type="submit">
          Enviar pedido 💚
        </button>

      </form>

    </main>

  );
}


export default FormularioAdocao;