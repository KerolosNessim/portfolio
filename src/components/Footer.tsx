import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black ">
      <div className="container text-white font-semibold flex items-center justify-between py-4">
        <Image src="/logo.png" alt="logo" width={75} height={75} />
        <p>
          © <span className="text-lime-400">2025</span> Kerolos Nessim
        </p>
      </div>
    </div>
  );
};

export default Footer;
