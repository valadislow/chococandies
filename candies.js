let chocs = [
    {
      chocName: "Plain Milk",
      description: "Smooth milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "chocs/plain_milk.jpg",
    },
    {
      chocName: "Plain Dark",
      description: "Dark chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "chocs/plain_dark.jpg",
    },
    {
      chocName: "Bailey's Cup",
      description: "Dark chocolate with Bailey's Cream Filling",
      calories: 100,
      ingredients: "Cocoa butter, Milk, Cream, baileys",
      img: "chocs/baileys_cup.jpg",
    },
    {
      chocName: "Cappuccino Cup",
      description: "Dark chocolatewith Cappuccino style cream filling",
      calories: 120,
      ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
      img: "chocs/cappuccino_cup.jpg",
    },
    {
      chocName: "Nutter Butter",
      description: "Dark chocolate with peanut butter",
      calories: 190,
      ingredients: "Cocoa butter, Milk, Cream, peanut butter",
      img: "chocs/nutter_butter.jpg",
    },
    {
      chocName: "Orange Fondant",
      description: "Dark chocolate folded with orange fondant",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
      img: "chocs/orange_fondant.jpg",
    },
    {
      chocName: "Pistachio Cup",
      description: "Dark chocolate with nuggets of pistachio",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
      img: "chocs/pistachio_diamond.jpg",
    },
    {
      chocName: "Rum Barrel",
      description: "Dark chocolate with a decadent rum filling",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
      img: "chocs/rum_barrel.jpg",
    },
    {
      chocName: "Toffee Crunch",
      description: "Dark chocolate with brittle toffee candy",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream, toffee",
      img: "chocs/toffee_crunch.jpg",
    },
    {
      chocName: "Plain Supreme",
      description: "Dark chocolate with slivers of milk chocolate",
      calories: 90,
      ingredients: "Cocoa butter, Milk, Cream",
      img: "chocs/plain_hybrid.jpg",
    },
  ];  
  const chockList = document.querySelector(".wrapper");


const setUpPage = () => {

  chocs.forEach((choc)=> {
    let listItem = document.createElement("box");
  
    listItem.textContent = choc.chocName;
    chockList.appendChild(listItem);
    
    img = document.createElement('img')
    img.src = choc.img;
    listItem.append(img);

    content = document.createElement('p')
    content.classList.add('content')
    content.textContent = `${choc.calories} Ingridients are ${choc.ingredients}`
    listItem.append(content)
  });
}


const highlightRandomQuestion = () => {
  // Reset by unhighlightening all first
  $(".wrapper box").css("border", "1px solid black");
  let randomIndex = Math.floor(Math.random() * 10);
  console.log(randomIndex);
  $(".wrapper box:eq(" + randomIndex + ")").css("border", "10px solid white");
  let random = Math.floor(Math.random() * 50);
  alert(random)
};

let showAns = true;
const toggleAnswers = () => {
  console.log("toggle");
  showAns = !showAns;
  if (showAns) $("p.content").show();
  else $("p.content").hide();
};


setUpPage()
  