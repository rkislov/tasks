module.exports.overview = (req,res)=>{
    res.status(200).json({
        login: 'from controller'
    })
}

module.exports.analitic = (req,res)=>{
    res.status(200).json({
        register: 'from controller'
    })
}