import styles from './PowerBI.module.css'; 

function PowerBI() {
  return (
     <div className={styles.about}>
        <p>
            <p className={styles.texto}>Acesse Aqui: </p>
            <a className={styles.link} target="_blank" href="https://app.powerbi.com/view?r=eyJrIjoiZTI0ZWVmODctZGYyZC00YWM2LWJmYzAtZmY5YjlkZTgxMTNhIiwidCI6IjgxZDY5MjA0LTM1YzktNGY4YS04ZjliLTdiODM4NTNkNGY0ZSJ9&pageName=8f9681e43f9f406c189c">Painel de Crimes Ambientais no estado do Amazonas durante a pandemia de covid 19</a>
            
        </p>
        <div className={styles.card}>
            <p>
                Considerando a relevância do monitoramento dos crimes ambientais na Amazônia, este projeto foi elaborado com o propósito de visualizar a distribuição dessas infrações na cidade de Manaus, durante um período de grande impacto para a população local: a pandemia de Covid-19.
                Para a organização e gestão das informações, foram utilizadas ferramentas como o <i><u>Excel</u></i>, para a estruturação dos dados, e o <u><i>Power BI</i></u>, para a criação de relatórios visuais. 
                Dessa forma, o projeto busca apresentar, de maneira clara e acessível, a ocorrência desses crimes ao longo do período analisado, contribuindo para a adoção de medidas mais eficazes no combate às infrações ambientais na capital do Amazonas.
            </p>
        </div>
    </div>
  );
}

export default PowerBI;