
const products=[
  {
    id:'1',
    title:'Notebook',
    text:'Notebook Philco 4gb',
    price:'$300.000',
    img:'https://tiendanewsan.com.ar/media/catalog/product/n/1/n14p4020_7.jpg',
    stock: '3',
    category:'computadoras',
    description:'Notebook Hp Amd Ryzen 5 7520u, 8gb Ram DDR5, 512gb Ssd, Pantalla 15.6" Full ... Notebook Aspire Go Intel i3 N305, DDR5 8Gb Ram, 128Gb SSD, Pantalla...',
    },
  
    {
      id:'2',
      title:'Licuadora',
      text:'Licuadora Oster',
      price:'$120.000',
      img:'https://www.perozzi.com.ar/46211-large_default/whitenblack-licuadora-alwb-10-2-vel-350w.jpg',
      stock: '5',
      category:'electrodomesticos',
      description:'Cuchilla de 6 aspas, Jarra de vidrio de 1.5L, Potencia: 800W, Traba de seguridad, Base antideslizante',
    },
    
    {
      id:'3',
      title:'Horno eléctrico',
      text:'Horno eléctrico Philco',
      price:'$300.000',
      img:'https://www.aszisa.com.ar/640-large_default/horno-el%C3%A9ctrico-philco-40l-negro-220v.jpg',
      stock: '6',
      category:'electrodomesticos',
      description:'El horno eléctrico BGH ofrece una cocción óptima en un espacio reducido, por lo tanto ganarás practicidad y comodidad. Además, con su función de grill los alimentos quedarán dorados, crocantes y ricos y lograrás una cocción pareja en tus elaboraciones con su sistema por convección, que permite ahorrar tiempo y energía. Por otro lado, el timer programable te va a ayudar a graduar los minutos indicados y con el termostato ajustable vas a poder manejar el calor adecuado y lograr el punto justo.',
    },]


function getProducts() {
return new Promise ( (resolve) => {
    setTimeout( () => { resolve(products) }, 1000)
    })
}

export default getProducts;