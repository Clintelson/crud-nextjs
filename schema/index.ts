import * as z from "zod"

export const SignInSchema = z.object({
    email: z.string().email({
        message: "Invalid email address! Please enter a valid email.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
});

export const SignUpSchema = z.object({
    email: z.string().email({
        message: "Invalid email address! Please enter a valid email.",
    }),
    username: z.string().min(4, {
        message: "Username must be at least 4 characters long.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
    confirmPassword: z.string().min(8, {
        message: "Password must be at least 8 characters long.",
    }),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match!",
    path: ["confirmPassword"], 
  });