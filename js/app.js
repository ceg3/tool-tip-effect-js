document.addEventListener('DOMContentLoaded',toolTipEffects);

function toolTipEffects() {

    const helpTextList = [
        {
            id: "home",
            text: "You are already home"
        },
        {
            id: "about",
            text: "Get the info about us"
        },
        {
            id: "contact",
            text: "Connect with us"
        }
    ]

    // this function is a work around for a closure issue
    //const setText = function(j) {
    //    return ()=> {helpText.textContent = helpTextList[j].text}
    //}

    //const clearText = function() {
    //    return ()=> {helpText.textContent = ""}
    //}

    const helpText = document.querySelector(".help-text");
    // using let in for loop eliminates the closure problem
    for(let i = 0; i < helpTextList.length; i++) {
        let btn = document.querySelector(`#${helpTextList[i].id}`);
        //btn.addEventListener('mouseenter', setText(i))
        //btn.addEventListener('mouseleave', clearText())
        btn.addEventListener('mouseenter', ()=> {helpText.textContent = helpTextList[i].text})
        btn.addEventListener('mouseleave', ()=> {helpText.textContent = ""})
    }

}