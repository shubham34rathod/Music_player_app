const mongoose=require('mongoose')

mongoose.connect(process.env.DB_URL+process.env.DB_NAME)
.then(()=>console.log('connected to database'))
.catch(()=>console.log('connection error'))

//user schema.....................................................

let userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true},
    profile:{type:String},
    password:{type:String}
},{timestamps:true})

let userModel=mongoose.model('user',userSchema)

//new song schema..................................................

let songSchema=new mongoose.Schema({
    name:{type:String},
    release_date:{type:String},
    artist:{type:Array},
    poster:{type:String},
    song:{type:String},
    rating:{type:Number,default:0}
},{timestamps:true})

let songModel=mongoose.model('song',songSchema)

//artist schema.....................................................

let artistSchema=new mongoose.Schema({
    name:{type:String},
    dob:{type:String},
    bio:{type:String}
},{timestamps:true})

let artistModel=mongoose.model("artist",artistSchema)

module.exports={userModel,songModel,artistModel}