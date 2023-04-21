//Exibição do código na tela
$(document).ready(function () {
    let line1 = '$servername = "localhost"; \n';
    let line2 = '$username = "admin_server";\n';
    let line3 = '$password = "69HRMR%j2Det";\n';
    let line4 = '$dbname = "blog_db";\n';
    let line5 = '$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);\n';
    let line6 = '$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n';
    let line7 = '$stmt = $conn->prepare("SELECT * FROM projetos");\n';
    let line8 = '$stmt->execute();\n';

    let full_text = line1 + line2 + line3 + line4 + line5 + line6 + line7 + line8;
    console.log(full_text);

    // Seleciona o elemento onde o código será exibido
    const $code = $('.area-codigo code');

    // Define a linguagem de programação do código
    $code.addClass('php');

    // Inicializa o Highlight.js
    hljs.highlightElement($code[0]);

    // Adiciona o efeito typewriter ao digitar o texto
    let i = 0;
    const intervalo = 20;

    function digitarTexto() {
        const textoAtual = full_text.substring(0, i);
        $code.html(textoAtual);
        hljs.highlightElement($code[0]);

        if (i < full_text.length) {
            i++;
            setTimeout(digitarTexto, intervalo);
        }

        if (i === full_text.length) {
            $('#meus-projetos-exibir').addClass('exibirProjetoAnm');
        }
    }

    digitarTexto();
});

//efeito de transição de cores no "fullstack developer"
var cor1 = 'dimgray';
var cor2 = 'white';
var cor3 = 'gray';
var porcentagem1 = '0%';
var porcentagem2 = '50%';
var porcentagem3 = '100%';
var incremento = 1;
var atualPorcentagem1 = parseInt(porcentagem1);
var atualPorcentagem2 = parseInt(porcentagem2);
var atualPorcentagem3 = parseInt(porcentagem3);

var texto = $('#developer-ap');

function updatePorcentagens() {
    atualPorcentagem1 += incremento;
    atualPorcentagem2 += incremento;
    atualPorcentagem3 += incremento;
    if (atualPorcentagem1 >= 100) {
        var tempCor1 = cor1;
        var tempCor2 = cor2;
        cor1 = cor3;
        cor2 = tempCor1;
        cor3 = tempCor2;
        porcentagem1 = '1%';
        porcentagem2 = '51%';
        porcentagem3 = '101%';
        atualPorcentagem1 = 1;
        atualPorcentagem2 = 51;
        atualPorcentagem3 = 101;
    }
    porcentagem1 = atualPorcentagem1 + '%';
    porcentagem2 = atualPorcentagem2 + '%';
    porcentagem3 = atualPorcentagem3 + '%';
    var gradiente = 'linear-gradient(to bottom left, ' + cor1 + ' ' + porcentagem1 + ', ' + cor2 + ' ' + porcentagem2 + ', ' + cor3 + ' ' + porcentagem3 + ')';
    texto.css({
        'background': cor1,
        'background': gradiente,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    });
}

setInterval(updatePorcentagens, 50);
