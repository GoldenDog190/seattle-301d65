<<<<<<< HEAD
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
=======
'use strict';

/*
Fake form
when we submit the form what should happen?
event listener fires an event handler

stuff should populate and render to the page
city name
map
list of restaurants

make 1 request
$.get - retrieve the city dat (name, lat, lng)

make second request
$.get - use the lat, lng to ask for restaruants around that lat lng
change the src of an empty img to be the correct map

src="googlemaps.com?lat=100.27&lng=124.55"
*/

$('form').on('submit', function(event){
  event.preventDefault();
  const cityValueJQDirect = $('input:nth-child(2)').val();
  console.log('cityValueJQ', cityValueJQDirect);

  // $.get('fake-data/location.json')
  //   .then(dataFromTheFile => {
  //     console.log(dataFromTheFile);
  //   });

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

      const mapSrc = 'images/maplat=' + lat +'&lng=' + lng +'.png';
      const mapSrcLiteral = `images/maplat=${lat}&lng=${lng}.png`;
      // map?lat=47.606210&lng=-122.332071.png
      $('img').attr('src', mapSrc);


      const restaurantOptions = {
        method: 'get',
        dataType : 'json',
        data : dataFromTheFile
      };

      $.ajax('fake-data/restaurants.json', restaurantOptions)
        .then(renderRests);

    });


});


function renderRests(restData){
  restData.forEach(restaurant => {
    $('main').append(Mustache.render( $('#template').html(), restaurant));
  });
}
>>>>>>> 6da56bef4e57692e8f4ca76362bdc2a6468ceb37
