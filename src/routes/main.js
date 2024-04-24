const express = require("express")

const routes = express.Router()

const Detail = require("../models/Detail")
const Slider = require("../models/Slider")
const Service = require("../models/Service")
const Contact = require("../models/Contact")
const Image = require("../models/Images")


routes.get("/",async(req,res)=>{
      
   const details = await Detail.findOne({"_id":"6624cfe7f6175a1146e6d3f5"})
   const slides = await Slider.find()
   const services = await Service.find()
 
   //console.log(slides)
  // console.log(details)
    res.render("index",{
        details:details,
        slides:slides,
        services,services
    })
})

// routes.get("/gallery",async(req,res)=>{
//     const details = await Detail.findOne({"_id":"6624cfe7f6175a1146e6d3f5"})
//     const images = await Image.find()
//     res.render("gallery",{
//         details:details,
//         images:images
//     })
// });

routes.post("/process-contact-form",async(request,response)=>{
    console.log(request.body);
    //save the data to db
    try {
        const data = await Contact.create(request.body)
        console.log(data);
        response.redirect("/")
    } catch (error) {
       console.log(error); 
       response.redirect("/")
    }
})

module.exports = routes