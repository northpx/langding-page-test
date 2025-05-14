import banner from '../src/assets/86c6662b79ebea7468e4c0415707fd9f44ab6b4b.png';
function App() {
  return (
    <div className="aspect-[13/6] md:aspect-[32/9] relative">
      <img src={banner} alt="" className='absolute top-[110px] w-full h-full object-cover overflow-hidden'/>
    </div>
  )
}

export default App
