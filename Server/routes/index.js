const { Router } = require('express');
//
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/loginController');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
//

const router = Router();



router.get("/character/:id", getCharById);

//

router.get("/login", login)

//

router.post("/fav", (req, res) => {
    try {
        const { character } = req.body;
        const myFavorites = postFav(character);
        res.status(200).json(myFavorites);
        
    } catch (error) {
        console.log(error);
    }
});

//

router.delete('/fav/:id', deleteFav);









module.exports = router;