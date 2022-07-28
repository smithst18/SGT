import { model, Schema, Types } from "mongoose";

const positionSchema  = new Schema ({
  name:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  type:{
    type:Number,
    enum:[1,2],
    default:2,
    required:true,
    trim:true,
    unique:true,
  },
  users:[{
    type:Types.ObjectId,
    ref:'User',
  }],
  entity:{
    type: Types.ObjectId,
    ref:'Entity'
  },
},{
  timestamps:true,
  versionKey:false,
});

export const Position = model('Position',positionSchema);