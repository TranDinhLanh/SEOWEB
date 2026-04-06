import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div className="flex flex-col gap-4">
          <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()}. Mọi quyền được bảo lưu.
          </p>
          <div className="text-sm text-n-4">
            <p>📞 Gọi: <a href="tel:0374222861" className="text-n-1 hover:text-n-2">0374 222 861</a></p>
            <p>💬 Zalo: <a href="https://zalo.me/0374222861" className="text-n-1 hover:text-n-2">zalo.me/0374222861</a></p>
            <p>📧 Email: <a href="mailto:mrproe3@gmail.com" className="text-n-1 hover:text-n-2">mrproe3@gmail.com</a></p>
          </div>
        </div>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
