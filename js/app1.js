
 const charactersList = document.getElementById('charactersList');
 const searchBar = document.getElementById('searchBar');
 let hpCharacters = [];
 var x=0;
 
 searchBar.addEventListener('keyup', (e) => {
     const searchString = e.target.value.toLowerCase();
 
     const filteredCharacters = hpCharacters.filter((character) => {
         return (
             character.fname.toLowerCase().includes(searchString)  ||
             character.restaurant.toLowerCase().includes(searchString) ||
             character.type.toLowerCase().includes(searchString)
         );
     });
     displayCharacters(filteredCharacters);
 });
 var myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 var requestOptions = {
     method: 'GET',
     headers: myHeaders,
     //body: raw,
     redirect: 'follow'
   };
 
 const loadCharacters = async () => {
 
     try {
         fetch("https://hotel-ordering-system-d60d1-default-rtdb.firebaseio.com/Food items.json", requestOptions)
         .then(response => response.json())
         .then(response =>  {
             hpCharacters = Object.values(response);
             console.log(hpCharacters);
         })
         .catch(error => console.log('error', error));
         /*console.log(requestOptions);
          = await res.json();
         displayCharacters(hpCharacters);*/
     } catch (err) {
         console.error(err);
     }
 };
 
 function display (price) {
     x=x+price;
     alert("Your order has been placed. Your total is: " + x);
     console.log(x);
     console.log(fname);
 }
 
 
 const displayCharacters = (characters) => {
     const htmlString = characters
         .map((character) => {
             return `
             <li class="character">
 
                 <h3>${character.fname}</h3>
                 <p>Restaurant: ${character.restaurant}</p>
                 <b>Price: ${character.price}</b>
 
                 <button id="bbutton" onclick = "display(${character.price}})">Order</button>
                 <img src="${character.image}"></img>
             </li>
         `;
         })
         .join('');
     charactersList.innerHTML = htmlString;
 };
 
 loadCharacters();
