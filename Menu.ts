import readlinesync = require ("readline-sync"); //importação 
import { Produto } from "./src/model/Produto";
import { Batom} from "./src/model/Batom";
import { Blush } from "./src/model/Blush";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main (){
    
    let produto : ProdutoController = new ProdutoController ();


    let opcao, id, preco, estoque :number;
    let nome, cor, tipo: string;
    const tiposProdutos = ['Batom', 'Blush'];
    
    /*const produto: Produto = new Produto (1, "Batom", 22, 11)
    produto.visualizar();*/

    // Objeto da Classe
    const batom: Batom = new Batom (1, "Batom", 22, 11, "Vermelho")
    batom.visualizar();

    // Objeto da Classe
    const blush: Blush = new Blush (1, "Blush", 22, 11, "Creme")
    blush.visualizar();

    


    while (true){

        console.log("|*****************************************************|");
        console.log("|                MAQUIAGEM.COM                        |");
        console.log("|*****************************************************|");
        console.log("|                                                     |");
        console.log("|            1 - Cadastrar Produto                    |");
        console.log("|            2 - Listar todos os Produtos             |");
        console.log("|            3 - Buscar Produto                       |");
        console.log("|            4 - Atualizar Produto                    |");
        console.log("|            5 - Apagar Produto                       |");
        console.log("|            6 - Sair                                 |");
        console.log("|                                                     |");
        console.log("|*****************************************************|");


        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

         if (opcao == 6) {
            console.log("\nMaquiagem.com - A sua beleza começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar Produto\n\n");
 
                
                    let p1: Batom = new Batom(1, "Batom", 19.99, 20, "Vermelho-Perigo");
                    produto.cadastrar(p1);

                    let p2: Blush = new Blush(2, "Blush", 39.99, 10, "Creme");
                    produto.cadastrar(p2);
 

                    produto.listarTodas();
 

                    keyPress()
                    break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");
                    produto.listarTodas();

                    keyPress()
                    break;
            case 3:
                console.log("\n\nBuscar Produto\n\n");
                console.log("Digite o ID do produto: ");
                id = readlinesync.questionInt("");
 
                produto.procurarPorId(id);

                    keyPress()
                    break;
            case 4:
                console.log("\n\nAtualizar Produto\n\n");

                    let produtoAtualizado: Batom = new Batom (1, "BATOM-SUPERMATTE", 40.90, 25, "Azul");
                    produto.atualizar(produtoAtualizado);
 
                    
                    produto.listarTodas();

                    keyPress()
                    break;
            case 5:
                console.log("\n\nApagar Produto\n\n");

                    console.log("Digite o ID do produto: ");
                    id = readlinesync.questionInt("");
 
                    produto.deletar(id);
 
                    produto.listarTodas();

                    keyPress()
                    break;
            case 6:
                console.log("\n\nSair\n\n");


                    keyPress()
                    break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress()
                break;
        }

       
    }
}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Alice de Oliveira Tolosa ");
    console.log("Generation Brasil - aliceoliveira81@outlook.com");
    console.log("Github : https://github.com/alicetolosa");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
