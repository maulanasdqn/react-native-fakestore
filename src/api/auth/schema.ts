import {z} from 'zod';

export const loginSchema = z.object({
  username: z.string({required_error: "Username can't be empty"}).min(3, {
    message: 'Username must be at least 3 characters',
  }),
  password: z
    .string({
      required_error: "Password can't be empty",
    })
    .min(1, "Password can't be empty")
    .min(6, {
      message: 'Password must be at least 6 characters',
    }),
});
