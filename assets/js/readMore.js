
const more = document.querySelectorAll('.more');


// for (let i = 0; i < more.length; i++) {
//   more[i].addEventListener('click', () => {
//     more[i].parentNode.classList.toggle('active');
//   })
// }


function readMoreBtn(visibleBtn, hiddenBtn1, hiddenBtn2,
    hiddenBtn3, hiddenBtn4, hiddenBtn5, hiddenBtn6, hiddenBtn7,
    hiddenBtn8, hiddenBtn9, hiddenBtn10, hiddenBtn11,
    hiddenBtn12, hiddenBtn13, hiddenBtn14, hiddenBtn15,
    hiddenBtn16, hiddenBtn17, hiddenBtn18, hiddenBtn19, 
    hiddenBtn20, hiddenBtn21, hiddenBtn22, hiddenBtn23,
    hiddenBtn24, hiddenBtn25) {
    
    visibleBtn.addEventListener('click',()=>{
        // for visible button
        visibleBtn.parentNode.classList.toggle('active');

        // for hidden buttons
        hiddenBtn1.parentNode.classList.remove('active');
        hiddenBtn2.parentNode.classList.remove('active');
        hiddenBtn3.parentNode.classList.remove('active');
        hiddenBtn4.parentNode.classList.remove('active');
        hiddenBtn5.parentNode.classList.remove('active');
        hiddenBtn6.parentNode.classList.remove('active');
        hiddenBtn7.parentNode.classList.remove('active');
        hiddenBtn8.parentNode.classList.remove('active');
        hiddenBtn9.parentNode.classList.remove('active');
        hiddenBtn10.parentNode.classList.remove('active');
        hiddenBtn11.parentNode.classList.remove('active');
        hiddenBtn12.parentNode.classList.remove('active');
        hiddenBtn13.parentNode.classList.remove('active');
        hiddenBtn14.parentNode.classList.remove('active');
        hiddenBtn15.parentNode.classList.remove('active');
        hiddenBtn16.parentNode.classList.remove('active');
        hiddenBtn17.parentNode.classList.remove('active');
        hiddenBtn18.parentNode.classList.remove('active');
        hiddenBtn19.parentNode.classList.remove('active');
        hiddenBtn20.parentNode.classList.remove('active');
        hiddenBtn21.parentNode.classList.remove('active');
        hiddenBtn22.parentNode.classList.remove('active');
        hiddenBtn23.parentNode.classList.remove('active');
        hiddenBtn24.parentNode.classList.remove('active');
        hiddenBtn25.parentNode.classList.remove('active');
    })

}

readMoreBtn(more[0], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[1], more[0], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[2], more[1], more[0], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[3], more[1], more[2], more[0], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[4], more[1], more[2], more[3], more[0], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[5], more[1], more[2], more[3], more[4], more[0], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[6], more[1], more[2], more[3], more[4], more[5], more[0], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[7], more[1], more[2], more[3], more[4], more[5], more[6], more[0], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[8], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[0], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[9], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[0], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[10], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[0], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[11], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[0], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[12], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[0], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[13], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[0], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[14], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[0], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[15], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[0], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[16], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[0], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[17], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[0], more[18], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[18], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[0], more[19], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[19], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[0], more[20], more[21], more[22], more[23], more[24]);
readMoreBtn(more[20], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[0], more[21], more[22], more[23], more[24]);
readMoreBtn(more[21], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[0], more[22], more[23], more[24]);
readMoreBtn(more[22], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[0], more[23], more[24]);
readMoreBtn(more[23], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[0], more[24]);
readMoreBtn(more[24], more[1], more[2], more[3], more[4], more[5], more[6], more[7], more[8], more[9], more[10], more[11], more[12], more[13], more[14], more[15], more[16], more[17], more[18], more[19], more[20], more[21], more[22], more[23], more[0]);