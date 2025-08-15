import rateLimit from '../config/upstash.js';

const rateLimiter= async(req,res,next)=>{
    try {
        const {success}= await rateLimit.limit("Limit");

        if(!success){
            return res.status(429).json({
                message:"Too many requests"
            })
        }

        next();

    } catch (error) {
        console.log("Upstash error",error);
        next();
        
    }
}

export default rateLimiter;