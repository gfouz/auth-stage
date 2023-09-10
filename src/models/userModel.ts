import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const User = userModel();

function userModel() {
  const schema = new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, unique: true, required: true },
      password: { type: String, required: true },
      role: { type: String, default: 'user', required: true },
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    },
  );

  return mongoose.models.User || mongoose.model('User', schema);
}
