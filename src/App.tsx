import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Controls from './components/Controls'
import GameBoard from './components/GameBoard'
import TabsInfo from './components/TabsInfo'
import BetsTable from './components/BetsTable'
import Footer from './components/Footer'

const App: React.FC = () => {
  const [betAmount, setBetAmount] = useState('0.00000004')
  const [difficulty, setDifficulty] = useState('Medium')
  const [activeTab, setActiveTab] = useState('Description')
  const [betMode, setBetMode] = useState<'Manual' | 'Auto'>('Manual')
  const [spinning, setSpinning] = useState(false)

  const multipliers = ['0.4×', '0.6×', '1.3×', '3.1×', '6×', '16×']
  const difficultyOptions = ['Easy', 'Medium', 'Hard', 'Expert']
  const tabs = ['Description', 'Big Wins', 'Lucky Wins', 'Challenges']

  const allBets = [
    { game: 'Hilo', user: 'Hidden', time: '2:58 PM', bet: '$4.93', currency: 'D', multiplier: '0.00×', payout: '-$4.93', won: false },
    { game: 'Ancient Fortunes...', user: 'Hidden', time: '2:58 PM', bet: 'CA$80.00', currency: 'S', multiplier: '0.00×', payout: '-CA$80.00', won: false },
    { game: 'Dice', user: 'Vishal548', time: '2:58 PM', bet: '$2.22', currency: 'T', multiplier: '1.01×', payout: '$2.25', won: true },
    { game: 'Le Cowboy', user: 'Hidden', time: '2:58 PM', bet: '$4.38', currency: 'P', multiplier: '0.20×', payout: '-$3.51', won: false },
    { game: 'Limbo', user: 'Hidden', time: '2:58 PM', bet: '$10.29', currency: 'B', multiplier: '2.00×', payout: '$20.58', won: true },
    { game: 'Plinko', user: 'StefanoGod1', time: '2:58 PM', bet: '$4.00', currency: 'E', multiplier: '4.00×', payout: '$16.00', won: true },
    { game: 'Limbo', user: 'Ladywarrior', time: '2:58 PM', bet: '$40.92', currency: 'T', multiplier: '1.27×', payout: '$51.97', won: true },
    { game: 'Dice', user: 'Syriana91', time: '2:58 PM', bet: '$0.09', currency: 'T', multiplier: '1.01×', payout: '$0.09', won: true },
  ]

  const handleSpin = () => {
    setSpinning(true)
    setTimeout(() => setSpinning(false), 2000)
  }

  return (
    <div className="min-h-screen w-full bg-[#0f212e]">
      <Header />
      <div className="flex">
        <Controls
          betAmount={betAmount}
          setBetAmount={setBetAmount}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          betMode={betMode}
          setBetMode={setBetMode}
          handleSpin={handleSpin}
          difficultyOptions={difficultyOptions}
        />
        <div className="flex-1 flex flex-col">
          <GameBoard spinning={spinning} multipliers={multipliers} />
          <TabsInfo activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
        </div>
      </div>
      <BetsTable allBets={allBets} />
      <Footer />
    </div>
  )
}

export default App