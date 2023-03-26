import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";
import Dashboard from "./dashboard";

const Home: NextPage = () => {
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);
  const router = useRouter();

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Please Install Metamask");
        return;
      }
      const accounts:any = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setIsWalletConnected(true);
      if(accounts){
        localStorage.setItem("walletAddress", accounts[0]);
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Can't Connect to Wallet");
    }
  };

  return (
    <div>
      <Head>
        <title>DeSocials</title>
      </Head>
      <div className="relative font-body overflow-hidden ">
        {isWalletConnected ? (
          <Dashboard />
        ) : (
          <section className="max-w-[1440px] my-0 h-screen mx-auto flex flex-col items-center justify-center gap-3 md:order-second md:grid-cols-1 ">
            <div className="flex items-center justify-center flex-col p-1 md:items-center md:justify-center sm:p-2 md:h-screen md:p-8 motion">
              <h1 className="font-body text-6xl md:text-5xl md:text-center font-bold my-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-800 leading-[120px] md:leading-normal sm:text-[30px] ">
                DeSocials
              </h1>
              <p className="text-[#979797] text-[20px] md:text-center md:text-base my-1">
                DeSocials is Decentralize Social Media App, the Social Media You
                Deserve.
              </p>
              <button
                className="px-[25px] py-[15px] bg-[#1E50FF] outline-none border-none  rounded-3xl font-body cursor-pointer transition duration-250 ease-in-out hover:scale-125 hover:drop-shadow-xl hover:shadow-sky-600 my-[15px] w-fit"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;
