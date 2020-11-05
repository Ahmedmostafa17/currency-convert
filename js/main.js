const takeData = document.getElementById('takeData'); //form
const inputData = document.getElementById('inputData');
const show = document.querySelectorAll('.show-b');

const outD = document.getElementById('outD');
const outE = document.getElementById('outE');
const outU = document.getElementById('outU');
const outS = document.getElementById('outS');
const outG = document.getElementById('outG');
const outA = document.getElementById('outA');

const error = document.querySelector('.error');

const selectData = document.getElementById('select-data');


// submit
takeData.addEventListener('submit', function(e) {

    e.preventDefault();
    if (inputData.value === "") {
        error.textContent = ' Please Write A Valid Number !';
        error.classList.add('alert', 'alert-danger', 'mt-2', 'text-center');
        return false;

    }
    else{

        $.ajax({

            type: "GET",
            dataType: "JSON",
            url: `https://open.exchangerate-api.com/v6/latest`,
            success: function(data) {
    
                show.forEach(function(item){
    
                    item.classList.add("show-e");
                    outD.textContent= data.rates.USD * parseInt(inputData.value ).toFixed(2)+' USD' ;
                    outE.textContent= data.rates.EGP * parseInt(inputData.value ).toFixed(2)+' EGP' ;
                    outU.textContent= data.rates.EUR * parseInt(inputData.value ).toFixed(2)+' Euro' +' ' +'(EUR)' ;
                    outS.textContent= data.rates.SAR * parseInt(inputData.value ).toFixed(2)+' Saudi Arabian Riyal' +' ' +'(SAR)' ;
                    outG.textContent= data.rates.GBP * parseInt(inputData.value ).toFixed(2)+' British pound' +' ' +'(GBP)' ;
                    outA.textContent= data.rates.AED * parseInt(inputData.value ).toFixed(2)+' Emirati Dirham' +' ' +'(AED)' ;

    
                })
         
    
    
     
            },
    
            error: function(dataError) {
                console.log(dataError) 
            }
    
        });
    
}
  
























});