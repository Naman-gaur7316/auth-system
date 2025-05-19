const zod = require("zod")

const userSignupSchema = zod.object({
    name: zod.string().min(4, "Name is required"),
    email: zod.string().toLowerCase().email("username must be an email"),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
  });
  
const loginSchema = zod.object({
    email: zod
      .string()
      .toLowerCase()
      .email("username must be an email"),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
  });

module.exports = {
    userSignupSchema,
    loginSchema
}