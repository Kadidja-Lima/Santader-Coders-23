const agenda = {
    contatos: [
      {
          nome: 'contato1',
          telefone: 'telefone1',
          email: 'email1@teste.com'
      },
      {
        nome: 'contato2',
        telefone: 'telefone2',
        email: 'email2@teste.com'
      },
      {
        nome: 'contato3',
        telefone: 'telefone3',
        email: 'email3@teste.com'
      },
      {
        nome: 'contato4',
        telefone: 'telefone4',
        email: 'email4@teste.com'
      }
    ],
    adicionar: function(contato){
        this.contatos.push(contato)
    }
  }
  
  const a = agenda;
  a.adicionar({nome: 'bruno', telefone: '3939', email: 'email@email'})
  console.log(a.contatos[4]);
  
  
  class Agenda {
    #contatos = [];
    constructor(){}
    adicionarContato(contato){
      if (contato.nome.trim() === "")
          return;
      this.contatos = contato;
    }
    get contatos(){
      return this.#contatos;
    }
    set contatos(contato) {
      this.#contatos.push(contato);
    }
  }

  class Contato {
    #nome;
    #telefone;
    #email;
    constructor(nome, telefone, email) {
      this.#nome = nome;
      this.#telefone = telefone;
      this.#email = email;
    }
    get nome(){
      return this.#nome;
    }
    get telefone() {
      return this.#telefone;
    }
    get email(){
      return this.#email;
    }
  }
  
  const ag = new Agenda();

const c = new Contato('contato 1', '11111', 'email@1');

ag.contatos = {nome: '', telefone: '2222', email: 'email@2'};
ag.adicionarContato({nome: '', telefone: '123', email: 'email'});
ag.adicionarContato(c);

console.log(ag.contatos[0].telefone);
console.log(ag.contatos[1].nome);