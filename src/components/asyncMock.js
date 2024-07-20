const products = [
    {
      id: "1",
      name: "Batman",
      price: 15000,
      category: "disfraces",
      img: "https://i0.wp.com/comicbookschool.com/wp-content/uploads/2014/10/Classic-Batman-2.jpg",
      stock: 50, 
      description: "El mejor disfraz de Batman en el mundo.",
    },
    {
      id: "2",
      name: "Spider-man",
      price: 800,
      category: "disfraces",
      img: "https://http2.mlstatic.com/D_NQ_NP_755160-MLA50263608407_062022-O.webp",
      stock: 16,
      description: "El mismisimo Hombre Araña",
    },
    {
      id: "3",
      name: "Globos de Colores",
      price: 1200,
      category: "globos",
      img: "https://mysweetindian.com/2516-large_default/globos-de-colores.jpg",
      stock: 0,
      description: "Globitos de colores",
    },
    {
      id: "4",
      name: "Lapices de Colores",
      price: 600,
      category: "utiles",
      img: "https://acdn.mitiendanube.com/stores/001/696/991/products/532925-2-acee4040a99a21fc5516901847794590-480-0.webp",
      stock: 0,
      description: "Altos lapices para dibujar",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
      }, 1000);
    });
  };
  