

type Product ={
id:number;
title:string;
desc?:string;
img:string;
price?:number;
options?:{title:string; additionalPrice:number}[];
};

type Products = Product[];

export const featureProducts: Products =[
    {
      "id": 1,
      "title": "Product A",
      "desc": "A fantastic product for your needs.",
       "img": '/temporary/ruti.jpeg',
      "price": 29.99,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 101,
        },
        {
          "title": "Medium",
          "additionalPrice": 101,
        },
        {
          "title": "Large",
          "additionalPrice": 101,
        }
      ]
    },
    {
      "id": 2,
      "title": "Product B",
      "desc": "Experience the excellence with Product B.",
      "img":'/temporary/vapa.jpeg',
      "price": 49.99,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 101,
        },
        {
          "title": "Medium",
          "additionalPrice": 101,
        },
        {
          "title": "Large",
          "additionalPrice": 101,
        }
      ]
    },
    {
      "id": 3,
      "title": "Product C",
      "desc": "Unmatched quality and performance.",
      "img": '/temporary/ruti.jpeg',
      "price": 79.99,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 101,
        },
        {
          "title": "Medium",
          "additionalPrice": 101,
        },
        {
          "title": "Large",
          "additionalPrice": 101,
        }
      ]
    },
    {
      "id": 4,
      "title": "Product D",
      "desc": "Revolutionize your daily routine.",
      "img":'/temporary/vapa.jpeg',
      "price": 99.99,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 101,
        },
        {
          "title": "Medium",
          "additionalPrice": 101,
        },
        {
          "title": "Large",
          "additionalPrice": 101,
        }
      ]
    },
    {
      "id": 5,
      "title": "Product E",
      "desc": "Elegant design and exceptional comfort.",
      "img": '/temporary/ruti.jpeg',
      "options": [
        {
          "title": "Small",
          "additionalPrice": 101,
        },
        {
          "title": "Medium",
          "additionalPrice": 101,
        },
        {
          "title": "Large",
          "additionalPrice": 101,
        }
      ]
    },
    {
      "id": 6,
      "title": "Product F",
      "desc": "Enhance your space with Product F.",
      "img":'/temporary/vapa.jpeg',
      "price": 129.99,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 101,
        },
        {
          "title": "Medium",
          "additionalPrice": 101,
        },
        {
          "title": "Large",
          "additionalPrice": 101,
        }
      ]
    },
    {
      "id": 7,
      "title": "Product G",
      "desc": "Discover Product G's unmatched versatility.",
      "img": '/temporary/ruti.jpeg',
      "price": 69.99,
      "options": [
        {
          "title": "Small",
          "additionalPrice": 101,
        },
        {
          "title": "Medium",
          "additionalPrice": 101,
        },
        {
          "title": "Large",
          "additionalPrice": 101,
        }
      ]
    }
  ]
 
  type Menu = {
    id:number;
    slug:string;
    title:string;
    desc?:string;
    img?:string;
    color:string;
  }[];

  export const menu:Menu =[
    {id:1,
    slug:"ruti",
    title:"Ruti Pitha",
    desc: "Desi Chaler Pitha",
    img:"/temporary/ruti.jpg",
    color:"white"
    },
    {id:2,
    slug:"kua",
    title:"Kua Pitha",
    desc: "Desi Chaler Kua Pitha",
    img:"/temporary/kua.png",
    color:"red"
    },
    {id:3,
    slug:"pakoan",
    title:"Pakoan Pitha",
    desc: "Desi Chaler Pakoan Pitha",
    img:"/temporary/pakoan.jpg",
    color:"orange"
    },
  ]

  export const pizzas: Products = [
    {
      id: 1,
      title: "Kua",
      desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img:"/temporary/kua.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Mediterranean Delight",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img:"/temporary/nokshi.jpg",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Bella Napoli",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img:"/temporary/pakoan.jpg",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Pesto Primavera",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img:"/temporary/kua.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Veggie Supreme",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img:"/temporary/pakoan.jpg",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Four Cheese Fantasy",
      desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
      img:"/temporary/nokshi.jpg",
      price: 22.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  

  
export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/jamai.jpg",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};