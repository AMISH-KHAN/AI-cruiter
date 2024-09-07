const jwt = require("jsonwebtoken")

async function verifyToken(req, res, next) {
    console.log(req.headers)
    if (!req.headers.authorization
    ) {
        res.status(401).send({ result: "failed", message: "you are not a authorized user" })
     
    }
    else {
        
        let token = await req.headers.authorization.split(" ")[1]
        console.log(token)
       jwt.verify(token, process.env.JWT_SECRETE_KEY, (error)=>{
            if (error) {
                res.status(401).send({result:"failed",message:"you are not a authorized user"})
            }
            else {
                next()
            }
        }
        )
    }
}

module.exports=[verifyToken]