import { model, Schema } from "mongoose";

const ticketSchema  = new Schema ({
  userName:{
    type:String,
    required:true,
    trim:true,
  },
  name:{
    type:String,
    required:true,
    trim:true,
  },
},{
  timestamps:true,
  versionKey:false,
});

export const Ticket = model('Ticket',ticketSchema);