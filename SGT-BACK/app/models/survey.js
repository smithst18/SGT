import { model, Schema, Types } from "mongoose";

const surveySchema  = new Schema ({
  pre1:{
    type:String,
    required:true,
    trim:true,
  },
  pre2:{
    type:String,
    required:true,
    trim:true,
  },
  pre3:{
    type:String,
    trim:true,
  },
  client:{
    type:Types.ObjectId,
    ref:'User',
  },
},{
  timestamps:true,
  versionKey:false,
});

export const Survey = new model('Survey',surveySchema);