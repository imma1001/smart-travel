const hotels = [
    {
      id: 1,
      price: 300,
      rating: 7.2,
      image:['https://cdn.pixabay.com/photo/2018/04/05/13/08/water-3292794_960_720.jpg',
        "https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.jpg?s=1024x1024&w=is&k=20&c=DjFWuvX0pqsrMzlWPgJ8lA0Q4u_LXE63oXPw5lHusEg=",
        "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw=",
        "https://media.istockphoto.com/id/2077441223/photo/close-up-of-dining-table-during-breakfast-in-a-hotel.jpg?s=1024x1024&w=is&k=20&c=sRJykJ1tKySgDjvd56sYTP2s3fmZkTMLEmkGxNEubMg=",
        "https://media.istockphoto.com/id/2152373463/photo/relaxing-by-the-pool.jpg?s=1024x1024&w=is&k=20&c=PaaGxpuZQcuqgkoBmi0gAHxn2zBdydxBgK9dZqTeP4w=",
      "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=1024x1024&w=is&k=20&c=Qhwpo1ti8U3TSg3_HFKcEcSCL4ZlvGmYYKAkdc1kLxw=",
    ],
      name: 'The Burj Al Arab',
      address: 'Creek Residences, South Tower 1, Dubai, United Arab Emirates',
      country: 'United Arab Emirates',
    },
    
    {
      id: 3,
      price: 500,
      rating: 8.1,
      image: ["https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=2048x2048&w=is&k=20&c=hKhLRUpl6c1p_6CdUHRLTAR-UEBdR6vml7M5AtCSCL4=",
        "https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.jpg?s=1024x1024&w=is&k=20&c=DjFWuvX0pqsrMzlWPgJ8lA0Q4u_LXE63oXPw5lHusEg=",    
        "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw=",
        "https://media.istockphoto.com/id/2152373463/photo/relaxing-by-the-pool.jpg?s=1024x1024&w=is&k=20&c=PaaGxpuZQcuqgkoBmi0gAHxn2zBdydxBgK9dZqTeP4w=",
        "https://media.istockphoto.com/id/2077441223/photo/close-up-of-dining-table-during-breakfast-in-a-hotel.jpg?s=1024x1024&w=is&k=20&c=sRJykJ1tKySgDjvd56sYTP2s3fmZkTMLEmkGxNEubMg=",
        "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=1024x1024&w=is&k=20&c=Qhwpo1ti8U3TSg3_HFKcEcSCL4ZlvGmYYKAkdc1kLxw=",
      ],
      name: 'Le Meridien Nice',
      address: '1, promenade des Anglais, 06000 Nice, France',
      country: 'France',
    },
    
    {
      id: 5,
      price: 700,
      rating: 7.3,
      image:
       ["https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg",
        "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=1024x1024&w=is&k=20&c=Qhwpo1ti8U3TSg3_HFKcEcSCL4ZlvGmYYKAkdc1kLxw=",
        "https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.jpg?s=1024x1024&w=is&k=20&c=DjFWuvX0pqsrMzlWPgJ8lA0Q4u_LXE63oXPw5lHusEg=",   
        "https://media.istockphoto.com/id/2152373463/photo/relaxing-by-the-pool.jpg?s=1024x1024&w=is&k=20&c=PaaGxpuZQcuqgkoBmi0gAHxn2zBdydxBgK9dZqTeP4w=",
        "https://media.istockphoto.com/id/2077441223/photo/close-up-of-dining-table-during-breakfast-in-a-hotel.jpg?s=1024x1024&w=is&k=20&c=sRJykJ1tKySgDjvd56sYTP2s3fmZkTMLEmkGxNEubMg=",
           "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw=",

      ], 
      name: 'THE AOYAMA GRAND ',
      address: 'Tokyo-to, Tokyo, Minato-ku Kitaaoyama 2-14-4, Japan',
      country: 'Japan',
    },
  {
    id: 6,
    price: 600,
    rating: 9.6,
    image:['https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg'
      ,"https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=1024x1024&w=is&k=20&c=Qhwpo1ti8U3TSg3_HFKcEcSCL4ZlvGmYYKAkdc1kLxw=",
      "https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.jpg?s=1024x1024&w=is&k=20&c=DjFWuvX0pqsrMzlWPgJ8lA0Q4u_LXE63oXPw5lHusEg=",  
      "https://media.istockphoto.com/id/2152373463/photo/relaxing-by-the-pool.jpg?s=1024x1024&w=is&k=20&c=PaaGxpuZQcuqgkoBmi0gAHxn2zBdydxBgK9dZqTeP4w=",   
       "https://media.istockphoto.com/id/2077441223/photo/close-up-of-dining-table-during-breakfast-in-a-hotel.jpg?s=1024x1024&w=is&k=20&c=sRJykJ1tKySgDjvd56sYTP2s3fmZkTMLEmkGxNEubMg=",
        "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw=",

    ],
    name: 'Marriott Hotel',
    country: 'Egypt',
    address:'29 A Cornish el Nile Maadi Cairo, Maadi, 11431 Cairo'
  },
  
  {
    id: 9,
    price: 100,
    rating: 8.9,
    image:['https://media.istockphoto.com/id/2045439958/photo/english-architecture.jpg?s=2048x2048&w=is&k=20&c=Ke4rkNIsRhZTfN4Vy4LEiYpk-tIhrT50ZtEOGS-vZhw=',
    "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=1024x1024&w=is&k=20&c=Qhwpo1ti8U3TSg3_HFKcEcSCL4ZlvGmYYKAkdc1kLxw=",     
     "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw=",
    "https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.jpg?s=1024x1024&w=is&k=20&c=DjFWuvX0pqsrMzlWPgJ8lA0Q4u_LXE63oXPw5lHusEg=",  
    "https://media.istockphoto.com/id/2152373463/photo/relaxing-by-the-pool.jpg?s=1024x1024&w=is&k=20&c=PaaGxpuZQcuqgkoBmi0gAHxn2zBdydxBgK9dZqTeP4w=",
    "https://media.istockphoto.com/id/2077441223/photo/close-up-of-dining-table-during-breakfast-in-a-hotel.jpg?s=1024x1024&w=is&k=20&c=sRJykJ1tKySgDjvd56sYTP2s3fmZkTMLEmkGxNEubMg=",

  ],
    name: 'Ritz-Carlton',
    country: 'Spain',
    address:'Calle De Mallorca 255, Eixample, 08008 Barcelona, Spain.'
  },
  {
    id: 11,
    price: 200,
    rating: 6.8,
    image: ["https://cdn.pixabay.com/photo/2014/05/18/19/15/walkway-347319_960_720.jpg",
      "https://media.istockphoto.com/id/2077441223/photo/close-up-of-dining-table-during-breakfast-in-a-hotel.jpg?s=1024x1024&w=is&k=20&c=sRJykJ1tKySgDjvd56sYTP2s3fmZkTMLEmkGxNEubMg=",
      "https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.jpg?s=1024x1024&w=is&k=20&c=DjFWuvX0pqsrMzlWPgJ8lA0Q4u_LXE63oXPw5lHusEg=",   
      "https://media.istockphoto.com/id/2152373463/photo/relaxing-by-the-pool.jpg?s=1024x1024&w=is&k=20&c=PaaGxpuZQcuqgkoBmi0gAHxn2zBdydxBgK9dZqTeP4w=",
      "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw=",
      "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=1024x1024&w=is&k=20&c=Qhwpo1ti8U3TSg3_HFKcEcSCL4ZlvGmYYKAkdc1kLxw=",  
      

    ], 
    name: 'Hotel Britannia',
    country: 'Italy',
    address:'Via Gallia, 1, San Giovanni, 00183 Rome, Italy'
  },
  {
    id: 12,
    price: 330,
    rating: 9.3,
    image: ["https://cdn.pixabay.com/photo/2022/11/02/19/24/hotel-7565884_1280.jpg",
      "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=1024x1024&w=is&k=20&c=Qhwpo1ti8U3TSg3_HFKcEcSCL4ZlvGmYYKAkdc1kLxw=",  
      "https://media.istockphoto.com/id/2077441223/photo/close-up-of-dining-table-during-breakfast-in-a-hotel.jpg?s=1024x1024&w=is&k=20&c=sRJykJ1tKySgDjvd56sYTP2s3fmZkTMLEmkGxNEubMg=",
      "https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.jpg?s=1024x1024&w=is&k=20&c=DjFWuvX0pqsrMzlWPgJ8lA0Q4u_LXE63oXPw5lHusEg=",  
      "https://media.istockphoto.com/id/2152373463/photo/relaxing-by-the-pool.jpg?s=1024x1024&w=is&k=20&c=PaaGxpuZQcuqgkoBmi0gAHxn2zBdydxBgK9dZqTeP4w=",
       "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw=",

    ], // Palace Hotel Bari (Bari)
    name: 'Palace Hotel',
    country: 'Italy',
    address:'Via Liguria 38, Via Veneto, 00187 Rome, Italy'
  },
  {
    id: 13,
    price: 390,
    rating: 7.8,
    image: ["https://cdn.pixabay.com/photo/2013/03/22/20/23/gouda-95946_960_720.jpg",
      "https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.jpg?s=1024x1024&w=is&k=20&c=DjFWuvX0pqsrMzlWPgJ8lA0Q4u_LXE63oXPw5lHusEg=",
      "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw=",
              "https://media.istockphoto.com/id/2077441223/photo/close-up-of-dining-table-during-breakfast-in-a-hotel.jpg?s=1024x1024&w=is&k=20&c=sRJykJ1tKySgDjvd56sYTP2s3fmZkTMLEmkGxNEubMg=",
              "https://media.istockphoto.com/id/2152373463/photo/relaxing-by-the-pool.jpg?s=1024x1024&w=is&k=20&c=PaaGxpuZQcuqgkoBmi0gAHxn2zBdydxBgK9dZqTeP4w=",
        "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=1024x1024&w=is&k=20&c=Qhwpo1ti8U3TSg3_HFKcEcSCL4ZlvGmYYKAkdc1kLxw=",
    ], 
    name: 'Guler Palas Vefa',
    country: 'Turkey',
    address:'Vefa Caddesi, Fatih, 34134 Istanbul, Turkey'
  },
  {
    id: 14,
    price: 270,
    rating: 6.7,
    image: ["https://cdn.pixabay.com/photo/2024/01/25/12/54/building-8531835_960_720.jpg",
      "https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.jpg?s=1024x1024&w=is&k=20&c=DjFWuvX0pqsrMzlWPgJ8lA0Q4u_LXE63oXPw5lHusEg=",
      "https://media.istockphoto.com/id/2077441223/photo/close-up-of-dining-table-during-breakfast-in-a-hotel.jpg?s=1024x1024&w=is&k=20&c=sRJykJ1tKySgDjvd56sYTP2s3fmZkTMLEmkGxNEubMg=",
      "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw=",
      "https://media.istockphoto.com/id/2152373463/photo/relaxing-by-the-pool.jpg?s=1024x1024&w=is&k=20&c=PaaGxpuZQcuqgkoBmi0gAHxn2zBdydxBgK9dZqTeP4w=",
      "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=1024x1024&w=is&k=20&c=Qhwpo1ti8U3TSg3_HFKcEcSCL4ZlvGmYYKAkdc1kLxw=",
    ], // Four Seasons Hotel Istanbul
    name: 'Four Seasons Hotel Istanbul',
    address: 'Firuzağa Mahallesi Defterdar Yokuşu No :19 / 1 Cihangir/Taksim, Beyoglu, 34425 Istanbul, Turkey',
    country: 'Turkey',
  },
  {
    id: 15,
    price: 800,
    rating: 8.3,
    image: ["https://media.istockphoto.com/id/2046945081/photo/modern-style-luxury-black-living-room-with-city-view-in-the-night-3d-render.jpg?s=2048x2048&w=is&k=20&c=ZPk-r4pRpy5uq8jV14eUFUg_fyjJaWmITj5VLyCeUAE=",
      "https://media.istockphoto.com/id/1756553862/photo/modern-luxury-hotel-room.jpg?s=1024x1024&w=is&k=20&c=DjFWuvX0pqsrMzlWPgJ8lA0Q4u_LXE63oXPw5lHusEg=",
      "https://media.istockphoto.com/id/2152373463/photo/relaxing-by-the-pool.jpg?s=1024x1024&w=is&k=20&c=PaaGxpuZQcuqgkoBmi0gAHxn2zBdydxBgK9dZqTeP4w=",
      "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw=",
      "https://media.istockphoto.com/id/2077441223/photo/close-up-of-dining-table-during-breakfast-in-a-hotel.jpg?s=1024x1024&w=is&k=20&c=sRJykJ1tKySgDjvd56sYTP2s3fmZkTMLEmkGxNEubMg=",
      "https://media.istockphoto.com/id/1815808691/photo/luxury-bedroom-suite-in-resort-high-rise-hotel-with-cushion.jpg?s=1024x1024&w=is&k=20&c=Qhwpo1ti8U3TSg3_HFKcEcSCL4ZlvGmYYKAkdc1kLxw=",
    ], // Claridge's Hotel (London)
    name: 'Claridge\'s',
    address: 'Hastings Road, London, W13 8QY, United Kingdom',
    country: 'United Kingdom',
  }
];

  
  export default hotels;
  