import { IconVirusSearch } from "@tabler/icons-react";
import axios from "axios";
import { getRandomNumber } from "../utils/random";
import BgStar from "./BgStars";

const Location = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    if(idLocation === "" || idLocation<1 || idLocation>126){
      window.alert("Location unknown: print random location")
      axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
    }else{
      axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
    }

    
  };

  return (
    <section>
      <BgStar />
      <section className=" z-50">
        <header className="flex justify-center mb-20 mb:mb-2">
        <img
          className="absolute w-[33%] animate-rotarrr mt-[-10%] bg-transparent sm:w-[40%]]"
          src="./vect1.png"
          alt=""
        />

        <img
          className="w-[65%] m-auto animate-flotar mt-5 sm:w-[60%]"
          src="./rick1.png"
          alt=""
        />
      </header>

      <div className="mt-3 justify-center mb-16">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            placeholder="Type a New Location ..."
            name="idLocation"
            className="text-black border-2 border-[#8EFF8B] hover:border-yellow-500"
            type="number"
          />
          <button
            type="submit"
            className="bg-[#8EFF8B] border border-[#95b994] flex p-1 font-bold items-center text-black
            hover:bg-gradient-to-r hover:from-yellow-300 hover:border-yellow-500 hover:via-red-500 hover:to-[#8EFF8B] hover:text-black`}"
          >
            Search <IconVirusSearch size={19} />
          </button>
        </form>
      </div>

      <section className="border border-[#8EFF8B] p-3 mr-1 mb-6">
        <h3 className="text-center text-[#8EFF8B] text-xl font-semibold font-mono mb-2 break-words">
          ¡Welcome to {location?.name}!
        </h3>

        <ul className="flex flex-col sm:flex-row sm:justify-between mx-4 sm:mx-20 text-[#938686] text-lg font-semibold font-mono">
          <li className="mb-2 sm:mb-0">Type: {location?.type}</li>
          <li className="mb-2 sm:mb-0">Dimension: {location?.dimension}</li>
          <li className="mb-2 sm:mb-0">Population: {location?.residents.length}</li>
        </ul>
      </section>
      </section>
    </section>
  );
};
export default Location;
