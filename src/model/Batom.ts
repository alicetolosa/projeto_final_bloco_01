import { Produto} from "./Produto";

export class Batom extends Produto {
    
    private _cor: string; 

    
    //id, nome, preço, estoque
    constructor(id: number, nome:string, preco: number, estoque: number, cor:string){
        super(id, nome, preco, estoque);
        this._cor = cor;
    }

    public get cor(){
        return this._cor;
    }

    public set cor(cor: string){
        this._cor = cor;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("A cor do Batom é: " + this._cor)
    }
}