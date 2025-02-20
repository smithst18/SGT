import { model, Schema, Types } from "mongoose";

const surveySchema  = new Schema ({
  pre1:{
    type:String,
    trim:true,
  },
  pre2:{
    type:String,
    trim:true,
  },
  pre3:{
    type:String,
    trim:true,
  },
  pre4:{
    type:String,
    trim:true,
  },
  pre5:{
    type:String,
    trim:true,
  },
  pre6:{
    type:String,
    trim:true,
  },
  pre7:{
    type:String,
    trim:true,
  },
  pre8:{
    type:String,
    trim:true,
  },
  pre9:{
    type:String,
    trim:true,
  },
  pre10:{
    type:String,
    trim:true,
  },
  pre11:{
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