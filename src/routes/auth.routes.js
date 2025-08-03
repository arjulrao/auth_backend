const express = require('express');
const userModel = require('../models/user.model');
const jwt = require("jsonwebtoken");

const router = express.Router();

/* Normal API */
// router.post('/register', async (req, res) => {

//   const {username, password} = req.body;
//     console.log(req.body)
    
//     const user = await userModel.create(
//         {username, password}
    
//     )
//     console.log(user)
//     res.status(201).json({
//         Message : "User Create Successfully",
//         user
//     }) 
    
// })

/* Generate/ Create a Token when user register */
router.post('/register', async (req, res) => {

  const {username, password} = req.body;
    // console.log(req.body)
    
    const user = await userModel.create({
        username, password
    })
//    Create Token 
    const token = jwt.sign({
        id:user._id, 
        // username: user.username 
    }, process.env.JWT_SECRET) 

    res.cookie("token", token)

    res.status(201).json({
        Message : "User Create Successfully",
        user,
        // token
    }) 
    
})

router.post('/login', async(req, res)=>{
    const {username, password} = req.body

    const User = await userModel.findOne({
        username:username
    })
    // console.log(isUserExists)  is give both username and password
    if(!User){
        return res.status(401).json({
            Message : "User not found.."
        })
    } 

    const isPasswordValid = password == User.password

    if(!isPasswordValid){
        return res.status(401).json({
            Message : "Please Enter valid Password.."
        })
    }

    res.status(200).json({
        Message : `${username} login success.`
    })

    // if(isUserExists && isPasswordValid){
    //     return res.status(200).json({
    //         Message : `${username} login success.`
    //     })
    // }
})

// Store token in Body for testing
// router.get('/user', async(req, res)=> {
//     const {token} = req.body;

//     // Check token is received or not
//     if(!token){
//         return res.status(401).json({
//             Message: "Unauthorized"
//         })
//     }
//     // check token is correct or not 
//     // jwt.verify(token, process.env.JWT_SECRET) 

//     // If token is correct it will give user data or token is not correct it give err
//     // const decoded = jwt.verify(token, process.env.JWT_SECRET) 
//     // res.send(decoded)

//     try{
//         const decoded = jwt.verify(token, process.env.JWT_SECRET) 
//         // res.send(decoded)

//         // const user = await userModel.findOne({
//         //     _id: decoded.id
//         // })

//         const user = await userModel.findOne({
//             _id: decoded.id
//         }).select("-password -__v")

//         res.status(200).json({
//             Message : "User info ",
//             user
//             // user : user.username
//         })
//     } catch(err){
//         return res.status(401).json({
//             Message : "Unauthorized User - Invalid Token"
//         })
//     }
   
// })


router.get('/user', async(req, res)=> {
    const {token} = req.cookies;

    // Check token is received or not
    if(!token){
        return res.status(401).json({
            Message: "Unauthorized"
        })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET) 

        const user = await userModel.findOne({
            _id: decoded.id
        }).select("-password -__v")

        res.status(200).json({
            Message : "User info ",
            user
            // user : user.username
        })
    } catch(err){
        return res.status(401).json({
            Message : "Unauthorized User - Invalid Token"
        })
    }
   
})



module.exports = router;