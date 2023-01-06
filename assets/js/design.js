
class Design{
   
    constructor() {  }

      getDesign(username){
        const data = [{
            id: 1,
            username: "Jenny Molla",
            designtools: "Figma",
            images: "images/firstContent.png",
            code: "25",
            like: "25",
            brandlogo: "images/brand-logos.png"
        },
        {
            id: 2,
            username: "Jenny Molla",
            designtools: "Sketch",
            images: "images/secondContent.png",
            code: "27",
            like: "25",
            brandlogo: "images/brand-logos2.png"
        },
        {
            id: 3,
            username: "Jenny Molla",
            designtools: "Adobe",
            images: "images/thirdContent.png",
            code: "25",
            like: "28",
            brandlogo: "images/brand-logos4.png"
        },
        {
            id: 4,
            username: "Jenny Molla",
            designtools: "Adobe Photoshop",
            images: "images/thirdContent.png",
            code: "25",
            like: "28",
            brandlogo: "images/brand-logos5.png"
        },
    ]

    
        
        const design = data.filter(item => item.designtools == username);
        console.log(design);
        return {
            design
        }

    }

}