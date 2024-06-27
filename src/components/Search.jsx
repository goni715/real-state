import CountryDropdown from "./CountryDropdown.jsx";
import PropertyDropdown from "./PropertyDropdown.jsx";
import PriceRangeDropdown from "./PriceRangeDropdown.jsx";
import {RiSearch2Line} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";
import {SetHouses, SetLoading} from "../redux/features/house/houseSlice.js";


const Search = () => {
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(SetLoading(true))
        setTimeout(()=>{
            dispatch(SetHouses());
            dispatch(SetLoading(false))
        },1000)
    }

    return (
        <>
           <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
               <CountryDropdown/>
               <PropertyDropdown/>
               <PriceRangeDropdown/>
               <button onClick={handleClick} className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
                   <RiSearch2Line/>
               </button>
           </div>
        </>
    );
};

export default Search;