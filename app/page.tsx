import Head from "./components/header";
import Inp from "./components/userinput";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center h-[100vh] w-[100vw] ">
      <div className="flex flex-row justify-start items-center py-5 px-3 bg-primary w-full h-[13%] rounded-b-2xl mb-10 shadow-gray-500 shadow-md">
        <Head />
      </div>
      <div className="flex flex-col justify-start items-center h-[60%] w-[90%] rounded-2xl bg-[url('https://live.staticflickr.com/65535/50062076968_b1a2637828_b.jpg')] bg-cover bg-center py-5 shadow-gray-500 shadow-lg">
        <h1 className="font-semibold text-2xl text-accent-content px-6 py-3 bg-accent rounded-2xl shadow-gray-700 shadow-md">
          Let us help you put a roof over your head!
        </h1>
        <div className="h-[80%] w-[80%] flex flex-col items-center justify-center">
          <Inp />
        </div>
      </div>
    </div>
  );
}
