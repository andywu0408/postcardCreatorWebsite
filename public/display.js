console.log("App is starting");

getCardDataFromServer();

function getCardDataFromServer() {
  let url = "/sharePostcard";
  let xhr = new XMLHttpRequest;
  
  xhr.open("GET", url);
  
  xhr.addEventListener("load", function() {
    if(xhr.status == 200){
      let responseStr = xhr.responseText;
      let cardData = JSON.parse(responseStr);
      console.log("Displaying Card....")
      console.log(cardData);
      displayCard(cardData.message, cardData.font, cardData.color, cardData.photo);
    } else {
      console.log(xhr.responseText);
    }
  });
  
  xhr.send();
};

function displayCard(msg, fontStyle, color, imgName) {
  let letter = document.getElementById('letter');
  let cardContainer = document.getElementById('container');
  let img = document.getElementById("serverImage");
  const imgUrl = "../images/" + imgName;
  
  letter.textContent = msg;
  cardContainer.style.backgroundColor = color;
  img.src = imgUrl;
  
}