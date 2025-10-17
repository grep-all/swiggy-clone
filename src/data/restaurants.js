const restaurants = [
    {
        id: 1,
        name: "Pizza Palace",
        rating: 4.5,
        cuisines: ["Italian", "Pizza"],
        deliveryTime: "30 mins",
        bannerImage: "https://source.unsplash.com/600x400/?pizza",
        menu: [
            {
                id: 1,
                name: "Margherita Pizza",
                price: 8.99,
                description: "Classic pizza with fresh mozzarella and basil.",
                image: "https://source.unsplash.com/600x400/?margherita,pizza",
                isVeg: true,
            },
            {
                id: 2,
                name: "Pepperoni Pizza",
                price: 10.99,
                description: "Delicious pizza topped with pepperoni slices.",
                image: "https://source.unsplash.com/600x400/?pepperoni,pizza",
                isVeg: false,
            },
        ],
    },
    {
        id: 2,
        name: "Sushi World",
        rating: 4.8,
        cuisines: ["Japanese", "Sushi"],
        deliveryTime: "25 mins",
        bannerImage: "https://source.unsplash.com/600x400/?sushi",
        menu: [
            {
                id: 1,
                name: "California Roll",
                price: 12.99,
                description: "Sushi roll with crab, avocado, and cucumber.",
                image: "https://source.unsplash.com/600x400/?california,sushi",
                isVeg: false,
            },
            {
                id: 2,
                name: "Veggie Roll",
                price: 9.99,
                description: "Sushi roll filled with fresh vegetables.",
                image: "https://source.unsplash.com/600x400/?veggie,sushi",
                isVeg: true,
            },
        ],
    },
    {
        id: 3,
        name: "Burger Hub",
        rating: 4.2,
        cuisines: ["American", "Burgers"],
        deliveryTime: "35 mins",
        bannerImage: "https://source.unsplash.com/600x400/?burger",
        menu: [
            {
                id: 1,
                name: "Cheeseburger",
                price: 11.99,
                description: "Juicy beef burger with cheese and toppings.",
                image: "https://source.unsplash.com/600x400/?cheeseburger",
                isVeg: false,
            },
            {
                id: 2,
                name: "Veggie Burger",
                price: 10.49,
                description: "Delicious burger made with a vegetable patty.",
                image: "https://source.unsplash.com/600x400/?veggie,burger",
                isVeg: true,
            },
        ],
    },
];

export default restaurants;