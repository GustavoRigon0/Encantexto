import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

const produtos = [
  { id: 1, name: 'Kit 3 Pincéis', price: 29.9, category: 'Pincéis' },
  { id: 2, name: 'Tinta PRETO GIGANTE 500ml', price: 19.9, category: 'Tinta' },
  { id: 3, name: 'Papel A4 100 folhas', price: 24.5, category: 'Papel' },
]

app.get('/produtos', (req, res) => {
  console.log('GET /produtos - mandei a lista')
  res.json(produtos)
})


app.get('/produtos/:id', (req, res) => {
  const produto = produtos.find((p) => p.id == req.params.id)

  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado' })
  }

  res.json(produto)
})

// Só um GET / (pra eu ver se a API tá viva no navegador)
app.get('/', (req, res) => {
  res.json({ mensagem: 'API de teste no ar. Tenta /produtos' })
})

const PORTAGEM = 3000

app.listen(PORTAGEM, () => {
  console.log(`API de teste rodando em http://localhost:${PORTAGEM}`)
})