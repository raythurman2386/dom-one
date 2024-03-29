const siteContent = {
	nav            : {
		'nav-item-1' : 'Services',
		'nav-item-2' : 'Product',
		'nav-item-3' : 'Vision',
		'nav-item-4' : 'Features',
		'nav-item-5' : 'About',
		'nav-item-6' : 'Contact',
		'img-src'    : 'img/logo.png',
	},
	cta            : {
		h1        : 'DOM Is Awesome',
		button    : 'Get Started',
		'img-src' : 'img/header-img.png',
	},
	'main-content' : {
		'features-h4'      : 'Features',
		'features-content' :
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4'         : 'About',
		'about-content'    :
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src'   : 'img/mid-page-accent.jpg',
		'services-h4'      : 'Services',
		'services-content' :
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4'       : 'Product',
		'product-content'  :
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4'        : 'Vision',
		'vision-content'   :

			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam conmain-contentvallis augue justo, at imperdiet metus scelerisque quis.',

	},
	contact        : {
		'contact-h4' : 'Contact',
		address      : '123 Way 456 Street Somewhere, USA',
		phone        : '1 (888) 888-8888',
		email        : 'sales@greatidea.io',
	},
	footer         : {
		copyright : 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);


// Nav bar variables
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('nav a');
const navValues = Object.values(siteContent['nav']);

// Assign nav object values to the navItems
for (let i = 0; i < navItems.length; i++) {
	navItems[i].textContent = navValues[i];
}

// Change the nav color to be green
navItems.forEach((item) => (item.getElementsByClassName.color = 'lightseagreen'));

// Create two new nav items
const newElement = (element, content) => {
	let newElement;
	newElement = document.createElement(element);
	newElement.textContent = content;
	newElement.style.cursor = 'pointer';
	return newElement;
};

nav.prepend(newElement('a', 'Home'));
nav.appendChild(newElement('a', 'Blog'));

// Variables for CTA Section
const cta = document.querySelector('.cta');
const ctaH1 = document.querySelector('.cta-text h1');
const ctaImg = document.getElementById('cta-img');
const ctaButton = document.querySelector('.cta-text button');

let h1Arr = siteContent['cta']['h1'].split(' ');
h1Arr.splice(1, 0, `<br>`);
h1Arr.splice(3, 0, `<br>`);

// Set the cta h1 with innerHTML since there is a HTML tag
ctaH1.innerHTML = h1Arr.join('');

// Set the cta image
ctaImg.src = siteContent['cta']['img-src'];

// Set the cta Button
ctaButton.textContent = siteContent['cta']['button'];

// Variables for the heading content
const contentHeadings = document.querySelectorAll('.main-content h4');

// Placing the sites h4 elements at once
Object.values(siteContent['main-content'])
	.filter((element) => {
		return !element.match(/(img)/i) && !element.match(/\s/g);
	})
	.forEach((element, i) => (contentHeadings[i].textContent = element));

// Content for the site paragraphs
const contentParas = document.querySelectorAll('.main-content p');

Object.values(siteContent['main-content'])
	.filter((element) => {
		return element.match(/\s/g);
	})
	.forEach((element, i) => (contentParas[i].textContent = element));

// Center Image
const centerImg = document.getElementById('middle-img');
centerImg.src = siteContent['main-content']['middle-img-src'];

// Contact section
const contactHeader = document.querySelector('.contact h4');
const contactParas = document.querySelectorAll('.contact p');

contactHeader.textContent = siteContent['contact']['contact-h4'];

Object.values(siteContent['contact'])
	.filter((element) => {
		return element.match(/\s/g);
	})
	.forEach((element, i) => (contactParas[i].textContent = element));

// footer section
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

// STRETCH
// Adding Styles through JS to make nav fixed
const header = document.querySelector('header');
header.style.position = 'fixed';
header.style.top = '0';
header.style.zIndex = '1';
header.style.backgroundColor = '#fff';

cta.style.marginTop = '75px';