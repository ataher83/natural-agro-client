import { useEffect, useState } from 'react';


const VisitCount = () => {

        const [visitCount, setVisitCount] = useState(0);
      
        useEffect(() => {
          const visitCounter = localStorage.getItem("page_view");
      
          if (visitCounter) {
            const newCount = Number(visitCounter) + 1;
            localStorage.setItem("page_view", newCount);
            setVisitCount(newCount);
          } else {
            localStorage.setItem("page_view", 1);
            setVisitCount(1);
          }
        }, []);
      
      
      
      //   const handleReset = () => {
      //     localStorage.setItem("page_view", 1);
      //     setVisitCount(1);
      //   };





    return (

          <div className="mt-4">
            <div className="text-lg footer-title text-green-600">Total Visit Count</div>
            <div className="website-counter bg-orange-400 font-bold text-xl h-12 w-20 flex items-center justify-center rounded-full mt-2">{visitCount}</div>


            
            {/* <button id="reset" className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition" onClick={handleReset}>Reset</button> */}
          </div>
    );
};

export default VisitCount;