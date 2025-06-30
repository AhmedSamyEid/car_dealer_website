import { FaFacebookF, FaTwitter, FaInstagram, FaApple, FaGooglePlay } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#0C0F1F] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-6 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Our Brands</h3>
          <ul className="space-y-2">
            <li>Audi</li>
            <li>BMW</li>
            <li>Ford</li>
            <li>Toyota</li>
            <li>Volkswagen</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Vehicle Type</h3>
          <ul className="space-y-2">
            <li>Sedan</li>
            <li>SUV</li>
            <li>Truck</li>
            <li>Coupe</li>
            <li>Convertible</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h3 className="font-bold mb-4">Our Mobile App</h3>
          <div className="flex gap-4 mb-4">
            <button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2">
              <FaApple /> App Store
            </button>
            <button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2">
              <FaGooglePlay /> Play Store
            </button>
          </div>
          <div className="flex gap-4">
            <FaFacebookF className="text-xl cursor-pointer hover:text-blue-400" />
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-400" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-400" />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">
        © 2025 boxcars.com - All rights reserved | Terms & Conditions | Privacy Policy
      </div>
    </footer>
  );
}
