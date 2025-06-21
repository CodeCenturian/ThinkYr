import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
  try {
    console.log("⏳ Rate limiter triggered for:", req.ip);
    const { success } = await ratelimit.limit(req.ip);

    if (!success) {
      console.log("🚫 Too many requests ");
      return res.status(429).json({
        message: "Too many requests. Please slow down.",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limiter error:", error);
    next(error);
  }
};


export default rateLimiter;