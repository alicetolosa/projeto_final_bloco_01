import readlinesync = require ("readline-sync"); //importação 

export function main (){
    
    let opcao : number;

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

                    break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                    break;
            case 3:
                console.log("\n\nBuscar Produto\n\n");

                    break;
            case 4:
                console.log("\n\nAtualizar Produto\n\n");

                    break;
            case 5:
                console.log("\n\nApagar Produto\n\n");

                    break;
            case 6:
                console.log("\n\nSair\n\n");

                    break;
            default:
                console.log("\nOpção Inválida!\n");

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

main();
