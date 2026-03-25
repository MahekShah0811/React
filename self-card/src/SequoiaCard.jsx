import React, { useState } from 'react';
import { 
  Heart, ShoppingCart, Twitter, Instagram, Facebook, Youtube, 
  ArrowRight, Play 
} from 'lucide-react';

const SequoiaCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = ['#3B82F6', '#F97316', '#22C55E', '#EF4444', '#06B6D4'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-zinc-800">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">N</span>
            </div>
            <span className="text-white font-semibold text-2xl tracking-tight">nitec.</span>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full bg-zinc-800 text-white placeholder-zinc-400 rounded-full py-3 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                <Play className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-zinc-400 hover:text-white transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </button>
            
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="text-zinc-400 hover:text-red-500 transition-colors"
            >
              <Heart className={`w-6 h-6 transition-all ${isLiked ? 'fill-red-500 text-red-500 scale-110' : ''}`} />
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-medium text-white">Ryman Alex</p>
                <p className="text-xs text-zinc-500">Premium User</p>
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 p-8">
          
          {/* Main Product Section */}
          <div className="col-span-12 lg:col-span-8 bg-zinc-950 rounded-2xl p-8 relative overflow-hidden group">
            <div className="flex flex-col h-full">
              <div>
                <p className="text-emerald-400 text-sm font-medium tracking-widest">MUSIC IS CLASSIC</p>
                <h1 className="text-5xl font-bold text-white mt-2 leading-tight">
                  Sequoia Inspiring<br />Musico.
                </h1>
              </div>

              <div className="mt-auto">
                <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4">
                  <div className="w-8 h-[1px] bg-zinc-700" />
                  01 — Clear Sounds
                </div>
                <p className="text-zinc-400 max-w-md">
                  Making your dream music come true stay with Sequoia Sounds!
                </p>

                <button className="mt-6 group/btn flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-4 rounded-2xl transition-all active:scale-95">
                  View All Products
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Headphone Image with Hover Effect */}
            <div className="absolute -right-12 -top-12 w-[420px] transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
              <img 
                src="https://assets.codepen.io/9051928/blue-headphone.png" 
                alt="Sequoia Headphones"
                className="drop-shadow-2xl"
              />
            </div>

            {/* Floating Dots */}
            <div className="absolute top-12 right-32 w-3 h-3 bg-white rounded-full animate-pulse" />
            <div className="absolute top-28 right-48 w-2 h-2 bg-blue-400 rounded-full animate-ping" />
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-6">

            {/* Popular Colors */}
            <div className="bg-zinc-950 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Popular Colors</h3>
              <div className="flex gap-3">
                {colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    className={`w-9 h-9 rounded-full transition-all duration-300 hover:scale-110 border-2 ${selectedColor === i ? 'border-white scale-110' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* New Gen X-Bud */}
            <div className="bg-zinc-950 rounded-2xl p-6 group cursor-pointer hover:bg-zinc-900 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-zinc-400">New Generation</p>
                  <p className="text-xl font-semibold text-white mt-1">X-Bud</p>
                </div>
                <div className="text-emerald-400 group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={24} />
                </div>
              </div>
              <div className="mt-6">
                <img 
                  src="https://assets.codepen.io/9051928/white-earbuds.png" 
                  alt="X-Bud"
                  className="w-40 mx-auto drop-shadow-xl transition-transform group-hover:-rotate-12"
                />
              </div>
            </div>

            {/* VR Headset Teaser */}
            <div className="bg-zinc-950 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src="https://assets.codepen.io/9051928/vr-headset.jpg" 
                  alt="VR Headset"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <p className="text-white font-medium">Light Grey Surface Headphone</p>
                  <p className="text-zinc-400 text-sm">Boosted with bass</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - More Products */}
          <div className="col-span-12 mt-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">More Products</h2>
              <p className="text-zinc-500">400+ plus items</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Product 1 */}
              <div className="bg-zinc-950 rounded-2xl p-5 group hover:ring-1 hover:ring-zinc-700 transition-all">
                <div className="h-40 flex items-center justify-center bg-zinc-900 rounded-xl overflow-hidden">
                  <img src="https://assets.codepen.io/9051928/box-product.png" alt="Product" className="h-32 group-hover:scale-110 transition-transform" />
                </div>
                <p className="mt-4 text-sm text-zinc-400">Wireless Speaker</p>
              </div>

              {/* Product 2 - Downloads Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 px-3 py-1 rounded-full text-xs">Popular</div>
                  </div>
                  <p className="text-4xl font-bold mt-6">5m+</p>
                  <p className="text-sm opacity-90">Downloads</p>
                </div>
                <div className="text-xs opacity-75 mt-8">4.8 Reviews</div>
              </div>

              {/* Product 3 */}
              <div className="bg-zinc-950 rounded-2xl p-5 group cursor-pointer">
                <div className="relative">
                  <img 
                    src="https://assets.codepen.io/9051928/headphone-small.png" 
                    alt="Headphones"
                    className="w-full group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/70 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                    <Heart className="w-3 h-3" /> 4.7
                  </div>
                </div>
                <p className="mt-4 font-medium">Listening Has Been Released</p>
              </div>

              {/* Product 4 */}
              <div className="bg-zinc-950 rounded-2xl overflow-hidden group cursor-pointer">
                <div className="h-40 bg-zinc-900 flex items-center justify-center">
                  <img 
                    src="https://assets.codepen.io/9051928/vr-headset-small.png" 
                    alt="VR"
                    className="h-28 group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="p-5">
                  <p className="font-medium text-white">Light Grey Surface Headphone</p>
                  <p className="text-emerald-400 text-sm">Boosted with bass</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Socials */}
        <div className="flex justify-center gap-8 py-8 border-t border-zinc-800 text-zinc-500">
          <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Youtube size={20} /></a>
        </div>
      </div>
    </div>
  );
};

export default SequoiaCard;