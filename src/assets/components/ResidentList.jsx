import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const ResidentList = ({ residents }) => {
  const [currentPage, setcurrentPage] = useState(1);

  const { pages, residentsInpage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setcurrentPage(1);
  }, [residents]);

  return (
    residents.length === 0  ? 
    <div className="bg-black w-screen h-auto m-auto">Mundo Vacío</div> 
    :
    <section className="bg-black">
      <section className="grid  0 grid-cols-[repeat(auto-fit,_300px)] justify-center gap-6 max-w-[1000px] mx-auto py-10">
        {residentsInpage.map((resident) => (
          <ResidentCard key={resident} residentEndpoint={resident} />
        ))}
      </section>
      
      <ul className="text-lg flex gap-3 justify-center flex-wrap pb-10">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`bg-transparent border-2 border-[#8EFF8B] text-[#8EFF8B] font-bold p-1 rounded-tr-full rounded-br-full shadow-md shadow-[#8EFF8B] w-10 h-10 ${
                page === currentPage && "bg-green-500"
              } hover:bg-gradient-to-r hover:from-yellow-300 hover:via-red-500 hover:to-[#8EFF8B] hover:text-black`}
              onClick={() => setcurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

    </section>
  );
};
export default ResidentList;
