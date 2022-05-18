let cont = document.querySelector('.controls')

let slide1 = document.querySelector('.slide1')
let slide2 = document.querySelector('.slide2')
let slide3 = document.querySelector('.slide3')
let slide4 = document.querySelector('.slide4')
let slide1Active = new Boolean(true)
let slide2Active = new Boolean(false)
let slide3Active = new Boolean(false)
let slide4Active = new Boolean(false)
let j = 1

cont.addEventListener('click', ()=> {
	if (j == 1) {
		document.getElementsByClassName('text1')[0].style.display="none"
		document.getElementsByClassName('text2')[0].style.display="block"
		setTimeout(timer, 300)
		console.log(j)
	}
})
	cont.addEventListener('click', ()=> {
		if (j == 2) {
			document.getElementsByClassName('text2')[0].style.display="none"
			document.getElementsByClassName('text3')[0].style.display="block"
		setTimeout(timer, 300)
		console.log(j)
		}
		
	})
	cont.addEventListener('click', ()=> {
		if (j == 3) {
			document.getElementsByClassName('text3')[0].style.display="none"
			document.getElementsByClassName('text4')[0].style.display="block"
		setTimeout(timer, 300)
		console.log(j)
		}
		
	})
	


	
	
	

function timer() {
	j = j + 1
	console.log(j)
}
