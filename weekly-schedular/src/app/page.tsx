import Link from "next/link";
import Image from 'next/image';
import homePic from "./../../public/home.jpg"
export default function Home() {
  return <>
    <div className="relative w-full h-screen">
    <Image
      src={homePic}
      alt="cover pic"
      layout="fill" // Makes the image fill the container
      objectFit="cover" // Crops the image to cover the container
      priority // Ensures the image is loaded eagerly
      />
    <div className="flex flex-col absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="font-bold text-center text-7xl text-white">PlanPro Weekly Schedular</h1>
        <h2 className="text-center font-bold-100 text-4xl text-white">Redefining Weekly Productivity</h2>
      <Link
            href="/roles"
            >
            <div className="flex justify-center">
              <button type="button" className="my-4 border text-white my-8 bg-gradient-to-br from-gray-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-bold text-center me-2 mb-2 transition-transform transform hover:scale-125 smooth">Get Started</button>
            </div>
            </Link>
    </div>
    </div>
</>
}