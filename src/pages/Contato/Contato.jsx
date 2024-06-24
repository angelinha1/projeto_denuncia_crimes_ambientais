import styles from './contato.module.css';

function Contato() {
    return (
        <div className={styles.contato}>
            <h1>Contato: </h1>
            <br></br>
            <p>Entre em contato com a delegacia de crimes ambientais.</p>
            <p><a href="mailto:dema@policiacivil.am.gov.br">dema@policiacivil.am.gov.br</a></p>
        </div>
    );
}

export default Contato;