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
  status:{
    type:String,
    required:true,
    trim:true,
  },
  status:{
    type:String,
    required:true,
    trim:true,
  },
  takeBy:{
    type:Types.ObjectId,
    ref:'user',
  }
},{
  timestamps:true,
  versionKey:false,
});

export const Ticket = new model('Ticket',ticketSchema);