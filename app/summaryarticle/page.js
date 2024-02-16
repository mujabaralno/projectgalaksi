import SummaryText from "@/sections/SummaryText";
import MobileSide from "@/components/shared/MobileSide";
import SideNav from "@/components/shared/SideNav";
import SummaryArticle from "@/sections/SummaryArticle";
import Header from "@/components/shared/Header";
import HeaderChat from "@/components/shared/HeaderChat";

export default function summarytext () {
    return(
      <>
       
        <div className="overflow-hidden w-full h-screen relative flex">
        <MobileSide />
       
        <div className="dark hidden flex-shrink-0 bg-gray-900 md:flex md:w-[260px] md:flex-col">
        
          <div className="flex h-full min-h-0 flex-col ">
              <SideNav />
              
            </div>  
        </div>
        
        <SummaryArticle />
      </div>
      </>
    )
}