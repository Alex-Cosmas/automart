import { GiCarKey, GiBookCover, GiMoneyStack, GiCarSeat } from 'react-icons/gi'
import { BsSearch, BsPersonPlus, BsCardList } from 'react-icons/bs'
const HeaderStyles = {
  li: 'flex items-center gap-1',
}
const Header = () => {
  return (
    <>
      <header className='py-5 text-white bg-gray-900'>
        <div className='container flex justify-between px-24 mx-auto'>
          <div className='flex items-center gap-1'>
            <GiCarSeat className='w-5 h-5 text-gray-900 bg-white rounded-full' />
            <h3 className='uppercase '>
              Auto<span className='font-semibold'>Mart</span>
            </h3>
          </div>
          <div>
            <ul className='flex gap-6'>
              <li className={HeaderStyles.li}>
                <GiBookCover />
                Research
              </li>
              <li className={HeaderStyles.li}>
                <GiCarKey />
                Buy
              </li>
              <li className={HeaderStyles.li}>
                <GiMoneyStack />
                Sell
              </li>
            </ul>
          </div>
          <div>
            <div className='flex gap-4'>
              <div className='flex items-center gap-1'>
                <BsSearch />
              </div>
              <div className='flex items-center gap-1'>
                <BsPersonPlus /> Account
              </div>
              <div className='flex items-center gap-1'>
                <BsCardList /> My List
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
