import styles from './home.module.css'
import floresta from '../../assets/floresta.jpg'

function Home () {
    return(
        <div className={styles.header}>
            <h1>
                Painel dos Crimes Ambientais durante a covid 19 no estado do Amazonas.
            </h1>
            <img alt='imagem de um rio contornando uma floresta' src={floresta} />
        </div>
    )
}

export default Home