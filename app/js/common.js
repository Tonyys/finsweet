// Register window (Volunteer)
if (document.querySelector('.reg')) {
	const btnJoin = document.querySelector('#join')
	const btnTarget = document.querySelector('.reg')
	const btnExit = document.querySelector('.reg__exit')

	btnJoin.addEventListener('click', function (item) {
		btnTarget.classList.add('active')
	})

	btnExit.addEventListener('click', function (item) {
		btnTarget.classList.remove('active')
	})

}


// Tabs (Donation)

const tabsBtn = document.querySelectorAll('.protect__tabs-btn')
const tabsContent = document.querySelectorAll('.protect__tabs-content')

tabsBtn.forEach(function (tab, index) {
	tab.addEventListener('click', function (item) {
		tabsBtn.forEach(function (item) {
			item.classList.remove('active')
		})

		tabsContent.forEach(function (item) {
			item.classList.remove('active')
		})

		tabsContent[index].classList.add('active')
		tab.classList.add('active')
	})
})


