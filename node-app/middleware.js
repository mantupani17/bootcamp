module.exports = (req, res, next) => {
    console.log('Middleware 2')
    // doing validating validating token 
    // validating data
    next()
}