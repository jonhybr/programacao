let livraria = [
    {
        nomeDoLivro: "Dom Quixote",
        autor: {
            nome: "Miguel Cervantes",
            idade: 29,
            qtdObras: 3,
            nacionalidade: "Espanha"
        },
        editora: "Ática",
        ano: 2019,
        paginas: 319,
        preco: 19,
        genero: "romance",
    },
    {
        nomeDoLivro: "Elementos Vol.1 Água",
        autor: {
            nome: "Yan",
            idade: 17,
            qtdObras: 4,
            nacionalidade: "Croacia"
        },
        editora: "Vida",
        ano: 2010,
        paginas: 224,
        preco: 32,
        genero: "suspense"
    },
    {
        nomeDoLivro: "Elementos Vol.2 Fogo",
        autor: {
            nome: "Yan",
            idade: 17,
            qtdObras: 4,
            nacionalidade: "Croacia"
        },
        editora: "Vida",
        ano: 2011,
        paginas: 254,
        preco: 33,
        genero: "mistério"
    },
    {
        nomeDoLivro: "Elementos Vol.3 Terra",
        autor: {
            nome: "Yan",
            idade: 17,
            qtdObras: 4,
            nacionalidade: "Croacia"
        },
        editora: "Vida",
        ano: 2012,
        paginas: 216,
        preco: 31,
        genero: "suspense"
    },
    {
        nomeDoLivro: "Elementos Vol.4 Ar",
        autor: {
            nome: "Yan",
            idade: 17,
            qtdObras: 4,
            nacionalidade: "Croacia"
        },
        editora: "Vida",
        ano: 2013,
        paginas: 250,
        preco: 35,
        genero: "romance"
    },
    {
        nomeDoLivro: "A guerra dos Elementos",
        autor: {
            nome: "Ryan",
            idade: 21,
            qtdObras: 1,
            nacionalidade: "Croacia"
        },
        editora: "Tempo",
        ano: 2015,
        paginas: 330,
        preco: 40,
        genero: "suspense"
    },
    {
        nomeDoLivro: "Harry Potter",
        autor: {
            nome: "J.K. Rowling",
            idade: 61,
            qtdObras: 11,
            nacionalidade: "Inglêsa"
        },
        editora: "Rocco",
        ano: 2003,
        paginas: 295,
        preco: 40,
        genero: "mistério"
    },
    {
        nomeDoLivro: "Alice no país das maravilhas",
        autor: {
            nome: "Lewis Carroll",
            idade: 54,
            qtdObras: 4,
            nacionalidade: "Inglêsa"
        },
        editora: "Zahar",
        ano: 1956,
        paginas: 220,
        preco: 23,
        genero: "mistério"
    }
]

let tituloLivro = document.createElement("h2");

let informacoes = document.createElement("h3");
informacoes.setAttribute('style', 'white-space: pre;');



function mostrarLivros() {
    let final = document.createElement('div')
    for (let livro of livraria) {
        tituloLivro.textContent = (livro.nomeDoLivro + "\n");
        informacoes.textContent = 
        `Autor: ${livro.autor.nome}\nEditora: ${livro.editora}\nPáginas: ${livro.paginas}\nGenêro: ${livro.genero}\n`+
        `Preço: R$ ${livro.preco}`;

        final.append(tituloLivro.cloneNode(true));
        final.append(informacoes.cloneNode(true));        
        document.getElementById('grid-livros').appendChild(final)
        final = document.createElement('div')
    }
    
}

mostrarLivros();