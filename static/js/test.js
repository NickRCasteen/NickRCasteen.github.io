 
 app = document.getElementById("test1");
 
 const d1 = "userProfile";
 
 const card = document.createElement('button');
 card.setAttribute('class', 'btn btn-primary');
 card.setAttribute('data-toggle', 'modal');
 card.setAttribute('data-target', `#${d1}`);
 card.innerHTML = "Go";
 
 app.appendChild(card);