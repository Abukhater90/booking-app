

import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { FaCarAlt } from "react-icons/fa";
import { IoMdBed } from "react-icons/io";
import { BsTaxiFrontFill } from "react-icons/bs";








import { FaBed } from "react-icons/fa";

import "./Header.css";



const Header = () => {
  return (
    <div className="header">
      <div className="headerList">

        <div className="headerListItem active">

        <FaBed />
        <span>Stays</span>
        </div>

        <div className="headerListItem">
        <BiSolidPlaneTakeOff />
        <span>Flights</span>
        </div>

        <div className="headerListItem">
        <FaCarAlt />

        <span>Car Rentals</span>
        </div>

        <div className="headerListItem">
        <IoMdBed />
        <span>Attractions</span>
        </div>

        <div className="headerListItem">
        <BsTaxiFrontFill />
        <span>Airports Taxis</span>
        </div>



      </div>

      <h1 className="headerTitle"> A Lifetime Of Discount? It's Genius</h1>

    </div>
    
  );
};

export default Header;
