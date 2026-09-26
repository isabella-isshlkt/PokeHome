function Produtos() {

  const produtos = [
    {
      nome: "Poké Ball",
      categoria: "Pokébolas",
      preco: 200,
      emoji: "⚪"
    },
    {
      nome: "Great Ball",
      categoria: "Pokébolas",
      preco: 600,
      emoji: "🔵"
    },
    {
      nome: "Potion",
      categoria: "Cura",
      preco: 300,
      emoji: "💊"
    },
    {
      nome: "Super Potion",
      categoria: "Cura",
      preco: 700,
      emoji: "🧪"
    },
    {
      nome: "Rare Candy",
      categoria: "Itens especiais",
      preco: 4800,
      emoji: "🍬"
    },
    {
      nome: "Fire Stone",
      categoria: "Evolução",
      preco: 2100,
      emoji: "🔥"
    }
  ];

  return (
    <main className="section">

      <h1>Produtos 🛍️</h1>

      <p>
        Encontre itens para cuidar e acompanhar seu Pokémon.
      </p>


      <div className="categories">

        <button>Todos</button>
        <button>Pokébolas</button>
        <button>Cura</button>
        <button>Alimentação</button>
        <button>Utilidades</button>
        <button>Itens especiais</button>

      </div>


      <div className="cards">

        {produtos.map((produto) => (

          <div className="product-card" key={produto.nome}>

            <div className="product-image">
              {produto.emoji}
            </div>

            <h2>{produto.nome}</h2>

            <p>{produto.categoria}</p>

            <h3>₽ {produto.preco}</h3>

            <button>
              Adicionar ao carrinho 🛒
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Produtos;