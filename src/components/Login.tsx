import { useState } from 'react';
import { Gamepad2, Lock, User, ChevronRight } from 'lucide-react';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id === 'ADXTCP' && password === 'OWNERADIXO') {
      onLogin();
    } else {
      setError('Invalid ID or Password');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#130F24]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 tracking-tight">
              ADIXO WEB TCP
            </h1>
            <p className="text-purple-300/60 mt-2 text-sm uppercase tracking-widest">Authorized Access Only</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-purple-200/80 mb-1.5 ml-1">User ID</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-purple-400/50" />
                </div>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-[#0B0914]/50 border border-purple-500/20 rounded-xl text-white placeholder-purple-300/30 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 outline-none"
                  placeholder="Enter your ID"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-200/80 mb-1.5 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-purple-400/50" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 bg-[#0B0914]/50 border border-purple-500/20 rounded-xl text-white placeholder-purple-300/30 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-400/10 py-2 rounded-lg border border-red-400/20">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white rounded-xl font-semibold shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 group mt-2"
            >
              <span>INITIALIZE</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
