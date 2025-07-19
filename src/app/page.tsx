 'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDiscord, FaTelegramPlane, FaWallet, FaListAlt, FaExchangeAlt, FaBrush, FaSpaceShuttle, FaCoins, FaBullhorn, FaPiggyBank, FaWater, FaUsers, FaStar, FaGem, FaLeaf } from 'react-icons/fa';

export default function Home() {
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* First Slide: Background with Single Cat Mascot */}
      <section className="min-h-screen relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-landing.jpeg"
            alt="Amigos Mascot Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        {/* Animated Title */}
        <motion.div
          className="relative z-20 text-center py-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-4xl sm:text-6xl md:text-8xl text-white font-vacation-postcard drop-shadow-2xl"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              WebkitTextStroke: '2px rgba(0, 0, 0, 0.2)',
              fontFamily: '"Vacation Postcard", cursive',
              fontWeight: '900',
            }}
          >
            AMIGOS
          </h1>
        </motion.div>

        {/* Fixed Social Icons on the Side */}
        <div className="fixed top-1/2 right-2 transform -translate-y-1/2 z-30 flex flex-col space-y-3 sm:space-y-4">
          <a href="https://x.com/Amigos_SOLANA" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <span className="text-black text-lg sm:text-xl">X</span>
            </motion.div>
          </a>
          <a href="https://discord.gg/t2heXgey3c" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <FaDiscord className="text-indigo-600 text-xl sm:text-2xl" />
            </motion.div>
          </a>
          <a href="https://t.me/+ijpA6QeFkDA4ZWY0" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <FaTelegramPlane className="text-blue-500 text-xl sm:text-2xl" />
            </motion.div>
          </a>
        </div>

        {/* Animated "TAKE ME DOWN" Button (Exclusive to First Slide) */}
        <motion.div
          className="relative z-20 text-center pb-10 md:pb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.button
            onClick={scrollDown}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 text-black font-bold text-lg sm:text-xl md:text-2xl rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 fixed bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 sm:w-auto first-slide-only"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            TAKE ME DOWN
          </motion.button>
        </motion.div>
      </section>

      {/* Second Slide: Background with Multiple Cat Heads and Story */}
      <section className="min-h-screen relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-about.jpeg"
            alt="Multiple Amigos Cats Background"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="relative z-20 min-h-screen flex items-center justify-center">
          <motion.div
            className="bg-green-900 bg-opacity-70 p-4 sm:p-6 rounded-lg max-w-90% sm:max-w-3xl md:max-w-4xl w-full mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          >
            <div className="text-center">
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
                Once upon a time, in the wild west of the blockchain, some unlikely heroes — The Amigos — grew tired of constant rug pulls, abandoned projects, and empty promises. Crypto felt more like a desert wasteland than the promised land. So, one brave Amigo saddled up, donned his finest sombrero, and vowed to create a project where holders always ride shotgun.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed mt-4">
                In the Amigos universe, it’s all about loyalty and laughter. Holders aren’t just degens — they’re part of the family. With every NFT minted, every token staked, and every community goal reached, the Amigos ensure their loyal compadres reap the rewards.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed mt-4">
                Together, we’re building something that lasts — a fiesta on the blockchain where transparency, fairness, and fun take center stage. So join the adventure, because with the Amigos, the community always comes first… and the party never ends!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Third Slide: How to Buy */}
      <section className="min-h-screen relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-about.jpeg"
            alt="Multiple Amigos Cats Background"
            layout="fill"
            objectFit="contain"
            quality={100}
          />
        </div>
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-start pt-8 sm:pt-16">
          {/* Animated "HOW TO BUY" Box */}
          <motion.div
            className="bg-green-700 bg-opacity-80 p-3 sm:p-4 rounded-lg w-90% sm:w-3/4 max-w-2xl mx-auto mb-4 sm:mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold text-center">
              HOW TO BUY
            </h2>
          </motion.div>

          {/* Three Boxes for How to Buy Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 w-90% max-w-5xl mx-auto px-2 sm:px-4">
            {/* Create Wallet Box */}
            <motion.div
              className="bg-green-800 bg-opacity-70 p-3 sm:p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaWallet className="text-yellow-300 text-2xl sm:text-4xl mb-2" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">CREATE WALLET</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  Download and install Phantom wallet, either from AppStore on your phone or the browser extension at your desktop.
                </p>
              </div>
            </motion.div>

            {/* Get WL Box */}
            <motion.div
              className="bg-green-800 bg-opacity-70 p-3 sm:p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.2 }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                >
                  <FaListAlt className="text-yellow-300 text-2xl sm:text-4xl mb-2" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">GET WL</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  All WL will get the NFT airdropped. IF YOU SELL = NO TOKEN AIRDROP, or you can buy the NFT from Magic Eden before the snapshot.
                </p>
              </div>
            </motion.div>

            {/* Swap Solana to Amigos Box */}
            <motion.div
              className="bg-green-800 bg-opacity-70 p-3 sm:p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaExchangeAlt className="text-yellow-300 text-2xl sm:text-4xl mb-2" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">SWAP SOLANA TO AMIGOS</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  When the Amigos token is live, go to DEXSCREENER and paste the Amigos contract address which will be posted on the website to Amigos and swap your Solana.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fourth Slide: Roadmap */}
      <section className="min-h-screen relative bg-gradient-to-b from-green-900 via-white to-black">
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-start pt-8 sm:pt-16">
          {/* Animated "Roadmap" Title */}
          <motion.div
            className="bg-green-700 bg-opacity-80 p-3 sm:p-4 rounded-lg w-90% sm:w-3/4 max-w-2xl mx-auto mb-4 sm:mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold text-center">
              ROADMAP
            </h2>
          </motion.div>

          {/* Four Boxes for Roadmap Phases */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 w-90% max-w-5xl mx-auto px-2 sm:px-4">
            {/* Phase 1 Box */}
            <motion.div
              className="bg-green-800 bg-opacity-70 p-3 sm:p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaBrush className="text-white text-2xl sm:text-4xl mb-2" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Phase 1</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  Develop the Amigo NFT collection and project branding. Establish smart contracts for staking, burning, and airdrops. Engage the community through social media and sneak peeks.
                </p>
              </div>
            </motion.div>

            {/* Phase 2 Box */}
            <motion.div
              className="bg-green-800 bg-opacity-70 p-3 sm:p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaSpaceShuttle className="text-white text-2xl sm:text-4xl mb-2" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Phase 2</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  Launch the free mint of Amigo NFTs. Fund the liquidity pool through royalties. Distribute tokens via a two-phase airdrop to NFT holders. Open the short-term staking program with exclusive bonuses for early stakers and NFT holders.
                </p>
              </div>
            </motion.div>

            {/* Phase 3 Box */}
            <motion.div
              className="bg-green-800 bg-opacity-70 p-3 sm:p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col items-center">
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Phase 3</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  Introduce long-term staking programs and new utilities for token holders. Use treasury reserves for partnerships, growth, and ecosystem innovation. List the token on exchanges and expand the Amigos community.
                </p>
              </div>
            </motion.div>

            {/* Phase 4 Box */}
            <motion.div
              className="bg-green-800 bg-opacity-70 p-3 sm:p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex flex-col items-center">
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Phase 4</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  Something extraordinary is brewing on the blockchain, reserved for the most loyal Amigos. Only true holders will unlock the next evolution of our ecosystem...
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fifth Slide: Tokenomics */}
      <section className="min-h-screen relative bg-black">
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-start pt-8 sm:pt-16">
          {/* Animated "TOKENOMICS" Title */}
          <motion.div
            className="bg-green-700 bg-opacity-80 p-3 sm:p-4 rounded-lg w-90% sm:w-3/4 max-w-2xl mx-auto mb-4 sm:mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold text-center">
              TOKENOMICS
            </h2>
          </motion.div>

          {/* Six Boxes for Tokenomics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 w-90% max-w-5xl mx-auto px-2 sm:px-4">
            {/* Airdrop Box */}
            <motion.div
              className="bg-green-600 bg-opacity-80 p-3 sm:p-5 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Airdrop</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  Half of the total supply goes straight to the community. Tokens will be airdropped in two phases to reward NFT holders and ensure long-term engagement.
                </p>
              </div>
            </motion.div>

            {/* Staking Box */}
            <motion.div
              className="bg-green-600 bg-opacity-80 p-3 sm:p-5 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaCoins className="text-white text-2xl sm:text-4xl mb-2" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Staking</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  This is all about rewarding true holders. Stake your tokens and earn rewards proportionally. Early stakers and NFT holders get extra rewards while it’s easy to commit early.
                </p>
              </div>
            </motion.div>

            {/* Marketing Box */}
            <motion.div
              className="bg-green-600 bg-opacity-80 p-3 sm:p-5 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaBullhorn className="text-white text-2xl sm:text-4xl mb-2" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Marketing</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  We’re putting effort into growing the project through collaborations and campaigns to expand our reach, bringing even more value to the community.
                </p>
              </div>
            </motion.div>

            {/* Reserves Box */}
            <motion.div
              className="bg-green-600 bg-opacity-80 p-3 sm:p-5 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaPiggyBank className="text-white text-2xl sm:text-4xl mb-2" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Reserves</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  Setting aside resources for future growth. This reserve helps adapt to the program needs of our Amigos over time.
                </p>
              </div>
            </motion.div>

            {/* Liquidity Pools Box */}
            <motion.div
              className="bg-green-600 bg-opacity-80 p-3 sm:p-5 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FaWater className="text-white text-2xl sm:text-4xl mb-2" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Liquidity Pools</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  We’re starting strong by funding liquidity pools with NFT holders. This ensures a stable foundation and presence right from the beginning.
                </p>
              </div>
            </motion.div>

            {/* Team Box */}
            <motion.div
              className="bg-green-600 bg-opacity-80 p-3 sm:p-5 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaUsers className="text-white text-2xl sm:text-4xl mb-2" />
                </motion.div>
                <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Team</h3>
                <p className="text-xs sm:text-sm md:text-base text-white text-center">
                  10% Allocated for Team
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Icons */}
          <motion.div
            className="absolute top-1/4 left-5 sm:left-10 z-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <FaStar className="text-green-400 text-xl sm:text-4xl" />
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-5 sm:right-10 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.5, y: 20 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            <FaGem className="text-green-300 text-xl sm:text-4xl" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 left-10 sm:left-20 z-10"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.5, rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaLeaf className="text-green-500 text-xl sm:text-4xl" />
          </motion.div>
        </div>
      </section>

      {/* Sixth Slide: Staking Page */}
      <section className="min-h-screen relative">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-yellow-200 via-green-300 to-blue-200 animate-gradient-xy">
          {/* Animated gradient background */}
        </div>
        <style>
          {`
            @keyframes gradient-xy {
              0% { background-position: 0% 0%; }
              50% { background-position: 100% 100%; }
              100% { background-position: 0% 0%; }
            }
            .animate-gradient-xy {
              background-size: 200% 200%;
              animation: gradient-xy 10s ease infinite;
            }
          `}
        </style>
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center pt-8 sm:pt-16">
          {/* Animated Staking Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-8 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: 'spring', stiffness: 120 }}
          >
            Amigos Staking Platform
          </motion.h2>

          {/* Staking Panel */}
          <motion.div
            className="w-90% sm:w-2/3 md:w-500px p-4 sm:p-6 bg-white bg-opacity-90 rounded-xl shadow-2xl border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Wallet Balance */}
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg text-gray-700">Wallet Balance: 1000 AMG</p>
            </div>

            {/* Staking Balance */}
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg text-gray-700">Staked Balance: 500 AMG</p>
            </div>

            {/* Staking Input */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-base sm:text-lg text-gray-800 font-semibold mb-2">Stake Amount (AMG)</label>
              <div className="flex items-center">
                <input
                  type="number"
                  className="w-full p-2 sm:p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter amount"
                />
                <button className="px-2 sm:px-4 py-2 sm:py-2 bg-gray-300 text-gray-800 rounded-r-lg hover:bg-gray-400">Max</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <motion.button
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-semibold"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                Stake Tokens
              </motion.button>
              <motion.button
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-semibold"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                Unstake Tokens
              </motion.button>
            </div>

            {/* NFT Staking Button */}
            <motion.button
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 font-semibold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              Stake NFTs (Dummy)
            </motion.button>

            {/* Reward Display */}
            <div className="mb-4 sm:mb-6">
              <p className="text-base sm:text-lg text-gray-700 font-semibold">Total Rewards: 25.50 AMG</p>
              <p className="text-sm text-gray-500">Last Claimed: 07/17/2025</p>
            </div>
          </motion.div>

          {/* Connect Wallet Button */}
          <motion.button
            className="mt-4 sm:mt-8 px-6 sm:px-10 py-2 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center font-semibold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaWallet className="mr-2 text-base sm:text-lg" /> Connect Wallet
          </motion.button>
        </div>
      </section>

      {/* Seventh Slide: Join the Amigos */}
      <section className="min-h-screen relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/amigos-landing.jpeg"
            alt="Amigos Mascot Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative z-20 min-h-screen flex flex-col items-center justify-center pt-8 sm:pt-16">
          {/* Animated Title */}
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-frijole drop-shadow-2xl mb-4 sm:mb-6"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              WebkitTextStroke: '1px rgba(0, 0, 0, 0.1)',
              fontFamily: 'Frijole, cursive',
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: 'spring', stiffness: 100 }}
          >
            JOIN THE AMIGOS
          </motion.h2>

          {/* Disclaimer Text in Black Box */}
          <motion.div
            className="bg-black p-4 sm:p-6 rounded-lg max-w-90% sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center leading-relaxed drop-shadow-md">
              AMIGOS IS A MEME TOKEN WITH NO INTRINSIC VALUE. THIS IS JUST FOR FUN AND NOT FINANCIAL ADVICE. JOIN THE FIESTA AT YOUR OWN RISK AND DO NOT SPEND WHAT YOU CANNOT AFFORD TO LOSE
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center leading-relaxed drop-shadow-md mt-4">
              Earn rewards by staking and holding!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}