var kassar = document.querySelector("#container");

var cats = [
    { photo: "https://cdn-images-1.medium.com/max/1600/1*mONNI1lG9VuiqovpnYqicA.jpeg",
     catname: 'Kisi', 
     age: '5 ára', 
     gender: "Fress",
     type: "Heimilisköttur"},

     { photo: "https://frettabladid.imgix.net/perla_180615_120836.jpg?auto=format%2Ccompression&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=490&ixlib=php-1.1.0&q=80&w=736&s=df92d7330956a67d013f09ef981eb8c4",
     catname: 'Perla', 
     age: '9 ára', 
     gender: "Læða",
     type: "Heimilisköttur"},

     { photo: "https://www.catster.com/wp-content/uploads/2017/01/maine-coon-01-119076985-600x497.jpg",
     catname: 'Mjálmar', 
     age: ' 3 ára', 
     gender: "Fress",
     type: "Maine Coon"},

     { photo: "https://jornal.drougmagazine.ru/upload/iblock/758/7585ebbe06d96033d0d7f92070df3af7.jpg",
     catname: 'Lotta', 
     age: '5 ára', 
     gender: "Læða",
     type: "Síamssköttur"},

     { photo: "https://therapypet.org/wp-content/uploads/2018/02/norwegian-cat.jpg",
     catname: 'Simba', 
     age: '7 ára', 
     gender: "Fress",
     type: "Norskur skógarköttur"},

     { photo: "https://i.imgur.com/tnuIxnp.jpg",
     catname: 'Nala', 
     age: '2 ára', 
     gender: "Læða",
     type: "Heimilisköttur"},

     { photo: "http://shsanimalshelter.com/wp-content/uploads/2018/05/DSC_2492-745x1024.jpg",
     catname: 'Kleópatra', 
     age: '1 árs', 
     gender: "Læða",
     type: "Heimilisköttur"},

     { photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-lR20gYCoX4tXri7-SpuT26uaPwDKW7iz2UJK25C6-3wclKoX",
     catname: 'Mörður', 
     age: '10 ára', 
     gender: "Fress",
     type: "British shorthair"},

     { photo: "https://i0.wp.com/www.wagpets.com/wp-content/uploads/2016/09/word-image.jpeg?fit=808%2C720&ssl=1",
     catname: 'Köttólfur', 
     age: '3 ára', 
     gender: "Fress",
     type: "Norskur skógarköttur"},

     { photo: "https://1dkpox2x79277ohvm1um4njx-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/winking-cat-licking.jpg",
     catname: 'Álfheiður', 
     age: '6 ára', 
     gender: "Læða",
     type: "Heimilisköttur"},
];

function addCard(cat){

    var kassi = `<div class="kettir">
        <img src="${cat.photo}"> 
        <h2>${cat.catname} </h2>
        <h3>${cat.age}</h3>
        <h3>${cat.gender}</h3>
        <h3>${cat.type}</h3>
        </div>`;
    kassar.innerHTML += kassi;
}

var button = document.querySelector("button");
var genderSearch= document.querySelector("#gender-search");
var search= document.querySelector("#search");
var typeSearch= document.querySelector("#type-search");
var ageSearch= document.querySelector("#age-search");

function matchCat(cat) {
    return (cat.catname.includes(search.value)
        && (cat.gender===(genderSearch.value) || genderSearch.value==="all")
        && (cat.age===(ageSearch.value) || ageSearch.value==="all")
        && (cat.type===(typeSearch.value) || typeSearch.value==="all")
    );
}

function loadCats() {
    kassar.innerHTML = "";
    var matchedCats = cats.filter(matchCat) //matchedCats eru filtered niðurstöðurnar
    for (arrayPosition = 0; arrayPosition < matchedCats.length; arrayPosition ++) {

        addCard(matchedCats[arrayPosition])
    }
    if (matchedCats.length===0){
        kassar.innerHTML = '<h2 class="leitin">Leitin skilaði engum niðurstöðum</h2>';
    } // ef það er ekkert lenght á matchedCats þýðir það að ekki passar við leitina
}


function addItemToList (value, list) {

    for (var listArrayPosition = 0; listArrayPosition < list.options.length ; listArrayPosition ++) {
         if (list.options[listArrayPosition].value == value) {
              return true;
         }    
     } // svo sama value birtist ekki tvisvar í dropdown listanum, þetta er false fyrst og þá gerist þetta
     //fyrir neðan (þ.e option er búið til), en ef satt þá stoppar þetta. þ.e sama option birtist ekki tvisvar

    var option = document.createElement('option'); //þetta býr til nýtt option í html-inu, fann þetta með að gúgla
    option.text = value; //option.text er textinn í option elementinu
    list.options.add(option, list.options.length); //length, bætir option aftast í listann, ef ég vil bæta
    //framar í listann þá kemur númer í staðinn fyrir length
}
function loadLists() {
    for (var arrayPosition = 0; arrayPosition < cats.length; arrayPosition ++) {
        addItemToList(cats[arrayPosition].gender, genderSearch);
        addItemToList(cats[arrayPosition].type, typeSearch);
        addItemToList(cats[arrayPosition].age, ageSearch);
    }
} // þetta bætir listunum á síðuna

button.onclick = loadCats;

loadCats();
loadLists();