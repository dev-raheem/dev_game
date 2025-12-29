import React from 'react'

const Header: React.FC = () => (
    <header className="bg-[#1a2c38] px-6 py-3 flex items-center justify-between border-b border-[#2f4553]">
        <div className="text-3xl font-bold italic text-white">Stake</div>
        <div className="flex gap-3">
            <button className="px-5 py-2 bg-[#2f4553] text-white rounded-md hover:bg-[#3a5463] transition text-sm font-medium">Login</button>
            <button className="px-5 py-2 bg-[#1475e1] text-white rounded-md hover:bg-[#0d5cba] transition text-sm font-medium">Register</button>
        </div>
    </header>
)

export default Header
