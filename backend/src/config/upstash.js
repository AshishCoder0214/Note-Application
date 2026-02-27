const Ratelimit =require("@upstash/ratelimit");
const Redis=require("@upstash/redis");
const dotenv=require("dotenv")

dotenv.config();

// creates a ratelimiter that allows 10 requests per 20 seconds
const ratelimit=new Ratelimit({
    resis: Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(5,"10 s")
})

module.exports=ratelimit;