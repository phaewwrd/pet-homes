## 1.create folder
```bash
configs
controller
middlewares
Routes
utils

## Start 
npm init -y
npm install express nodemon cors morgan bcryptjs jsonwebtoken zod 

## Install Prisma
npm i -d prisma
npx prisma init

```
## 2.create pages in main folder
```js
index.js

const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const app =express()


# //Routing
const authRouter = require("./Routes/auth-route")
const userRouter = require("./Routes/user-route")


# //middlewares
app.use(cors()); // Allow cross Domain
app.use(morgan("dev")) //show log in Terminal
app.use(express.json()) // Read JSON

# //Routing

# //HandleError

const PORT = 8888
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
```

## 3.create handleError in middlewares folder
```js
const handleError = (err, req, res, next) => {
  console.log(err);
  res
  .status(err.status || 500)
  .json({ message: err.message || "Server Error!" });
};

module.exports = handleError;

```
## 4.add handleError in index.js file
```js
const handleError = require('./middlewares/handleError')
const app =express()

.
.
.
# //Routing

# //HandleError
app.use(handleError)
```

## 5.create auth-routes.js/ user-routes  in Routes folder
```js
const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");


//@ENDPOINT http://localhoat:8000/api/
router.post("/register",  authController.register);
router.post("/login", authController.login);
router.get("/current-user", authController.currentUser);

module.exports = router;
```

## 6. create auth-controller.js in controller folder
```js
const prisma = require("../configs/prisma");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res, next) => {
  try {
    //Step 1 req.body
    const { email, firstname, lastname, password, confirmPassword } = req.body;
    //Step 2 validate
    //----------------------------------------------------
    //Step 3 Check already
    const checkEmail = await prisma.profile.findFirst({
        where:{
            email: email,
        }
    })
    if(checkEmail){
        return createError(400, "Email is already exits")
    }    
    //----------------------------------------------------
    //Step 4 Encrypt bcrypt
    const hashedPassword = bcrypt.hashSync(password, 10)
    console.log(hashedPassword);
    //----------------------------------------------------
    //Step 5 Insert to DB
    const profile =await prisma.profile.create({
        data:{
            email: email,
            firstname: firstname,
            lastname: lastname,
            password: hashedPassword
        },
    })

    //Step 6 Response
    res.json({ message: "Hello, Register" });
  } catch (error) {
    console.log(error);
    next(error)
  }
};

exports.login = async(req, res, next) => {
  try {
    //Step 1 req.body
    const { email, password } = req.body
    //Step 2 check Email and Password
    const profile = await prisma.profile.findFirst({
        where:{
            email: email,
        }
    })
    if(!profile){
        return createError(400,"Invalid Email or Password")
    }

    const isMatch = await bcrypt.compareSync(password,profile.password)
    if(!isMatch){
        return createError(400, "Invalid Email or Password")
    }
    //Step 3 Generate Token
    const payload ={
        id: profile.id,
        email: profile.email,
        firstname: profile.firstname,
        lastname: profile.lastname,
        role: profile.role,
    }
    const token = jwt.sign(payload, process.env.SECRET_KEY,{
        expiresIn:"1d"
    })
    console.log(token);
    //Step 4 Responce
    res.json({ message: "Login Success!", payload: payload, token:token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.currentUser = async (req, res, next)=>{
    try {
        const { email } =req.user
        const profile = await prisma.profile.findFirst({
            where:{
                email: email,
            },
            select:{
                id: true,
                email: true,
                role:true,
            }
        })
        console.log(profile);
        res.json({ result: profile})
    } catch (error) {
        next(error)
    }
}

```

## 7. createError.js in utils folder
``` js
const createError = (code, message) => {
  console.log("step 1 create error");
  const error = new Error(message);
  error.statusCode = code;
  throw error;
};

module.exports = createError;

```
## 8. add createError in auth-controller.js
```js
const prisma = require("../configs/prisma");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
.
.
.
const createError = require("../utils/createError");


```








## 9. create auth-middlewares.js in middlewares folder
```js
const createError = require("../utils/createError");
const jwt = require("jsonwebtoken")

exports.authCheck = async (req,res,next)=>{
    try {
        // fill authorization with token in postnam
        const authorization = req.headers.authorization
        console.log(req.headers,"req.headers");
        // authorization Check!
        if(!authorization){
            return createError(400, " Missing Token ")
        }
        // Set Token for "split" Authorization and use just the last one "[1]"
        const token = authorization.split(" ")[1]

        // Vertify Token (import jwt from "jsonwebtoken")
        jwt.verify(token, process.env.SECRET_KEY,(err, decode)=>{
            
            if(err){
                return createError(401, "Unauthorized !!")
            }
            // Create user property**
            req.user = decode
            next()
        })
    } catch (error) {
        next(error)
    }
}
```
## 10. add auth-middlewares. in auth-routes.js as authCheck
```js
.
.
.
const authController = require("../controller/auth-controller");
//Midddlewares
const { authCheck } = require('../middlewares/auth-middlewares')

.
.
.
router.post("/login", validateWithZod(loginScheme), authController.login);
router.get("/current-user",authCheck, authController.currentUser);
```

## 11. create validator.js in middlewares folder
```js
const { z } = require("zod");

exports.registerScheme = z
  .object({
    email: z.string().email(),
    firstname: z
      .string()
      .min(3, "****Firstname must have at least 3 characters"),
    lastname: z.string().min(3, "****Lastname must have at least 3 characters"),
    password: z.string().min(6, "****Password must have at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, " Confirm Password have to be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm Password not Match",
    path: ["confirmPassword"],
  });

exports.loginScheme = z.object({
  email: z.string().email(),
  password: z.string().min(6, "****Password must have at least 6 characters"),
});

//TEST Validator
exports.validateWithZod = (schema) => (req, res, next) => {
  try {
    console.log("hello, middlewaresrrrrrrrrururururuuruururu",req.body);
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

```

## 12. add validator in auth-routes.js as validator
```js
.
.
.

//@ENDPOINT http://localhoat:8000/api/
router.post("/register", validateWithZod(registerScheme), authController.register);
router.post("/login", validateWithZod(loginScheme), authController.login);
```

## 13. change info in .env / set SECRET_KEY

## 14. add data in Schema prisma
























