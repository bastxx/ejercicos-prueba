const automoviles = [
    {name:"Renaut Magane", precio: 16000},
    {name:"Toyota corolla", precio: 17000},
    {name:"honda civic", precio: 18000}
];
const inventario  = automoviles.map (mostrar => mostrar.precio)
console.log(inventario)