const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Configurer le middleware pour parser les formulaires
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname,'views', 'home.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Route pour gérer la soumission du formulaire de contact
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Configurer le transporteur d'e-mails
    const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'envel.righini@gmail.com', // Remplacez par votre adresse Gmail
        pass: 'ehqt fxjx vcjm vqfm', // Remplacez par votre mot de passe d'application
    },
});

    const mailOptions = {
        from: email,
        to: 'righinienvel@gmail.com',  // Adresse e-mail de destination
        subject: `Nouveau message de ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email envoyé avec succès');
        res.status(200).send('Votre message a été envoyé avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        res.status(500).send('Une erreur est survenue lors de l\'envoi de votre message.');
    }
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
