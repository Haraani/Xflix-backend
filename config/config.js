const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../.env") });
const envVarSchema = Joi.object()
  .keys({
    ENV_PORT: Joi.number().default(8082),
    MONGODB_URL: Joi.string().description("Mongo DB Url").required(),
  })
  .unknown();
const { value: envVars, error } = envVarSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);
if (error) {
  throw new Error(`Config validation error:${error.message}`);
}
module.exports = {
  port: envVars.ENV_PORT,
  mongoose: {
    url: envVars.MONGODB_URL,
  },
};