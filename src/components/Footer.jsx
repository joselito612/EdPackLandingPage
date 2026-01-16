import ContactButton from "./ContactButton";
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer(){
    return(
        
        <div className="gap-2 bg-gray-900 shadow-md border-b border-gray-700 p-20 w-full min-h-screen" id='contacts'>

            
                <h2 className="text-xl font-bold text-white text-center  pb-8">Encuentranos En : </h2>
            
            
            <div className="flex flex-wrap justify-center gap-3">
                <ContactButton color="green" href="https://www.whatsapp.com/" size="medium" ><FaWhatsapp size={20}/>WhatsApp</ContactButton>
                <ContactButton color="blue" href="https://www.facebook.com/" size="medium"><FaFacebook size={20} />Facebook</ContactButton>
                <ContactButton color="brown" href="https://www.instagram.com/" size="medium"><FaInstagram size={20} />Instagram</ContactButton>
                <ContactButton color="black" href="https://www.tiktok.com" size="medium"><FaTiktok size={20} />TikTok</ContactButton>
            </div>

            <p className="text-center text-sm text-gray-400 mt-8">
                © 2026 EdPack. All rights reserved.
            </p>

        </div>
    );
}