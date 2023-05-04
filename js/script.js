'use strict';

// АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН

document.addEventListener('DOMContentLoaded', () => {
	// 1) Получаем в константу все аккордионы, которые у нас есть
	const accrodions = document.querySelectorAll('.question-answer__item')
	// 2) Проходимся по ним, по всем аккордионам на странице
	accrodions.forEach(el => {
		// 3) Навешиваем событие клик на параметр (el)
		el.addEventListener('click', (e) => {
			// 4) создаем константу, которая содержит в себе конкретный элемент, на который нажали
			// это делается для того, чтобы не писать постоянно e.currentTarget;
			const self = e.currentTarget;
			// 5) Находим текущий элемент (текущий аккордион {КНОПКУ АККОРДИОНА})
			const control = self.querySelector('.question-answer__control');
			// 6) Находим текущий элемент (текущий контент - что будет выпадать)
			const content = self.querySelector('.question-answer__content');
			// 7) Либо открывается, либо закрывается
			self.classList.toggle('_open');
			// 8) Чтобы сринридер работал корректно - по нажатию нужно менять атрибуты, создаем условие
			//Если открыт аккордион
			if (self.classList.contains('_open')) {
				//поменяй атрибут на true
				control.setAttribute('aria-expanded', true);
				// а у контента сделай чтобы был виден
				content.setAttribute('aria-hidden', false);
				// Добавляем анимацию, находя высоту, которая складывается из того, что находится внутри
				content.style.maxHeight = content.scrollHeight + 'px';
				// Обратное действие этому else
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
				// Убираем стили значением null
				content.style.maxHeight = null;
			}
		});
	});
});

// В SCSS content нужно задать ._open & opacity: 1;
//Изначально у content такие стили, как ниже
//max - height: 0;
//opacity: 0;
//overflow: hidden;
//will - change: max - height;  выносит элемент в отдельный слой браузера, позволяет оптимизировать
//box - sizing: content - box; необходимо указывать содержимому, так как будет внутренность обрезаться
// И иконке нужно задать ._open & {transform: rotate(45deg);}

// АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН АККОРДЕОН

// АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			//настройка момента старта анимации
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	//функция для корректного получения значения offset
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	//задержка добавления класса active, для загрузки первого экрана
	setTimeout(() => {
		animOnScroll();
	}, 300);
}
// АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ АНИМАЦИЯ