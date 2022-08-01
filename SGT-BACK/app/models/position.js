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
    default:1,
    required:true,
    trim:true,
  },
  entity:{
    type: Types.ObjectId,
    ref:'Entity'
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