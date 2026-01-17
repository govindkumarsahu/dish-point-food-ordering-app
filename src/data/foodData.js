// Shared dummy data for the menu and featured sections
export const foodItems = [
  {
    id: 1,
    name: 'Pepperoni Pizza',
    description: 'Classic pepperoni, mozzarella, and house tomato sauce.',
    price: 349,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Margherita Pizza',
    description: 'San Marzano tomato, basil, and fresh mozzarella.',
    price: 299,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1548365328-8b849e6f1c32?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Paneer Tikka Pizza',
    description: 'Smoky paneer, bell peppers, and mint yogurt drizzle.',
    price: 379,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'BBQ Chicken Pizza',
    description: 'Grilled chicken, smoky BBQ sauce, and red onions.',
    price: 399,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1548365328-8b849e6f1c32?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Truffle Mushroom Burger',
    description: 'Juicy patty, truffle aioli, and caramelized onions.',
    price: 289,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Crispy Chicken Burger',
    description: 'Crispy fillet, slaw, and spicy honey glaze.',
    price: 269,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    name: 'Classic Veggie Burger',
    description: 'Grilled veggie patty, cheddar, and herb mayo.',
    price: 249,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    name: 'Double Smash Burger',
    description: 'Two smashed patties, pickles, and secret sauce.',
    price: 329,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    name: 'Molten Chocolate Cake',
    description: 'Warm chocolate cake with vanilla crème.',
    price: 179,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    name: 'Classic Cheesecake',
    description: 'Creamy cheesecake with berry compote.',
    price: 199,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1505253213348-cd1c5018c592?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 11,
    name: 'Tiramisu Cup',
    description: 'Coffee-soaked layers with mascarpone cream.',
    price: 189,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1505253219943-57c2c8397b1f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 12,
    name: 'Choco Lava Brownie',
    description: 'Fudgy brownie with molten center and nuts.',
    price: 169,
    category: 'dessert',
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&w=800&q=80'
  }
];

export const featuredFoods = foodItems.slice(0, 3);
export const categories = ['all', ...new Set(foodItems.map(item => item.category))];
