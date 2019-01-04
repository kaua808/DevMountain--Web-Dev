var request = require('request'),
	cheerio = require('cheerio');


//apartments for rent
function getAllApartments () { 
	var apartmentsArray = []
	var page = 1;
	function closure () {
		var url = 'https://www.rentler.com/ksl/search?sid=17403777&nid=651&PropertyTypeCode=2&page=' + page
		var counter = 0;
		return function () {
			request.get(url, function(err, resp, body) {
				if(!err && resp.statusCode === 200) {
					var $ = cheerio.load(body);
					$('.result', '.results').each(function(index, item) {
						var apartments = {};
						house.type = 'apartment';
						house.kslUrl = item.children[1].attribs.href;
						house.imgUrl = item.children[1].children[1].children[1].attribs.src;
						house.title = item.children[1].children[3].children[1].children[0].data;
						house.location = item.children[1].children[3].children[3].children[0].data;
						house.bedBaths = item.children[1].children[3].children[5].children[0].data;
						house.pricePerMonth = item.children[1].children[3].children[7].children[1].children[0].data;
						apartmentsArray.push(apartments);
					})
					// console.log(urls[0].children[1].children[3].children[7].children[1].children[0].data)
					var result = $('.result');
					if(result[0]) {
						page++;
						getApartments();
					} else {
						page = 1;
						console.log(apartmentsArray);
						break;
					}
				}
			})
		}
	}
	var getApartments = closure();
	getApartments();
}
// function timeOut (cb) {
// 	setTimeout(timeOut, 10800000, getApartments)
// }

// var apartmentsForRent = function(arr) {
// 	arr.forEach(function() {
// 		request()
// 	})
// }

// $('.result', '#content').each(function(item){console.log(item)})


// var categoryURLs = 

// categoryURLs.forEach(function(item, index){

// })

// $('a.categorySubsItem')
// $('.categorySubsItem')
// $('.categorySubsItem', 'a')

// $('a', '.categorySubsItem')
// $('a', '.categorySubsItem').each(function(item){console.log(item)})
// $('a', '.categorySubsItem').each(function(item){console.log(index, item)})
// $('a', '.categorySubsItem').each(function(index, item){console.log(index, item)})
// $('a', '.categorySubsItem').each(function(index, item){console.log(item.attr('href'))})



app.get('/api/getdaapartments', function(req, res) {
	// console.log(1)
	function getAllApartments () { 
	var apartmentsArray = []
	// console.log(2)
	function closure () {
		// console.log(3)
		var page = 1
		var counter = 0;
		return function () {
			// console.log(4)
			var url = 'https://www.rentler.com/ksl/search?sid=17403777&nid=651&PropertyTypeCode=2&page=' + page
			console.log(url);
			console.log(counter)
			request.get(url, function(err, resp, body) {
				// console.log(5)
				if(!err && resp.statusCode === 200) {
					// console.log(6)
					var $ = cheerio.load(body);
					var newArray = $('.result', '.results');
					console.log(newArray[11].children[1].children[3].children[1].attribs.src)
					$('.result', '.results').each(function(index, item) {
						console.log(index)
						var house = {};
						house.type = 'apartment';
						item.children[1].attribs.href ? house.kslUrl = item.children[1].attribs.href : house.kslUrl = '';
						if(item.children[1].children[1].children[1]) {
							item.children[1].children[1].children[1].attribs.src ? house.imgUrl = item.children[1].children[1].children[1].attribs.src : house.imgUrl = '';
						} else if(item.children[1].children[3].children[1].attribs.src) {
							house.imgUrl = item.children[1].children[3].children[1].attribs.src;
						} else {
							house.imgUrl = '';
						}
						// item.children[1].children[1].children[1].attribs.src ? house.imgUrl = item.children[1].children[1].children[1].attribs.src : house.imgUrl = '';
						item.children[1].children[3].children[1].children[0].data ? house.title = item.children[1].children[3].children[1].children[0].data : house.title = '';
						item.children[1].children[3].children[3].children[0].data ? house.location = item.children[1].children[3].children[3].children[0].data : house.location = '';
						item.children[1].children[3].children[5].children[0].data ? house.bedBaths = item.children[1].children[3].children[5].children[0].data : house.bedBaths = '';
						item.children[1].children[3].children[7].children[1].children[0].data ? house.pricePerMonth = item.children[1].children[3].children[7].children[1].children[0].data : house.pricePerMonth = '';
						apartmentsArray.push(house);
					})
					// console.log(urls[0].children[1].children[3].children[7].children[1].children[0].data)
					var result = $('.result', '.results');
					// console.log(result[0].children[1].attribs.href)
					if(result[0] || counter < 41) {

						// console.log(result[0])
						counter++
						page++;
						getApartments();
					} else {
						// console.log(result)
						page = 1;
						// console.log(apartmentsArray);
						return res.json(apartmentsArray)
					}
				}
			})
		}
	}
	var getApartments = closure();
	getApartments();
}
getAllApartments();
})