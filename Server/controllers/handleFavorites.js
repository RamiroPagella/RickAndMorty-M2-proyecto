let myFavorites = [];

function postFav (character) {
    myFavorites.push(character);
    return myFavorites

}

function deleteFav (req, res) {
    const { id } = req.params;

    myFavorites = myFavorites.filter(character => character.id !== Number(id));

    res.status(200).json(myFavorites)
}



module.exports = {
    postFav, deleteFav
}
