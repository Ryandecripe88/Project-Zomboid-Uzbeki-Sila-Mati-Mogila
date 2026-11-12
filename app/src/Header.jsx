import React from 'react'
import { useNavigate } from 'react-router-dom'
import LOGO from "./images/logo.svg"
import SEARCH from "./images/search.svg"
import CART from "./images/cart.svg"

const Header = () => {
  const navigate = useNavigate()

  return (
    <header className="w-full h-[88px] bg-primary-900 border-b border-black/10 px-12 flex items-center justify-between font-sans">
      <div 
        onClick={() => navigate('/')}
        className="flex items-center gap-3 cursor-pointer"
      >
        <img src={LOGO} alt="Чайная лавка" className="w-10 h-10" />
        <div className="flex flex-col">
          <span className="font-bold text-gray-900 text-base leading-tight">
            Чайная лавка
          </span>
          <span className="text-xs text-gray-700">
            Листовой чай и посуда
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <button 
          onClick={() => navigate('/search')}
          className="flex items-center justify-center w-9 h-9 bg-white border border-black/15 rounded-full hover:bg-white/80 transition"
        >
          <img src={SEARCH} alt="Поиск" className="w-4 h-4" />
        </button>

        <button 
          onClick={() => navigate('/cart')}
          className="flex items-center justify-center w-9 h-9 bg-white border border-black/15 rounded-full hover:bg-white/80 transition"
        >
          <img src={CART} alt="Корзина" className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}

export default Header
