var myCoffee = {
    flavor : "expresso",
    temperature: "um pouco quente",
    ounces: 100,
    milk: true,

    /* Método - Reaquecer o café = boolean */
    reheat: function (params) {
       if(myCoffee.temperature === "frio") {
           myCoffee.temperature = "um pouco quente";
           alert("Seu café foi esquentado!");
       } 
    }
};

myCoffee.temperature = "frio";
myCoffee ["temperature"] = "muito quente";

myCoffee.reheat();
