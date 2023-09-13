
class Catalogo{ 

    static #nome; 
    static #preco;
    static #itens;


    constructor(){}

        static init(){ 
            this.#nome = document.querySelector("#nome"); 
            this.#preco = document.querySelector("#preco");
            this.#itens = document.querySelector("#itens");

            this.formCadastro = document.querySelector("form"); 
            this.formCadastro.addEventListener("submit", Estoque.cadastrarProdutos); 
        }

        static imprimir(){ 
            const lista = Estoque.produtos.reduce((acc, value) => {
                return acc + `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="./img/cesta1.jpeg" alt="Card image cap">
                    <div class="card-body">
                        <div id="description"><p>Nome:${value.nome}</p></div>
                        <div id="description"><p>Preço:R$${value.preco}</p></div>
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
            Catalogo.adicionarEventoEditar();
        }

        static adicionarExcluir() {
            document.querySelectorAll(".excluir").forEach((botao) => {
                botao.addEventListener("click", () => {
                    const idProduto = botao.getAttribute("excluir-id");
                    Estoque.excluirProduto(idProduto);
                });
            });
        }   

        static adicionarEventoEditar() {
            document.querySelectorAll(".editar").forEach((botao) => {
                botao.addEventListener("click", () => {
                    const idProduto = botao.getAttribute("editar-id");
                    const produto = Estoque.produtos.find((p) => p.id.toString() === idProduto);
                    if (produto) {
                        const novoNome = prompt("Novo nome:", produto.nome);
                        const novoPreco = prompt("Novo preço:", produto.preco);
                        const novoItens = prompt("Novos itens:", produto.itens);
                        if (novoNome !== null && novoPreco !== null && novoItens !== null) {
                            Estoque.editarProduto(idProduto, novoNome, novoPreco, novoItens);
                        }
                    }
                });
            });
        }


        static get nome() {
            return this.#nome;
        }
        static get preco() {
            return this.#preco;
        }
        static get itens() {
            return this.#itens;
        }
}

let id = 1;

class Produto {
    #nome
    #preco
    #itens
    constructor(nome, preco, itens) {
        this.id = id++
        this.#nome = nome;
        this.#preco = preco;
        this.#itens = itens;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        this.#nome = novoNome;
      }

    get preco() {
        return this.#preco;
    }

    set preco(novoPreco) {
        this.#preco = novoPreco;
      }

    get itens() {
        return this.#itens;
    }

    set itens(novoItens) {
        this.#itens = novoItens;
    }

}




class Estoque{
    static produtos = [];
    constructor(){}

    static cadastrarProdutos(e) {
        e.preventDefault();
        const p = new Produto(
            Catalogo.nome.value,
            Catalogo.preco.value,
            Catalogo.itens.value
        );
        Estoque.produtos.push(p);
        Catalogo.imprimir();


        Catalogo.nome.value = "";
        Catalogo.preco.value = "";
        Catalogo.itens.value = "";
    }

    static excluirProduto(idProduto) {
        Estoque.produtos = Estoque.produtos.filter((produto) => produto.id.toString() !== idProduto);
        Catalogo.imprimir(); // Atualiza a lista após a exclusão
    }
   
    static editarProduto(idProduto, novoNome, novoPreco, novoItens) {
        const produto = Estoque.produtos.find((p) => p.id.toString() === idProduto);
        if (produto) {
            produto.nome = novoNome;
            produto.preco = novoPreco;
            produto.itens = novoItens;
            Catalogo.imprimir();
        }
    }

}

Catalogo.init();