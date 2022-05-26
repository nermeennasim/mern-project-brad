const errHandler = (err,req,res,next)=>{

    const statusCode = res.statusCode? res.statusCode : 500

    res.status(statusCode)

    res.json({
            //if env is production then we put null other wise we set stack error
        message: err.message,
        stack: process.env.NODE_ENVIRONMENT === 'production'? null : err.stack
    })
}

module.exports ={
    errHandler
}