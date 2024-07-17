// NAVBAR

let selectedButton = document.querySelectorAll('.aside-button')[0]

function changeView(button) {
	if (selectedButton !== null) {
		selectedButton.classList.remove('selected');
	}
	button.classList.add('selected');
	selectedButton = button;

	document.getElementById('aside-title').textContent = button.textContent;
}

// ASIDE

document.getElementById('double-arrow').addEventListener('click', () => {
	const flexContainer = document.getElementById('flex-container');
	if (flexContainer.style.justifyContent === 'flex-start') {
		flexContainer.style.justifyContent = 'flex-end';
	} else {
		flexContainer.style.justifyContent = 'flex-start';
	}
});

const headers = document.querySelectorAll('.accordion-header');
const contents = document.querySelectorAll('.accordion-content');

headers.forEach((header, index) => {
	header.addEventListener('click', () => {
		const content = contents[index];
		
		// Mostrar u ocultar el contenido
		if (content.style.display === 'none' || content.style.display === '') {
			content.style.display = 'block';
		} else {
			content.style.display = 'none';
		}

		headers[index].classList.toggle('active');
	});
});

contents.forEach((content, index) => {
	content.addEventListener('click', () => {
		headers.forEach(h => {
			h.classList.remove('selected');
		});

		contents.forEach(c => {
			c.classList.remove('selected');
		});
		
		contents[index].classList.toggle('selected');
		headers[index].classList.toggle('selected');
	});
});

// SECTION

document.addEventListener('DOMContentLoaded', () => {
  let selectedIndex = 0;

  const updateSelection = (index) => {
    headers.forEach((header, i) => {
			if (i === index) {
				header.classList.add('selected');
				if (header.nextElementSibling) {
					header.nextElementSibling.classList.add('selected');
				}
			} else {
				header.classList.remove('selected');
				if (header.nextElementSibling) {
					header.nextElementSibling.classList.remove('selected');
				}
			}
    });
	};


  document.getElementById('up-button').addEventListener('click', () => {
    if (selectedIndex > 0) {
      selectedIndex--;
      updateSelection(selectedIndex);
    }
  });

  document.getElementById('down-button').addEventListener('click', () => {
    if (selectedIndex < headers.length - 1) {
      selectedIndex++;
      updateSelection(selectedIndex);
    }
  });

  updateSelection(selectedIndex);
});

function showDropdown() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function updateButton(text, colorClass) {
  document.getElementById("dropdown-button").textContent = text;
  document.getElementById("dropdown-button").style.backgroundColor = colorClass;
	//Aside
	const selectedContent = document.querySelector('.accordion-content.selected');

	if (selectedContent) {
		const status = selectedContent.querySelector('.status');
		const etiqueta = selectedContent.querySelector('.etiqueta');
		status.style.backgroundColor = colorClass;
		status.textContent = text;
		etiqueta.style.backgroundColor = colorClass;
	}
}

function hideDropdown() {
	document.getElementById("myDropdown").classList.remove("show");
}

// Cierra el menú desplegable al hacer clic fuera de él
window.onclick = function(event) {
	if (!event.target.matches('.dropdown-content') &&!event.target.matches('.dropdown button')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}