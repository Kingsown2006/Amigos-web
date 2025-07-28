'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDiscord, FaTelegramPlane, FaWallet, FaListAlt, FaExchangeAlt, FaBrush, FaSpaceShuttle, FaCoins, FaBullhorn, FaPiggyBank, FaWater, FaUsers, FaStar, FaGem, FaLeaf } from 'react-icons/fa';

export default function Home() {
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const slides = [
    // First Slide
    {
      content: (
        <div className="min-h-screen relative">
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
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 100, repeat: Infinity, repeatType: 'reverse' }}
          >
            <h1
              className="text-4xl sm:text-6xl md:text-8xl text-white font-vacation-postcard drop-shadow-2xl"
              style={{
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)',
                WebkitTextStroke: '4px rgba(0, 0, 0, 0.4)',
                fontFamily: '"Vacation Postcard", cursive',
                fontWeight: '1000',
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

          {/* Animated "TAKE ME DOWN" Button at the Bottom */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-auto z-20 text-center pb-6 sm:pb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.button
              onClick={scrollDown}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-yellow-400 text-black font-bold text-lg sm:text-xl md:text-2xl rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 block mx-auto"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              TAKE ME DOWN
            </motion.button>
          </motion.div>
        </div>
      ),
    },
    // Second Slide
    {
      content: (
        <section className="min-h-screen relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/amigos-about.jpeg"
              alt="Multiple Amigos Cats Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="relative z-20 min-h-screen flex items-center justify-center pt-2 sm:pt-4">
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
      ),
    },
    // Third Slide
    {
      content: (
        <section className="min-h-screen relative bg-green-700 pt-20 sm:pt-32">
          <div className="absolute inset-0 z-0">
            {/* Floating Icons */}
            <motion.div
              className="absolute top-10 left-10 z-10"
              animate={{ y: [0, -10, 0], rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaStar className="text-white text-2xl sm:text-4xl" />
            </motion.div>
            <motion.div
              className="absolute top-1/3 right-10 z-10"
              animate={{ y: [0, 10, 0], rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaGem className="text-white text-2xl sm:text-4xl" />
            </motion.div>
            <motion.div
              className="absolute bottom-10 left-20 z-10"
              animate={{ y: [0, -15, 0], rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaLeaf className="text-white text-2xl sm:text-4xl" />
            </motion.div>
          </div>
          <div className="relative z-20 min-h-screen flex flex-col items-center justify-start">
            {/* Animated "HOW TO BUY" Box */}
            <motion.div
              className="bg-green-900 bg-opacity-80 p-3 sm:p-4 rounded-lg w-90% sm:w-3/4 max-w-2xl mx-auto mb-4 sm:mb-8"
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
      ),
    },
    // Fourth Slide
    {
      content: (
        <section className="min-h-screen relative bg-green-700 pt-20 sm:pt-32">
          <div className="relative z-20 min-h-screen flex flex-col items-center justify-start">
            {/* Animated "Roadmap" Title */}
            <motion.div
              className="bg-green-900 bg-opacity-80 p-3 sm:p-4 rounded-lg w-90% sm:w-3/4 max-w-2xl mx-auto mb-4 sm:mb-12"
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
      ),
    },
    // Fifth Slide
    {
      content: (
        <section className="min-h-screen relative bg-green-700 pt-20 sm:pt-32">
          <div className="relative z-20 min-h-screen flex flex-col items-center justify-start">
            {/* Animated "TOKENOMICS" Title */}
            <motion.div
              className="bg-green-900 bg-opacity-80 p-3 sm:p-4 rounded-lg w-90% sm:w-3/4 max-w-2xl mx-auto mb-4 sm:mb-12"
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
                className="bg-green-800 bg-opacity-70 p-3 sm:p-5 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -15, scale: 1.05 }}
              >
                <div className="flex flex-col items-center">
                  <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Airdrop (50%)</h3>
                  <p className="text-xs sm:text-sm md:text-base text-white text-center">
                    Half of the total supply goes straight to the community. Tokens will be airdropped in two phases to reward NFT holders and ensure long-term engagement.
                  </p>
                </div>
              </motion.div>

              {/* Staking Box */}
              <motion.div
                className="bg-green-800 bg-opacity-70 p-3 sm:p-5 rounded-lg shadow-lg"
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
                  <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Staking (15%)</h3>
                  <p className="text-xs sm:text-sm md:text-base text-white text-center">
                    This is all about rewarding true holders. Stake your tokens and earn rewards proportionally. Early stakers and NFT holders get extra rewards while it’s easy to commit early.
                  </p>
                </div>
              </motion.div>

              {/* Marketing Box */}
              <motion.div
                className="bg-green-800 bg-opacity-70 p-3 sm:p-5 rounded-lg shadow-lg"
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
                  <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Marketing (5%)</h3>
                  <p className="text-xs sm:text-sm md:text-base text-white text-center">
                    We’re putting effort into growing the project through collaborations and campaigns to expand our reach, bringing even more value to the community.
                  </p>
                </div>
              </motion.div>

              {/* Reserves Box */}
              <motion.div
                className="bg-green-800 bg-opacity-70 p-3 sm:p-5 rounded-lg shadow-lg"
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
                  <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Reserves (15%)</h3>
                  <p className="text-xs sm:text-sm md:text-base text-white text-center">
                    Setting aside resources for future growth. This reserve helps adapt to the program needs of our Amigos over time.
                  </p>
                </div>
              </motion.div>

              {/* Liquidity Pools Box */}
              <motion.div
                className="bg-green-800 bg-opacity-70 p-3 sm:p-5 rounded-lg shadow-lg"
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
                  <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Liquidity Pools (5%)</h3>
                  <p className="text-xs sm:text-sm md:text-base text-white text-center">
                    We’re starting strong by funding liquidity pools with NFT holders. This ensures a stable foundation and presence right from the beginning.
                  </p>
                </div>
              </motion.div>

              {/* Team Box */}
              <motion.div
                className="bg-green-800 bg-opacity-70 p-3 sm:p-5 rounded-lg shadow-lg"
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
                  <h3 className="text-base sm:text-lg md:text-xl text-white font-semibold mb-2">Team (10%)</h3>
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
      ),
    },
    // Seventh Slide
    {
      content: (
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
          <div className="relative z-20 min-h-screen flex flex-col items-center justify-start pt-8 sm:pt-16">
            {/* Animated Title at Top */}
            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-frijole drop-shadow-2xl"
              style={{
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)',
                WebkitTextStroke: '2px rgba(0, 0, 0, 0.3)',
                fontFamily: 'Frijole, cursive',
                fontWeight: '1000',
              }}
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, type: 'spring', stiffness: 100, repeat: Infinity, repeatType: 'reverse' }}
            >
              JOIN THE AMIGOS
            </motion.h2>

            {/* Rectangular Disclaimer Box at Bottom */}
            <motion.div
              className="bg-black p-1 sm:p-2 rounded-none w-80% sm:w-1/2 h-24 sm:h-28 mx-auto absolute bottom-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-xs sm:text-sm font-bold text-white text-center leading-tight drop-shadow-md">
                AMIGOS IS A MEME TOKEN WITH NO INTRINSIC VALUE. THIS IS JUST FOR FUN AND NOT FINANCIAL ADVICE. JOIN THE FIESTA AT YOUR OWN RISK AND DO NOT SPEND WHAT YOU CANNOT AFFORD TO LOSE
              </p>
              <p className="text-xs sm:text-sm font-bold text-white text-center leading-tight drop-shadow-md mt-1">
                Earn rewards by staking and holding!
              </p>
            </motion.div>
          </div>
        </section>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index}>{slide.content}</div>
      ))}
    </div>
  );
}