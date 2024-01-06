import { footerLogo } from "../assets/images/index";
import { copyrightSign } from "../assets/icons/index";
import { socialMedia, footerLinks } from "../assets/constant";
import FooterCol from "./FooterCol";

export default function Footer() {
  return (
    <div className="bg-black text-white mt-16 pt-16 pb-10">
      <div className="container mx-auto">
        <div className="flex gap-9 justify-between max-lg:flex-wrap max-lg:justify-center max-md:text-center">
          <div>
            <a href="#">
              {" "}
              <img src={footerLogo} alt="" height={46} width={150} />
            </a>
            <p className="text-white text-opacity-75 max-w-sm text-lg mt-8">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex gap-6 mt-8">
              {socialMedia.map((e) => (
                <a key={e.src} target="_blank" href={e.link} rel="noreferrer">
                  <div className="bg-white transition-all hover:bg-orange-600 rounded-full w-fit p-3">
                    <img src={e.src} alt={e.alt} />
                  </div>
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((e) => (
            <FooterCol key={e.title} title={e.title} links={e.links} />
          ))}
        </div>
        <div className="flex justify-between mt-24 cursor-pointer">
          <p className="flex gap-2 text-lg">
            <img src={copyrightSign} alt="" />
            Copyright. All rights reserved.
          </p>
          <p className="flex gap-2 text-lg">Terms & Conditions.</p>
        </div>
      </div>
    </div>
  );
}
