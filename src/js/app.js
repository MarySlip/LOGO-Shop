//BURGER header
$(document).ready(function(){
$('.icon-menu').click(function (event) {
	$(this).toggleClass('-active');
	$('.menu__body').toggleClass('-active');
	$('body').toggleClass('lock');
});
});

//BURGER main
let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');

menuPageBurger.addEventListener("click", function (e) {
	menuPageBurger.classList.toggle('-active');
	menuPageBody.classList.toggle('-active');
});

//active MENU main
let menuParents = document.querySelectorAll('.menu-page__parent');

for (let index = 0; index < menuParents.length; index++) {
	const menuParent = menuParents[index];
	menuParent.addEventListener("mouseenter", function (e) {
		menuParent.classList.add('-active');
	});
	menuParent.addEventListener("mouseleave", function (e) {
		menuParent.classList.remove('-active');
	});
}




//SLIDER
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {

		}
	}
	slider_bild_callback();
}

function slider_bild_callback(params) { }

let main_slider = new Swiper('.main-slider__body', {

	observer: true,
	observePerents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	speed: 800,
	loop: true,
	navigation: {
		nextEl: '.control-main-slider__arrow-next',
		prevEl: '.control-main-slider__arrow-prev',
	},
	breakpoints: {
		320: {
			autoHeight: true,
		},
		768: {
			autoHeight: false,
		}
	},
	on: {
		lazyImageReady: function () {
			ImageBitmap();
		},
	}
});

