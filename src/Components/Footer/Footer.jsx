

const Footer = () => {
    return (
      <footer className="footer lg:h-[350px] h-full text-white bg-gray-700 mt-10 p-10 ">
      <aside>

        <p className="text-2xl"><span className="text-4xl">JR Residential.</span><br/>Providing reliable tech since 2024</p>
        <div className="flex gap-4">
       <img className="w-40 h-20 object-cover rounded-xl" src="https://i.ibb.co/rpTRsBY/imresizer-1712946370740.jpg" alt="" />
       <img className="w-40 h-20 object-cover rounded-xl" src="https://i.ibb.co/p3tpkFG/pexels-photo-7020614.webp" alt="" />
       </div>
       <div className="flex gap-4">
       <img className="w-40 h-20 object-cover rounded-xl" src="https://i.ibb.co/6R3mqyS/imresizer-1712945172703.jpg" alt="" />
       <img className="w-40 h-20 object-cover rounded-xl" src="https://i.ibb.co/MCvRLPB/pexels-photo-4159683.jpg" alt="" />
       </div>
      </aside> 
      <nav className="text-xl text-center">
        <h6 className="footer-title ">Services</h6> 
        <a className="link link-hover">Single-family homes</a>
        <a className="link link-hover">townhouses</a>
        <a className="link link-hover">apartments</a>
        <a className="link link-hover">student Housing</a>
        <a className="link link-hover">senior living communities</a>
        <a className="link link-hover">vacation rentals</a>
        <p className="font-bold lg:flex hidden">Copyright © 2024 - All right reserved</p>
      </nav> 
      <nav className="text-xl text-center">
        <h6 className="footer-title">Company</h6> 
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Mobile: 1245101</a>
        <a className="link link-hover">Email: mdjuyelrana.com.bd1@gmail.com</a>
      </nav> 
      <nav className="text-xl text-center">
        <h6 className="footer-title ">Legal</h6> 
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
        <p className="font-bold  lg:hidden">Copyright © 2024 - All right reserved</p>
      </nav>
    </footer>
    );
};

export default Footer;