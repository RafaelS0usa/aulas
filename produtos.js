var listaProdutos = [
    {
        id: 1,
        nome: 'Coleira doguinho',
        descricao: 'Coleira estilosa para cachorro de rico',
        imgUrl: 'https://m.media-amazon.com/images/I/61meFerCweL._AC_SX679_.jpg',
        valor: 'R$ 50.00'
    },
    {
        id: 2,
        nome: 'Bacia para cachorro',
        descricao: 'Aço inox, fácil de lavar, antiderrapante',
        imgUrl: 'https://www.petlove.com.br/images/products/251760/small/Bowl_Future_Pet_para_C%C3%A3es_e_Gatos_-_1100_mL_2765008_%281%29.jpg?1642454448',
        valor: 'R$ 110.42'
    },
    {
        id: 3,
        nome: 'Ração seca',
        descricao: 'Contém em sua composição extrato de yucca, que atua na redução de odor das fezes',
        imgUrl: 'https://www.petlove.com.br/images/products/250928/product/2697118_Nutrilus-Prime-Ra%C3%A7as-M%C3%A9dias.jpg?1636403533',
        valor: 'R$ 220.72'
    },
    {
        id: 4,
        nome: 'Brinquedo colorido para pássaros',
        descricao: 'Brinquedo Kakatoo Bica Pedra 6 Nós para Pássaros, Cores Sortidas',
        imgUrl: "https://static.petz.com.br/fotos/1630352488091_mini.jpg",
        valor: 'R$ 33.99'
    }
]

var docTitle = true;
setInterval(function () {
    document.title = docTitle ? '(1)Novo produto' : 'Lista Produtos!';
    docTitle = !docTitle
}, 1000)

function loadProdutos() {
    // Obtém a div.class = 'produtos-lista'
    var coluna1 = document.querySelector('.produtos-lista');
    // Obtém a div.id = 'listaProd'
    var divRow = document.getElementById('listaProd');

    // Percorrer todo array de produtos
    for (var i = 0; i < listaProdutos.length; i++) {

        var valor = listaProdutos[i].valor
        
        var descricao = listaProdutos[i].descricao
        
        var colunaClone = coluna1.cloneNode(true);
        
        var card = colunaClone.querySelector('.card');

        var img = card.getElementsByTagName('img')[0];
        img.setAttribute('src', listaProdutos[i].imgUrl)

        var cardTitle = card.getElementsByClassName('card-title')[0];
        cardTitle.innerHTML = listaProdutos[i].nome;
        
        var cardValor = card.getElementsByClassName('badge')[0];
        cardValor.innerHTML = valor;
        console.log(cardValor, 'Cardvalor')

        var cardDescricao = card.getElementsByClassName('card-descricao')[0];
        cardDescricao.innerHTML = descricao;
        console.log(cardDescricao, 'Cardescricao')
        
        divRow.appendChild(colunaClone);
    }

    coluna1.style.display = 'none';

    function newFunction() {
        console.log(cardDescricao);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadProdutos()
});
