import { Link } from 'react-router-dom'
import './style/footer.css'

const Footer = () => {
  return (
    < >
      <div className="footer-section">
        <div className="footer-wrapper">
          <div className="footer-wrapper-upper">
            <div className="footer-wrapper-upper-s1">
                <h3>Funiro.</h3>
                <p>400 University Drive Suite 200 Coral <br /> Gables, <br />
                FL 33134 USA</p>
            </div>
            <div className="footer-wrapper-upper-s2">
                <h5 id='diff-color'>Links</h5>
                <h5><Link to ='/' style={{ textDecoration: 'none' }}> Home</Link></h5>
                <h5><Link to ='/shop' style={{ textDecoration: 'none' }}> Shop </Link></h5>
                <h5><Link to ='/about' style={{ textDecoration: 'none' }}> About </Link></h5>
                <h5><Link to ='/contact' style={{ textDecoration: 'none' }}> Contact</Link></h5>

            </div>
            <div className="footer-wrapper-upper-s3">
            <h5 id='diff-color'>Help</h5>
                <h5><Link to ='' style={{ textDecoration: 'none' }}> payment option</Link></h5>
                <h5><Link to ='' style={{ textDecoration: 'none' }}> Returns </Link></h5>
                <h5><Link to ='' style={{ textDecoration: 'none' }}> Privacy Policies </Link></h5>
                <h5><Link to ='' style={{ textDecoration: 'none' }}> Contact</Link></h5>
            </div>
            <div className="footer-wrapper-upper-s4">
              <h5 id='diff-color'>Newsletter</h5>
              <div>

              <input type="text"  placeholder='Enter your Email Address' id='diff-color'/>
                <button type="button">SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <br />
          <div className="footer-wrapper-lower">
            <div className="footer-wrapper-last">
                <p>2023 furino. All rights reverved</p>
            </div>  
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer









//Ayan
// import { Link } from 'react-router-dom'
// import './style/footer.css'

// const Footer = () => {
//   return (
//     < >
//       <div className="footer-section">
//         <div className="footer-wrapper">
//           <div className="upper">
//             <div className="s1">
//                 <h3>Funiro.</h3>
//                 <p>400 University Drive Suite 200 Coral Gables,
//                 FL 33134 USA</p>
//             </div>
//             <div className="s2">
//                 <h5>Links</h5>
//                 <h5><Link to ='' > Home</Link></h5>
//                 <h5><Link to ='' > Shop </Link></h5>
//                 <h5><Link to ='' > About </Link></h5>
//                 <h5><Link to ='' > Contact</Link></h5>

//             </div>
//             <div className="s3">
//             <h5>Help</h5>
//                 <h5><Link to ='' > payment option</Link></h5>
//                 <h5><Link to ='' > Returns </Link></h5>
//                 <h5><Link to ='' > Privacy Policies </Link></h5>
//                 <h5><Link to ='' > Contact</Link></h5>
//             </div>
//             <div className="s4">
//               <h5>Newsletter</h5>
//               <div>

//               <input type="text"  placeholder='Enter your Email Address'/>
//                 <button type="button">Subscribe</button>
//               </div>
//             </div>
//           </div>
//           <br />
//           <div className="lower">
//             <div className="last">
//                 <p>2023 furino. All rights reverved</p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Footer