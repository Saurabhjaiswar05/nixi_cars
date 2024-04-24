const express = require("express")
const hbs = require("hbs")
const app = express()
const mongoose = require("mongoose")
const routes = require("./routes/main")
const Detail = require("./models/Detail")
const Slider = require("./models/Slider")
const Service = require("./models/Service")
const bodyParser = require("body-parser")
const Images= require("./models/Images")


// static filr ko access with this pubic as a /static
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/static",express.static("public"))
app.use("",routes)


// hbs is a template engine 

app.set("view engine","hbs")
app.set("views","views")

// adding partials 

hbs.registerPartials("views/partials")

// mongodb connection

mongoose.connect("mongodb://localhost:27017/dynamicData").then(()=>{
    console.log("database connected");

    // Images.create(
    //     [
    //         {
    //             img:"/static/images/g1.jpg"
    //         },
    //         {
    //             img:"/static/images/g2.webp"
    //         },
    //         {
    //             img:"/static/images/g3.jpg"
    //         },
    //         {
    //             img:"/static/images/g4.webp"
    //         },
    //         {
    //             img:"/static/images/g5.jpeg"
    //         },
    //         {
    //             img:"/static/images/g6.avif"
    //         },
    //         {
    //             img:"/static/images/g7.jpg"
    //         },
    //         {
    //             img:"/static/images/g8.jpeg"
    //         },
    //         {
    //             img:"/static/images/g9.jpeg"
    //         }
    //     ]
    // )



//     Service.create([
//         {
//             icon:"fa-brands fa-accusoft",
//             title:"Provide Best Courses",
//             description:"provided courses that helps our students in learning and in placement.",
//             linkText:"https://www.porsche.com/middle-east/_india_/",
//             link:"Check"
//        },
//        {
//         icon:"fa-brands fa-affiliatetheme",
//         title:"Learn Project",
//         description:"provided courses that helps our students in learning and in placement.",
//         linkText:"https://www.porsche.com/middle-east/_india_/",
//         link:"Learn"
//    },
//    {
//     icon:"fa-brands fa-affiliatetheme",
//     title:"Learn Project",
//     description:"provided courses that helps our students in learning and in placement.",
//     linkText:"https://www.porsche.com/middle-east/_india_/",
//     link:"Learn"
// }
// ])



    //  Slider.create(
    //     {
    //     title:"Red Porsche",
    //     subTitle:"This is 1st porsche",
    //     imageUrl:"/static/images/s1.jpg"
    //     },
    //     {
    //         title:"White Porsche",
    //         subTitle:"This is 2nd porsche",
    //         imageUrl:"/static/images/s2.jpg"
    //         },
    //         {
    //             title:"Black Porsche",
    //             subTitle:"This is 3rd porsche",
    //             imageUrl:"/static/images/s3.jpg"
    //             }
    // )



    // Detail.create({
    //     brandName:"Nixi",
    //     brandIconUrl:"https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo.png",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         }
    //     ]
    // })
})



app.listen(process.env.PORT || 5556,()=>{
    console.log("server Started");
})