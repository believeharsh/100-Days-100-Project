const boxesContainer = document.getElementById('boxes');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	boxesContainer.classList.toggle('big');
});

function createBoxes() {
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			const box = document.createElement('div');
			box.classList.add('box');
			// console.log(j)
			console.log(i)
			box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
			boxesContainer.appendChild(box);
		}
	}
}

createBoxes();
