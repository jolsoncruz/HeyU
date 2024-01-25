import * as z from "zod"

export const SignUpValidation = z.object({
    name: z.string().min(2, { message: 'Name must be atleast 2 characters'}),
    username: z.string().min(2, {message: 'Username must be atleast 2 characters'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be atleast 8 characters'})
})

export const SignInValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: 'Password must be atleast 8 characters'})
})

export const PostValidation = z.object({
    caption: z.string().min(5, { message: 'Caption must be atleast 5 characters'}).max(22000),
    file: z.custom<File[]>(),
    location: z.string().min(2, {message: 'Location must be atleast 2 characters'}).max(100),
    tags: z.string()
})