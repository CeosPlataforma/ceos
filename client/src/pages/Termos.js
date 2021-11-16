import React, { useEffect } from "react";
import ScrollSpy from 'simple-scrollspy';

import BlueFooter from "../components/BlueFooter";

export default function Termos() {

    const options = {
        sectionClass: '.section',
        offset: 120,
        menuActiveTarget: '.menu-item'
    }
    useEffect(() => {
        ScrollSpy('#main-menu', options);
    }, [])

    return (
        <>
            <div className="termos-page">
                <nav className="termos-navbar">
                    <div className="menu" id="main-menu">
                        <a className="menu-item" href="#section-1">1. DA FUNÇÃO DO SITE</a>
                        <a className="menu-item" href="#section-2">2. DO ACEITE DOS TERMOS</a>
                        <a className="menu-item" href="#section-3">3. DO GLOSSÁRIO</a>
                        <a className="menu-item" href="#section-4">4. DO ACESSO AO SITE</a>
                        <a className="menu-item" href="#section-5">5. DA LICENÇA DE USO E CÓPIA</a>
                        <a className="menu-item" href="#section-6">6. DAS OBRIGAÇÕES</a>
                        <a className="menu-item" href="#section-7">7. DA MONETIZAÇÃO E PUBLICIDADE</a>
                        <a className="menu-item" href="#section-8">8. DOS TERMOS GERAIS</a>
                    </div>
                </nav>
                <div className="termos-text">
                    <h1 className="termos-title">Seja bem-vindo ao nosso site. <br />Leia com atenção todos os termos abaixo.</h1>

                    <p>
                        Este documento, e todo o conteúdo do site é oferecido por CEOS com o endereço ceos.com.br, neste termo representado apenas por "EMPRESA", que regulamenta todos os direitos e obrigações com todos que acessam e utilizam os recursos do site, denominado neste termo como "USUÁRIO", reguardado todos os direitos previstos na legislação, trazem as cláusulas abaixo como requisito para acesso e visita do mesmo.

                        A permanência no website implica-se automaticamente na leitura e aceitação tácita do presente termos de uso a seguir. Este termo foi atualizado pela última vez em 14 de setembro de 2021.
                    </p>

                    <hr />

                    <section id="section-1" className="section scrollspy">
                        <h2 id="art1">1. DA FUNÇÃO DO SITE</h2>

                        <p>
                            Este site foi criado e desenvolvido com a função de assegurar que a organização escolar se faça mais presente nas vivências escolares, tendo em vista a compreensão de que o aperfeiçoamento organizacional contribui, definitivamente, para diversos aspectos benéficos, colaborando para a conquista de um melhor desempenho estudantil. A EMPRESA busca, através do desenvolvimento de uma aplicação para web, auxiliar a vida de estudantes, sobretudo no campo da organização disciplinar. A plataforma possui os seguintes objetivos específicos:

                            <br />
                            - Armazenar todas as tarefas escolares para garantir o controle por parte do estudante.<br />

                            - Permitir o uso livre da plataforma para o auxílio de todos aqueles que desejam se organizar no campo escolar.<br />

                            - Desenvolver uma plataforma intuitiva e com ferramentas modernas.<br />

                            - Possibilitar o gerenciamento do desempenho geral e disciplinar no ramo estudantil.<br />

                            Todo o conteúdo presente neste site foi desenvolvido baseado em fontes e materiais de confiabilidade, assim como em estudos sérios e respeitados, através de pesquisa de alta nível.
                        </p>
                    </section>

                    <section id="section-2" className="section scrollspy">
                        <h2 id="art2">2. DO ACEITE DOS TERMOS</h2>

                        <p>
                            Este Termo especifica e exige que todo usuário ao acessar o site da EMPRESA, leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre a EMPRESA e o USUÁRIO direitos e obrigações entre ambas as partes, aceitos expressamente pelo USUÁRIO a permanecer navegando no site da EMPRESA.

                            Ao continuar acessando o site, o USUÁRIO expressa que aceita e entende todas as cláusulas, assim como concorda integralmente com cada uma delas, sendo este aceite imprescindível para a permanência na mesma. Caso o USUÁRIO discorde de alguma cláusula ou termo deste contrato, o mesmo deve imediatamente interromper sua navegação de todas as formas e meios.

                            Este termo pode e irá ser atualizado periodicamente pela EMPRESA, que se resguarda no direito de alteração, sem qualquer tipo de aviso prévio e comunicação. É importante que o USUÁRIO confira sempre se houve movimentação e qual foi a última atualização do mesmo no começo da página.
                        </p>
                    </section>

                    <section id="section-3" className="section scrollspy">
                        <h2 id="art3">3. DO GLOSSÁRIO</h2>

                        <p>
                            Este termo pode conter algumas palavras específicas que podem não se de conhecimento geral. Entre elas:

                            USUÁRIO: Todo e qualquer usuário do site, de qualquer forma e meio, que acesse através de computador, notebook, tablet, celular ou quaisquer outros meios, o website ou plataforma da empresa.
                            NAVEGAÇÃO: O ato de visitar páginas e conteúdo do website ou plataforma da empresa.
                            COOKIES: Pequenos arquivos de textos gerados automaticamente pelo site e transmitido para o navegador do USUÁRIO, que servem para melhorar a usabilidade do USUÁRIO.
                            LOGIN: Dados de acesso do USUÁRIO ao realizar o cadastro junto a EMPRESA, dividido entre usuário e senha, que dá acesso a funções restritas do site.
                            HIPERLINKS: São links clicáveis que podem aparecer pelo site ou no conteúdo, que levam para outra página da EMPRESA ou site externo.
                            OFFLINE: Quando o site ou plataforma se encontra indisponível, não podendo ser acessado externamente por nenhum usuário.
                            Em caso de dúvidas sobre qualquer palavra utilizada neste termo, o USUÁRIO deverá entrar em contato com a EMPRESA através dos canais de comunicação encontradas no site.
                        </p>
                    </section>

                    <section id="section-4" className="section scrollspy">
                        <h2 id="art4">4. DO ACESSO AO SITE</h2>

                        <p>
                            O Site e plataforma funcionam normalmente 24 (vinte e quatro) horas por dia, porém podem ocorrer pequenas interrupções de forma temporária para ajustes, manutenção, mudança de servidores, falhas técnicas ou por ordem de força maior, que podem deixar o site indisponível por tempo limitado.

                            A EMPRESA não se responsabiliza por nenhuma perda de oportunidade ou prejuízos que esta indisponibilidade temporária possa gerar aos usuários.

                            Em caso de manutenção que exigirem um tempo maior, a EMPRESA irá informar previamente aos clientes da necessidade e do tempo previsto em que o site ou plataforma ficará offline.

                            O acesso ao site só é permitido a maiores de 18 anos de idade ou que possuírem capacidade civil plena. Para acesso de menores de idade, é necessária a expressa autorização dos pais ou tutores, ficando o mesmo responsáveis sobre qualquer compra ou acesso efetuados pelo mesmo.

                            Caso seja necessário realizar um cadastro junto a plataforma, onde o USUÁRIO deverá preencher um formulário com seus dados e informações, para ter acesso a alguma parte restrita, ou realizar alguma compra.

                            Todos os dados estão protegidos conforme a Lei Geral de Proteção de Dados, e ao realizar o cadastro junto ao site, o USUÁRIO concorda integralmente com a coleta de dados conforme a Lei e com a Política de Privacidade da EMPRESA.
                        </p>
                    </section>

                    <section id="section-5" className="section scrollspy">
                        <h2 id="art5">5. DA LICENÇA DE USO E CÓPIA</h2>

                        <p>
                            O USUÁRIO poderá acessar todo o conteúdo do website, como artigos, imagens, produtos e serviços, não significando nenhum tipo de cessão de direito ou permissão de uso, ou de cópia dos mesmo.

                            Todos os direitos são preservados, conforme a legislação brasileira, principalmente na Lei de Direitos Autorais (regulamentada na Lei nº 9.610/18), assim como no Código Civil brasileiro (regulamentada na Lei nº 10.406/02), ou quaisquer outras legislações aplicáveis.

                            Todo o conteúdo do site é protegido por direitos autorais, e seu uso, cópia, transmissão, venda, cessão ou revenda, deve seguir a lei brasileira, tendo a EMPRESA todos os seus direitos reservados, e não permitindo a cópia ou utilização de nenhuma forma e meio, sem autorização expressa e por escrita da mesma.

                            A EMPRESA poderá em casos concretos permitir pontualmente exceções a este direito, que serão claramente destacados no mesmo, com a forma e permissão de uso do conteúdo protegido. Este direito é revogável e limitado as especificações de cada caso.
                        </p>
                    </section>

                    <section id="section-6" className="section scrollspy">
                        <h2 id="art6">6. DAS OBRIGAÇÕES</h2>

                        <p>
                            O USUÁRIO ao utilizar o website da EMPRESA, concorda integralmente em:

                            De nenhuma forma ou meio realizar qualquer tipo de ação que tente invadir, hackear, destruir ou prejudicar a estrutura do site, plataforma da EMPRESA ou de seus parceiros comerciais. Incluindo-se, mas não se limitando, ao envio de vírus de computador, de ataques de DDOS, de acesso indevido por falhas da mesma ou quaisquer outras forma e meio.
                            De não realizar divulgação indevida nos comentários do site de conteúdo de SPAM, empresas concorrentes, vírus, conteúdo que não possua direitos autorais ou quaisquer outros que não seja pertinente a discussão daquele texto, vídeo ou imagem.
                            Da proibição em reproduzir qualquer conteúdo do site ou plataforma sem autorização expressa, podendo responder civil e criminalmente pelo mesmo.
                            Com a Política de Privacidade do site, assim como tratamos os dados referentes ao cadastro e visita no site, podendo a qualquer momento e forma, requerer a exclusão dos mesmos, através do formulário de contato.
                        </p>
                    </section>

                    <section id="section-7" className="section scrollspy">
                        <h2 id="art7">7. DA MONETIZAÇÃO E PUBLICIDADE</h2>

                        <p>
                            A EMPRESA pode alugar ou vender espaços publicitários na plataforma, ou no site, diretamente aos anunciantes, ou através de empresas especializadas com o Adsense (Google), Taboola, ou outras plataformas de publicidade.

                            Essas publicidades não significam nenhuma forma endosso ou responsabilidade pelos mesmos, ficando o USUÁRIO responsável pelas compras, visitas, acessos ou quaisquer ações referentes as estas empresas.

                            Todas as propagandas no site ou plataforma serão claramente destacadas como publicidade, como forma de disclaimer da EMPRESA e de conhecimento do USUÁRIO.

                            Estes anúncios podem ser selecionados pela empresa de publicidade automaticamente, conforme as visitas recentes do USUÁRIO, assim como baseado no seu histórico de busca, conforme as políticas de acesso da plataforma.
                        </p>
                    </section>

                    <section id="section-8" className="section scrollspy">
                        <h2 id="art8">8. DOS TERMOS GERAIS</h2>

                        <p>
                            O Site irá apresentar hiperlinks durante toda a sua navegação, que podem levar diretamente para outra página da EMPRESA ou para sites externos.

                            Apesar da EMPRESA apenas criar links para sites externos de extrema confiança, caso o usuário acesse um site externo, a EMPRESA não tem nenhuma responsabilidade pelo meio, sendo uma mera indicação de complementação de conteúdo, ficando o mesmo responsável pelo acesso, assim como sobre quaisquer ações que realizem neste site.

                            Este documento, chamado "Termos de Uso", aplicáveis a todos os USUÁRIOs do site, e desenvolvido pelo Advogado Diego Castro (OAB/PI 15.613), foi modificado com permissão para este site.

                            Em caso que ocorra eventuais conflitos judiciais entre o USUÁRIO e a EMPRESA, o foro elegido para a devida ação será o da comarca da Empresa, mesmo que haja outro mais privilegiado.
                            <br /><br />
                            Este Termo de uso é valido a partir de 14 de setembro de 2021.
                        </p>
                    </section>
                </div>
            </div>

            <BlueFooter />
        </>
    );
}