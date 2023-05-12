const loadPhones = async(searchValue) =>{
   const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
   const res = await fetch(url);
   const data = await res.json();
   displayPhones(data.data);
}

const displayPhones = phones =>{
   const phonesContainer = document.getElementById('phones-container');
   phonesContainer.textContent = '';
   phones = phones.slice(0,12);
   const noPhone = document.getElementById('notfound');
   if(phones.length === 0){
      noPhone.classList.remove('d-none')
      togglespiner(false);
   }
   else{
      noPhone.classList.add('d-none')
   }

   phones.forEach(phone => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('col');
      cardDiv.innerHTML = `

      <div class="card mb-3" style="max-width: 540px;">
         <div class="row g-0">
            <div class="col-md-4">
               <img src="${phone.image}" class="img-fluid rounded-start mt-2 ms-2 p-2" alt="...">
            </div>
            <div class="col-md-8">
               <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                     additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">${phone.brand}</small></p>
               </div>
            </div>
         </div>
      </div> `
      
      togglespiner(false);
      phonesContainer.appendChild(cardDiv);
   });
}

document.getElementById('searchBtn').addEventListener('click', function(){
   const searchField = document.getElementById('searchText');
   const searchValue = searchField.value;
   searchField.value= '';
   loadPhones(searchValue);
   togglespiner(true);
})

const togglespiner = isLoading =>{
   const spinersec = document.getElementById('spiner');

   if(isLoading){
      spinersec.classList.remove('d-none');
   }
   else{
      spinersec.classList.add('d-none')
   }
}