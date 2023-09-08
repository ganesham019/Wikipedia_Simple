const nextPageBtn = document.getElementById('next_btn');
const backPageBtn = document.getElementById('back_btn');
const mainPage = document.getElementById('main');
const commonPage = document.getElementById('common');

nextPageBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    mainPage.classList.add('hide');
    commonPage.classList.remove('hide');
})
backPageBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    mainPage.classList.remove('hide');
    commonPage.classList.add('hide');
})