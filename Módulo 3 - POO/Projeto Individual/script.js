
//let register = [];

class Catalogo{ // gerencia a interface do usuário e interagi com o HTML

    static #name; //propriedades privadas estáticas da classe que armazena referências ao elemento HTML com IDS.
    static #price;
    static #itens;


    constructor(){}

        static init(){ //inicializa a classe  e adiciona um ouviente de eventos
            this.#name = document.querySelector("#name"); //seleciona os elementos Html com Ids
            this.#price = document.querySelector("#price");
            this.#itens = document.querySelector("#itens");

            this.formCadastro = document.querySelector("form"); //obtem uma referênia ao HTMl e atribui a propriedade formCadastro
            this.formCadastro.addEventListener("submit", Estoque.cadastrarProdutos); //add o evento de envio do fomr que chama o met da classe Cadastro
        }

        static imprimir(){ // cria os elementos HTML com base nos produtos armazenados em estoque.produtos
            const lista = Estoque.produtos.reduce((acc, value) => {
                return acc + `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="./img/cesta1.jpeg" alt="Card image cap">
                    <div class="card-body">
                        <div id="description"><p>Nome:${value.name}</p></div>
                        <div id="description"><p>Preço:R$${value.price}</p></div>
                        <div id="description"><p>Ítens:${value.itens}</p></div>
                        <div id="description"><p>ID:${value.id}</p></div>
                    </div>
                    <div class="butt">
                        <button editar-id=${value.id} class="editar">Editar</button>
                        <button excluir-id="${value.id}" class="excluir">Excluir</button>
                    </div>
                </div>

                `;
                
            },"");
            document.querySelector("#itens-product").innerHTML = lista;
            Catalogo.adicionarExcluir();
        }

        static adicionarExcluir() {
            document.querySelectorAll(".excluir").forEach((botao) => {
                botao.addEventListener("click", () => {
                    const idProduto = botao.getAttribute("excluir-id");
                    Estoque.excluirProduto(idProduto);
                });
            });
        }   

        //Estes são métodos estáticos de acesso que retornam as propriedades privadas correspondentes.

        static get name() {
            return this.#name;
        }
        static get price() {
            return this.#price;
        }
        static get itens() {
            return this.#itens;
        }
}


let id = 1;

class Produto {
    #name
    #price
    #itens
    constructor(name, price, itens) {
        this.id = id++
        this.#name = name;
        this.#price = price;
        this.#itens = itens;
    }

    get name() {
        return this.#name;
    }
    get price() {
        return this.#price;
    }
    get itens() {
        return this.#itens;
    }

}

class Estoque{
    static produtos = [];
    constructor(){}

    static cadastrarProdutos(e) {
        e.preventDefault();
        const p = new Produto(
            Catalogo.name.value,
            Catalogo.price.value,
            Catalogo.itens.value
        );
        Estoque.produtos.push(p); // Adiciona o produto à lista de produtos em Catalogo
        Catalogo.imprimir();


        Catalogo.name.value = "";
        Catalogo.price.value = "";
        Catalogo.itens.value = "";
    }

    static excluirProduto(idProduto) {
        Estoque.produtos = Estoque.produtos.filter((produto) => produto.id.toString() !== idProduto);
        Catalogo.imprimir(); // Atualiza a lista após a exclusão
    }
   

}

Catalogo.init();


















/*
// Função para lidar com o formulário HTML
function cadastrarProduto() {
    const nome = document.querySelector("#name").value;
    const preco = document.querySelector("#price").value;
    const itens = document.querySelector("#itens").value;

    const novoProduto = new Produto(nome, preco, itens);
    register.push(novoProduto);

    Catalogo.imprimir(); // Atualize a exibição após cadastrar um produto

    // Limpe os campos do formulário após o cadastro
    document.querySelector("#name").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#itens").value = "";
}

// Adicione um ouvinte de eventos ao botão "Cadastrar"
document.querySelector("#register").addEventListener("click", cadastrarProduto);

*/

// Inicialize a exibição de produtos vazia
//Catalogo.imprimir();




/*A classe Catalogo cuida da interação com o HTML e exibe os produtos, 
a classe Produto define a estrutura dos produtos e a classe Estoque gerencia a lista de produtos.
 Quando um novo produto é cadastrado, ele é adicionado à lista em Estoque.produtos e a interface 
do usuário é atualizada para refletir a lista atualizada de produtos.
 Além disso, os campos do formulário são limpos após o cadastro.*/


