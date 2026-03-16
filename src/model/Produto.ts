export abstract class Produto {

    //Atributos da Classe Produto 
    private _id: number;
    private _nome: string;
    private _preco: number;
    private _estoque: number;


    // Método Construtor da Classe Conta. Através deste Método, poderemos criar novos Objetos da Classe Conta: Batom-Sombra-(pensar em quais).
    constructor(id: number, nome:string, preco: number, estoque:number) {
        this._id= id;
        this._nome = nome;
        this._preco = preco;
        this._estoque = estoque;
    }

    //Através destes Métodos, poderemos acessar e modificar os Atributos da Classe Conta, a partir de outras Classes
    //id
    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    //nome
    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    //preco
    public get preco() {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    //estoque
    public get estoque() {
        return this._estoque;
    }

    public set estoque(estoque: number) {
        this._estoque = estoque;
    }

    
    //3 Métodos Específicos na Classe Conta:Comprar/Repor estoque/Finalizar pedido
   
    
    public visualizar(): void {
 
        console.log("*************************************");
        console.log("Dados do Produto: ");
        console.log("*************************************");
        console.log("Id:" + this._id);
        console.log("Nome:" + this._nome);
        console.log("Preço:" + this._preco.toFixed(2));
        console.log("Estoque:" + this._estoque);
 
    }


    //id, nome, preço, estoque

}