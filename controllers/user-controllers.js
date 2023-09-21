// import User from "../models/User";
const bcrypt = require('bcrypt');
const User = require("../models/User");

//  get user
const getAllUser=async (req, res)=>{
    try {
        // Find all users in the database
        const users = await User.find({}, '-password'); // Exclude the password field
    
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users' });
      }
    }

    // sign up user
    const signUp=async (req, res)=>{
    try {
        const { name, email, password } = req.body;
    
        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });
    
        await newUser.save();
    
        res.status(201).json({ message: 'User registered successfully' });
        
      }
      
       catch (error) {
        res.status(500).json({ error: 'An error occurred while signing up' });
      }
    }
// async (req, res)=> res.status(200).send('blub')
module.exports = {getAllUser,signUp};
