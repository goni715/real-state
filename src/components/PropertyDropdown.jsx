import {useDispatch, useSelector} from "react-redux";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {RiArrowDownSLine, RiArrowUpSLine, RiHome5Line} from "react-icons/ri";
import {useState} from "react";
import {SetProperty} from "../redux/features/house/houseSlice.js";


const PropertyDropdown = () => {
    const {property, properties} = useSelector((state)=>state.house);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    return (
        <>

            <Menu as="div" className="dropdown relative">
                <MenuButton onClick={()=>setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
                    <RiHome5Line className="dropdown-icon-primary"/>
                    <div>
                        <div className="text-[15px] font-medium leading-tight">{property}</div>
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
                    {properties?.map((item,i)=>{
                        return(
                            <MenuItem
                                key={i}
                                onClick={()=>{
                                    dispatch(SetProperty(item));
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

export default PropertyDropdown;