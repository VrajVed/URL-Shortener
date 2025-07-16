import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
   <main className="bg-purple-100">
    <section className="grid grid-cols-2 h-[50vh]">
      <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL Shortener in the market.
          </p>
          <p className="px-36 text-center">
            We are the most straightforward URL Shortener in the world.
            Most Url shorteners track you, ask you to give your details.
            We understand your needs and thus provided a one stop solution.
          </p>
          <div className='flex gap-3 justify-start'>
            <Link href={"/shorten"}>
              <button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font text-white'>
                Try Now
              </button>
            </Link>
            <Link href={"/github"}>
              <button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font text-white'>
                GitHub
              </button>
            </Link>
          </div>
      </div> 
      <div className="flex justify-start relative">
        <Image className="mix-blend-darken" src={"/vector.jpg"} fill={true} alt="Vector" />
      </div>
    </section>
   </main>
  );
}
