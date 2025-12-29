import React from 'react'

type Props = {
    spinning: boolean
    multipliers: string[]
}

const GameBoard: React.FC<Props> = ({ spinning, multipliers }) => (
    <div className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center bg-[#0f212e]">
            <div className="flex flex-col items-center">
                <div className="relative mb-8">
                    <svg width="420" height="420" viewBox="0 0 420 420" className="drop-shadow-2xl">
                        <circle cx="210" cy="210" r="200" fill="none" stroke="#4a5568" strokeWidth="3" />
                        <circle cx="210" cy="210" r="190" fill="#1a2c38" />
                        <circle cx="210" cy="210" r="155" fill="#0f212e" />
                        {[
                            { start: -15, end: 15, color: '#fbbf24' },
                            { start: 15, end: 45, color: '#f59e0b' },
                            { start: 45, end: 75, color: '#fb923c' },
                            { start: 75, end: 105, color: '#f97316' },
                            { start: 105, end: 135, color: '#ef4444' },
                            { start: 135, end: 165, color: '#db2777' },
                            { start: 165, end: 195, color: '#ec4899' },
                            { start: 195, end: 225, color: '#ef4444' },
                            { start: 225, end: 255, color: '#f97316' },
                            { start: 255, end: 285, color: '#fb923c' },
                            { start: 285, end: 315, color: '#f59e0b' },
                            { start: 315, end: 345, color: '#fbbf24' },
                        ].map((segment, i) => {
                            const startAngle = ((segment.start - 90) * Math.PI) / 180
                            const endAngle = ((segment.end - 90) * Math.PI) / 180
                            const x1 = 210 + 155 * Math.cos(startAngle)
                            const y1 = 210 + 155 * Math.sin(startAngle)
                            const x2 = 210 + 155 * Math.cos(endAngle)
                            const y2 = 210 + 155 * Math.sin(endAngle)
                            return (
                                <path key={i} d={`M 210 210 L ${x1} ${y1} A 155 155 0 0 1 ${x2} ${y2} Z`} fill={segment.color} className={spinning ? 'opacity-80' : ''} />
                            )
                        })}
                        <circle cx="210" cy="210" r="22" fill="#00e701" className={spinning ? 'animate-pulse' : ''} />
                    </svg>
                </div>
                <div className="flex gap-2">
                    {multipliers.map((mult, i) => (
                        <button key={i} className="px-5 py-2 bg-[#2f4553] text-white rounded-md hover:bg-[#3a5463] transition text-sm font-medium">{mult}</button>
                    ))}
                </div>
            </div>
        </div>
    </div>
)

export default GameBoard
