import { useEffect, useState } from 'react'

const URL_DA_API = import.meta.env.VITE_API_URL

export default function App() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

  useEffect(() => {
    fetch(`${URL_DA_API}/produtos`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setProdutos(dados)
        setCarregando(false)
      })
      .catch(() => {
        setErro('Não consegui falar com a API. Ela está rodando?')
        setCarregando(false)
      })
  }, [])

  return (
    <main>
      <h1>Encantexto</h1>
      <p>Esqueleto</p>

      {carregando && <p>Carregando produtos...</p>}

      {erro && <p>{erro}</p>}

      {!carregando && !erro && (
        <ul>
          <li>Total de produtos vindos da API: {produtos.length}</li>
          {produtos.map((produto) => (
            <li key={produto.id}>
              {produto.name} — R$ {produto.price}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}