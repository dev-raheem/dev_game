import React from 'react'

type Props = {
    betAmount: string
    setBetAmount: (v: string) => void
    difficulty: string
    setDifficulty: (v: string) => void
    betMode: 'Manual' | 'Auto'
    setBetMode: (v: 'Manual' | 'Auto') => void
    handleSpin: () => void
    difficultyOptions: string[]
}

const Controls: React.FC<Props> = ({
    betAmount,
    setBetAmount,
    difficulty,
    setDifficulty,
    betMode,
    setBetMode,
    handleSpin,
    difficultyOptions,
}) => (
    <div className="w-`95` 1a2c38] p-5 border-r border-[#2f4553]">
        <div className="flex gap-1 mb-5 bg-[#0f212e] rounded-lg p-1">
            <button
                onClick={() => setBetMode('Manual')}
                className={`flex-1 py-2.5 rounded-md transition text-sm font-medium ${betMode === 'Manual' ? 'bg-[#2f4553] text-white' : 'text-gray-400 hover:text-white'
                    }`}
            >
                Manual
            </button>
            <button
                onClick={() => setBetMode('Auto')}
                className={`flex-1 py-2.5 rounded-md transition text-sm font-medium ${betMode === 'Auto' ? 'bg-[#2f4553] text-white' : 'text-gray-400 hover:text-white'
                    }`}
            >
                Auto
            </button>
        </div>

        <div className="mb-5">
            <div className="flex justify-between mb-2 text-xs">
                <span className="text-[#b1bad3]">Bet Amount</span>
                <span className="text-[#b1bad3]">$0.00</span>
            </div>
            <div className="flex gap-2">
                <div className="flex-1 bg-[#0f212e] rounded-md px-3 py-2.5 flex items-center justify-between border border-[#2f4553]">
                    <input
                        type="text"
                        value={betAmount}
                        onChange={(e) => setBetAmount(e.target.value)}
                        className="bg-transparent outline-none text-white text-sm w-full"
                    />
                    <div className="w-5 h-5 bg-[#f7931a] rounded-full flex items-center justify-center text-[10px] font-bold text-white ml-2">₿</div>
                </div>
                <button className="px-4 py-2.5 bg-[#2f4553] text-white rounded-md hover:bg-[#3a5463] transition text-sm font-medium">½</button>
                <button className="px-4 py-2.5 bg-[#2f4553] text-white rounded-md hover:bg-[#3a5463] transition text-sm font-medium">2×</button>
            </div>
        </div>

        <div className="mb-5">
            <label className="block text-xs text-[#b1bad3] mb-2">Difficulty</label>
            <div className="relative">
                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full bg-[#0f212e] border border-[#2f4553] rounded-md px-3 py-2.5 outline-none cursor-pointer text-white text-sm appearance-none"
                >
                    {difficultyOptions.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6 8L2 4h8z" />
                    </svg>
                </div>
            </div>
        </div>

        <button onClick={handleSpin} className="w-full bg-[#00e701] hover:bg-[#00c901] text-black font-bold py-3.5 rounded-md transition text-base">Bet</button>
    </div>
)

export default Controls
