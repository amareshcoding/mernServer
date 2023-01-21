import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '100d',
  });
};

const register = async (req, res) => {
  try {
    const { email, password, userName } = req.body;

    if (!email || !password) {
      return res.status(400).send('Please fill all the fields!');
    }

    const user = await User.create({
      email,
      password,
      userName,
    });

    res.status(201).send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send('Please fill all the fields!');
    }

    const isUser = await User.findOne({ email });
    if (isUser && (await isUser.matchPassword(password))) {
      res.status(200).json({
        user: {
          _id: isUser._id,
          userName: isUser.userName,
          email: isUser.email,
          updatedAt: isUser.updatedAt,
        },
        token: generateToken(isUser._id),
      });
    } else {
      return res.status(400).send('Invalid email or password!');
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { register, login };
