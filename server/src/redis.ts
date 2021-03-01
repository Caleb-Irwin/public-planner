import { createNodeRedisClient, CreateNodeRedisClient } from "handy-redis";
import { promisify } from "util";
const client = createNodeRedisClient();
export default client;
