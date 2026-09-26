function Perfil() {
  return (
    <main className="section">

      <h1>Meu Perfil 👤</h1>

      <section className="profile">

        <div className="profile-header">

          <div className="avatar">
            👤
          </div>

          <div>
            <h2>Treinador</h2>
            <p>treinador@email.com</p>
          </div>

        </div>


        <div className="profile-section">

          <h2>🐾 Minhas adoções</h2>

          <div className="adoption">

            <h3>🦊 Eevee</h3>

            <p>
              Status:
              <span className="pending">
                🟡 Em análise
              </span>
            </p>

          </div>

        </div>


        <div className="profile-section">

          <h2>🛒 Meu carrinho</h2>

          <p>
            Seu carrinho está vazio.
          </p>

        </div>


        <div className="profile-section">

          <h2>🎒 Meu inventário</h2>

          <p>
            Você ainda não possui itens.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Perfil;