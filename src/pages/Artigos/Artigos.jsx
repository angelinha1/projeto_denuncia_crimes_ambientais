import styles from './artigos.module.css';

function Artigos() {
    return (
        <div className={styles.artigos}>
            <div className={styles.title}>
                <h1>Artigos: </h1>
            </div>
            <ul>
                <li><a href="https://antigo.mma.gov.br/estruturas/225/_arquivos/12___a_impunidade_de_crimes_ambientais_em_reas_protegidas_federais_na_amaznia_225.pdf">A impunidade de crimes ambientais em áreas protegidas federais na Amazônia</a></li>
                <li><a href="https://igarape.org.br/wp-content/uploads/2022/03/AE-55_O-ecossistema-do-crime-ambiental-na-Amazonia.pdf">O ecossistema do crime ambiental na Amazônia: Uma análise das economias ilícitas da floresta</a></li>
                <li><a href="https://imazon.org.br/publicacoes/crimes-ambientais-na-amazonia-licoes-e-desafios-da-linha-de-frente/">Crimes Ambientais na Amazônia: lições e desafios da linha de frente</a></li>
                <li><a href="https://www.cnj.jus.br/wp-content/uploads/2024/04/relatorio-crimes-ambientais-na-amazonia-legal-final.pdf">Crimes Ambientais na Amazônia Legal: A atuação da Justiça nas cadeias de lavagens de bens e capitais, corrupção e organização criminosa</a></li>
                <li><a href="https://www.jusbrasil.com.br/artigos/busca?q=crime+ambiental+na+amazonia">Artigos em Jusbrasil sobre Crime Ambiental na Amazônia</a></li>
            </ul>
        </div>
    );
}

export default Artigos;