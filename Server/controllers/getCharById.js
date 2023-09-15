const axios = require('axios')


const getCharById = async (req, res) => {
    try {
        const  { id } = req.params;
        const {data} = await axios(`https://rickandmortyapi.com/api/character/${id}`);
        
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin?.name,
            image: data.image,
            status: data.status
        }

        character.name ? res.status(200).json(character) : res.status(400).send("Not found")
        
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
    
}



module.exports = getCharById;

