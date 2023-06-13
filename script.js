console.log('JS funguje');


// function pozdrav() {
// 	console.log('Ahoj');
// 	console.log('Dnes je hezky');
// 	console.log('Juhuu, jedeme na vylet');
// }

// const zdravim = function() {
// 	console.log('Cus');
// 	console.log('Dnes je osklive');
// 	console.log('Juhuu, nikam nejedeme');
// }

// arrow function
// const zdravice = (jmeno) => {
// 	console.log('Cago belo');
// 	console.log('Ty jsi', jmeno);
// }

// zdravice('Alena');
// zdravice('Petr');
// zdravice('Jana');


// const uvitani = zdravice;

// uvitani('Lenka');


// const budicek = () => {
// 	console.log('crrrrr');
// }

// setTimeout(budicek, 5000);
// setInterval(budicek, 2000);



const priKliknuti = () => {
	console.log('klikity kliky klik');
	const odstavec = document.querySelector('#text');
	odstavec.textContent = 'Nový text v odstavci';
	odstavec.style.color = 'red';
}

const tlacitko = document.querySelector('#tlacitko');
tlacitko.addEventListener('click', priKliknuti);




const priKliknutiNaFoto = () => {
	const obr = document.querySelector('#foto');
	obr.src = 'images/pes.jpg';
}

const foto = document.querySelector('#foto');
foto.addEventListener('click', priKliknutiNaFoto);






const priStiskuKlavesy = (event) => {
	console.log(event);

	if (event.code === 'KeyO') {
		const ctverecek = document.querySelector('.ctverecek');
		ctverecek.classList.toggle('otoceny');
	}

	if (event.key === 'k') {
		const ctverecek = document.querySelector('.ctverecek');
		ctverecek.classList.toggle('kolecko');
	}
}

document.addEventListener('keypress', priStiskuKlavesy);
