const menu = {
  _courses: {
  _appetizers: [],
  _mains: [],
  _desserts: [],
  get appetizers(){
    return this._appetizers
  },
  get mains(){
    return this._mains
  },
  get desserts(){
    return this._desserts
  },
  set appetizers(appetizerIn) {},
  set mains(mainsIn){},
  set desserts(dessertsIn){},
  get _courses(){}
  },  
  get courses(){
    return { 
      appetizers: this._courses.appetizers, 
      mains: this._courses.mains,
      desserts: this._courses.desserts,
  }},
  
  addDishToCourse(courseName, dishName, dishPrice){
   const  dish = {
     name: dishName,
     price: dishPrice
   };
   this._courses[courseName].push(dish);
  },
  // //   
  // getRandomDishFromCourse (courseName) {
  //   const dishes = this._courses[courseName];
  //   const randomIndex = Math.floor(Math.random() * dishes.length);
  //   return dishes[randomIndex];

  getRandomDishFromCourse (courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length); return dishes[randomIndex]
},
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalprice = appetizer.price + main.price + dessert.price;
    return `${appetizer.name}, ${main.name} and ${dessert.name}`;
  }
    };
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Prawn Coctail', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);

menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);

menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);
let meal = menu.generateRandomMeal();
console.log(meal)

