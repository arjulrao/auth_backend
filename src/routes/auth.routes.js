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

module.exports = router;