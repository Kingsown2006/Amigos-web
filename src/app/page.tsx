 'use client'
import { Frijole } from 'next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const frijole = Frijole({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-frijole',
});

const SocialIcons = () => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20"
  >
    <a href="https://t.me/+ijpA6QeFkDA4ZWY0" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="white">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.023c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
      </svg>
    </a>
    <a href="https://discord.gg/t2heXgey3c" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="white">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    </a>
    <a href="https://x.com/Amigos_SOLANA" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="white">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    </a>
  </motion.div>
);

const SectionSpacer = () => (
  <div className="h-20 md:h-32 w-full"></div>
);

export default function Home() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const buySectionRef = useRef<HTMLDivElement>(null);
  const roadmapSectionRef = useRef<HTMLDivElement>(null);
  const tokenomicsSectionRef = useRef<HTMLDivElement>(null);
  const stakingSectionRef = useRef<HTMLDivElement>(null);

  const [stakeAmount, setStakeAmount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isStaked, setIsStaked] = useState(false);
  const [rewards, setRewards] = useState(0);

  const scrollToAbout = () => aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToBuy = () => buySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToRoadmap = () => roadmapSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToTokenomics = () => tokenomicsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToStaking = () => stakingSectionRef.current?.scrollIntoView({ behavior: 'smooth' });

  const connectWallet = () => {
    setIsConnected(true);
    // Simulate some existing rewards
    setRewards(125);
  };

  const handleStake = () => {
    if (!stakeAmount) return;
    setIsStaked(true);
    // Simulate rewards accumulation
    const interval = setInterval(() => {
      setRewards(prev => prev + 5);
    }, 3000);
    return () => clearInterval(interval);
  };

  const handleUnstake = () => {
    setIsStaked(false);
    setStakeAmount('');
  };

  const claimRewards = () => {
    alert(`Claimed ${rewards} AMIGOS rewards!`);
    setRewards(0);
  };

  return (
    <main className="relative w-full overflow-hidden">
      {/* Landing Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-landing.jpeg"
            alt="Amigos mascot background"
            fill
            className="object-cover object-center"
            quality={100}
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col items-center min-h-screen px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${frijole.className} text-6xl md:text-8xl lg:text-9xl font-bold text-white mt-12 md:mt-20`}
            style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}
          >
            AMIGOS
          </motion.h1>

          <div className="flex-grow"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-12 md:mb-20"
          >
            <button 
              onClick={scrollToAbout}
              className={`${frijole.className} px-8 py-3 bg-white text-black rounded-full text-xl md:text-2xl hover:bg-opacity-90 transition-all`}
            >
              TAKE ME DOWN
            </button>
          </motion.div>
        </div>

        <SocialIcons />
      </section>

      <SectionSpacer />

      {/* About Section */}
      <section ref={aboutSectionRef} className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Amigos-content.jpeg"
            alt="Amigos content background"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div className="absolute inset-0 z-10 bg-[#1a3a30] bg-opacity-90 flex flex-col items-center justify-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#FFF8E1] bg-opacity-90 rounded-xl px-8 py-4 mb-8 md:mb-12 w-full max-w-2xl"
          >
            <h2 className={`${frijole.className} text-4xl md:text-5xl text-[#1a3a30] text-center`}>
              ABOUT AMIGOS
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${frijole.className} text-lg md:text-xl text-white text-left space-y-6 max-w-4xl mx-auto`}
          >
            <p>Once upon a time, in the wild west of the blockchain, some unlikely heroes — The Amigos — grew tired of constant rug pulls, abandoned projects, and empty promises. Crypto felt more like a desert wasteland than the promised land. So, one brave Amigo saddled up, donned his finest sombrero, and vowed to create a project where holders always ride shotgun.</p>
            <p>In the Amigos universe, it is all about loyalty and laughter. Holders are not just degens — they are part of the family. With every NFT minted, every token staked, and every community goal reached, the Amigos ensure their loyal compadres reap the rewards.</p>
            <p>Together, we are building something that lasts — a fiesta on the blockchain where transparency, fairness, and fun take center stage. So join the adventure, because with the Amigos, the community always comes first... and the party never ends!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12"
          >
            <button 
              onClick={scrollToBuy}
              className={`${frijole.className} px-8 py-3 bg-white text-black rounded-full text-lg md:text-xl hover:bg-opacity-90 transition-all`}
            >
              HOW TO BUY
            </button>
          </motion.div>
        </div>
      </section>

      <SectionSpacer />

      {/* How to Buy Section */}
      <section ref={buySectionRef} className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-landing.jpeg"
            alt="Amigos mascot background"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#FFF8E1] bg-opacity-80 rounded-lg px-8 py-4 mb-8 md:mb-12"
          >
            <h2 className={`${frijole.className} text-4xl md:text-5xl text-[#1a3a30]`}>
              HOW TO BUY
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a3a30] bg-opacity-90 rounded-xl p-6 text-white flex flex-col items-center"
            >
              <div className="bg-[#FFF8E1] rounded-full p-4 mb-4">
                <svg className="w-10 h-10 text-[#1a3a30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                </svg>
              </div>
              <h3 className={`${frijole.className} text-2xl md:text-3xl mb-4 text-center`}>
                CREATE WALLET:
              </h3>
              <p className={`${frijole.className} text-lg text-center`}>
                Download and install Phantom wallet, either from AppStore in your phone or the browser extension at your desktop
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#1a3a30] bg-opacity-90 rounded-xl p-6 text-white flex flex-col items-center"
            >
              <div className="bg-[#FFF8E1] rounded-full p-4 mb-4">
                <svg className="w-10 h-10 text-[#1a3a30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className={`${frijole.className} text-2xl md:text-3xl mb-4 text-center`}>
                GET WL:
              </h3>
              <p className={`${frijole.className} text-lg text-center`}>
                All WL will get the NFT airdropped<br />
                IF YOU SELL = NO TOKEN AIRDROP<br />
                OR you can buy the NFT from Magic Eden before the snapshot
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1a3a30] bg-opacity-90 rounded-xl p-6 text-white flex flex-col items-center"
            >
              <div className="bg-[#FFF8E1] rounded-full p-4 mb-4">
                <svg className="w-10 h-10 text-[#1a3a30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M8 12h4m0 0l-3-3m3 3l-3 3"></path>
                </svg>
              </div>
              <h3 className={`${frijole.className} text-2xl md:text-3xl mb-4 text-center`}>
                SWAP SOLANA TO AMIGOS:
              </h3>
              <p className={`${frijole.className} text-lg text-center`}>
                When the Amigos token is live<br />
                go to DEXSCREENER and paste the Amigos contract address which will be posted on the website<br />
                to Amigos and swap your Solana
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12"
          >
            <button 
              onClick={scrollToRoadmap}
              className={`${frijole.className} px-8 py-3 bg-white text-black rounded-full text-lg md:text-xl hover:bg-opacity-90 transition-all`}
            >
              VIEW ROADMAP
            </button>
          </motion.div>
        </div>
      </section>

      <SectionSpacer />

      {/* Roadmap Section */}
      <section ref={roadmapSectionRef} className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-landing.jpeg"
            alt="Amigos mascot background"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div className="absolute inset-0 z-10 bg-[#1a3a30] bg-opacity-90 flex flex-col items-center justify-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#FFF8E1] bg-opacity-90 rounded-xl px-8 py-4 mb-8 md:mb-12 w-full max-w-2xl"
          >
            <h2 className={`${frijole.className} text-4xl md:text-5xl text-[#1a3a30] text-center`}>
              ROADMAP
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>,
                title: "PHASE 1:",
                items: [
                  "Develop the Amigo NFT collection",
                  "Establish smart contracts",
                  "Community engagement"
                ]
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>,
                title: "PHASE 2:",
                items: [
                  "Launch free mint",
                  "Fund liquidity pool",
                  "Token airdrops",
                  "Staking program launch"
                ]
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>,
                title: "PHASE 3:",
                items: [
                  "Long-term staking",
                  "Treasury utilization",
                  "Exchange listings",
                  "Community expansion"
                ]
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>,
                title: "PHASE 4:",
                special: "Something extraordinary is brewing for loyal Amigos..."
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-[#FFF8E1] bg-opacity-90 rounded-xl p-6 text-[#1a3a30] flex flex-col items-center"
              >
                <div className="bg-[#1a3a30] rounded-full p-4 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {phase.icon}
                  </svg>
                </div>
                <h3 className={`${frijole.className} text-2xl md:text-3xl mb-4 text-center border-b-2 border-[#1a3a30] pb-2`}>
                  {phase.title}
                </h3>
                {phase.items ? (
                  <ul className={`${frijole.className} text-lg space-y-2 list-disc pl-5`}>
                    {phase.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className={`${frijole.className} text-lg text-center`}>
                    {phase.special}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12"
          >
            <button 
              onClick={scrollToTokenomics}
              className={`${frijole.className} px-8 py-3 bg-white text-black rounded-full text-lg md:text-xl hover:bg-opacity-90 transition-all`}
            >
              TOKENOMICS
            </button>
          </motion.div>
        </div>
      </section>

      <SectionSpacer />

      {/* Tokenomics Section */}
      <section ref={tokenomicsSectionRef} className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-landing.jpeg"
            alt="Amigos mascot background"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div className="absolute inset-0 z-10 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#FFF8E1] bg-opacity-90 rounded-xl px-8 py-4 mb-8 md:mb-12"
          >
            <h2 className={`${frijole.className} text-4xl md:text-5xl text-[#1a3a30] text-center`}>
              TOKENOMICS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full px-4">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>,
                title: "AIRDROP",
                content: "50% of supply to community in two phases"
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>,
                title: "STAKING",
                content: "Rewards for true holders with early bonuses"
              },
              {
                icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></>,
                title: "MARKETING",
                content: "Collaborations and campaigns for growth"
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>,
                title: "RESERVES",
                content: "Resources for future program needs"
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>,
                title: "LIQUIDITY",
                content: "Funded pools for stable foundation"
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>,
                title: "TEAM",
                content: "10% allocation"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-80 rounded-xl p-6 text-[#1a3a30] flex flex-col items-center"
              >
                <div className="bg-[#1a3a30] rounded-full p-4 mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <h3 className={`${frijole.className} text-2xl md:text-3xl mb-3 text-center`}>
                  {item.title}
                </h3>
                <p className={`${frijole.className} text-lg text-center`}>
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12"
          >
            <button 
              onClick={scrollToStaking}
              className={`${frijole.className} px-8 py-3 bg-white text-black rounded-full text-lg md:text-xl hover:bg-opacity-90 transition-all`}
            >
              STAKING FIESTA
            </button>
          </motion.div>
        </div>
      </section>

      <SectionSpacer />

      {/* Staking Fiesta Section */}
      <section ref={stakingSectionRef} className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-landing.jpeg"
            alt="Amigos mascot background"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div className="absolute inset-0 z-10 bg-[#1a3a30] bg-opacity-90 flex flex-col items-center justify-center px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#FFF8E1] bg-opacity-90 rounded-xl px-8 py-4 mb-8 md:mb-12 w-full max-w-4xl"
          >
            <h2 className={`${frijole.className} text-4xl md:text-6xl text-[#1a3a30] text-center`}>
              STAKING FIESTA
            </h2>
          </motion.div>

          {!isConnected ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-80 rounded-xl p-8 max-w-md w-full text-center"
            >
              <h3 className={`${frijole.className} text-2xl md:text-3xl mb-6 text-[#1a3a30]`}>
                CONNECT YOUR WALLET
              </h3>
              <p className={`${frijole.className} text-lg mb-6`}>
                Join the fiesta by connecting your wallet to stake AMIGOS tokens
              </p>
              <button
                onClick={connectWallet}
                className={`${frijole.className} px-8 py-3 bg-[#1a3a30] text-white rounded-full text-lg md:text-xl hover:bg-opacity-90 transition-all`}
              >
                CONNECT WALLET
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-80 rounded-xl p-8 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`${frijole.className} text-2xl text-[#1a3a30]`}>
                  Your Stake
                </h3>
                <div className={`${frijole.className} text-xl bg-[#1a3a30] text-white px-4 py-1 rounded-full`}>
                  {isStaked ? 'ACTIVE' : 'INACTIVE'}
                </div>
              </div>

              {!isStaked ? (
                <>
                  <div className="mb-6">
                    <label className={`${frijole.className} block text-lg text-[#1a3a30] mb-2`}>
                      Amount to Stake
                    </label>
                    <input
                      type="number"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      className="w-full p-3 border-2 border-[#1a3a30] rounded-lg"
                      placeholder="Enter AMIGOS amount"
                    />
                  </div>
                  
                  <button
                    onClick={handleStake}
                    disabled={!stakeAmount}
                    className={`${frijole.className} w-full py-3 bg-[#1a3a30] text-white rounded-lg text-lg hover:bg-opacity-90 transition-all disabled:opacity-50`}
                  >
                    STAKE TOKENS
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-6 p-4 bg-[#FFF8E1] rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`${frijole.className} text-lg`}>Staked Amount:</span>
                      <span className={`${frijole.className} text-xl`}>{stakeAmount} AMIGOS</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className={`${frijole.className} text-lg`}>Rewards Earned:</span>
                      <span className={`${frijole.className} text-xl text-green-600`}>{rewards} AMIGOS</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={claimRewards}
                      disabled={rewards === 0}
                      className={`${frijole.className} flex-1 py-3 bg-yellow-500 text-[#1a3a30] rounded-lg text-lg hover:bg-opacity-90 transition-all disabled:opacity-50`}
                    >
                      CLAIM
                    </button>
                    <button
                      onClick={handleUnstake}
                      className={`${frijole.className} flex-1 py-3 bg-red-600 text-white rounded-lg text-lg hover:bg-opacity-90 transition-all`}
                    >
                      UNSTAKE
                    </button>
                  </div>
                </>
              )}

              <div className="mt-6 pt-4 border-t-2 border-[#1a3a30]">
                <h4 className={`${frijole.className} text-xl text-[#1a3a30] mb-2 text-center`}>
                  STAKING BENEFITS
                </h4>
                <ul className={`${frijole.className} text-md space-y-1 list-disc pl-5`}>
                  <li>Earn daily rewards</li>
                  <li>Higher tiers = better rewards</li>
                  <li>Early staker bonuses</li>
                  <li>Exclusive community access</li>
                </ul>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12"
          >
            <a 
              href="#"
              className={`${frijole.className} px-8 py-3 bg-white text-black rounded-full text-lg md:text-xl hover:bg-opacity-90 transition-all`}
            >
              BACK TO TOP
            </a>
          </motion.div>
        </div>
      </section>

      <SectionSpacer />

      {/* Join The Amigos Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-landing.jpeg"
            alt="Amigos mascot background"
            fill
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className={`${frijole.className} text-5xl md:text-7xl text-white mb-8`}>
              JOIN THE AMIGOS
            </h2>
            <p className={`${frijole.className} text-xl md:text-2xl text-white max-w-3xl mx-auto`}>
              AMIGOS IS A MEME TOKEN WITH NO INTRINSIC VALUE. THIS IS JUST FOR FUN AND NOT FINANCIAL ADVICE. 
              JOIN THE FIESTA AT YOUR OWN RISK AND DO NOT SPEND WHAT YOU CANNOT AFFORD TO LOSE.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <button className={`${frijole.className} px-8 py-3 bg-white text-black rounded-full text-lg md:text-xl hover:bg-opacity-90 transition-all`}>
              BUY NOW
            </button>
            <a href="https://discord.gg/t2heXgey3c" target="_blank" rel="noopener noreferrer" className={`${frijole.className} px-8 py-3 bg-[#1a3a30] text-white rounded-full text-lg md:text-xl hover:bg-opacity-90 transition-all text-center`}>
              JOIN DISCORD
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16 flex gap-6"
          >
            <a href="https://t.me/+ijpA6QeFkDA4ZWY0" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.023c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            </a>
            <a href="https://discord.gg/t2heXgey3c" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="white">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="https://x.com/Amigos_SOLANA" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}