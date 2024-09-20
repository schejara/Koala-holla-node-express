//console.log('js');

function getKoalas(){
  console.log( 'in getKoalas' );
  axios({
    method: 'GET',
    url: '/koalas'
  }).then(function(response) {
    console.log('getKoalas() response', response.data);
    renderKoalas(response.data);
  }).catch(function(error){
    console.log('error in GET', error);
  });
  // axios call to server to get koalas
  
} // end getKoalas

/*function saveKoala(){
  console.log( 'in saveKoala' );
  // axios call to server to get koalas
 
}*/


function  saveKoala(event) {
  event.preventDefault();

  console.log('Submit button clicked.');
  let koala = {};
  koala.name = document.getElementById('nameIn').value;
  koala.age = document.getElementById('ageIn').value;
  koala.favoriteColor = document.getElementById('colorIn').value;
  koala.readytotransfer = document.getElementById('readyForTransferIn').value;
  koala.notes = document.getElementById('Notes').value;

  addKoala(koala);
}

function addKoala(koalaToAdd) {
  axios({
    method: 'POST',
    url: '/koalas',
    data: koalaToAdd,
    }).then(function(response) {
      console.log('addKoala()', response.data);
      getKoalas();
    }).catch(function(error) {
      console.log('Error in POST', error)
      alert('Unable to add koala at this time. Please try again later.');
    });
}


function renderKoalas(koala){
let viewKoalas = document.getElementById('viewKoalas');
 viewKoalas.innerHTML = ''

 for (let property of koala){
  viewKoalas.innerHTML += 
  `<tr>
        <td>${property.name}</td>
        <td>${property.age}</td>
        <td>${property.favoriteColor}</td>
        <td>${property.readytotranser}</td> 
        <td>${property.notes}
        <td>      
        <button onClick = "handleChange(${koala.id})">Ready to transfer</button>
        </td>
        <td>
        <button onClick="handleDelete(${koala.id})">Delete</button>
      </tr>
  
  `
 }
}



function handleChange(koalaId) { 
  let data = {readytotransfer: Y};
  axios.put(`/koalas/${koalaId}`, data).then(response => {
    getKoalas()
  }).catch((error) => {
      console.log('Error', error);
      alert('Something went wrong');
  });
  
}

function handleDelete(koalaId) {
  axios.delete(`/koalas/${koalaId}`).then((response) => {
    getKoalas()
  }).catch((error) => {
      console.log('Error', error);
      alert('Something went wrong');
  });
}
getKoalas();











