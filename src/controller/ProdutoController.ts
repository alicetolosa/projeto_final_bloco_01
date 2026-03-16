import { Produto } from "../model/Produto";
import { ProdutoRepository} from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array <Produto>();
    id: number = 0;
    

    procurarPorId(id: number): void {
        let busca = null;
        for (let produto of this.listaProdutos) {
            if (produto.id === id) {
                busca = produto;
            }
 
        } if (busca != null)
            busca.visualizar();
        else
            console.log("\nProduto não encontrado!");
    }
    listarTodas(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
        }
    }
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\n\n O produto: " + produto.id + " foi cadastrado com sucesso!");
    }
    atualizar(produto: Produto): void {
        let busca = null;
        for (let p of this.listaProdutos) {
            if (p.id === produto.id) {
                busca = p;
            }
        }
        if (busca != null) {
            this.listaProdutos[this.listaProdutos.indexOf(busca)] = produto;
            console.log("Produto atualizado com sucesso!");
 
        } else {
            console.log("Produto não encontrado.");
        }
    }

    deletar(id: number): void {
        try {
            let busca = null;
            for (let produto of this.listaProdutos) {
                if (produto.id === id) {
                    busca = produto;
                }
            }
            if (busca != null) {
                this.listaProdutos.splice(this.listaProdutos.indexOf(busca), 1);
                console.log("Produto removido com sucesso!");
            } else {
                console.log("Produto não encontrado.");
            }
        } catch (error) {
            console.log("Erro ao deletar produto.");
        }
    }



    /*Gerar Numero do Pedido*/
    public gerarNumero(): number {
        return ++ this.id;
    }
    
    public buscarNoArray(id: number): Produto | null{
        for(let produto of this.listaProdutos){
            if(produto.id ===id)
                return produto;
        }
        return null;
    } 
}