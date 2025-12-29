import React from 'react'

const Footer: React.FC = () => (
    <footer className="bg-[#0f212e] border-t border-[#2f4553] px-6 py-8">
        <div className="grid grid-cols-6 gap-8 mb-8">
            <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Casino</h3>
                <ul className="space-y-2">
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Casino Games</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Slots</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Live Casino</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Roulette</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Blackjack</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Poker</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Publishers</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Promos & Competitions</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Stake Engine</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Stake Vendors</li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Sports</h3>
                <ul className="space-y-2">
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Sportsbook</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Live Sports</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Soccer</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Basketball</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Tennis</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">eSports</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Bet Bonuses</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Sports Rules</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Racing Rules</li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Support</h3>
                <ul className="space-y-2">
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Help Center</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Fairness</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Responsible Gambling</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Gambling Helpline</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Live Support</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Self Exclusion</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Law Enforcement Request</li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-3 text-sm">About Us</h3>
                <ul className="space-y-2">
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">VIP Club</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Affiliate</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Privacy Policy</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">AML Policy</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Terms of Service</li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Payment Info</h3>
                <ul className="space-y-2">
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Deposit & Withdrawals</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Currency Guide</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Crypto Guide</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Supported Crypto</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">How to Use the Vault</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">How Much to Bet With</li>
                </ul>
            </div>
            <div>
                <h3 className="text-white font-semibold mb-3 text-sm">FAQ</h3>
                <ul className="space-y-2">
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">How-to Guides</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Online Casino Guide</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Sports Betting Guide</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">How to Live Stream Sports</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">Stake VIP Guide</li>
                    <li className="text-[#b1bad3] text-xs hover:text-white cursor-pointer">House Edge Guide</li>
                </ul>
            </div>
        </div>
        <div className="flex justify-center gap-4 mb-6">
            {['📰', '💬', '📘', '𝕏', '📷', '▶️', '🛒'].map((icon, i) => (
                <button key={i} className="w-8 h-8 bg-[#2f4553] rounded-md flex items-center justify-center hover:bg-[#3a5463] transition">
                    <span className="text-sm">{icon}</span>
                </button>
            ))}
        </div>
        <div className="text-center text-xs text-[#b1bad3] border-t border-[#2f4553] pt-6 space-y-3">
            <p>© 2025 Stake.com | All Rights Reserved.</p>
            <p className="text-[10px]">Stake is owned and operated by Medium Rare N.V., registration number: 145353, registered address: Seru Loraweg 17 B, Curaçao. Payment agent companies are Medium Rare Limited and MRS Tech Limited. Contact us at support@stake.com.</p>
            <p className="text-[10px]">Stake is committed to responsible gambling, for more information visit Gamblingtherapy.org</p>
            <p className="text-white font-medium">1 BTC = $89,445.44</p>
        </div>
    </footer>
)

export default Footer
