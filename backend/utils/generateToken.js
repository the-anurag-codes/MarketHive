import jwt from 'jsonwebtoken'

const generateToken = function(id){
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
    return token
}

export default generateToken