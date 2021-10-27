import { Schema, model, Document } from 'mongoose'
import bcrypt from 'bcrypt'

const salt = 2

export interface UserInterface extends Document {
    username: string
    email: string
    password: string
    comparePasswords(userPassword: string, next: (err: Error | null, same: boolean | null) => void): void;
}

const UserSchema: Schema<UserInterface> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

// REVER FUNCIONALIDADE DE ENCRIPTAÇÃO DE SENHA
// * Hash the password befor it is beeing saved to the database
// UserSchema.pre('save', function (this: UserInterface, next: (err?: Error | undefined) => void) {
//   console.log(this.password)
//   // * Make sure you don't hash the hash
//   if (!this.isModified('password')) {
//     console.log('ESTOU NO IF DO DIFERENTE DE')
//     return next()
//   }
//   bcrypt.hash(this.password, salt, (err: Error, hash: string) => {
//     if (err) return next(err)
//     this.password = hash
//     console.log('this.password: ', this.password)
//   })
// })

UserSchema.methods.comparePasswords = function (
  userPassword: string,
  next: (err: Error | null, same: boolean | null) => void
) {
  bcrypt.compare(userPassword, this.password, function (err, isMatch) {
    if (err) {
      return next(err, null)
    }
    next(null, isMatch)
  })
}

export default model('User', UserSchema)
