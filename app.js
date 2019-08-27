const express = require('express')
const app = express()
const port = 3000

const yaml = require('js-yaml')
const fs = require('fs')

app.use(express.static('public'))

// Routing
app.get('/', (req, res) => res.send('Ok'))

app.get('/about', (req, res) => {
    // Get document, or throw exception on error
    try {
        var profiles = yaml.safeLoad(fs.readFileSync('eboard.yml', 'utf8'));
        console.log(profiles);
        res.send(profiles)
    } catch (e) {
        console.log(e);
    }
})

app.get('/sponsors', (req, res) => {
    // Get document, or throw exception on error
    try {
        var sponsor = yaml.safeLoad(fs.readFileSync('sponsor.yml', 'utf8'));
        console.log(sponsor);
        res.send(sponsor)
    } catch (e) {
        console.log(e);
    }
})

app.get('/pcard', (req, res) => {
    // Get document, or throw exception on error
    try {
        var profile_card = fs.readFileSync('public/profile_card.html', 'utf8')
        console.log(profile_card)
        res.send(profile_card)
    } catch (e) {
        console.log(e);
    }
})

app.get('/scard', (req, res) => {
    // Get document, or throw exception on error
    try {
        var company_card = fs.readFileSync('public/company_card.html', 'utf8')
        console.log(company_card)
        res.send(company_card)
    } catch (e) {
        console.log(e);
    }
})

app.listen(port, () => console.log(`IEEE Cornell Website listening on port ${port}!`))