import { model, Schema, Types } from "mongoose";

const positionSchema  = new Schema ({
  name:{
    type:String,
    required:true,
    trim:true,
  },
  users:[{
    type:Types.ObjectId,
    ref:'User',
  }],
},{
  timestamps:true,
  versionKey:false,
});

export const Position = new model('Position',positionSchema);