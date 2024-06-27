import {useDispatch, useSelector} from "react-redux";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {RiArrowDownSLine, RiArrowUpSLine, RiMapPinLine} from "react-icons/ri";
import {useState} from "react";
import {SetCountry} from "../redux/features/house/houseSlice.js";


const CountryDropdown = () => {
    const {country, countries} = useSelector((state)=>state.house);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    return (
        <>

                <Menu as="div" className="dropdown w-full lg:max-w-[296px] cursor-pointer relative">
                    <MenuButton onClick={()=>setIsOpen(!isOpen)} className="dropdown-btn flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left">
                        <RiMapPinLine className="dropdown-icon-primary text-2xl mr-[18px] text-violet-700"/>
                        <div>
                            <div className="text-[15px] font-medium leading-tight">{country}</div>
                            <div className="text-[13px]">Select your place</div>
                        </div>
                        {isOpen ? (
                            <RiArrowUpSLine className="dropdown-icon-secondary text-2xl ml-auto text-violet-700"/>
                        ):(
                            <RiArrowDownSLine className="dropdown-icon-secondary text-2xl ml-auto text-violet-700"/>
                            )
                        }
                    </MenuButton>

                    <MenuItems className="dropdown-menu list-none px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10">
                        {countries?.map((item,i)=>{
                            return(
                                <MenuItem
                                    key={i}
                                    onClick={()=>{
                                        dispatch(SetCountry(item));
                                    }}
                                    as="li"
                                    className="cursor-pointer hover:text-violet-700 transition">
                                    {item}
                                </MenuItem>
                            )
                        })}
                    </MenuItems>
                </Menu>
        </>
    );
};

export default CountryDropdown;