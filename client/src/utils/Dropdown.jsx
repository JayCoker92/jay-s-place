import { useState } from "react"
import drop from "../assets/drop-down.svg";
import ArrowU from "../assets/keyboard_arrow_up_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import ArrowD from "../assets/keyboard_arrow_down_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

export const LocationDropDownFN = () => {
    const[Isclicked,setIsClicked] = useState(true);
    function toggleArrow() {
        Isclicked ? setIsClicked(true) : setIsClicked(true)
    }
    Return(
        <>
    <div className="dropdown dropdown-down md: dropdown-center">
        <div tabIndex={0} className="m-1" onClick={toggleArrow}>
            <img src={Isclicked? ArrowU : ArrowD} alt="drop-down-img" className="cursor-pointer" />
        </div>

    </div>

    <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    </ul>

        </>
    )
}