export default function Footer() {
  return (
    <footer>
      <div className="py-4 md:max-w-2xl md:mx-auto grid gap-4 grid-cols-4 place-items-center">
        <img
          className="h-12 md:h-12 object-cover"
          src="./images/LambangBintan.png"
          alt=""
        />
        <img
          className="h-10 md:h-10 object-cover"
          src="./images/bintan_bangkit.png"
          alt=""
        />
        <img
          className="h-9 md:h-10  object-cover"
          src="./images/Logo_BerAKHLAK.png"
          alt=""
        />
        <img
          className="h-8 md:h-8 object-cover"
          src="./images/BanggaMelayani.png"
          alt=""
        />
      </div>
    </footer>
  );
}
