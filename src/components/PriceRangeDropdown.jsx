import {useDispatch, useSelector} from "react-redux";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {RiArrowDownSLine, RiArrowUpSLine, RiHome5Line, RiWallet3Line} from "react-icons/ri";
import {useState} from "react";
import {SetPrice, SetProperty} from "../redux/features/house/houseSlice.js";
import {priceRangeData} from "../data/data.js";


const PriceRangeDropdown = () => {
    const {price, properties} = useSelector((state)=>state.house);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    return (
        <>

            <Menu as="div" className="dropdown relative">
                <MenuButton onClick={()=>setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
                    <RiWallet3Line className="dropdown-icon-primary"/>
                    <div>
                        <div className="text-[15px] font-medium leading-tight">{price}</div>
                        <div className="text-[13px]">Choose price range</div>
                    </div>
                    {isOpen ? (
                        <RiArrowUpSLine className="dropdown-icon-secondary"/>
                    ):(
                        <RiArrowDownSLine className="dropdown-icon-secondary"/>
                    )
                    }
                </MenuButton>

                <MenuItems className="dropdown-menu">
                    {priceRangeData?.map((item,i)=>{
                        return(
                            <MenuItem
                                key={i}
                                onClick={()=>{
                                    dispatch(SetPrice(item.value));
                                }}
                                as="li"
                                className="cursor-pointer hover:text-violet-700 transition">
                                {item?.value}
                            </MenuItem>
                        )
                    })}
                </MenuItems>
            </Menu>
        </>
    );
};

export default PriceRangeDropdown;