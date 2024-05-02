const NomeProdutoForm = document.getElementById("NomeProdutoForm"); //aqui é declarado os valores que vem dos input do html
const TamanhoProdutoForm = document.getElementById("TamanhoProdutoForm");
const PotenciaProdutoForm = document.getElementById("PotenciaProdutoForm");
const MarcaProdutoInfo = document.getElementById("MarcaProdutoInfo");
const PreçoAluguelProdutoInfo = document.getElementById("PreçoAluguelProdutoInfo");

function criarProduto() { //essa é a função onde atribui os valores aos nomes com o .value; let é usado para armazenar as informações das const
    let nome = NomeProdutoForm.value;
    let tamanho = TamanhoProdutoForm.value;
    let potencia = PotenciaProdutoForm.value;
    let marca = MarcaProdutoInfo.value;
    let precoAluguel = PreçoAluguelProdutoInfo.value;

    const data = { //essa é a parte de criação de objeto.
        nomeProduto: nome,
        tamanhoProduto: Number(tamanho),
        potenciaProduto: Number(potencia),
        marcaProduto: marca,
        precoAluguelProduto: Number(precoAluguel),
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const url = "https://apicontroledefrotas-production.up.railway.app/AndersonEstudo/criar-produto"

    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao fazer a solicitação');
            }
            return response.json();
        })
        .then(data => {
            console.log('Solicitação bem-sucedida:', data);
        })
        .catch(error => {
            console.error('Erro na solicitação:', error);
        });
};