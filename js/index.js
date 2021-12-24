const servicesTabs = document.querySelector('.section-services-tabs');
const servicesTabContent = document.querySelectorAll('.section-services-tab-content');

servicesTabs.addEventListener('click', (e) => {
	const tabsTitle = servicesTabs.querySelectorAll('.section-services-tab-item');

	tabsTitle.forEach((tabTitle) => {
		tabTitle.classList.remove('section-services-tab-item-active');
	});

	e.target.classList.add('section-services-tab-item-active');
	let tabAttr = e.target.dataset.content;

	servicesTabContent.forEach((tabContent) => {
		if (tabContent.dataset.content === tabAttr) {
			tabContent.classList.remove('section-services-tab-content-NonActive');
		} else {
			tabContent.classList.add('section-services-tab-content-NonActive');
		}
	});
});

const workTabs = document.querySelector('.section-work-tabs');
const workTabContent = document.querySelectorAll('.section-work-tab-card');

const workImages = [
	{
		dataContent: 'web',
		imgSrc: './images/web design/web-design1.jpg',
		category: 'Web Design',
	},
	{
		dataContent: 'web',
		imgSrc: './images/web design/web-design2.jpg',
		category: 'Web Design',
	},
	{
		dataContent: 'web',
		imgSrc: './images/web design/web-design3.jpg',
		category: 'Web Design',
	},
	{
		dataContent: 'web',
		imgSrc: './images/web design/web-design4.jpg',
		category: 'Web Design',
	},
	{
		dataContent: 'web',
		imgSrc: './images/web design/web-design5.jpg',
		category: 'Web Design',
	},
	{
		dataContent: 'web',
		imgSrc: './images/web design/web-design6.jpg',
		category: 'Web Design',
	},
	{
		dataContent: 'web',
		imgSrc: './images/web design/web-design7.jpg',
		category: 'Web Design',
	},
	{
		dataContent: 'landing',
		imgSrc: './images/landing page/landing-page1.jpg',
		category: 'Landing Page',
	},
	{
		dataContent: 'landing',
		imgSrc: './images/landing page/landing-page2.jpg',
		category: 'Landing Page',
	},
	{
		dataContent: 'landing',
		imgSrc: './images/landing page/landing-page3.jpg',
		category: 'Landing Page',
	},
	{
		dataContent: 'landing',
		imgSrc: './images/landing page/landing-page4.jpg',
		category: 'Landing Page',
	},
	{
		dataContent: 'landing',
		imgSrc: './images/landing page/landing-page5.jpg',
		category: 'Landing Page',
	},
	{
		dataContent: 'landing',
		imgSrc: './images/landing page/landing-page6.jpg',
		category: 'Landing Page',
	},
	{
		dataContent: 'landing',
		imgSrc: './images/landing page/landing-page7.jpg',
		category: 'Landing Page',
	},
	{
		dataContent: 'wordpress',
		imgSrc: './images/wordpress/wordpress1.jpg',
		category: 'Wordpress',
	},
	{
		dataContent: 'wordpress',
		imgSrc: './images/wordpress/wordpress2.jpg',
		category: 'Wordpress',
	},
	{
		dataContent: 'wordpress',
		imgSrc: './images/wordpress/wordpress3.jpg',
		category: 'Wordpress',
	},
	{
		dataContent: 'wordpress',
		imgSrc: './images/wordpress/wordpress4.jpg',
		category: 'Wordpress',
	},
	{
		dataContent: 'wordpress',
		imgSrc: './images/wordpress/wordpress5.jpg',
		category: 'Wordpress',
	},
	{
		dataContent: 'wordpress',
		imgSrc: './images/wordpress/wordpress6.jpg',
		category: 'Wordpress',
	},
	{
		dataContent: 'wordpress',
		imgSrc: './images/wordpress/wordpress7.jpg',
		category: 'Wordpress',
	},
	{
		dataContent: 'wordpress',
		imgSrc: './images/wordpress/wordpress8.jpg',
		category: 'Wordpress',
	},
	{
		dataContent: 'wordpress',
		imgSrc: './images/wordpress/wordpress9.jpg',
		category: 'Wordpress',
	},
	{
		dataContent: 'wordpress',
		imgSrc: './images/wordpress/wordpress10.jpg',
		category: 'Wordpress',
	},
];

const sectionwWorkBtn = document.querySelector('#section-work-btn');
let countClicked = 0;
let addNumImg = 12;
let startImg = 0;

sectionwWorkBtn.addEventListener('click', () => {
	sectionwWorkBtn.insertAdjacentHTML('beforebegin', `<div id="workLoader" class="loader"></div>`);

	setTimeout(() => {
		countClicked++;
		document.querySelector('#workLoader').remove();

		let items = '';

		workImages.slice(startImg, addNumImg).forEach((elem) => {
			items += `
				<div class="section-work-tab-card" data-content="${elem.dataContent}">
					<img class="img" src="${elem.imgSrc}" alt="">
					<div class="work-card-overlay">
						<div>
							<span class="section-work-tab-card-link"><img src="./images/link.png" alt=""></span>
							<span class="section-work-tab-card-square"><i class="fas fa-square-full"></i></span>
						</div>
						<p class="section-work-overlay-title">creative design</p>
						<p class="section-work-overlay-category">${elem.category}</p>
					</div>
				</div>
			`;
		});

		startImg += 12;
		addNumImg += 12;
		document.querySelector('.section-work-tab-content').insertAdjacentHTML('beforeend', items);

		if (countClicked === 2) {
			sectionwWorkBtn.remove();
		}
	}, 2000);
});

workTabs.addEventListener('click', (e) => {
	if (!e.target.dataset.content) {
		return;
	}

	const tabsTitle = workTabs.querySelectorAll('.section-work-tab-item');

	tabsTitle.forEach((tabTitle) => {
		tabTitle.classList.remove('work-tab-active-first');
		tabTitle.classList.remove('work-tab-active');

		if (e.target.dataset.content === 'all') {
			e.target.classList.add('work-tab-active-first');
		} else {
			e.target.classList.add('work-tab-active');
		}
	});

	const workTabContent = document.querySelectorAll('.section-work-tab-card');
	let tabAttr = e.target.dataset.content;

	workTabContent.forEach((tabContent) => {
		if (tabContent.dataset.content === tabAttr || tabAttr === 'all') {
			tabContent.classList.remove('work-content-NonActive');
		} else {
			tabContent.classList.add('work-content-NonActive');
		}
	});
});


window.addEventListener('load', () => {
	var grid = document.querySelector('.gallery-masonry');
	var msnry = new Masonry(grid, {
		colonms: 3,
		itemSelector: '.gallery-item',
		gutter: 20,
	});

	const newImages = ['./images/gallery/stragaze.png', './images/gallery/royal.png', './images/gallery/sunset.png', './images/gallery/royal.png', './images/gallery/sunrise.png'];
	const appendButton = document.querySelector('#section-gallery-btn');

	appendButton.addEventListener('click', function () {
		appendButton.insertAdjacentHTML('beforebegin', `<div id='galleryLoader' class="loader"></div>`);
		appendButton.remove();

		setTimeout(() => {
			let elems = [];
			let fragment = document.createDocumentFragment();

			newImages.forEach(imgSrc => {
				let elem = getItemElement(imgSrc);
				fragment.appendChild(elem);
				elems.push(elem);
			});

			grid.appendChild(fragment);
			msnry.appended(elems);
			document.querySelector('#galleryLoader').remove();
		}, 2000)
	});

	const getItemElement = ((imgSrc) => {
		let elem = document.createElement('div');
		elem.classList.add('gallery-item', 'gallery-img');
		elem.innerHTML = `<img src="${imgSrc}" alt="added image">
 			<div class="gallery-img-hover">
 				<i class="fas fa-search" id="search"></i>
 				<i class="fas fa-expand-arrows-alt" id="arrows"></i>
 			</div>`;

		return elem;
	});
})
