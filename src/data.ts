

type Product ={
id:number;
title:string;
desc?:string;
img:string;
price?:number;
options?:{title:string; additionalPrice:number}[];
};

// import pitha_1 from '../public/temporary/ruti.jpeg';
// import pitha_2 from '../public/temporary/vapa.jpeg';

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
  