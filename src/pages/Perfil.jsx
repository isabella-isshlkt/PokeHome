import { useState } from "react";
import { buscarAdocoes } from "../utils/adocoes";


function Perfil() {

  const [adocoes] = useState(
    buscarAdocoes()
  );


  return (

    <main className="section">

      <h1>Meu Perfil 👤</h1>


      <section className="profile">

        {/* INFORMAÇÕES DO USUÁRIO */}

        <div className="profile-header">

          <div className="avatar">
            👤
          </div>

          <div>

            <h2>
              Treinador
            </h2>

            <p>
              treinador@email.com
            </p>

          </div>

        </div>


        {/* MINHAS ADOÇÕES */}

        <div className="profile-section">

          <h2>
            🐾 Minhas adoções
          </h2>


          {adocoes.length === 0 ? (

            <p>
              Você ainda não possui pedidos de adoção.
            </p>

          ) : (

            <div className="adoptions-list">

              {adocoes.map((adocao) => (

                <div
                  className="adoption"
                  key={adocao.id}
                >

                  <div className="adoption-pokemon">

                    <span className="adoption-emoji">
                      {adocao.pokemonEmoji}
                    </span>

                    <div>

                      <h3>
                        {adocao.pokemonNome}
                      </h3>

                      <p>
                        Pedido feito por:{" "}
                        {adocao.nomeUsuario}
                      </p>

                    </div>

                  </div>


                  <p>

                    <strong>
                      Status:
                    </strong>

                    <span className="pending">
                      🟡 {adocao.status}
                    </span>

                  </p>

                </div>

              ))}

            </div>

          )}

        </div>


        {/* CARRINHO */}

        <div className="profile-section">

          <h2>
            🛒 Meu carrinho
          </h2>

          <p>
            Seu carrinho está vazio.
          </p>

        </div>


        {/* INVENTÁRIO */}

        <div className="profile-section">

          <h2>
            🎒 Meu inventário
          </h2>

          <p>
            Você ainda não possui itens.
          </p>

        </div>

      </section>

    </main>

  );
}


export default Perfil;