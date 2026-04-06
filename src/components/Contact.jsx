import Section from "./Section";
import Heading from "./Heading";

const Contact = () => {
  const zaloPhone = "0374222861";
  const zaloUrl = `https://zalo.me/${zaloPhone}`;
  const zaloQr = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(
    zaloUrl
  )}`;

  return (
    <Section className="overflow-hidden" id="contact">
      <div className="container">
        <Heading
          tag="Hãy bắt đầu dự án của bạn"
          title="Quét QR để liên hệ Zalo ngay"
        />

        <div className="relative z-1 max-w-[35rem] mx-auto p-8 border border-n-6 rounded-3xl bg-n-8 text-center">
          <p className="body-2 text-n-3 mb-6">
            Bấm "Liên hệ ngay" và quét mã QR bên dưới để chat trực tiếp qua Zalo.
          </p>

          <div className="mx-auto w-fit rounded-2xl p-3 bg-n-7 border border-n-6">
            <img
              src={zaloQr}
              alt="QR Zalo 0374222861"
              width={260}
              height={260}
              className="rounded-xl"
            />
          </div>

          <p className="mt-5 text-n-2 font-semibold">Zalo: 0374 222 861</p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href={zaloUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 bg-conic-gradient rounded-lg text-n-8 font-semibold hover:opacity-90 transition-opacity"
            >
              Mở Zalo
            </a>
            <a
              href="tel:0374222861"
              className="inline-block px-6 py-3 bg-n-7 rounded-lg text-n-1 font-semibold hover:bg-n-6 transition-colors"
            >
              Gọi ngay
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
