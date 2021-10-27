import { Schema, model, Document } from 'mongoose'

interface TaskInterface extends Document {
  id?: string
  name?: string
  description?: string
  done: string
}

const TaskSchema = new Schema({
  name: String,
  description: String,
  done: Boolean
}, {
  timestamps: true
})

export default model<TaskInterface>('Task', TaskSchema)
