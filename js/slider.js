const personMind = [
	{
		quote:
			'Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem,non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam',
		name: 'Hasan Ali',
		occupation: 'UX Designer',
		imgSrc: './images/people/person1.jpg',
	},
	{
		quote:
			'Sed ut perspiciatis undeeaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
		name: 'Aja Walker',
		occupation: 'Front-end',
		imgSrc: './images/people/person2.jpg',
	},
	{
		quote:
			'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe ',
		name: 'Anna Smith',
		occupation: 'Back-end',
		imgSrc: './images/people/person3.jpg',
	},
	{
		quote:
			'Ut gravida mattis lacus, a fermentum sapien. Aenean vitae porta eros. Ut quis libero pulvinar, pellentesque tellus lobortis, porttitor orci. Phasellus laoreet tincidunt dignissim. Nulla nisl mi, venenatis at blandit et, hendrerit in metus. Donec porttitor nibh eu tellus tincidunt, eget rhoncus massa consectetur. Praesent et sapien turpi',
		name: 'Liam Wilson',
		occupation: 'QA engineer',
		imgSrc: './images/people/person4.jpg',
	},
];

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const smallImgs = document.querySelectorAll('.section-people-small-img');
const carousel = document.querySelector('.carousel');

let currentPerson = 0;
let person = '';

prevBtn.addEventListener('click', () => {
	if (currentPerson === 0) {
		currentPerson = personMind.length - 1;
	} else {
		currentPerson--;
	}

	setInfo(currentPerson);
});

nextBtn.addEventListener('click', () => {
	if (currentPerson === personMind.length - 1) {
		currentPerson = 0;
	} else {
		currentPerson++;
	}

	setInfo(currentPerson);
});

carousel.addEventListener('click', (e) => {
	personMind.forEach((elem, elemIndex) => {
		if (e.target.getAttribute('src') === personMind[elemIndex].imgSrc) {
			currentPerson = elemIndex;
			setInfo(elemIndex);
		}
	});
});

const setInfo = (indx) => {
	let person = `
    <div class="people-slider-info">
                    <p class="section-people-quote">
                    ${personMind[indx].quote}
                    </p>
                    <p class="section-people-name">${personMind[indx].name}</p>
                    <p class="section-people-occupation">${personMind[indx].occupation}</p>
                    <div><img class="section-people-big-img people-img-border" src="${personMind[indx].imgSrc}" alt="added image"></div>
                </div>        
    `;

	document.querySelector('.people-slider').innerHTML = person;

	smallImgs.forEach((img) => {
		img.classList.remove('carousel-showed-img');
		if (personMind[indx].imgSrc === img.getAttribute('src')) {
			img.classList.add('carousel-showed-img');
		}
	});
};
