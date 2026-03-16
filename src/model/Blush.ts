import { Produto} from "./Produto";

export class Blush extends Produto {
    
    private _tipo: string; 

    //id, nome, preço, estoque
    constructor (id: number, nome: string, preco:number, estoque:number, tipo:string){
        super(id,nome,preco,estoque)
        this._tipo = tipo;
    } 

    public get tipo() {
        return this._tipo;
    }

    public set tipo(tipo: string) {
        this._tipo = tipo;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("O tipo do Blush (líquido, pó, creme) : " + this._tipo);
    }
}