


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

        static imprimir(){ 
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

        // métodos estáticos de acesso que retornam as propriedades privadas correspondentes.

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
        Estoque.produtos.push(p);
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

