const { z } = require("zod");

const SignUpInput = z.object({
    username: z.string().min(4, "Username must be minimum of 4 characters").max(16, "Username should bot be greater than 4 characters"),
    password: z.string().min(4, "Password must be minimum of 4 characters").max(16, "Password should bot be greater than 4 characters")
})

const LoginInput = z.object({
    username: z.string(),
    password: z.string()
})

module.exports = {
    LoginInput,
    SignUpInput
}