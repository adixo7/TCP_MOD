import { useState } from 'react';
import { Server, Users, User, LogOut, Send, Power, AlertCircle } from 'lucide-react';

export default function Dashboard({ onLogout, onSuccess }: { onLogout: () => void, onSuccess: () => void }) {
  const [server, setServer] = useState('bd');
  const [teamCode, setTeamCode] = useState('');
  const [uid1, setUid1] = useState('');
  const [error, setError] = useState('');

  const handleExecute = () => {
    if (!server) {
      setError('Please select a server.');
      return;
    }
    if (!teamCode || teamCode.length !== 6 || !/^\d+$/.test(teamCode)) {
      setError('Team code must be exactly 6 digits.');
      return;
    }
    if (!uid1) {
      setError('UID 1 is required.');
      return;
    }
    
    setError('');
    onSuccess();
  };

  return (
    <div className="min-h-screen p-4 md:p-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 bg-[#130F24]/80 backdrop-blur-md border border-purple-500/20 rounded-2xl p-4 md:p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <Server className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
                ADIXO WEB TCP
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-purple-300/60 uppercase tracking-wider">System Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="p-2.5 md:px-4 md:py-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all flex items-center gap-2"
          >
            <Power className="w-5 h-5" />
            <span className="hidden md:block font-medium">Disconnect</span>
          </button>
        </header>

        {/* Main Form Area */}
        <div className="bg-[#130F24]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_-10px_rgba(168,85,247,0.15)]">
          <div className="space-y-8">
            
            {error && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p className="font-medium">{error}</p>
              </div>
            )}

            {/* Server Selection */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-purple-200">
                <Server className="w-4 h-4 text-purple-400" />
                Server: <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <select 
                  value={server}
                  onChange={(e) => setServer(e.target.value)}
                  className="w-full appearance-none bg-[#0B0914]/80 border border-purple-500/30 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all cursor-pointer"
                >
                  <option value="bd">Bangladesh Server</option>
                  <option value="sg">Singapore Server</option>
                  <option value="in">India Server</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-purple-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
              </div>
            </div>

            {/* Team Code */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-purple-200">
                <Users className="w-4 h-4 text-purple-400" />
                Team Code: <span className="text-red-400">*</span>
              </label>
              <input 
                type="text" 
                value={teamCode}
                onChange={(e) => setTeamCode(e.target.value)}
                maxLength={6}
                placeholder="Enter 6-digit team code" 
                className="w-full bg-[#0B0914]/80 border border-purple-500/30 rounded-xl px-4 py-3.5 text-white placeholder-purple-300/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
              />
            </div>

            {/* UIDs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-purple-200">
                  <User className="w-4 h-4 text-purple-400" />
                  UID 1: <span className="text-red-400">*</span>
                </label>
                <input 
                  type="text" 
                  value={uid1}
                  onChange={(e) => setUid1(e.target.value)}
                  placeholder="Required" 
                  className="w-full bg-[#0B0914]/80 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-purple-300/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                />
              </div>
              {[2, 3, 4].map((num) => (
                <div key={num} className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-purple-200">
                    <User className="w-4 h-4 text-purple-400" />
                    UID {num}:
                  </label>
                  <input 
                    type="text" 
                    placeholder="Optional" 
                    className="w-full bg-[#0B0914]/80 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-purple-300/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                  />
                </div>
              ))}
            </div>

            {/* Auto Leave Checkbox */}
            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer group w-fit">
                <div className="relative flex items-center justify-center">
                  <input 
                    type="checkbox" 
                    className="peer appearance-none w-6 h-6 border-2 border-purple-500/40 rounded-md bg-[#0B0914] checked:bg-purple-600 checked:border-purple-600 transition-all cursor-pointer"
                  />
                  <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="flex items-center gap-2 text-purple-200 group-hover:text-white transition-colors">
                  <LogOut className="w-5 h-5 text-purple-400" />
                  <span className="font-medium">Auto Leave (Bot will leave group after emote)</span>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-purple-500/20">
              <button 
                onClick={handleExecute}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white rounded-xl font-bold tracking-wide shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                EXECUTE COMMAND
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
