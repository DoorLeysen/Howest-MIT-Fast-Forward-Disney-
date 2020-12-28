"use strict";

const verwerkenUserData = function (jsonUserData) {

  console.log(jsonUserData);

  let html = '';

  for (const user of jsonUserData.users) {
    html +=
      `<tr class="table__row" >
      <td class="table__row--number">${user.id}</td>
      <td class="table__row--name">${user.firstName} ${user.lastName}</td>
      <td class="table__row--mail">${user.email}</td>
      <td class="table__row--user-since">${user.created}</td>
      <td id="subscription" class="table__row--subscription table__row--subscription--active">${user.status}</td>
      
          <td class="table__row--edit" >
          <a href='userDetailPage.html?userid=${user.id}'>
          <svg class="table__row--edit--icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28.007"
                viewBox="0 0 28 28.007">
                <path id="pen"
                  d="M10.044,24.5,3.691,18.15,19.055,2.786l6.352,6.352ZM3.1,19.269,8.925,25.1.188,28.006ZM27.362,7.193l-1.1,1.1L19.9,1.934,21,.832a2.841,2.841,0,0,1,4.02,0l2.341,2.341a2.857,2.857,0,0,1,0,4.02Zm0,0"
                  transform="translate(-0.188 0.001)" fill="#fff" />
              </svg></a>
              <svg class="table__row--delete--icon" xmlns="http://www.w3.org/2000/svg" width="28.126" height="34.616"
                viewBox="0 0 28.126 34.616">
                <g id="trash" transform="translate(-48)">
                  <path id="Path_26" data-name="Path 26"
                    d="M73.421,4.327h-5.95V3.245A3.245,3.245,0,0,0,64.226,0H59.9a3.245,3.245,0,0,0-3.245,3.245V4.327H50.7a2.7,2.7,0,0,0-2.7,2.7V9.195a1.082,1.082,0,0,0,1.082,1.082H75.044a1.082,1.082,0,0,0,1.082-1.082V7.031A2.7,2.7,0,0,0,73.421,4.327Zm-14.6-1.082A1.083,1.083,0,0,1,59.9,2.164h4.327a1.083,1.083,0,0,1,1.082,1.082V4.327H58.818Z"
                    fill="#fff" />
                  <path id="Path_27" data-name="Path 27"
                    d="M73.7,184a.338.338,0,0,0-.338.354l.892,18.731a3.241,3.241,0,0,0,3.241,3.091H93.926a3.241,3.241,0,0,0,3.241-3.091l.892-18.731a.338.338,0,0,0-.338-.354Zm16.337,2.7a1.082,1.082,0,0,1,2.164,0v14.063a1.082,1.082,0,0,1-2.164,0Zm-5.409,0a1.082,1.082,0,1,1,2.164,0v14.063a1.082,1.082,0,1,1-2.164,0Zm-5.409,0a1.082,1.082,0,1,1,2.164,0v14.063a1.082,1.082,0,1,1-2.164,0Z"
                    transform="translate(-23.649 -171.56)" fill="#fff" />
                </g>
              </svg>
            </td>
            
      </tr>`;
  }

  document.querySelector(".table__body").innerHTML = html;
};

const laadUserData = function () {
  //ophalen interne JSON file
  fetch("data/users.json")
    .then(function (response) {
      //antwoord van de server nakijken op het verzoek
      if (!response.ok) {
        //antwoord is niet ok. error wordt geworpen
        throw Error(`Probleem bij de fetch(). Status Code: ${response.status}`);
      } else {
        //antwoord is ok
        console.info("Er is een response teruggekomen van de server");
        return response.json();
      }
    })
    .then(function (jsonObject) {
      //functie uitgevoerd en json maken
      console.info("json object is aangemaakt");
      //functie verwerkenUserData uitvoeren
      verwerkenUserData(jsonObject);
    })
    //als uitvoeren op een fout loopt
    .catch(function (error) {
      console.error(`fout bij verwerken json ${error}`);
    });
};


const ToonDetailUser = function (data) {
  console.log(data);

  document.querySelector(".js-user__firstname").innerHTML = data.firstName;
  document.querySelector(".js-user__last-name").innerHTML = data.lastName;
  document.querySelector(".js-user__email").innerHTML = data.email;
  //document.querySelector(".js-user__phonenumber").innerHTML = data.bio;

};

let UserID = "";
let HaalIdOpUitQueryString = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const idVanUser= urlParams.get("userid");

  if (idVanUser) {
    UserID = idVanUser;
    laadUserDataDetail();
    console.log(`Het id van de gekozen user is ${idVanUser}`);
  } else {
    console.log("De querystring ontbreekt");
  }
};


const laadUserDataDetail = function () {
  //ophalen interne JSON file
  fetch("data/users.json")
    .then(function (response) {
      //antwoord van de server nakijken op het verzoek
      if (!response.ok) {
        //antwoord is niet ok. error wordt geworpen
        throw Error(`Probleem bij de fetch(). Status Code: ${response.status}`);
      } else {
        //antwoord is ok
        console.info("Er is een response teruggekomen van de server");
        return response.json();
      }
    })
    .then(function (data) {
      //functie uitgevoerd en json maken
      console.info("json object is aangemaakt");
      //functie verwerkenUserData uitvoeren
      ToonDetailUser(data);
    })
    //als uitvoeren op een fout loopt
    .catch(function (error) {
      console.error(`fout bij verwerken json ${error}`);
    });
};



document.addEventListener("DOMContentLoaded", function () {
  console.info("DOM geladen");
  HaalIdOpUitQueryString();
  laadUserData();
  laadUserDataDetail();

});
