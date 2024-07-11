import bs58 from "bs58";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY;
if (!secretKey) {
    throw new Error("SECRET_KEY is not defined in the environment variables");
  }
const kp =bs58.decode(secretKey);
console.log("my secret key is: " +kp);
