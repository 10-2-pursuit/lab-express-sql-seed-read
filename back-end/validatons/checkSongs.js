const checkName = (req, res, next) => {
    if(req.body.name){
        console.log("name is good")
        next()
    } else {
        res.status(400).json({error: "Name is required"})
    }
}

const checkArtist = (req, res, next) => {
    if(req.body.artist){
        console.log("artist is good")
        next()
    } else {
        res.status(400).json({error: "Artist is required"})
    }
}

const checkAlbum = (req, res, next) => {
    if(typeof req.body.album === 'string'){
        console.log("album is good")
        next()
    } else {
        res.status(400).json({error: "Album is the wrong data type"})
    }
}

const checkTime = (req, res, next) => {
    if(typeof req.body.time === 'string'){
        console.log("time is good")
        next()
    } else {
        res.status(400).json({error: "Time is the wrong data type"})
    }
}

const checkBoolean = (req, res, next) => {
    if(req.body.is_favorite === true || req.body.is_favorite === false){
        console.log("boolean is good")
        next()
    } else {
        res.status(400).json({error: "is_favorite must be a boolean value"})
    }
}

module.exports = {
    checkName,
    checkArtist,
    checkAlbum,
    checkTime,
    checkBoolean
}