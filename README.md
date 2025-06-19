# 🎲 Bingo Digital - Sorteio Visual com Animações

Uma aplicação web simples e divertida para realizar sorteios de números de bingo com interface visual atrativa. 

<br>

## ✨ Funcionalidades:

- Sorteio dinâmico de números
- Animação de embaralhamento com destaque piscante e brilhante
- Lista de números já sorteados
- Configuração inicial da quantidade de números a serem sorteados

<br><br>

## 🔧 Instalação Local

```bash
git clone https://github.com/jandercalmeida/bingo-digital.git 
cd bingo-digital
```

```bash
docker build -t bingo-digital . 
```

```bash
docker run -d -p 8080:3000 --name bingo-digital bingo-digital
```

<br><br>

## 📦 Como executar pull do dockerhub:

```bash
docker run -d -p 8080:3000 --name bingo-digital jndalmeida/bingo-digital:latest
```

#### Acesse no navegador: [http://localhost:8080](http://localhost:8080/)

<br>

🛠️ Desenvolvido com Node.js + Express. Fácil de rodar e personalizar!