
import { BsCalendar3 } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
        <>
            <div className='sidebar text-black spay' >

                <div className='space-y-7 mt-8'>

                    <div className="flex items-center w-full h-10 hover:bg-violet-300 hover-bg rounded-l-lg pl-3">
                        <Link to="/home" className=" flex items-center w-full ">
                            <FaHome className='w-6 h-6' />
                            <button className="ml-1">Home</button>
                        </Link>
                    </div>

                    <div className="flex items-center w-full h-10 hover:bg-violet-300 hover-bg rounded-l-lg pl-3">
                        <Link to="/home/reserva" className="flex items-center w-full  ">
                            <BsCalendar3 className='w-5 h-5' />
                            <button className="ml-1">Nova Reserva</button>
                        </Link>
                    </div>

                    <div className="flex items-center w-full h-10 hover:bg-violet-300 hover-bg rounded-l-lg pl-3">
                        <Link to="/Login" className="flex items-center w-full  ">
                            <LuLogOut className='w-5 h-5' />
                            <button className="ml-1">Logout</button>
                        </Link>
                    </div>

                </div>

                

            </div>


        </>
    );
}

export default Sidebar;
