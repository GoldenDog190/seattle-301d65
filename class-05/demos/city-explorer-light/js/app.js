'use strict'

//$.get retrieve the city data
//$.get use the lat lng to ask for resturants and change the src of empty img to be correct map src="googlemaps.com?"

$('form').on('submit', function(event){
  event.preventDefault();
  // const cityValue = event.target.city.value;
  // console.log(cityValue);
  // const cityValueJQthis = $(this)[0]city.value;
  // console.log(cityValueJQthis);
  const cityValueJQDirect = $('input:nth-child(2)').val();
  console.log('cityValueJQ',cityValueJQDirect);

  // $.get('fake-data/location.json')
  //  .then(dataFromFile => {
  //   console.log(dataFromFile);
  //  });

const options = {
  method : 'get',
  dataType : 'json',
  data : { city : cityValueJQDirect}
};

$.ajax('fake-data/location.json', options)
.then(dataFromTheFile => {
    console.log(dataFromTheFile);
    const lat = dataFromTheFile.latitude;
    const lng = dataFromTheFile.longitude;
const mapSrc ='images/maplat=' + lat + '&lng=' + lng + '.png';

const mapSrcLit = `images/maplat=${lat}&lng=${lng}.png`;


console.log(mapSrc);

//map?lat=47.606210&lng=-122.332071

$('img').attr('src', mapSrc)

const resturantsOptions = {
  method : 'get',
  dataType : 'json',
  data : dataFromTheFile
}

$.ajax('fake-data/location.json', resturantsOptions)
.then(renderRests);
  })

});

// function rederRests(restData){
//   restData.forEach(restuarant => {
//     $('main').attr()
//   })
// }