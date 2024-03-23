import React, { useState } from "react";
import ForumsCard from "../components/ForumsCard";
import Layout from "../components/Layout";
import dummyData from "../data/discussionForum";
import dummyDataMarket from "../data/market.js"
import useWindowSize from "../hooks/useWindowSize"; // Import a custom hook to get the window size
import MarketCard from "../components/MarketCard";

export default function Home() {
  const [showForum, setShowForum] = useState(true); // State to toggle between Discussion Forum and Market Stories
  const { width } = useWindowSize(); // Get the window width using the custom hook

  return (
    <>
    { width <1060 ?(

<Layout>
      <div className="flex justify-between">
        <button
          className={`btn ${showForum ? "active" : ""}   text-primary`}
          onClick={() => setShowForum(true)}
        >
          Discussion Forum
        </button>
        <button
          className={`  btn ${!showForum ? "active" : ""}  m-2 text-primary`}
          onClick={() => setShowForum(false)}
        >
          Market Stories
        </button>
      </div>
      
      {showForum ? (
        <div>
          <h2 className="bg-primary rounded-md p-4 text-center">
            Discussion Forum
          </h2>
          {dummyData.map((forumData, index) => (
          <div key={index}>
            <ForumsCard data={forumData} />
          </div>
        ))}
        </div>
      ) : (
        <div>
          <h2 className="bg-primary rounded-md p-4 text-center">
            Market Stories
          </h2>
          {dummyDataMarket.map((marketData,index)=>{
            <div key={index} >
            <MarketCard data ={marketData} />
          </div>
          })}
        </div>
      )}
    </Layout>

      




    ):(
      <Layout>
      <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-4">
       <div className="col-span-1 md:col-span-2">
         <h2 className="bg-primary rounded-md p-4 text-center">
            Discussion Forum
       </h2>
       {dummyData.map((forumData, index) => (
        <div key={index}>
          <ForumsCard data={forumData} />
        </div>
      ))}
        </div>
        <div className="col-span-1 md:col-span-1">
          <h2 className="bg-primary rounded-md p-4 text-center">
            Market Stories
          </h2>
          {/* {dummyDataMarket.map((marketData,index)=>{
            <div key={index} >
              <MarketCard data ={marketData} />
            </div>

          })} */}
          {dummyDataMarket.map((marketData, index) => (
        <div key={index}>
          <MarketCard marketData={marketData} />
        </div>
      ))}
        </div>
      </div>
    </Layout>
    )}
  
        
    </>

  );
}


// import React, { useState } from "react";
// import ForumsCard from "../components/ForumsCard";
// import Layout from "../components/Layout";
// import dummyData from "../data/discussionForum";

// export default function Home() {
//   // const [showForum, setShowForum] = useState(true); // State to toggle between Discussion Forum and Market Stories

//   return (
//     <Layout>
//       <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="col-span-1 md:col-span-2">
//           <h2 className="bg-primary rounded-md p-4 text-center">
//             Discussion Forum
//           </h2>
//           { 
//           dummyData.map((forumData,index)=>{
//             <div key= {index}>
//               <ForumsCard data={forumData} />  
//             </div>
//           })
//           }
//         </div>
//         <div className="col-span-1 md:col-span-1">
//           <h2 className="bg-primary rounded-md p-4 text-center">
//             Market Stories
//           </h2>
//           {/* Add your Market Stories component here */}
//         </div>
//       </div>
//     </Layout>
//   );
// }

// 