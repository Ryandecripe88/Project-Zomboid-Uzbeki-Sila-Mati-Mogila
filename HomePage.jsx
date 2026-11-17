import React from 'react'
import IMG1 from './images/image 1.png'
import IMG2 from './images/image 2.png'
import IMG3 from './images/image 3.png'
import IMG4 from './images/image 4.png'
import IMG5 from './images/image 5.png'
import IMG6 from './images/image 6.png'
import IMG7 from './images/image 7.png'
import IMG8 from './images/image 8.png'
import IMG9 from './images/image 9.png'
import IMG10 from './images/image 10.png'

const PRODUCTS = [
  {
    id: 1,
    title: 'Зеленый чай',
    description: 'Свежий, травянистый вкус с легкой терпкостью и весенним ароматом.',
    price: '450 ₽',
    image: IMG1,
  },
  {
    id: 2,
    title: 'Черный чай',
    description: 'Насыщенный, глубокий вкус с медовыми и древесными нотками.',
    price: '390 ₽',
    image: IMG2,
  },
  {
    id: 3,
    title: 'Красный чай',
    description: 'Мягкий, согревающий вкус с фруктовыми и медовыми оттенками.',
    price: '520 ₽',
    image: IMG3,
  },
  {
    id: 4,
    title: 'Чайник металлический',
    description: 'Прочный чайник из нержавеющей стали для заваривания любого чая.',
    price: '1 790 ₽',
    image: IMG4,
  },
  {
    id: 5,
    title: 'Чайник керамический',
    description: 'Эстетичный чайник с удобной ручкой, долго сохраняет тепло напитка.',
    price: '1 450 ₽',
    image: IMG5,
  },
  {
    id: 6,
    title: 'Тропический чай',
    description: 'Ароматный купаж с кусочками манго, ананаса и лепестками цветов.',
    price: '480 ₽',
    image: IMG6,
  },
  {
    id: 7,
    title: 'Чай Пуэр с Розой',
    description: 'Выдержанный шу пуэр с нежным цветочным ароматом бутонов розы.',
    price: '650 ₽',
    image: IMG7,
  },
  {
    id: 8,
    title: 'Чай Матча зеленый',
    description: 'Японский порошковый чай с ярким вкусом и бодрящим эффектом.',
    price: '920 ₽',
    image: IMG8,
  },
  {
    id: 9,
    title: 'Набор пиал (4 шт)',
    description: 'Классические фарфоровые пиалы для традиционного чаепития.',
    price: '890 ₽',
    image: IMG9,
  },
  {
    id: 10,
    title: 'Чайный набор «Ассорти»',
    description: 'Подарочный набор из 6 популярных сортов листового чая.',
    price: '1 390 ₽',
    image: IMG10,
  },
]

const HomePage = () => {
  return (
    <div className="bg-[#b5bfa7] font-sans text-gray-900">
      <main className="w-full px-12 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Выберите товар
          </h1>
          <p className="text-base text-gray-800 mt-1.5">
            В наличии: чай, чайники и посуда для ежедневного чаепития и подарков
          </p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden border border-black/35 shadow-sm flex flex-col justify-between bg-[#bfe09b] hover:shadow-md transition cursor-pointer"
            >
              <div className="bg-[#e8eedf] h-52 flex items-center justify-center p-5 border-b border-black/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-36 max-w-full object-contain"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h2 className="font-bold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-800 leading-snug mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/30">
                  <span className="font-bold text-lg text-gray-900">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default HomePage
