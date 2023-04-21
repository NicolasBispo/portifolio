<!DOCTYPE html>

<head>
    <?php
    require('./bases.php');
    ?>
    <link rel="stylesheet" href="./CSS/index.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/monokai-sublime.min.css">

    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>


</head>

<body>
    <header>
        <?php
        require('./header.php');
        ?>
    </header>
    <main>
        <section class='scr_b1' id='links'>
            <h1>Meus links</h1>
            <nav class="links-contato">
                <a href="https://github.com/NicolasBispo" target="_blank"><img src="./Imagens/GithubLogo.svg" alt="LogoGithub"></a>
                <a href="https://www.instagram.com/nicolasz.q/" target="_blank"><img src="./Imagens/InstagramLogo.svg" alt="InstagramLogo"></a>
                <a href="https://www.linkedin.com/in/nicolas-bispo/" target="_blank"><img src="./Imagens/LinkedinLogo.svg" alt="LinkedInLogo"></a>
                <a href="https://wa.me/5513997254056?text=" target="_blank"><img src="./Imagens/TelefoneLogo.svg" alt="Whatsapp"></a>
                <div class="background-links"></div>
            </nav>
        </section>
        <section class='scr_b1' id="apresentacao">
            <div class="code-area">
                <div class="barra-ferramentas">
                    <div class="fechar"></div>
                    <div class="maximizar"></div>
                    <div class="minimizar"></div>
                </div>
                <div class="area-codigo">
                    <pre><code class='language-php'style='background-color: dimgray; '></code></pre>
                </div>
                <a href="./projetos.php" id="meus-projetos-exibir">Veja meus projetos</a>
            </div>
            <div class="info-div">
                <h1 class="info">Olá!
                    <br>Eu sou Nícolas
                </h1>
                <h3 id='developer-ap'>Fullstack Web Developer</h3>
            </div>
        </section>
        <section class="quem-sou-eu scr_b1">
            <article> Sou um desenvolvedor web, com 1 ano de experiência no mercado de trabalho<br>
                Atualmente trabalho com as seguintes tecnologias
                <div class="front-end-tecnologias">
                    <p>FRONT-END</p>
                    <div class="tecnologias-exibir">
                        <figure><img src="./Imagens/HtmlIcon.svg" alt="IconHtml">
                            <figcaption>HTML</figcaption>
                        </figure>
                        <figure><img src="./Imagens/CssIcon.svg" alt="IconCss">
                            <figcaption>CSS</figcaption>
                        </figure>
                        <figure><img src="./Imagens/JsIcon.svg" alt="IconJs">
                            <figcaption>Javascript</figcaption>
                        </figure>
                        <figure><img id='reactLogo' src="./Imagens/ReactIcon.svg" alt="IconReact">
                            <figcaption>React</figcaption>
                        </figure>
                    </div>
                </div>
                <div class="front-end-tecnologias">
                    <p>BACK-END</p>
                    <div class="tecnologias-exibir">
                        <figure><img src="./Imagens/PhpIcon.svg" alt="IconPHP">
                            <figcaption>PHP</figcaption>
                        </figure>
                        <figure><img src="./Imagens/LaravelIcon.svg" alt="IconLaravel">
                            <figcaption>Laravel</figcaption>
                        </figure>
                        <figure><img src="./Imagens/NodeJsIcon.svg" alt="IconNode">
                            <figcaption>NodeJs</figcaption>
                        </figure>
                        <figure><img id='' src="./Imagens/SqlIcon.png" alt="IconSql">
                            <figcaption>SQL</figcaption>
                        </figure>
                    </div>
                </div>
            </article>
        </section>
        <section class="experiencias-profissionais">
            <h1>Histórico profissional</h1>
            <div class="container-cartoes">
                <div class="cartao-historico-profissional">
                    <h2 class="ano-historico">2020-2021</h2>
                    <h3 class="empresa-historico">Prefeitura Municipal de Americana - Junta Militar</h3>
                    <h3 class="cargo-historico">Estágiário de TI</h3>
                    <div class="animacao-historico">
                        <h2 class="atividades">Atividades</h2>
                        <h3 class="execucao-atividades">Suporte em atividades de TI, utilização de scripts para automação  (Python e Javascript)</h3>
                        <h2 class="tecnologias-utilizadas">Tecnologias utilizadas</h2>
                        <h3 class="tecnologias-utilizadas-exibir">HTML, CSS, Javascript e Python</h3>
                    </div>
                </div>
                <div class="cartao-historico-profissional">
                    <h2 class="ano-historico">2022</h2>
                    <h3 class="empresa-historico">Construtora NewHome</h3>
                    <h3 class="cargo-historico">Desenvolvedor Web Junior</h3>
                    <div class="animacao-historico">
                        <h2 class="atividades">Atividades</h2>
                        <h3 class="execucao-atividades">Suporte em atividades de TI, utilização de scripts para automação  (Python e Javascript)</h3>
                        <h2 class="tecnologias-utilizadas">Tecnologias utilizadas</h2>
                        <h3 class="tecnologias-utilizadas-exibir">HTML, CSS, Javascript e Python</h3>
                    </div>
                </div>

            </div>
        </section>



    </main>
    <script src="./JS/menu-control.js"></script>
    <script src="./JS/visual-controls.js"></script>
    <script src="./JS/ScrollReveal.js"></script>


</body>

</html>