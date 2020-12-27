const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

const githubWebhooksRoute = require('./routes/github')

// MIDDLEWARE
app.use(bodyParser.json());

// ROUTES
app.get('/', (req, res) => {
    console.log('health test')
    res.send('Health test ok')
});

app.post('/github-webhooks', githubWebhooksRoute);


// LISTEN
app.listen(process.env.PORT_CICD, () => {
    console.log(`>>> CI/CD Listening on ${process.env.PORT_CICD}`)
})