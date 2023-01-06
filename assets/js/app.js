const design = new Design();
const ui = new UI();

const searchDesign = document.querySelector('#searchDesign');

searchDesign.addEventListener('keyup',(event)=>{
    ui.clear();
    let text =  event.target.value;

    if(text!==''){
        const myArray = design.getDesign(text)
        ui.showDesign(myArray.design[0]);
    }
});

