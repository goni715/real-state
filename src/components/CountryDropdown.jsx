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

                <Menu as="div" className="dropdown relative">
                    <MenuButton onClick={()=>setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
                        <RiMapPinLine className="dropdown-icon-primary"/>
                        <div>
                            <div className="text-[15px] font-medium leading-tight">{country}</div>
                            <div className="text-[13px]">Select your place</div>
                        </div>
                        {isOpen ? (
                            <RiArrowUpSLine className="dropdown-icon-secondary"/>
                        ):(
                            <RiArrowDownSLine className="dropdown-icon-secondary"/>
                            )
                        }
                    </MenuButton>

                    <MenuItems className="dropdown-menu">
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