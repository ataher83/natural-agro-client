// import "/src/styles.css";





document.addEventListener('DOMContentLoaded', () => {
    var counterContainer = document.querySelector(".website-counter");
    var resetButton = document.querySelector("#reset");
    var visitCount = localStorage.getItem("page_view");
  
    // Check if page_view entry is present
    if (visitCount) {
      visitCount = Number(visitCount) + 1;
      localStorage.setItem("page_view", visitCount);
    } else {
      visitCount = 1;
      localStorage.setItem("page_view", 1);
    }
    counterContainer.innerHTML = visitCount;
  
    // Adding onClick event listener
    resetButton.addEventListener("click", () => {
      visitCount = 1;
      localStorage.setItem("page_view", 1);
      counterContainer.innerHTML = visitCount;
    });
  });
  


// var counterContainer = document.querySelector(".website-counter");
// var resetButton = document.querySelector("#reset");
// var visitCount = localStorage.getItem("page_view");

// // Check if page_view entry is present
// if (visitCount) {
//   visitCount = Number(visitCount) + 1;
//   localStorage.setItem("page_view", visitCount);
// } else {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
// }
// counterContainer.innerHTML = visitCount;

// // Adding onClick event listener
// resetButton.addEventListener("click", () => {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
//   counterContainer.innerHTML = visitCount;
// });







// import countapi from "countapi-js";
// import "/src/styles.css";

// const myNamespace = "localhost";
// const MY_KEY = "uniqueVisits";
// const counterElement = document.querySelectorAll("span");



// const getCount = async () => {
//     const result = await countapi.get(myNamespace, MY_KEY);
//     console.log(result);
//     displayCount(result.value);
//   };
  
//   const incrementCount = async () => {
//     const result = await countapi.hit(myNamespace, MY_KEY);
//     console.log(result);
//     displayCount(result.value);
//   };
  
//   const displayCount = (count) => {
//     let initialFormat = count.toString().padStart(6, "0");
//     counterElement.forEach((span, index) => {
//       span.innerHTML = initialFormat[index];
//     });
//   };
  
//   if (!localStorage.getItem("repeatVisitor")) {
//     console.log("key not created yet");
//     incrementCount();
//     localStorage.setItem("repeatVisitor", true);
//   } else {
//     console.log("existing viewer, displaying w/o incrementing");
//     getCount();
//   }



const Footer = () => {
    return (
      <div className="container mx-auto ">
        <footer className="footer p-10 bg-base-300 text-base-content">
            <aside>
                <img className="w-24" src="https://i.postimg.cc/DzMGJPTd/altlogo.png" alt="" />
                <p className="font-semibold text-green-500"><span className="text-2xl font-bold text-green-600">The Alt Products</span><br/>Find Your Alternative Prooducts</p>
            </aside> 
            <nav>
                <h6 className="footer-title text-green-600">Explore</h6> 
                <a className="link link-hover">How It Works</a>
                <a className="link link-hover">Search, Find Query</a>
                <a className="link link-hover">See Recommendation</a>
                <a className="link link-hover">Refer Friends</a>
            </nav> 
            <nav>
                <h6 className="footer-title text-green-600">Services</h6> 
                <a className="link link-hover">Consultancy</a>
                <a className="link link-hover">Researh</a>
                <a className="link link-hover">24/7 Helpline</a>
                <a className="link link-hover">Event</a>
            </nav> 
            <nav>
                <h6 className="footer-title text-green-600">Get in touch</h6> 
                <a className="link link-hover">The Alt Products</a>
                <a className="link link-hover">123 XYZ Road, Dhaka</a>
                <a className="link link-hover">Tel: 01100-000000</a>
                <a className="link link-hover">Email: hello@thealtproducts.com</a>
            </nav> 
            <nav>
                <h6 className="footer-title text-green-600">Social</h6> 
                <div className="grid grid-flow-col gap-4 text-green-600">

                {/* <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> */}

                {/* <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> */}

                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

                <a><svg fill="#2563EB" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 310 310" xml:space="preserve">
                <g id="XMLID_801_">
                    <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
                        C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                    <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
                        c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                    <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
                        c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
                        c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
                        C310,145.43,300.549,94.761,230.454,94.761z"/>
                </g>
                </svg></a>

                </div>


                <div>Website visit count:</div>
                <div class="website-counter"></div>
                <button id="reset">Reset</button>

                
                {/* <div class="message">Unique Visits to this Page</div>
                <div class="counter">
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                </div> */}

            </nav>
        </footer>
    
        <p className="text-sm font-semibold text-green-600 bg-base-300 text-center pb-5">Copyright © 2024 - All right reserved by The Alt Products</p>
        
      </div>
    );
};

export default Footer;