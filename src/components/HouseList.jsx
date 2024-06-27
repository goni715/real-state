import {useSelector} from "react-redux";
import House from "./House.jsx";
import {ImSpinner2} from "react-icons/im";
import {Link} from "react-router-dom";


const HouseList = () => {
    const {houses, loading} = useSelector((state)=>state.house);

    if(loading){
        return (
            <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
        )
    }

    if(houses?.length ===0 ) {
        return <div className="text-center text-3xl text-gray-400 mt-48">Sorry, nothing found</div>
    }

    if(houses?.length >0) {
        return (
            <>
                <div className="my-20">
                    <div className="container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
                            {houses?.map((house, i) => {
                                return (
                                    <Link key={i} to={`/property/${house?.id}`}>
                                        <House house={house}/>
                                    </Link>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default HouseList;