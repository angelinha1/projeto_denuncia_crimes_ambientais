import styles from './sobre.module.css';
import flora from '../../assets/flora.jpg';

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
        </div>
    );
}

export default Sobre;