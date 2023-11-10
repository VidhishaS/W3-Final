// import React from "react";
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import video from "./assets/jou.mp4";

// import "./Contact.css";
// function Contact() {
// return (
    
//     <div className="footer">
//         <div className="dd">
//         <video src={video} muted autoPlay loop type="jou.mp4"></video>
//         </div>
//         <div className="socialMedia">
//             <InstagramIcon/><TwitterIcon/><FacebookIcon/><LinkedInIcon/>
            
//         </div>
//         <p>&copy; 2023 ScribbleSymphony.com</p>
//     </div>
    
// );
// }
// export default Contact

import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import video from "./assets/jou.mp4";

import "./Contact.css";

function Contact() {
  return (
    <div className="footer">
      <div className="dd">
        <video src={video} muted autoPlay loop type="jou.mp4"></video>
      </div>
      <div className="socialMedia">
        <a href="https://www.instagram.com">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2023 ScribbleSymphony.com</p>
    </div>
  );
}

export default Contact;