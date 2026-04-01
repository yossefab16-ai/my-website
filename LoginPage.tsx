interface Match {
  id: number;
  league: string;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  time: string;
  odds1: number;
  oddsDraw: number;
  odds2: number;
  flag1: string;
  flag2: string;
  isLive: boolean;
  sport: string;
}

export default function LiveMatchCard({ match }: { match: Match }) {
  return (
    <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-white/5 hover:border-[#00d4ff]/30 transition-all duration-300 overflow-hidden group hover:shadow-xl hover:shadow-blue-500/5">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-xs">{match.sport}</span>
          <span className="text-gray-400 text-xs font-medium">{match.league}</span>
        </div>
        {match.isLive && (
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-red-400 text-xs font-bold tracking-wider">LIVE</span>
          </div>
        )}
      </div>

      {/* Teams & Score */}
      <div className="px-4 py-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-2xl">{match.flag1}</span>
            <span className="text-white font-semibold text-sm truncate">{match.team1}</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-black/30 border border-white/10">
            <span className="text-white font-black text-lg tracking-wider">
              {match.score1} <span className="text-gray-500">:</span> {match.score2}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-1 justify-end">
            <span className="text-white font-semibold text-sm truncate">{match.team2}</span>
            <span className="text-2xl">{match.flag2}</span>
          </div>
        </div>
        <div className="text-center">
          <span className="text-gray-500 text-xs font-medium">⏱️ {match.time}</span>
        </div>
      </div>

      {/* Odds */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: '1', odds: match.odds1 },
            { label: 'X', odds: match.oddsDraw },
            { label: '2', odds: match.odds2 },
          ].map((odd) => (
            <button
              key={odd.label}
              className="py-3 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#00d4ff]/20 hover:to-[#0051ff]/20 border border-white/5 hover:border-[#00d4ff]/40 transition-all duration-200 group/btn"
            >
              <span className="text-gray-500 text-xs block">{odd.label}</span>
              <span className="text-white font-bold text-sm group-hover/btn:text-[#00d4ff] transition">{odd.odds.toFixed(2)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
