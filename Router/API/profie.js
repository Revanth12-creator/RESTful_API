const express=require('express');
const router=express.Router();

//=======importing====ProfileSChema====from Model=======
const ProfileSChema=require('../../Model/profil.js');

//=======GET============
//======GET All_EMP DETAILS======
router.get('/', async(req,res)=> {
    try{
        let data=await ProfileSChema.find();
        if(!data) throw Error('There is no data to find');
        res.status(200).json(data)
    }  catch(err){
        res.status(400).json({msg:err})
    }
})

//=======GET============
//======GET ONE EMP DETAILS======
router.get('/:id', async(req,res)=> {
    try{
        let data=await ProfileSChema.findById(req.params.id);
        if(!data) throw Error('There is no data to findEmplayee');
        res.status(200).json(data)
    }  catch(err){
        res.status(400).json({msg:err})
    }
})

//=======POST============
//======CREATE POST======
router.post('/',async(req,res)=> {
  let data=new ProfileSChema(req.body);
  try{
    let post=await data.save();
    if(!post) throw Error("while error at posting");
    res.status(200).json(post)
  } catch(err){
      res.status(400).json({msg:err})
  }
})

// //=======PATCH============
// //======UPDATE ONE value or Multiple FROM EMP ======
// router.patch('/:id',async(req,res)=> {
//     try{
//         let data= await ProfileSChema.findByIdAndUpdate(req.params.id,req.body);
//         if(!data) throw Error("there is no data to update");
//         res.status(200).json({success:true})
//     } catch(err){
//         res.status(400).json({msg:err})
//     }
// })

//=======PUT============
//======UPDATE ONE VALUE or Multiple FROM EMP ======
router.put('/:id',async(req,res)=> {
    try{
        let data= await ProfileSChema.findByIdAndUpdate(req.params.id,req.body);
        if(!data) throw Error("there is no data to update");
        res.status(200).json({success:true})
    } catch(err){
        res.status(400).json({msg:err})
    }
})

//=========DELETE==========
//======DELETE ONE EMP ======
router.delete('/:id',async(req,res)=> {
    try{
        let data=await ProfileSChema.findByIdAndDelete(req.params.id,req.body);
        if(!data) throw Error("there is no  to Delete");
        res.status(200).json({success:true})
    } catch(err){
        res.status(400).json({success:true})
    }
})



module.exports=router;