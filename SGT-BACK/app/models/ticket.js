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
      values: ['network', 'hardware', 'Software'],
      message: '{VALUE} is not supported, must be network, hardware or Software'
    },
    required:true,
    trim:true,
  },
  status:{
    type:String,
    required:true,
    trim:true,
    enum: {
      values: ['pending', 'in process', 'solved'],
      message: '{VALUE} is not supported, must be pending in process solved'
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