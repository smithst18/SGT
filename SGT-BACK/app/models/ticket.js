import { model, Schema, Types } from "mongoose";

const ticketSchema  = new Schema ({
  item:{
    type:String,
    required:true,
    trim:true,
  },
  description:{
    type:String,
    required:true,
    trim:true,
  },
  type:{
    type:String,
    enum: {
      values: ['Network', 'Hardware', 'Software'],
      message: '{VALUE} valor no permitido,debe ser  network, hardware o Software'
    },
    required:true,
    trim:true,
  },
  status:{
    type:String,
    required:true,
    trim:true,
    enum: {
      values: ['pending', 'in-process', 'closed'],
      message: '{VALUE} valor no permitido, debe ser pending in-process o solved'
    },
    default:'pending',
  },
  sendBy:{
    type:Types.ObjectId,
    ref:'User',
    required:true,
  },
  takeBy:{
    type:Types.ObjectId,
    ref:'User',
    default:null
  }
},{
  timestamps:true,
  versionKey:false,
});

export const Ticket = new model('Ticket',ticketSchema);