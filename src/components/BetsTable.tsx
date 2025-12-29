import React from 'react'

type Bet = {
    game: string
    user: string
    time: string
    bet: string
    currency: string
    multiplier: string
    payout: string
    won: boolean
}

type Props = {
    allBets: Bet[]
}

const BetsTable: React.FC<Props> = ({ allBets }) => (
    <div className="bg-[#1a2c38] border-t border-[#2f4553]">
        <div className="px-6 py-4 flex items-center gap-3 border-b border-[#2f4553]">
            <button className="px-5 py-2 bg-[#0f212e] text-[#b1bad3] rounded-md text-sm font-medium">My Bets</button>
            <button className="px-5 py-2 bg-[#2f4553] text-white rounded-md text-sm font-medium">All Bets</button>
            <button className="px-5 py-2 bg-[#0f212e] text-[#b1bad3] rounded-md text-sm font-medium">High Rollers</button>
            <button className="px-5 py-2 bg-[#0f212e] text-[#b1bad3] rounded-md text-sm font-medium">Race Leaderboard</button>
            <div className="ml-auto">
                <select className="px-3 py-2 bg-[#0f212e] border border-[#2f4553] text-white rounded-md text-sm">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="text-left text-[#b1bad3] text-xs border-b border-[#2f4553]">
                        <th className="px-6 py-3 font-medium">Game</th>
                        <th className="px-6 py-3 font-medium">User</th>
                        <th className="px-6 py-3 font-medium">Time</th>
                        <th className="px-6 py-3 font-medium">Bet Amount</th>
                        <th className="px-6 py-3 font-medium">Multiplier</th>
                        <th className="px-6 py-3 font-medium">Payout</th>
                    </tr>
                </thead>
                <tbody>
                    {allBets.map((bet, i) => (
                        <tr key={i} className="border-b border-[#0f212e] hover:bg-[#0f212e]/50">
                            <td className="px-6 py-3 text-white text-sm">{bet.game}</td>
                            <td className="px-6 py-3 text-[#b1bad3] text-sm flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 2a6 6 0 100 12A6 6 0 008 2z" />
                                </svg>
                                {bet.user}
                            </td>
                            <td className="px-6 py-3 text-[#b1bad3] text-sm">{bet.time}</td>
                            <td className="px-6 py-3 text-white text-sm flex items-center gap-2">{bet.bet}
                                <span className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white">{bet.currency}</span>
                            </td>
                            <td className="px-6 py-3 text-white text-sm">{bet.multiplier}</td>
                            <td className={`px-6 py-3 text-sm font-medium ${bet.won ? 'text-[#00e701]' : 'text-[#ef4444]'} flex items-center gap-2`}>
                                {bet.payout}
                                <span className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white">{bet.currency}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)

export default BetsTable
