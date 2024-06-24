import { useState } from 'react';
import { sendCustomEmail } from '../../services/email';
import styles from './denuncia.module.css';

function Denuncia () {
  const [details, setDetails] = useState({
        subject: "", 
        message: "",
        address: "", 
        email: "",
        crime: ""
    });
    
    const handleDetailsChange = (event) => {
        const {name, value} = event.target;
        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value
            }
        });
    }

    const handleSendEmail = () => {
        sendCustomEmail(details);
    }

    return(
        <div className={styles.denuncia}>
            <div>
               <div className={styles.title}>
                    <h1>Formulário de Denúncia</h1>
               </div>
                <form>
                    <div>
                        <div>
                            <label>E-mail: </label>
                        </div>
                        <input type="email" name="email" value={details.email} onChange={handleDetailsChange}/>
                    </div>
                    <div>
                        <div>
                            <label>Tipo de crime: </label>
                        </div>
                        <select name='crime' value={details.crime} onChange={handleDetailsChange}>
                            <option value="flora">Crime contra a flora</option>
                            <option value="fauna">Crime contra a fauna</option>
                            <option value="saude_publica">Crime contra a saúde pública</option>
                            <option value="administracao">Crime contra a administração</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label>Assunto: </label>
                        </div>
                        <input type="text" name="subject" value={details.subject} onChange={handleDetailsChange}/>
                    </div>
                    <div>
                        <div>   
                            <label>Endereço: </label>
                        </div>
                        <input type="text" name="address" value={details.address} onChange={handleDetailsChange}/>
                    </div>
                    <div>
                        <div>
                            <label>Descrição do fato: </label>
                        </div>
                        <textarea name="message" value={details.message} onChange={handleDetailsChange}></textarea>
                    </div>
                    <button type="button" onClick={handleSendEmail}>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Denuncia;