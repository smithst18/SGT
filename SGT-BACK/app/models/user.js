import { model, Schema, Types } from "mongoose";

const userSchema  = new Schema ({
  nickName:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  name:{
    type:String,
    required:true,
    trim:true,
  },
  rol:{
    type:String,
    enum: ['user', 'admin'],
    default:"user",
    required:true,
    trim:true,
  },
  document:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    trim:true,
    select:false,//permite quitar la pass de las response de la db
  },
  position:{
    type: Types.ObjectId,
    ref:'Position'
  },
  entity:{ //esto debe ser por asociation 
    type: Types.ObjectId,
    ref:'Entity'
  },
//   bankAcounts:[{
//     type:Schema.Types.ObjectId,
//     ref:'BanckAcount',
//   }],
},{
  timestamps:true,
  versionKey:false,
});

export const User = new model('User',userSchema);