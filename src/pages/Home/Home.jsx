import styles from './home.module.css'
import floresta from '../../assets/floresta.jpg'

function Home () {
    return(
        <div className={styles.header}>
            <h1>
                Canal de Denúncias de Crimes Ambientais do Amazonas
            </h1>
            <img src={floresta} />
        </div>
    )
}

export default Home