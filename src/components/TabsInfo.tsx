import React from 'react'

type Props = {
    activeTab: string
    setActiveTab: (t: string) => void
    tabs: string[]
}

const TabsInfo: React.FC<Props> = ({ activeTab, setActiveTab, tabs }) => (
    <div className="bg-[#1a2c38] border-t border-[#2f4553]">
        <div className="px-6 py-4 flex items-center justify-between border-b border-[#2f4553]">
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-white">Darts</h2>
                <span className="text-sm text-[#b1bad3]">Stake Originals</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#2f4553] rounded-full">
                    <div className="w-4 h-4 bg-[#f7931a] rounded-full"></div>
                    <span className="text-white text-sm font-bold">500.00×</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#2f4553] rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-gray-400">
                        <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                    </svg>
                    <span className="text-white text-sm">Hidden</span>
                </div>
                <button className="p-2 bg-[#2f4553] rounded-md hover:bg-[#3a5463] transition"><span className="text-white font-bold">✓</span></button>
                <button className="text-white p-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 10l4-4 4 4" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </button>
            </div>
        </div>
        <div className="px-6 py-3 flex gap-3 border-b border-[#2f4553]">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition ${activeTab === tab ? 'bg-[#2f4553] text-white' : 'text-[#b1bad3] hover:text-white hover:bg-[#2f4553]/50'
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
        <div className="px-6 py-4">
            <div className="flex gap-4 mb-4 text-xs">
                <div className="flex items-center gap-2">
                    <span className="text-[#b1bad3]">Edge:</span>
                    <span className="text-white font-semibold">2.00%</span>
                </div>
                <span className="px-2 py-1 bg-[#2f4553] text-[#b1bad3] rounded text-xs">Provably Fair</span>
                <span className="px-2 py-1 bg-[#2f4553] text-[#b1bad3] rounded text-xs">Stake Originals</span>
            </div>
            <p className="text-white text-sm mb-3">Set your bet and launch a dart at the board for a chance to win up to 500x your bet!</p>
            <p className="text-[#b1bad3] text-sm mb-3">This exciting online game is set to become one of the most popular Stake creations yet.</p>
            <p className="text-[#b1bad3] text-sm">Don't miss out. Check out Darts by <span className="text-white underline cursor-pointer">Stake Originals</span> at <span className="text-white underline cursor-pointer">Stake Casino</span>!</p>
        </div>
    </div>
)

export default TabsInfo
