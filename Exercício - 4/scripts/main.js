var mark = {
   name: "Mark",
   tShirt: "Azul" 
};

var lisa = {
    name: "Lisa",
    tShirt: "Vermelho"
};

function Friend(name, tShirt) {
    this.name = name;
    this.tShirt = tShirt;
}

var denny = new Friend("Denny", "Verde");
var lisa = new Friend("Lisa", "Vermelho");

alert(denny.name);
