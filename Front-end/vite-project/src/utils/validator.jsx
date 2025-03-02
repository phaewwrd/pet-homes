import { z } from 'zod'

export const registerSchema =z.object({
    firstName : z.string().min(3, "First Name is Required!!"),
    lastName: z.string().min(3, "Last Name is Required!!"),
    tel: z.string().min(10, "Phone Number is Required!!"),
    email: z.string().email(),
    password: z.string().min(6,"Password must have at least 6 characters!!"),
    confirmPassword: z.string().min(6,"Confirm Password must have at least 6 characters!!")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Confirm Password does not match!",
  path: ["confirmPassword"],
});

export const loginScheme = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must have at least 6 characters!!"),
  });

export const registerVets = z.object({
  doctor_name : z.string().min(3, "Name is required!!"),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, "Password must have at least 6 characters!!"),
  location: z.string(),
  phone : z.string(),
  address: z.string(),
  province: z.string(),
  type: z.string(),
  picture: z.string(),
  

})
export const registerPet = z.object({
  name: z.string(),
  breed: z.string(),
  age: z.string(),
  chronicDisease : z.string(),
  medicine: z.string(),
  vaccined: z.string(),
  type: z.string(),

})

