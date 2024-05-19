 
const userModel = require('../models/userModel.js');  
  
  
module.exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if the role limit has been reached
    const count = await userModel.countDocuments({ role });
    const roleLimits = { student: 2, teacher: 2, principal: 1 };
    if (count >= roleLimits[role]) {
      return res.status(400).json({ error: 'Role limit reached' });
    }

    // Create the user without hashing the password
    const user = await userModel.create({ name, email, password, role });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
 
module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare plain text password
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', role: user.role });
  } catch (error) {
    console.error('Internal server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
  
  