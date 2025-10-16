import { createSlice } from '@reduxjs/toolkit';

export const plantsSlice = createSlice({
    name: 'plants',
    initialState: [
        {   
            id: 1,
            name: "Fig",
            brief: "Sweet fruit with a soft inside and chewy skin.",
            type: "Fruit",
            imageUrl: "https://github.com/HmzhDubh/LAB-ORM-PLANTEER/blob/main/Planteer/main/static/images/guava.jpg?raw=true",
            isViewed: false,
            price: 230,
            quantity: 0,
        },
        {
            id: 2,
            name: "Mixed Berries",
            brief: "A small mix of strawberries, raspberries, blackberries.",
            type: "Fruit",
            imageUrl: "https://github.com/HmzhDubh/LAB-ORM-PLANTEER/blob/main/Planteer/main/static/images/guava.jpg?raw=true",
            isViewed: false,
            price: 120,
            quantity: 0,
        },
        {
            id: 3,
            name: "Mango",
            brief: "Tropical fruit with juicy flesh and a large seed in the middle.",
            type: "Fruit",
            imageUrl: "https://github.com/HmzhDubh/LAB-ORM-PLANTEER/blob/main/Planteer/main/static/images/guava.jpg?raw=true",
            isViewed: false,
            price: 220,
            quantity: 0,

        },
         {
            id: 4,
            name: "Fig",
            brief: "Sweet fruit with a soft inside and chewy skin.",
            type: "Fruit",
            imageUrl: "https://github.com/HmzhDubh/LAB-ORM-PLANTEER/blob/main/Planteer/main/static/images/guava.jpg?raw=true",
            isViewed: false,
            price: 200,
            quantity: 0,
        },
        {
            id: 5,
            name: "Mixed Berries",
            brief: "A small mix of strawberries, raspberries, blackberries.",
            type: "Fruit",
            imageUrl: "https://github.com/HmzhDubh/LAB-ORM-PLANTEER/blob/main/Planteer/main/static/images/guava.jpg?raw=true",
            isViewed: false,
            price: 120,
            quantity: 0,
        },
        {
            id: 6,
            name: "Mango",
            brief: "Tropical fruit with juicy flesh and a large seed in the middle.",
            type: "Fruit",
            imageUrl: "https://github.com/HmzhDubh/LAB-ORM-PLANTEER/blob/main/Planteer/main/static/images/guava.jpg?raw=true",
            isViewed: false,
            price: 300,
            quantity: 0,
        },
    ],
    reducers: {
        togglePlantDetails: (state, action) => {
            state[action.payload].isViewed = !state[action.payload].isViewed;
        },
        incrementQuantity: (state, action) => {
            const item = state[action.payload]
            if(item){
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state[action.payload]
            if(item && item.quantity > 0){
                item.quantity--;
            }
        },

    }
});

export const { togglePlantDetails, incrementQuantity, decrementQuantity } = plantsSlice.actions;
export default plantsSlice.reducer;