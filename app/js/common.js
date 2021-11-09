const btn = document.querySelector('#join')
const btnTarget = document.querySelector('.reg')
const btnExit = document.querySelector('.reg__exit')

btn.addEventListener('click', function (item) {
	btnTarget.classList.add('active')

	console.log()

})

btnExit.addEventListener('click', function (item) {
	btnTarget.classList.remove('active')
})


