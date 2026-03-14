import React from 'react'
import Card from './Components/Card'
import ProductCard from './Components/productCard'
import IceCreamCard from './Components/IceCreamCard'

const App = () => {
//   const data = [
//   {
//     "name": "Orange Juice",
//     "photo": "https://i.pinimg.com/736x/84/7f/59/847f5915abbfa9ca2a8086e6cffd085f.jpg",
//     "ingredients": ["Orange", "Water", "Sugar"],
//     "price": 3.50
//   },
//   {
//     "name": "Apple Juice",
//     "photo": "https://i.pinimg.com/736x/3f/58/0b/3f580b80e7bc6b7c1304d0a4dda2f641.jpg",
//     "ingredients": ["Apple", "Water", "Lemon"],
//     "price": 3.00
//   },
//   {
//     "name": "Mango Juice",
//     "photo": "https://i.pinimg.com/736x/46/26/10/4626100dd4080ce1802ca4e04a0689d4.jpg",
//     "ingredients": ["Mango", "Milk", "Sugar"],
//     "price": 4.00
//   },
//   {
//     "name": "Pineapple Juice",
//     "photo": "https://i.pinimg.com/736x/d7/cc/35/d7cc358d77528fbf102fabbba9fbf58f.jpg",
//     "ingredients": ["Pineapple", "Water", "Honey"],
//     "price": 3.75
//   },
//   {
//     "name": "Strawberry Juice",
//     "photo": "https://i.pinimg.com/736x/5e/4a/da/5e4ada4cec3760986d720031dc463bcf.jpg",
//     "ingredients": ["Strawberry", "Water", "Sugar"],
//     "price": 4.25
//   },
//   {
//     "name": "Watermelon Juice",
//     "photo": "https://i.pinimg.com/736x/36/de/eb/36deeb56c368985e33c72f719e560777.jpg",
//     "ingredients": ["Watermelon", "Mint", "Lime"],
//     "price": 3.20
//   },
//   {
//     "name": "Carrot Juice",
//     "photo": "https://i.pinimg.com/736x/1a/6e/de/1a6ede671dfceea2df241f6fd42cfb8f.jpg",
//     "ingredients": ["Carrot", "Ginger", "Lemon"],
//     "price": 3.10
//   },
//   {
//     "name": "Mixed Fruit Juice",
//     "photo": "https://i.pinimg.com/736x/93/66/b7/9366b7009eb0e451d50c7c857567176a.jpg",
//     "ingredients": ["Orange", "Banana", "Orange"],
//     "price": 4.50
//   },
//   {
//     "name": "Pomegranate Juice",
//     "photo": "https://i.pinimg.com/736x/90/97/04/909704d13bddfcef40e97edf394f4dcc.jpg",
//     "ingredients": ["Pomegranate", "Water", "Honey"],
//     "price": 4.80
//   },
//   {
//     "name": "Kiwi Juice",
//     "photo": "https://i.pinimg.com/1200x/28/e0/8a/28e08acc915861b708eea4275c25e7a1.jpg",
//     "ingredients": ["Kiwi", "Apple", "Lime"],
//     "price": 4.10
//   }
// ]

    // const product = [
    //                   {
    //                     "productPhoto": "https://i.pinimg.com/736x/f1/a7/a6/f1a7a63538c93368e7beefe6bfa4189e.jpg",
    //                     "productName": "Wireless Headphones",
    //                     "logo": "https://i.pinimg.com/736x/d1/c3/71/d1c3716580021acff7043d767e72a0eb.jpg",
    //                     "price": 2499,
    //                     "tagline": "Feel the music wirelessly",
    //                     "details": "High-quality wireless headphones with noise cancellation and 20-hour battery life."
    //                   },
    //                   {
    //                     "productPhoto": "https://i.pinimg.com/736x/e4/3a/79/e43a7962422ac1eaee2dbd4a4f23a6b5.jpg",
    //                     "productName": "Smart Watch Pro",
    //                     "logo": "https://i.pinimg.com/736x/1f/83/1c/1f831cd514306c92c9fe94a8e1c6be7a.jpg",
    //                     "price": 3999,
    //                     "tagline": "Your fitness partner",
    //                     "details": "Track heart rate, steps, and sleep with this stylish smartwatch."
    //                   },
    //                   {
    //                     "productPhoto": "https://i.pinimg.com/736x/80/c0/58/80c0585f92128ee5d6650296040d4ae7.jpg",
    //                     "productName": "UltraBook X",
    //                     "logo": "https://i.pinimg.com/1200x/c8/1c/7e/c81c7e3eee5e8ccee02a910701a17021.jpg",
    //                     "price": 65999,
    //                     "tagline": "Power meets portability",
    //                     "details": "Lightweight laptop with powerful performance and long battery life."
    //                   },
    //                   {
    //                     "productPhoto": "https://i.pinimg.com/736x/20/57/3c/20573c259f071de8bf5af1ec52201828.jpg",
    //                     "productName": "Smartphone Max",
    //                     "logo": "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
    //                     "price": 29999,
    //                     "tagline": "Experience speed",
    //                     "details": "Fast processor smartphone with stunning display and great camera."
    //                   },
    //                   {
    //                     "productPhoto": "https://i.pinimg.com/736x/a8/f5/52/a8f552b7e7d20f399f1f280344da2cfa.jpg",
    //                     "productName": "Bluetooth Speaker",
    //                     "logo": "https://i.pinimg.com/736x/31/33/1c/31331c8652a2ba996ce2860f7ced940d.jpg",
    //                     "price": 1999,
    //                     "tagline": "Sound that moves with you",
    //                     "details": "Portable speaker with deep bass and 10-hour playtime."
    //                   },
    //                   {
    //                     "productPhoto": "https://i.pinimg.com/736x/d8/70/e2/d870e24e990f7134b32a1bc1302a57d6.jpg",
    //                     "productName": "Digital Camera",
    //                     "logo": "https://i.pinimg.com/736x/30/91/1d/30911d93df147875018f543fc5871dc2.jpg",
    //                     "price": 45999,
    //                     "tagline": "Capture every moment",
    //                     "details": "High-resolution camera with 4K video recording capability."
    //                   },
    //                   {
    //                     "productPhoto": "https://i.pinimg.com/736x/85/da/99/85da999e02f90a022ef127352828b210.jpg",
    //                     "productName": "Gaming Mouse",
    //                     "logo": "https://i.pinimg.com/736x/12/da/bf/12dabf973aed8debb85e84b9dde772c6.jpg",
    //                     "price": 1499,
    //                     "tagline": "Precision in every move",
    //                     "details": "Ergonomic gaming mouse with customizable DPI and RGB lighting."
    //                   },
    //                   {
    //                     "productPhoto": "https://i.pinimg.com/1200x/59/d2/72/59d27209abef2f51779cd8e4d56b2bc0.jpg",
    //                     "productName": "Mechanical Keyboard",
    //                     "logo": "https://i.pinimg.com/1200x/03/d6/a4/03d6a40f8be9403b3d20949d84bbb1d1.jpg",
    //                     "price": 3499,
    //                     "tagline": "Type like a pro",
    //                     "details": "Durable mechanical keyboard with tactile switches and backlight."
    //                   },
    //                   {
    //                     "productPhoto": "https://i.pinimg.com/736x/4e/6c/1c/4e6c1c80d6e32f7232ff55039d2c1f1b.jpg",
    //                     "productName": "Tablet Plus",
    //                     "logo": "https://i.pinimg.com/736x/40/6e/0f/406e0f44b037f19e797f2f77ffd61df0.jpg",
    //                     "price": 18999,
    //                     "tagline": "Work and play anywhere",
    //                     "details": "Slim tablet perfect for entertainment, reading, and productivity."
    //                   },
    //                   {
    //                     "productPhoto": "https://i.pinimg.com/1200x/e7/f0/32/e7f032c776b53d542661803dbaaf21e1.jpg",
    //                     "productName": "Power Bank 20000mAh",
    //                     "logo": "https://i.pinimg.com/1200x/4a/1b/66/4a1b6643ee7af6c5facca10b26fecdf8.jpg",
    //                     "price": 1299,
    //                     "tagline": "Charge on the go",
    //                     "details": "High-capacity power bank with fast charging support."
    //                   }
    //                 ]

    const icecream_data = [
  {
    "image": "https://i.pinimg.com/1200x/e1/60/4f/e1604fefcae1a04721f7c78a9821dc0c.jpg",
    "name": "Vanilla Delight",
    "ingredients": ["Milk", "Vanilla Extract", "Sugar"],
    "detail": "Classic creamy vanilla ice cream with a smooth texture and rich flavor.",
    "toppings": ["Chocolate Syrup", "Almond Flakes"],
    "price": 120,
    "delivery_charge": 3
  },
  {
    "image": "https://i.pinimg.com/736x/07/6f/58/076f58cca901af486c8c3f617819b791.jpg",
    "name": "Chocolate Blast",
    "ingredients": ["Cocoa", "Cream", "Sugar"],
    "detail": "Rich chocolate ice cream loaded with deep cocoa flavor.",
    "toppings": ["Choco Chips", "Brownie Crumbs"],
    "price": 150,
    "delivery_charge": 4
  },
  {
    "image": "https://i.pinimg.com/1200x/d6/ee/bc/d6eebc69f3a1fbed7444fa5d236622ba.jpg",
    "name": "Strawberry Swirl",
    "ingredients": ["Strawberries", "Milk", "Sugar"],
    "detail": "Sweet strawberry ice cream with a refreshing fruity swirl.",
    "toppings": ["Strawberry Sauce", "Whipped Cream"],
    "price": 140,
    "delivery_charge": 2
  },
  {
    "image": "https://i.pinimg.com/1200x/c7/6d/70/c76d70e7a698683b8ff9687470a2253f.jpg",
    "name": "Mango Magic",
    "ingredients": ["Mango Pulp", "Cream", "Sugar"],
    "detail": "Tropical mango ice cream made from ripe juicy mangoes.",
    "toppings": ["Mango Cubes", "Coconut Flakes"],
    "price": 160,
    "delivery_charge": 3
  },
  {
    "image": "https://i.pinimg.com/736x/00/2a/98/002a98b9dc8f3cd6eaefb9f1fa02209a.jpg",
    "name": "Cookies & Cream",
    "ingredients": ["Milk", "Oreo Cookies", "Cream"],
    "detail": "Smooth vanilla base mixed with crunchy cookie chunks.",
    "toppings": ["Crushed Cookies", "Chocolate Drizzle"],
    "price": 170,
    "delivery_charge": 8
  },
  {
    "image": "https://i.pinimg.com/736x/02/15/e7/0215e731277f6b993158246dcad0f8f9.jpg",
    "name": "Pista Paradise",
    "ingredients": ["Pistachios", "Milk", "Sugar"],
    "detail": "Traditional pistachio ice cream with nutty richness.",
    "toppings": ["Pista Crumbles", "Honey Drizzle"],
    "price": 180,
    "delivery_charge": 9
  },
  {
    "image": "https://i.pinimg.com/736x/48/32/36/4832362b729a06eaa406b92dee8c6c7b.jpg",
    "name": "Butterscotch Crunch",
    "ingredients": ["Butterscotch Syrup", "Milk", "Cream"],
    "detail": "Creamy butterscotch ice cream with crunchy caramel bits.",
    "toppings": ["Caramel Sauce", "Butterscotch Chips"],
    "price": 160,
    "delivery_charge": 5
  },
  {
    "image": "https://i.pinimg.com/1200x/74/0f/ff/740fff9181cde733c36e53eb8dff4435.jpg",
    "name": "Blackcurrant Bliss",
    "ingredients": ["Blackcurrant", "Milk", "Sugar"],
    "detail": "Tangy and sweet blackcurrant ice cream with vibrant flavor.",
    "toppings": ["Berry Sauce", "Mint Leaves"],
    "price": 155,
    "delivery_charge": 8
  },
  {
    "image": "https://i.pinimg.com/736x/80/b4/17/80b417f5345c0824af0f0dd72fa95728.jpg",
    "name": "Coffee Caramel",
    "ingredients": ["Coffee", "Cream", "Sugar"],
    "detail": "Bold coffee ice cream blended with smooth caramel sweetness.",
    "toppings": ["Caramel Drizzle", "Choco Chips"],
    "price": 175,
    "delivery_charge": 6
  },
  {
    "image": "https://i.pinimg.com/736x/86/70/5c/86705c32eb698bf7e838851e462e18cf.jpg",
    "name": "Blueberry Dream",
    "ingredients": ["Blueberries", "Milk", "Sugar"],
    "detail": "Refreshing blueberry ice cream with natural fruity taste.",
    "toppings": ["Blueberry Sauce", "Whipped Cream"],
    "price": 165,
    "delivery_charge": 4
  }
]

  return (
    <> 
           {/* <section className='flex flex-wrap gap-6 px-8 py-4 justify-center items-center'> 
              {data.map(function(juice){
                return <Card data={juice}/> ;
              })}
            </section>    */}

    {/* <section className='flex items-center flex-wrap py-4 px-6 gap-6 justify-center'>
      {product.map(function (data){
        return <ProductCard data={data}/>
      })}
    </section> */}

     <section className="flex item-center flex-wrap py-4 px-6 justify-center gap-15">
          {icecream_data.map(function (data) {
              return <IceCreamCard data={data} />;
          })}
       </section> 

    </>
  )
}

export default App
