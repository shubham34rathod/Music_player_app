const router=require('express').Router()
const bcrypt=require('bcrypt')
const {userModel, songModel,artistModel}=require('../data_base/db.js')

//add new user.....................

router.post('/register',async(req,res)=>{
    try 
    {
        req.body.password=await bcrypt.hash(req.body.password,10)
        console.log(req.body);
        let doc=new userModel(req.body)
        let new_user=await doc.save()
        res.status(200).json(new_user)
    } 
    catch (error) 
    {
        res.json(error)
    }
})

//login user...........................

router.post('/login',async(req,res)=>{
    try 
    {
        let check_user=await userModel.findOne({email:req.body.email})
        if(check_user)
        {
            let check_password=await bcrypt.compare(req.body.password,check_user.password)
            if(check_password)
            {
                let {password,...data}=check_user._doc
                res.status(200).json(data)
            }
            else
            {
                res.status(402).json('wrong password')
            }
        }
        else
        {
            // res.status(402).json('user not exist')
            res.send('user not exist')
        }
    } 
    catch (error) 
    {
        res.status(500).json(error)
    }
})

//add new song.............................

router.post('/addSong',async(req,res)=>{
    try 
    {
        console.log(req.body);
        let newSong=new songModel(req.body)
        let addSong=await newSong.save()
        res.status(200).json(addSong)
    } 
    catch (error) 
    {
        res.status(500).json(error)
    }
})

//get top 10 songs...............................

router.get('/getSongs',async(req,res)=>{
    try 
    {
        let songData=await songModel.find().sort({rating:-1}).limit(10)
        res.status(200).json(songData)
    } 
    catch (error) 
    {
        res.status(500).json(error)
    }
})

//get top 10 songs...............................

router.get('/getAllSongs',async(req,res)=>{
    try 
    {
        let songData=await songModel.find().sort({rating:-1})
        res.status(200).json(songData)
    } 
    catch (error) 
    {
        res.status(500).json(error)
    }
})

//get top 10 artist...............................

router.get('/getTopArtist',async(req,res)=>{
    try 
    {
        let songData=await songModel.find().sort({rating:-1})
        res.status(200).json(songData)
        // console.log('astist',songData);
    } 
    catch (error) 
    {
        res.status(500).json(error)
    }
})

//add artist..............................

router.post('/newArtist',async(req,res)=>{
    try 
    {
        // console.log(req.body);
        let new_artist=new artistModel(req.body)
        let add_artist=await new_artist.save()
        // res.status(200).json(add_artist)
    } 
    catch (error) 
    {
        res.status(500).json(error)
    }
})

// get artists..........................

router.get('/artist',async(req,res)=>{
    try 
    {
        let data=await artistModel.find()
        res.status(200).json(data)
    } 
    catch (error) 
    {
        
    }
})

//update song rating...................

router.post('/updateRating/:id',async(req,res)=>{
    try 
    {
        console.log(req.params.id);
        console.log(req.body.rating);
        let songData=await songModel.findByIdAndUpdate(req.params.id,{rating:req.body.rating},{new:true})
    } 
    catch (error) 
    {
        res.status(200).json(error)
    }
})


module.exports=router