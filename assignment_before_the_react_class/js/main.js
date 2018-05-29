/*jshint esversion: 6 */

(function(){

	const nav = document.getElementById('nav');
	const allNavItems = document.querySelectorAll("#nav li");
	const allSections = document.querySelectorAll("#stage section");

	nav.addEventListener("click", e => {
		e.preventDefault();
		const el = e.target;
		const trgTab = el.getAttribute("href").replace('#', '');

		allNavItems.forEach( n => {

			if (n == el.parentNode)
				n.classList.add('selected');
			else
				n.classList.remove('selected');

		});

		allSections.forEach( n => {
			if (n.getAttribute("id") == trgTab) 
				n.classList.remove('dn');
			else
				n.classList.add('dn');
		});


	});

//--- posts ---	
	function renderPosts(data) {
		const ul = document.getElementById('Posts');
		let allLis = '';
		data.forEach( (d,i) => {
			allLis += '<li><span class="title">' + (i+1) + " / " + d.title + '</span><br><span class="descr">' + d.body + '</span></li>';
		});

		ul.innerHTML = allLis;
	}

	function getPosts() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(resp => resp.json())
			.then( data => {
				renderPosts(data);
			});
	}

	getPosts();

//--- times ---
	const timeAthens = document.getElementById('timesAthens');
	const timesParis = document.getElementById('timesParis');
	const timesLondon = document.getElementById('timesLondon');

	function calcTime(city, offset) {

		const d = new Date(),
			utc = d.getTime() + (d.getTimezoneOffset() * 60000);
			nd = new Date(utc + (3600000*offset));
		
		// return time as a string
		return "The local time in " + city + " is " + nd.toLocaleString();
	}

	//do it with active timer to present real time in all 3 cities
	setInterval(() => {
		timeAthens.innerHTML = calcTime('Athens', '+3');
		timesParis.innerHTML = calcTime('Paris', '+2');
		timesLondon.innerHTML = calcTime('London', '+1');
	}, 1000);


}());