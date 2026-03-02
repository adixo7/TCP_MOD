import { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EmotesPage from './components/EmotesPage';

export default function App() {
  const [view, setView] = useState<'login' | 'dashboard' | 'emotes'>('login');

  return (
    <div className="min-h-screen bg-[#0B0914] text-gray-100 font-sans selection:bg-purple-500/30">
      {view === 'login' && <Login onLogin={() => setView('dashboard')} />}
      {view === 'dashboard' && (
        <Dashboard 
          onLogout={() => setView('login')} 
          onSuccess={() => setView('emotes')} 
        />
      )}
      {view === 'emotes' && <EmotesPage onBack={() => setView('dashboard')} />}
    </div>
  );
}
