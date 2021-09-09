$("html, body").animate({scrollTop: 0}, "slow")
let skillsButton = $('.skills-button')
skillsButton.on("click", expandSkills)
let copyEmailLink = $("#copy-email-link")
copyEmailLink.on("click", ()=>copy("donniewomboughjunior@gmail.com"))
// let contactLink = $(".bottom-scroller")
// contactLink.on("click", ()=>{
//     $("html, body").animate({scrollTop: $("html").scrollHeight}, "slow")
// })

// $(".work-item a").off()


function expandSkills(e){

	let skills = $('.skills-section')[0]
	let arrow = $('.skills-button i')[0]
	e.preventDefault()

	if (skills.style.maxHeight){
		skills.style.maxHeight = null
		arrow.classList.remove("fa-chevron-up")
		arrow.classList.add("fa-chevron-down")
        $("html, body").animate({scrollTop: 0}, "slow")
	}else{
		skills.style.maxHeight = skills.scrollHeight + "px"
        skillsButton[0].scrollIntoView({ behavior: 'smooth'})
		arrow.classList.remove("fa-chevron-down")
		arrow.classList.add("fa-chevron-up")

	}
}


function copy(text){
    navigator.clipboard.writeText(text).then(()=>{
        // alert("Copied to clipboard: " + text);
    });
}