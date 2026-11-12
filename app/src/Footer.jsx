import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-primary-900 border-t border-black/10 px-12 py-10 mt-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-gray-900 text-2xl mb-4">
          О нашей чайной лавке
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-800 leading-relaxed">
          <p>
            Мы бережно собираем лучшие сорта чая напрямую с плантаций Китая, Индии и Японии. Наша цель — показать вам всё многообразие чайной культуры: от классического крепкого черного чая до изысканных церемониальных сортов и ярких фруктовых купажей.
          </p>
          <p>
            Мы строго следим за условиями хранения каждой партии и подбираем посуду, которая помогает раскрыть истинный вкус и аромат напитка. Присоединяйтесь к нашему чайному путешествию!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
