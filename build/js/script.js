window.addEventListener('DOMContentLoaded', () => {
    //---- constants------------
    const sliderWrap = document.querySelectorAll('.feedback-wrap')
    const arrowLeft=document.querySelector('.arrow-left')
    const arrowRight=document.querySelector('.arrow-right')
    let indexFeedback = 0
    //----/-- constants---/-----
    //--------slider------------
    function feedbackHide(){
        sliderWrap.forEach(el => {
            el.classList.remove('show')
            el.classList.add('hide')
        });
    }
    function feedbackShow(index=0){
        sliderWrap[index].classList.add('show')
    }
    feedbackHide()
    feedbackShow()
    arrowLeft.addEventListener('click', () => {
        if(indexFeedback>0){
            indexFeedback--
            feedbackHide()
            feedbackShow(indexFeedback)
            console.log(indexFeedback)
        }else{
            indexFeedback=sliderWrap.length-1
            feedbackHide()
            feedbackShow(indexFeedback)
            console.log(indexFeedback)
        }

    })
    arrowRight.addEventListener('click', () => {
        if(indexFeedback<sliderWrap.length-1){
            indexFeedback++
            feedbackHide()
            feedbackShow(indexFeedback)
            console.log(indexFeedback)
        }else{
            indexFeedback=0
            feedbackHide()
            feedbackShow(indexFeedback)
            console.log(indexFeedback)
        }

    })
    //-----/--slider------------
})