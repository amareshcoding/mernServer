import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    userName: { type: String , default:'Guest User'},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//hashing password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const saltRound = await bcrypt.genSalt(10);
  const hash = await bcrypt.hashSync(this.password, saltRound);
  this.password = hash;
  return next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compareSync(password, this.password);
};
const User = mongoose.model('user', userSchema);
export default User;
