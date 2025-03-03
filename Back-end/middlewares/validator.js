const { z } = require('zod')

exports.registerSchema =z.object({
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

exports.loginScheme = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must have at least 6 characters!!"),
  });

exports.registerVets = z.object({
  doctor_name : z.string().min(3, "Name is required!!"),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6, "Password must have at least 6 characters!!"),
  location: z.string(),
  phone : z.string(),
  location: z.string(),
  address: z.string(),
  province: z.string(),
  type: z.string(),
  

})

exports.registerPet = z.object({
  name: z.string(),
  breed: z.string(),
  age: z.string(),
  chronicDisease : z.string().optional(),
  medicine: z.string().optional(),
  vaccined: z.string().optional(),
  gender: z.enum(["MALE", "FEMALE"]),
  type: z.enum(["NORMAL", "EXOTIC"]),

})


exports.validateWithZod = (schema) => (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      console.log(error);
      const errMsg = error.errors.map((el) => el.message);
      const errText = errMsg.join(",");
      const mergeError = new Error(errText);
      next(mergeError);
    }
};