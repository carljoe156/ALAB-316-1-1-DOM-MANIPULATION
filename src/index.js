// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { 
    text: "catalog", 
    href: "#", 
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" }
    ]
  },
  { 
    text: "orders", 
    href: "#", 
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" }
    ]
  },
  { 
    text: "account", 
    href: "#", 
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" }
    ]
  }
];


//Part 1
const mainEl = document.querySelector('main'); // may have to change the  get ElementById
//console.log(mainEl)
mainEl.style.backgroundColor='var(--main-bg)';
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

//Part 2
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//Part 3
menuLinks.forEach(link => {
    const newEl = document.createElement("a");
    newEl.href = link.href;
    newEl.textContent = link.text;
    topMenuEl.appendChild(newEl);
})
//Fix above code Part 3
//DOM PART TWO
// Sub-Menu
 const subMenuEl = document.getElementById("sub-menu");
 subMenuEl.style.height = "100%";
 subMenuEl.style.backgroundColor ="var(--sub-menu-bg)"; //fix
 subMenuEl.classList.add("flex-around");
 subMenuEl.style.position = "absolute";
 subMenuEl.style.top = "0";

//menuLinks Array of Objects Adding Menu Interaction Part 4
// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '#', subLinks: [
//     {text: 'all', href: '/catalog/all'},
//     {text: 'top selling', href: '/catalog/top'},
//     {text: 'search', href: '/catalog/search'},
//   ]},
//   {text: 'orders', href: '#' , subLinks: [
//     {text: 'new', href: '/orders/new'},
//     {text: 'pending', href: '/orders/pending'},
//     {text: 'history', href: '/orders/history'},
//   ]},
//   {text: 'account', href: '#', subLinks: [
//     {text: 'profile', href: '/account/profile'},
//     {text: 'sign out', href: '/account/signout'},
//   ]},
// ];

const topMenuLinks = topMenuEl.querySelectorAll('a');
topMenuEl.addEventListener('click',function(event) {
 event.preventDefault();

if (event.target.tagName !== 'a') return;
console.log('Clicked on:', event.target.textContent.toLowerCase()); 

//Active class On/Off switch --I'm getting issues getting it to turn off
//const clickedLink = array,from(topMenuLinks).find(link => link === event.target);
topMenuLinks.forEach(link => link.classList.remove('active'));
event.target.classList.toggle('active');
// if (event.target.classList.contains('active')) {
//   event.target.classList.remove('active');
// } else {
//   event.target.classList.add('active');
// }

});


//Adding Submenu Interaction Part 5
function buildSubMenu(subLinks) {
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.innerHTML = '';
  if (!subLinks || subLinks.length === 0) {
    subMenuEl.style.display = 'none';
    return;
  }
  subMenuEl.style.display = 'flex'
  subLinks.forEach(link => {
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', link.href);
  linkElement.textContent = link.text;
  subMenuEl.appendChild(linkElement);
  });
}

topMenuEl.addEventListener('click', function(event) { 
 event.preventDefault();
 if (!event.target.matches('a')) return;
 console.log(event.target.textContent);

 //topMenuEl.querySelectorAll('a').forEach(link => {
  topMenuLinks.forEach(link => {    //can remove
  link.classList.remove('active'); // Should remove active class from all links
});
event.target.classList.toggle('active');

const linkText = event.target.textContent.trim().toLowerCase();
if (linkText === 'about') {
  mainEl.innerHTML = '<h1>About</h1>';
  subMenuEl.style.display = 'none';
} else {
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
}
});

//Event Listener SubMenuEl
subMenuEl.addEventListener('click', function(event) {
event.preventDefault();
if (!event.target.matches('a')) return;
console.log(event.target.textContent);
subMenuEl.style.top = '0';
topMenuLinks.forEach(link => {
  link.classList.remove('active');
});
const linkText = event.target.textContent.trim().toLowerCase();
  if (linkText === 'about') {
    mainEl.innerHTML = '<h1>About</h1>';
  } else {
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  }
});

