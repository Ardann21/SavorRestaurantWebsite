//hambuger menu active deactive

const hamMenu = document.querySelector('.ham-div');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
//filter-menu

let filterItem = document.querySelector(".menu-btn");
let filterImages = document.querySelectorAll(".food");
window.addEventListener('load',()=>{
    filterItem.addEventListener('click',(selectedItem)=>{
        if(selectedItem.target.classList.contains('btn')){
            document.querySelector('.active-menu').classList.remove('active-menu');
            selectedItem.target.classList.add('active-menu');
            let filterName = selectedItem.target.getAttribute('data-name');
            filterImages.forEach((food)=>{
                let filterFood = food.getAttribute('data-name');
                if((filterFood == filterName)|| filterName == 'all'){
                    food.style.display='block'
                }else{
                    food.style.display='none'
                }
            })
        }
    })
})