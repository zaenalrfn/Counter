var counter = 0;
const valueCounter = document.getElementById('value_counter'),
	  counterBtns = document.querySelectorAll('.btn')



counterBtns.forEach((itmeBtn) => {
	itmeBtn.addEventListener('click', function(e) {
		const styleCounter = e.target.classList; // bisa juga menggunakan currentTarget

		if (styleCounter.contains('kurang')) { // fungsi dari contains yaitu mendupikat sebuah kelas
			counter--;
		} else if(styleCounter.contains('reset')) {
			counter = 0;
		} else if(styleCounter.contains('tambah')) {
			counter++;
		}
		valueCounter.textContent = counter
	})
})
