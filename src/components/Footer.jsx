// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
// import logo from '../assets/Images/Mr-Logo1.png';
// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-rose-600 to-amber-500 text-white relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -right-32 w-80 h-80 bg-amber-200 rounded-full blur-3xl"></div>
//       </div>

//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id='contact'>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* Brand Column */}
//           <div className="space-y-4">
//             <div className='flex gap-2 items-center'>
//               <img src={logo} alt="Logo" className='w-12 h-12 lg:w-20 lg:h-20 rounded-full' />
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
//                 Mr Egg
//               </h1>
//             </div>
//             <div className="space-y-3">
//               <div className="flex items-start gap-3">
//                 <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
//                 <p className="text-sm leading-relaxed">
//                   Hospet - 583201<br />
//                   Karnataka, India
//                 </p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Mail className="w-5 h-5" />
//                 <a href="mailto:freshbitezone@gmail.com" className="hover:underline">
//                   freshbitezone24@gmail.com
//                 </a>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Phone className="w-5 h-5" />
//                 <a href="tel:9380609674" className="hover:underline">
//                   91+ 9380609674
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div className="space-y-4 mt-6">
//             <h4 className="text-lg font-semibold text-amber-100">Navigation</h4>
//             <nav className="space-y-2">
//               {['Home', 'Menu', 'About', 'Contact'].map((item) => (
//                 <Link
//                   key={item}
//                   to={`/${item.toLowerCase()}`}
//                   className="block text-sm hover:text-amber-100 transition-colors"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Policies */}
//           <div className="space-y-4 mt-6">
//             <h4 className="text-lg font-semibold text-amber-100">Policies</h4>
//             <nav className="space-y-2">
//               {/* {['Privacy Policy', 'Cookie Policy', 'Terms & Conditions', 'Refund Policy'].map((item) => (
//                 <Link
//                   key={item}
//                   to={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
//                   className="block text-sm hover:text-amber-100 transition-colors"
//                 >
//                   {item}
//                 </Link>
//               ))} */}
//               {/* <Link to="/privacy-policy" className="block text-sm hover:text-amber-100 transition-colors"> */}
//                 <a href="/privacy-policy" className="block text-sm hover:text-amber-100 transition-colors">
//                 Privacy Policy
//                 </a>
//               {/* </Link> */}
//               <Link to="/terms-&-conditions" className="block text-sm hover:text-amber-100 transition-colors">
//                 Terms & Conditions
//               </Link>
//             </nav>
//           </div>

//           {/* Social Links */}
//           <div className="space-y-4 mt-6">
//             <h4 className="text-lg font-semibold text-amber-100">Connect With Us</h4>
//             <div className="flex gap-4">
//               {[
//                 { icon: Instagram, link: '#' },
//                 { icon: Facebook, link: '#' },
//                 { icon: Youtube, link: '#' },
//                 { icon: MessageCircle, link: '#' }
//               ].map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.link}
//                   className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="mt-12 pt-8 border-t border-white/20 text-center">
//           <p className="text-sm text-amber-100">
//             © {new Date().getFullYear()} Mr Egg. All rights reserved.<br />
//             <span className="opacity-80">Crafted with ❤️ in Hospet</span>
//           </p>
//         </div>
//       </section>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import logo from '../assets/Images/Mr-Logo1.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-rose-600 to-amber-500 text-white relative overflow-hidden shadow-inner">
      {/* Decorative background blur */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-32 w-80 h-80 bg-amber-200 rounded-full blur-3xl"></div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 relative z-10" id='contact'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Contact */}
          <div className="space-y-6">
            <div className='flex gap-4 items-center'>
              <img src={logo} alt="Logo" className='w-16 h-16 rounded-full border-2 border-white' />
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                Mr Egg
              </h1>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>
                  Hospet - 583201<br />
                  Karnataka, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:freshbitezone24@gmail.com" className="hover:underline">
                  freshbitezone24@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:9380609674" className="hover:underline">
                  +91 9380609674
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          {/* Navigation Links */}
          <div className="space-y-4 mt-6">
            <h4 className="text-lg font-semibold text-amber-100">Navigation</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-sm hover:text-amber-100 transition-colors hover:underline">Home</a>
             <Link to='/menu' className="block hover:text-white hover:underline" >
             Menu
             </Link>
              <a href="#about" className="block text-sm hover:text-amber-100 transition-colors hover:underline">About</a>
              <a href="#contact" className="block text-sm hover:text-amber-100 transition-colors hover:underline">Contact</a>
            </nav>
          </div>


          {/* Policies */}
          <div className="space-y-4 mt-6">
            <h4 className="text-lg font-semibold text-amber-100">Policies</h4>
            <nav className="space-y-2 text-sm">
              <Link to="/privacy-policy" className="block hover:text-white hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms-&-conditions" className="block hover:text-white hover:underline">
                Terms & Conditions
              </Link>
              <Link to="/refund-policy" className="block hover:text-white hover:underline">
                Refund Policy
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4 mt-6">
            <h4 className="text-lg font-semibold text-amber-100">Connect With Us</h4>
            <div className="flex gap-4">
              {/*  { icon: Youtube, link: '#' }, */}
              {[{ icon: Instagram, link: 'https://www.instagram.com/mr_egg_hospet?igsh=aXl1a2VzN29zcW42' }, { icon: Facebook,  link: 'https://www.facebook.com/profile.php?id=61576804783048' }, { icon: MessageCircle, link: 'https://wa.me/919483041799' }].map((social, i) => (
                <a key={i} target='blank' href={social.link} className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-amber-100">
            © {new Date().getFullYear()} Mr Egg. All rights reserved.<br />
            <span className="opacity-80">Crafted with ❤️ in Hospet</span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;