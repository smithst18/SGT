import { model, Schema, Types } from "mongoose";

const chatSchema  = new Schema ({
  users:[{
    type:Schema.Types.ObjectId,
    ref:'User'
  }],
  messages:[
    {
      user:String,
      text:String,
      time:String,
      read:Boolean
    }
  ],
},{
  timestamps:true,
  versionKey:false,
});

export const Chat = new model('Chat',chatSchema);