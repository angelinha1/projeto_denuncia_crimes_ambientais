import emailjs from "@emailjs/browser"; 

const sendCustomEmail = (details) => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
            assunto: details.subject,
            mensagem: details.message,
            endereco: details.address,
            email: details.email
        }
    )
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
}

export { sendCustomEmail };