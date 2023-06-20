// ховер эффект на кнопке при надедении на целый блок

const list__box = document.querySelectorAll('.directions__list-item');

list__box.forEach((item) => {
	item.addEventListener("mouseover", (event) => {
		let path = event.currentTarget.getAttribute('data-order');
		
		let ex = document.querySelector(`[data-path="${path}"]`);
		ex.classList.add('new__color');		
		});

		item.addEventListener('mouseleave', (event)=>{
			let path = event.currentTarget.getAttribute('data-order');
			
	
			let ex = document.querySelector(`[data-path="${path}"]`);
			ex.classList.remove('new__color');		
			});
	});

	// Функция фильтрации

	const list = document.querySelector('.directions__filter-box');
	const items = document.querySelectorAll('.directions__list-item');
	const listItems = document.querySelectorAll('.directions__filter-item');
	const directions__list = document.querySelector('.directions__list');


	function filter() {
		list.addEventListener('click', event => {
			const targetFilter = event.target.dataset.id;

			const target= event.target;
			
			// items.forEach(item => {
			// 	if(!item.classList.contains(`${targetFilter}`)) item.style.display='none';
			// 	else  item.style.display='block';
			// })

			
		if(target.classList.contains('directions__filter-item')) {
			listItems.forEach(listItem => listItem.classList.remove('active'));
			
			target.classList.add('show-block');			
			target.classList.add('active');
			
			

		}

			switch(targetFilter) {
				case 'all':
					getItems('directions__list-item');
				
					break
				case 'Marketing':
					getItems(targetFilter);
					break
				case 'Management':
					getItems(targetFilter);
					break
				case 'HR':
					getItems(targetFilter);
					break
				case 'Design':
					getItems(targetFilter);
					break
				case 'Development':
					getItems(targetFilter);
					break				
			}

			
		})
	}

	filter();

function getItems(className) {
	items.forEach(item => {
		if(item.classList.contains(className)) {
			item.style.display = "none";
			setTimeout(() => {
				item.style.display = "block";

			}, "200");		
		
			
		} else {
			item.style.display = "none";			
		}
		
	})
}
	

