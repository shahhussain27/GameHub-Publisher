import useColorMode from "@/hooks/useColorMode";
import { CiLight, CiDark  } from "react-icons/ci";

const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <li>
      <div
        onClick={() => {
          if (typeof setColorMode === "function") {
            setColorMode(colorMode === "light" ? "dark" : "light");
          }
        }}
        className={`text-3xl cursor-pointer rounded-full`}
      >
     
        {colorMode == "dark" ? <CiLight/> : <CiDark/>}
      
      </div>
    </li>
  );
};

export default DarkModeSwitcher;
