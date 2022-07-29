import { model, Schema, Types } from "mongoose";
const entitySchema  = new Schema ({
  name:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  users:[{
    type: Schema.Types.ObjectId,
    ref:'User'
  }],
},{
  timestamps:true,
  versionKey:false,
});

export const Entity = new model('entitys',entitySchema);