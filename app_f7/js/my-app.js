// rubah variable jdi object biar gampang
var $$ = Dom7;

const site_json="http://pengunjung.test/data_json.php"; //ganti sesuai url json

// init
var myApp = new Framework7({
    animateNavBackIcon: false,
    material: true,
    onPageInit: function (app, page) {
        if (page.name === 'index') {
            // 
            getLastItems(page, true);
        }
    }
});

// page utama
var mainView = myApp.addView('.view-main', {
    // menghidupkan dynamicNavbar
    dynamicNavbar: false,
    // menghidupkan cache pada page
    domCache: false
});

myApp.onPageInit('item', function (page) {
    checkBackHistory();
});


function getLastItems(page /* untuk swipeBack */, refresh) {
    var items = refresh ? [] : JSON.parse(localStorage.getItem('lastitems')) || [];
    if (items.length === 0) {
        $$.get(site_json, function (data) {
            
			 items = JSON.parse(data);
        
            localStorage.setItem('lastitems', JSON.stringify(items));
            renderLastItems(items, page);
        });
    }
    else {
        renderLastItems(items, page);
    }    
}

function renderLastItems(items, page) {
    var firstItemHTML = '', itemsHTML = '';

    for (var i = 0; i < items.length; i++) {
        // lazy image
        if (i === 0) {
            firstItemHTML +=
            '<a href="#" class="link">' +
            '   <div class="card">' +
            '       <div data-background="img/gambar1.jpg' + '" class="lazy lazy-fadeIn card-header-pic"></div>' +
            '       <div class="card-header"><b>' + items[i].nama + '</b></div>' +
            '       <div class="card-content">' +
            '           <div class="card-content-inner">' +
            '               <p>	" '+items[i].kesan+' "</p>' +
			'               <p class="color-blue">Email 	:	'+items[i].email+'</p>' +
			'               <p class="color-blue">No telpon :	'+items[i].no_telp+'</p>' +
            '               <p class="color-gray"><i>Dikirim '+items[i].waktu+'</i></p>' +
            '           </div>' +
            '       </div>' +
            '   </div>' +
            '</a>';
        }
        else {
            itemsHTML +=
            (i % 2 === 1 ? '<div class="row">' : '') + 
            '   <div class="col-50">' + 
            '	<a href="#" class="link">' +
            '           <div class="card">' +
            '               <div data-background="img/gambar1.jpg' + '" class="lazy lazy-fadeIn card-header-pic"></div>' +
            '               <div class="card-header">' + items[i].nama + '</div>' +
            '               <div class="card-content">' +
			'               	<p>	" '+items[i].kesan+' "</p>' +
            '                   <div class="card-content-inner">' +
		'               		<p class="color-gray"><i>Dikirim '+items[i].waktu+'</i> | <b>'+items[i].email+' | '+items[i].no_telp+'</b></p>' +
            '                   </div>' +
            '               </div>' +
            '           </div>' +
            '       </a>' + 
            '   </div>' + 
            (i % 2 === 0 || i === items.length - 1 ? '</div>' : '');
        }
    }
	
    $$(page.container).find('.first-item').html(firstItemHTML);
    
	$$(page.container).find('.last-items').html(itemsHTML); 
    
	myApp.initImagesLazyLoad(page.container);    
}


var backCount = 5; //back tombol
function checkBackHistory() {
    var history = mainView ? mainView.history : [];
    if (history.length > backCount + 1) {
        history.splice(1, 1); 
    }    
}