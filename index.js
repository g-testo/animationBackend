const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json

const port = 8080;

const characters = require("./data.json");

app.get("/characters", (req, res) => {
    let { showName } = req.query;
    
    if (showName) {
        const filteredCharacters = characters.filter(char => char.showName === showName);
        if (filteredCharacters.length > 0) {
            res.json(filteredCharacters);
        } else {
            res.status(404).send('No characters found for the given show.');
        }
    } else {
        res.json(characters);
    }
});

app.get("/characters/:id", (req, res) => {
    const id = parseInt(req.params.id, 10); // Convert id to a number
    const character = characters.find(char => char.id === id);

    if (character) {
        res.json(character);
    } else {
        res.status(404).send('Character not found.');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
