function toggleNavbarHeader() {
	const el = document.getElementById('navbarToggler');
	el.classList.toggle('show');
};

window.addEventListener('DOMContentLoaded', function () {
	//Get all headings only from the actual contents.
	var contentContainer = document.getElementById('content'); // Add this div to the html
	if (!contentContainer) return;
	var headings = contentContainer.querySelectorAll('h1,h2,h3,h4'); // You can do as many or as few headings as you need.

	var tocContainer = document.getElementById('toc'); // Add this div to the HTML
	// create ul element and set the attributes.
	var ul = document.createElement('ul');

	ul.setAttribute('id', 'tocList');
	ul.setAttribute('class', 'sidenav')

	// Loop through the headings NodeList
	for (i = 0; i <= headings.length - 1; i++) {

		var id = headings[i].innerHTML.toLowerCase().replace(/ /g, "-"); // Set the ID to the header text, all lower case with hyphens instead of spaces.
		var level = headings[i].localName.replace("h", ""); // Getting the header a level for hierarchy
		var title = headings[i].innerHTML; // Set the title to the text of the header

		headings[i].setAttribute("id", id)  // Set header ID to its text in lower case text with hyphens instead of spaces.

		var li = document.createElement('li');     // create li element.
		li.setAttribute('class', 'sidenav__item') // Assign a class to the li

		var a = document.createElement('a'); // Create a link
		var pathname = location.pathname;
		a.setAttribute("href", pathname + "#" + id) // Set the href to the heading ID
		a.innerHTML = title; // Set the link text to the heading text

		// Creeate the hierarchy
		// add a class for css
		if (level == 1) {
			li.appendChild(a); // Append the link to the list item
			ul.appendChild(li);     // append li to ul.
		} else if (level == 2) {
			child = document.createElement('ul'); // Create a sub-list
			child.setAttribute('class', 'sidenav__sublist')
			li.appendChild(a);
			child.appendChild(li);
			ul.appendChild(child);
		} else if (level == 3) {
			grandchild = document.createElement('ul');
			grandchild.setAttribute('class', 'sidenav__sublist')
			li.appendChild(a);
			grandchild.appendChild(li);
			child.appendChild(grandchild);
		} else if (level == 4) {
			great_grandchild = document.createElement('ul');
			great_grandchild.setAttribute('class', 'sidenav__sublist');
			li.append(a);
			great_grandchild.appendChild(li);
			grandchild.appendChild(great_grandchild);
		}

	}

	toc.appendChild(ul);       // add list to the container

	// Add a class to the first list item to allow for toggling active state.
	var links = tocContainer.getElementsByClassName("sidenav__item");

	links[0].classList.add('current');

	// Loop through the links and add the active class to the current/clicked link
	for (var i = 0; i < links.length; i++) {
		links[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("current");
			current[0].className = current[0].className.replace(" current", "");
			this.className += " current";
		});
	}

});

function searchHandler() {
	const elBtn = document.getElementById('nav-btn-search');
	elBtn.onclick = function (e) {
		e.preventDefault();
		const searchPage = document.getElementById('search-page');
		searchPage.classList.add('show');
		const searchInputEl = document.getElementById('input-search-page');
		searchInputEl.focus();
		document.body.style.overflow = 'hidden';
	}
}

function closeHandler() {
	const btnClose = document.querySelector('button.button-close');
	btnClose.onclick = function (e) {
		e.preventDefault();
		const searchPage = document.getElementById('search-page');
		searchPage.removeAttribute('class');
		document.body.removeAttribute('style');
	}
}

async function fetchData() {
	const response = await fetch("api-posts.json");
	const json = await response.json();
	return json;
}

function searchPostsHandler() {
	let posts = [];
	fetchData()
		.then(data => posts = data);
	const inputSearchEl = document.getElementById('input-search-page');
	const searchContent = document.getElementById('search-posts');

	inputSearchEl.onchange = function (e) {
		if (searchContent.childNodes.length) {
			searchContent.innerHTML = '';
		}
		const { value } = e.target;
		const thePosts = posts.filter(post => post.title.includes(value) || post.categories.includes(value) || post.tags.includes(value));

		if (thePosts.length === 0) {
			const p = document.createElement('p');
			p.innerHTML = "Không có kết quả nào được tìm thấy!"
			searchContent.appendChild(p);
		} else {
			thePosts.forEach(post => {
				// wrapper div content of post
				var div = document.createElement('div');
				div.setAttribute('class', 'post mb-2');
	
				// wrapper title of post
				var h3 = document.createElement('h3');
	
				// wrapper link
				var a = document.createElement('a');
				a.setAttribute('class', 'text-warning');
				a.setAttribute('title', post.title);
				a.setAttribute("href", post.url);
				a.innerHTML = post.title;
	
				// create typography wrapper text
				var p = document.createElement('p');
				p.innerHTML = post.lead;
	
				// append child node
				h3.appendChild(a);
				div.appendChild(h3);
				div.appendChild(p);
	
				// append child to parent content search
				searchContent.appendChild(div);
			})
		}
	}
}

window.addEventListener('DOMContentLoaded', function () {
	searchHandler();
	closeHandler();
	searchPostsHandler();
})