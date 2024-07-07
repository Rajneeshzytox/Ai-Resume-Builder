const Footer = () => {
  return (
    <footer>
      <section className="footer bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover" href="tel:8178545282">
            <i className="fa-solid fa-phone fa-shake mr-2"></i> 8178545282
          </a>
          <a className="link link-hover" href="mailto:kumarrajneesh.work@gmail.com">
          <i className="fa-solid fa-envelope fa-bounce mr-2"></i> kumarrajneesh.work@gmail.com
          </a>
          <a className="link link-hover" href="https://rajneeshzytox.github.io/portfolio">
          <i className="fa-solid fa-globe fa-spin mr-2 "></i> Portfolio
          </a>
          
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h6 className="footer-title">Profile</h6>
          <a className="link link-hover">My Profile</a>
          <a className="link link-hover">My Resume</a>
          <a className="link link-hover">Templates</a>
        </nav>
      </section>
      <section className="footer bg-base-300 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <div className="logo w-10 h-10 aspect-square rounded-full hover:bg-slate-600 flex items-center justify-center">
            <i className="fa-solid fa-file text-3xl"></i>
          </div>
          <p>
            Ai Resume Builder
            <br />
            Get ahead of 90% job seekers with us <i className="fa-solid fa-heart fa-flip ml-1" style={{color: "#f04080"}}></i>
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            
            <a href="https://linkedin.com/in/rajneeshzytox">
                <i className="fa-brands fa-linkedin-in text-3xl"></i>
            </a>
            <a href="https://github.com/rajneeshzytox">
                <i className="fa-brands fa-github text-3xl"></i>
            </a>
            <a href="https://x.com/rajneeshzytox">
                <i className="fa-brands fa-x-twitter text-3xl"></i>
            </a>
            <a href="https://instagram.com/rajneeshzytox">
                <i className="fa-brands fa-instagram text-3xl"></i>
            </a>

          </div>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
