import { model, Schema } from "mongoose";

const userSchema  = new Schema ({
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
  rol:{
    type:String,
    required:true,
    trim:true,
    default:'normal'
  },
  document:{
    type:String,
    required:true,
    trim:true,
  },
  password:{
    type:String,
    required:true,
    trim:true,
    select:false,//permite quitar la pass de las response de la db
  },
  type:{
    type:String,
    required:true,
    trim:true,
  },
  position:{
    type:String,
    required:true,
    trim:true,
  },
  department:{ //esto debe ser por asociation 
    type:String,
    required:true,
    trim:true,
  },
//   bankAcounts:[{
//     type:Schema.Types.ObjectId,
//     ref:'BanckAcount',
//   }],
},{
  timestamps:true,
  versionKey:false,
});

export const User = model('User',userSchema);