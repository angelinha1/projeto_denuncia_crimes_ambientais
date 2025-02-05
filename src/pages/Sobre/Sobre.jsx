import styles from './sobre.module.css';

function Sobre() {
    return (
        <div className={styles.about}>
            <div className={styles.card}>
                <p>
                    Este site é o resultado de uma pesquisa de doutorado sobre crimes ambientais realizado por uma  pesquisadora amazonense e integrante da Polícia Civil do Amazonas que compreende que a Amazônia não deve ser só admirada.<br></br>
                    A flora, fauna, os recursos naturais e o patrimônio cultural que constituem esse bioma precisam ser protegidos de ações nocivas.
    
                    Nessa perspectiva, defender a Amazônia é uma responsabilidade pessoal e social de todos os habitantes do estado do Amazonas.
                </p>
            </div>
            <div className={styles.card}>
                <p>
                    Crimes ambientais são ações ilegais que causam danos ao meio ambiente, podendo-se variar de
                    poluição do ar e da água a desmatamento ilegal, tráfico de animais silvestres etc. Esses crimes
                    não afetam apenas o ambiente imediato onde ocorrem, mas têm repercussões globais,
                    como a alteração de ciclos climáticos e a perda de biodiversidade. Entre
                    os exemplos mais comuns estão: <br></br>
                    <ul>
                        <li>Desmatamento Ilegal</li>
                        <li>Caça Predatória</li>
                        <li>Tráfico de Animais Silvestres</li>
                        <li>Poluição</li>
                    </ul>             
                </p>
            </div>
        </div>
    );
}

export default Sobre;