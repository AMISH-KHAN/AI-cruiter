const jwt = require("jsonwebtoken")

async function verifyToken(req, res, next) {
    console.log("hello", req.headers)
    let token;
    if (req.headers.authorization) {
        token = await req.headers.authorization.split(" ")[1]
    }
    else if (req.cookies && req.cookies.token) {
        token = await req.cookies.token
        console.log("token",token)
        
    }
    console.log("cokkie", req.cookies)
    if(!token) {
        return res.status(401).send({ result: "failed", message: "you are not a authorized user 1" })
    }
        console.log(token)
       jwt.verify(token, process.env.JWT_SECRETE_KEY, (error)=>{
            if (error) {
                res.status(401).send({result:"failed",message:"you are not a authorized user 2"})
            }
            else {
                next()
            }
        }
        )
    
}

module.exports=[verifyToken]