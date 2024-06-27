import {createSlice} from "@reduxjs/toolkit";
import {housesData} from "../../../data/data.js";

//return all countries
const allCountries = housesData.map((house)=> house.country) //array return
// remove duplicates
const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

const allProperties = housesData.map((house)=> house.type) //array return
// remove duplicates
const uniqueProperties = ["Property type (any)", ...new Set(allProperties)]


const initialState = {
    houses:housesData,
    country:"Location (any)",
    countries: uniqueCountries,
    property:"Property type (any)",
    properties: uniqueProperties,
    price: "Price range (any)",
    loading:false,
}

const houseSlice = createSlice({
    name: 'house',
    initialState,
    reducers: {
        SetHouses: (state, action) =>{
            const {price, property, country}=state;
            //check '(any)'
            const isDefault = (str)=> {
                return str.split(' ').includes('(any)');
            }

            //get minPrice and maxPrice of price and parse these to number
            const minPrice = parseInt(price.split(' ')[0])
            const maxPrice = parseInt(price.split(' ')[2])

            state.houses = housesData.filter((cv)=>{
                const housePrice = parseInt(cv.price)
                //if all values are selected
                if(cv.country=== country && cv.type=== property && housePrice >=minPrice && housePrice <= maxPrice){
                    return cv;
                }

                //if all values are default
                if(isDefault(country) && isDefault(property) && isDefault(price)){
                    return cv;
                }

                //if country is not default
                if(!isDefault(country) && isDefault(property) && isDefault(price)){
                    return cv.country === country;
                }

                //if property is not default
                if(isDefault(country) && !isDefault(property) && isDefault(price)){
                    return cv.type === property;
                }

                //if price is not default
                if(isDefault(country) && isDefault(property) && !isDefault(price)){
                    return housePrice >=minPrice && housePrice <= maxPrice;
                }

                //if country & property are not default
                if(!isDefault(country) && !isDefault(property) && isDefault(price)){
                    return cv.country === country && cv.type===property;
                }

                //if country & price are not default
                if(!isDefault(country) && isDefault(property) && !isDefault(price)){
                    return cv.country === country && housePrice >=minPrice && housePrice <= maxPrice;
                }

                //if property & price are not default
                if(isDefault(country) && !isDefault(property) && !isDefault(price)){
                    return cv.type === property && housePrice >=minPrice && housePrice <= maxPrice;
                }
            })
        },
        SetCountry: (state, action) =>{
            state.country = action.payload;
        },
        SetCountries: (state, action) =>{
            state.houses = action.payload;
        },
        SetProperty: (state, action) =>{
            state.property = action.payload;
        },
        SetProperties: (state, action) =>{
            state.houses = action.payload;
        },
        SetPrice: (state, action) =>{
            state.price = action.payload;
        },
        SetLoading: (state, action) =>{
            state.loading = action.payload;
        },
    }
})



export const {SetHouses, SetCountry, SetCountries, SetProperty, SetProperties, SetPrice, SetLoading} = houseSlice.actions;

const houseSliceReducer = houseSlice.reducer;
export default houseSliceReducer;