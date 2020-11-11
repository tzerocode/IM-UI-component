import { useState } from "react";
function useColorSwitch(color1 = "#ff0000", color2 = "#00ff00") {
  const [color, setColor] = useState(color1);
  const handleButtonClcik = () => {
    setColor(color2);
  };
  return [color, handleButtonClcik];
}
export default useColorSwitch;
