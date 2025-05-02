import { TiThSmall } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { MdOutlineFoodBank } from "react-icons/md";
import { CiPizza } from "react-icons/ci";
import { CiBurger } from "react-icons/ci";
import { MdOutlineSoupKitchen } from "react-icons/md";
export const categories=[
    {
        id:1,
        name:"All",
        image:<TiThSmall  className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:2,
        name:"breakfast",
        image:<MdFreeBreakfast  className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:3,
        name:"soups",
        image:<LuSoup className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:4,
        name:"pasta",
        image:<MdOutlineSoupKitchen  className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:5,
        name:"main_course",
        image:<MdOutlineFoodBank   className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:1,
        name:"pizza",
        image:<CiPizza  className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:1,
        name:"burger",
        image:<CiBurger className="w-[60px] h-[60px] text-green-600"/>
    }


]
export default categories