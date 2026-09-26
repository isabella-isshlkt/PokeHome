const CHAVE_ADOCOES = "pokehome_adocoes";

// Busca todas as adoções salvas
export function buscarAdocoes() {
  const dados = localStorage.getItem(CHAVE_ADOCOES);

  if (!dados) {
    return [];
  }

  return JSON.parse(dados);
}


// Salva uma nova adoção
export function salvarAdocao(adocao) {
  const adocoes = buscarAdocoes();

  adocoes.push(adocao);

  localStorage.setItem(
    CHAVE_ADOCOES,
    JSON.stringify(adocoes)
  );
}