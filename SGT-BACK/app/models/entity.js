import { model, Schema, Types } from "mongoose";

const entitySchema  = new Schema ({
  name:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  users:[{
    type: Types.ObjectId,
    ref:'User'
  }],
//   bankAcounts:[{
//     type:Schema.Types.ObjectId,
//     ref:'BanckAcount',
//   }],
},{
  timestamps:true,
  versionKey:false,
});

export const Entity = model('Entity',entitySchema);