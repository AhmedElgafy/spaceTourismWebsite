
const data=JSON.parse(`{
  "destinations": [
    {
      "name": "Moon",
      "images": {
        "png": "./assets/destination/image-moon.png",
        "webp": "./assets/destination/image-moon.webp"
      },
      "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      "distance": "384,400 km",
      "travel": "3 days"
    },
    {
      "name": "Mars",
      "images": {
        "png": "./assets/destination/image-mars.png",
        "webp": "./assets/destination/image-mars.webp"
      },
      "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      "distance": "225 mil. km",
      "travel": "9 months"
    },
    {
      "name": "Europa",
      "images": {
        "png": "./assets/destination/image-europa.png",
        "webp": "./assets/destination/image-europa.webp"
      },
      "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      "distance": "628 mil. km",
      "travel": "3 years"
    },
    {
      "name": "Titan",
      "images": {
        "png": "./assets/destination/image-titan.png",
        "webp": "./assets/destination/image-titan.webp"
      },
      "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      "distance": "1.6 bil. km",
      "travel": "7 years"
    }
  ],
  "crew": [
    {
      "name": "Douglas Hurley",
      "images": {
        "png": "./assets/crew/image-douglas-hurley.png",
        "webp": "./assets/crew/image-douglas-hurley.webp"
      },
      "role": "Commander",
      "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    },
    {
      "name": "Mark Shuttleworth",
      "images": {
        "png": "./assets/crew/image-mark-shuttleworth.png",
        "webp": "./assets/crew/image-mark-shuttleworth.webp"
      },
      "role": "Mission Specialist",
      "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    },
    {
      "name": "Victor Glover",
      "images": {
        "png": "./assets/crew/image-victor-glover.png",
        "webp": "./assets/crew/image-victor-glover.webp"
      },
      "role": "Pilot",
      "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
    },
    {
      "name": "Anousheh Ansari",
      "images": {
        "png": "./assets/crew/image-anousheh-ansari.png",
        "webp": "./assets/crew/image-anousheh-ansari.webp"
      },
      "role": "Flight Engineer",
      "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    }
  ],
  "technology": [
    {
      "name": "Launch vehicle",
      "images": {
        "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
        "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
      },
      "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      "name": "Spaceport",
      "images": {
        "portrait": "./assets/technology/image-spaceport-portrait.jpg",
        "landscape": "./assets/technology/image-spaceport-landscape.jpg"
      },
      "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      "name": "Space capsule",
      "images": {
        "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
        "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
      },
      "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]
}`);


/*creat navigation bar in all pages */
let navBar= document.querySelector("header");
let imag= document.createElement("img");
imag.src="assets/shared/logo.svg";
navBar.appendChild(imag);
let imag2=document.createElement("img");
imag2.src="assets/shared/icon-hamburger.svg";
navBar.appendChild(imag2);
imag2.addEventListener("click",function(){
  hiddenNav.style.display="block"
})

/*Creat hidden nav bar.*/
let hiddenNav=document.querySelector(".hiddenNav");
let closeIcon=document.createElement('img');
closeIcon.src="./assets/shared/icon-close.svg";
hiddenNav.appendChild(closeIcon);
let uList=document.createElement('ul');
const navList=["HOME","DESTINATION","CREW","TECHNOLOGY"]
const navLinks=["index.html","Planets.html","crew.html","technology.html"]

for(let x=0;x<=3;x++){
  let listElement=document.createElement("li");
  listElement.innerHTML=`<a href="${navLinks[x]}"><span>0${x}</span> ${navList[x]}</a>`;
  listElement.onclick=()=> hiddenNav.style.display="none"
  uList.appendChild(listElement);
}
uList.children[1].classList.add("navActive");
hiddenNav.appendChild(uList);


closeIcon.style.position="relative"
closeIcon.style.right="-8rem"

closeIcon.addEventListener("click",function(){
  hiddenNav.style.display="none"
})



/*Get the data from json file for planet page*/
let planetImage=document.querySelector('.planetImag');
let planetName=document.querySelector(".planetName");
let planetDescription=document.querySelector(".description");
let distance=document.querySelector('.distance');
let travel=document.querySelector('.travel');
if(document.querySelector('.explore')!=null){
  uList.children[0].classList.add("navActive");
uList.children[1].classList.toggle("navActive");

  document.querySelector('.explore').addEventListener('click',function(){
    uList.children[1].classList.add("navActive");
  })

}


/*Creat eventlistener to transform between planets taps*/
if(document.querySelector(".planets")!=null){

  let allListItems=document.querySelector(".planets").children;
  for (let x=0 ;x<=allListItems.length-1 ;x++){
    allListItems[x].addEventListener('click', function(){
      let activeIcon=document.querySelector('.activeIcon');
      activeIcon.classList.toggle('activeIcon')
      allListItems[x].classList.toggle('activeIcon')
      planetImage.src=data.destinations[x].images.png;
      planetName.textContent=data.destinations[x].name.toUpperCase();
      planetDescription.textContent=data.destinations[x].description;
      distance.textContent=data.destinations[x].distance;
      travel.textContent=data.destinations[x].travel;
    })
  }
}


/*Get the data from json file for crow page*/
let crewImage=document.querySelector('.crewPic');
let crewRole=document.querySelector('.crewRole');
let crewName=document.querySelector('.crewName');
let crewBio=document.querySelector('.crewBio');

/*Creat eventlistener to transform between crew taps*/
if (document.querySelector('.circles')!=null){


  let circles=document.querySelector('.circles').children;
  for(let x=0;x<circles.length;x++){
    circles[x].addEventListener("click",function(){
      document.getElementById('activeCircle').id="";
      circles[x].id="activeCircle";
      crewImage.src=data.crew[x].images.png;
      crewName.textContent=data.crew[x].name;
      crewRole.textContent=data.crew[x].role;
      crewBio.textContent=data.crew[x].bio;
    })
  }
}
if (document.querySelector('h5')!=null){
  if(document.querySelector('h5').firstChild.textContent==02){
    document.querySelector(".navActive").className="";
    uList.children[2].classList.add("navActive");
  }if(document.querySelector('h5').firstChild.textContent==03){
    document.querySelector(".navActive").className="";
    uList.children[3].classList.add("navActive");
  }
}

/*Get the data from json file for technology page*/
let technologyName=document.querySelector('.technologyName');
let technologyImge=document.querySelector('.technologyImge');



var tabletPv=window.matchMedia("(min-width: 770px)");
function tPv(e){
  if (e.matches){
    hiddenNav.style.display="block"
  }else{
    hiddenNav.style.display="none"
  }
}
tPv(tabletPv)
tabletPv.addListener(tPv)






var match=window.matchMedia("(min-width: 1000px)");

function itMatchs (e){
  if (e.matches){
    
    technologyImge.src=data.technology[0].images.portrait;
    // console.log("hi")
  }else{
    technologyImge.src=data.technology[0].images.landscape;

  }
}
itMatchs(match)
match.addListener(itMatchs)


let technologyBio=document.querySelector('.technologyBio');

/*Creat eventlistener to transform between technology taps*/
if(document.querySelector('.technologyCount')!=null){
  let technologyCount=document.querySelector('.technologyCount').children;
  for(let x=0;x<technologyCount.length;x++){
    technologyCount[x].addEventListener("click",function(){
      document.querySelector('.activeCount').classList.toggle('activeCount');
      technologyCount[x].classList.toggle("activeCount");
      technologyName.textContent=data.technology[x].name.toUpperCase();
      
      function itMatchs (e){
        if (e.matches){
          
          technologyImge.src=data.technology[x].images.portrait;
          
        }else{
          technologyImge.src=data.technology[x].images.landscape;

        }
      }
      itMatchs(match)
      match.addListener(itMatchs)

      technologyBio.textContent=data.technology[x].description

    })
  }
}




  





