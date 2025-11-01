export function scrolesection(){
    const maincontainer = document.querySelector('.maincontainer')
    const prevarrow = document.querySelector('#prev')
    const nextarrow = document.querySelector('#next')
    // Get only the scroll sections, not the buttons
    const scrollSections = document.querySelectorAll('.scroll-section');

    let secttionindex = 0;
    function scrolebehaviour (index){
        const width = window.innerWidth;
        maincontainer.scrollTo({
            left: width*index,
            behavior: 'smooth'
        })
    }

    nextarrow.addEventListener('click', () =>{
        secttionindex = Math.min(secttionindex + 1, scrollSections.length - 1);
        scrolebehaviour(secttionindex)
    })
    prevarrow.addEventListener('click', () =>{
        secttionindex = Math.max(secttionindex - 1 , 0);
        scrolebehaviour(secttionindex)
    })
}