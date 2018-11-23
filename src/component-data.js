export default {
  domain_url: 'http://localhost:8080/',
  logo: require('./assets/logo.png'),
  navlink: [],
  front_page: {
      banner_img: require('./assets/vegetables-italian-pizza-restaurant.jpg')
  },
  pizzas: [
    {
      label: 'Neapolitan Pizza',
      desc: 'Neapolitan is the original pizza. This delicious pie dates all the way back to 18th century in Naples, Italy. During this time, the poorer citizens of this seaside city frequently purchased food that was cheap and could be eaten quickly. Luckily for them, Neapolitan pizza – a flatbread with tomatoes, cheese, oil, and garlic – was affordable and readily available through numerous street vendors.',
      img: require('./assets/pizzatypes-margherita.jpg')
    },
    {
      label: 'Pizza Margherita',
      desc: 'Chicago pizza, also commonly referred to as deep-dish pizza, gets its name from the city it was invented in. During the early 1900’s, Italian immigrants in the windy city were searching for something similar to the Neapolitan pizza that they knew and loved. Instead of imitating the notoriously thin pie, Ike Sewell had something else in mind. He created a pizza with a thick crust that had raised edges, similar to a pie, and ingredients in reverse, with slices of mozzarella lining the dough followed by meat, vegetables, and then topped with a can of crushed tomatoes. This original creation led Sewell to create the now famous chain restaurant, Pizzeria Uno.',
      img: require('./assets/pizzatypes-deepdish.jpg')
    }
  ],
  toppings: [
    {
      label: 'ground beef',
      price: 1.60
    },
    {
      label: 'mozzarella',
      price: 0.50
    },
    {
      label: 'basil leaves',
      price: 0.50
    },
    {
      label: 'oregano',
      price: 0.50
    },
    {
      label: 'olive oil',
      price: 0.00
    },
    {
      label: 'sausage',
      price: 1.00
    },
    {
      label: 'pepperoni',
      price: 0.05
    },
    {
      label: 'onion',
      price: 0.03
    },
    {
      label: 'mushrooms',
      price: 1.50
    },
    {
      label: 'green peppers',
      price: 0.50
    }
  ]
}