// Start Header

// start navbar

function dropbtn(e){
	// document.getElementById("mydropdown").classList.toggle("show");

	// undefined
	// console.log(this);
	// console.log(e);

	// console.log(e.target.nextElementSibling);
	e.target.nextElementSibling.classList.toggle("show");
}

function dropfilter(){
	var getsearch,filter,getdropdiv,getlinks,linkvalue;

	getsearch = document.getElementById("search");
	filter = getsearch.value.toUpperCase();
	// getdropdiv = document.getElementById('mydropdown');
	// getlinks = getdropdiv.getElementsByTagName("a");

	getlinks = document.querySelectorAll(".mydropdowns a")
	// console.log(getlinks);

	for(var x = 0; x < getlinks.length; x++){
		// linkvalue = getlinks[x].textContent;
		linkvalue = getlinks[x].textContent || getlinks[x].innerText;
		// console.log(linkvalue);

		if(linkvalue.toUpperCase().indexOf(filter) > -1){
			getlinks[x].style.display = "block";
		}else{
			getlinks[x].style.display = "none";
		}
	}

}

// end navbar

// start auto background

function* genfun(){
	var idx = 8;

	while(true){
		yield idx++

		if(idx > 13){
			idx = 8;
		}

	}
}

var getgen = genfun();
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);
// console.log(getgen.next().value);

var getheader = document.querySelector("header");
getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;

function autoload(){
	// console.log(getgen.next().value);
	getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
}

setInterval(autoload,3000);

// end auto background

// End Header

// Start Testimonial

const getcompanyname = document.querySelector(".companyname");
const getrole = document.querySelector(".role");
const gettestimonial = document.querySelector(".testimonial");

const testimonialdatas = [
	{
		name:"Rich Start Restaurant",
		position:"Our Outlet",
		text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry."
	},
	{
		name:"48 Sky Bar Cafe",
		position:"Our Partner",
		text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry."
	},
	{
		name:"52 Beach Hotel",
		position:"Our Branch",
		text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry."
	},
	{
		name:"Cool Land Swimming Pool",
		position:"Our Client",
		text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry."
	},
	{
		name:"Chaung Thar SPA",
		position:"Our Business",
		text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry."
	}
];

let idx = 0;

// console.log(testimonialdatas[idx].name);
// console.log(testimonialdatas[idx].position);
// console.log(testimonialdatas[idx].text);

function updatetestimonial(){
	// getcompanyname.textContent = testimonialdatas[idx].name;
	// getrole.textContent = testimonialdatas[idx].position;
	// gettestimonial.textContent = testimonialdatas[idx].text;

	const {name,position,text} = testimonialdatas[idx];

	getcompanyname.textContent = name;
	getrole.textContent = position;
	gettestimonial.textContent = text;

	// console.log(name,position,text);

	idx++;

	if(idx > testimonialdatas.length - 1){
		idx = 0;
	}
};

updatetestimonial();
setInterval(updatetestimonial,10000);

// End Testimonial