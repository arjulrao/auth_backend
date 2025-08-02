const express = require('express');
const userModel = require('../models/user.model')

const router = express.Router();

router.post('/register', async (req, res) => {

  const {username, password} = req.body;
    console.log(req.body)
    
    const user = await userModel.create(
        {username, password}
    
    )
    console.log(user)
    res.status(201).json({
        Message : "User Create Successfully",
        user
    }) 
    
})

router.post('/login', async(req, res)=>{
    const {username, password} = req.body

    const isUserExists = await userModel.findOne({
        username:username
    })
    // console.log(isUserExists)  is give both username and password
    if(!isUserExists){
        return res.status(401).json({
            Message : "User not found.."
        })
    } 

    const isPasswordValid = password == isUserExists.password

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

module.exports = router;