import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const emotes = [
  { name: "Cobra Rising", id: "909000075" },
  { name: "Ak Max", id: "909000063" },
  { name: "Shotgun Max", id: "909035007" },
  { name: "Scar Max", id: "909000068" },
  { name: "XM8 Max", id: "909000085" },
  { name: "G18 Max", id: "909038012" },
  { name: "AN94 Max", id: "909035012" },
  { name: "MP5 Max", id: "909033002" },
  { name: "N60 Max", id: "909051003" },
  { name: "Fist Max", id: "909037011" },
  { name: "M10 Max", id: "909000081" },
  { name: "Famasa Max", id: "909000090" },
  { name: "P90 Max", id: "909049010" },
  { name: "Thompson Max", id: "909038010" },
  { name: "M4A1 Max", id: "909033001" },
  { name: "UMP Max", id: "909000098" },
  { name: "New M40 Max", id: "909040010" },
  { name: "Parafal Max", id: "909045001" },
  { name: "WD Picker Max", id: "909042008" },
  { name: "TV Time (new)", id: "909052001" },
  { name: "Prismatic Flight (new)", id: "909051001" },
  { name: "Shower Time (new)", id: "909051004" },
  { name: "Boss Energy (new)", id: "909051005" },
  { name: "Double Holster (new)", id: "909051006" },
  { name: "Finger Guns (new)", id: "909051007" },
  { name: "Shivering (new)", id: "909051008" },
  { name: "Triple Shush (new)", id: "909051009" },
  { name: "On Motorbike (new)", id: "909051010" },
  { name: "Twisted Stare (new)", id: "909051011" },
  { name: "Red Petals (new)", id: "909051013" },
  { name: "Puffer Ride (new)", id: "909051014" },
  { name: "Can't Stop Laughing (new)", id: "909051015" },
  { name: "Crowned Glory Emote (new)", id: "909051016" },
  { name: "Choppy Co-op (new)", id: "909051017" },
  { name: "Passinho (new)", id: "909051021" },
  { name: "All Good, Boss! (new)", id: "909051022" },
  { name: "67 (new)", id: "909051023" },
  { name: "Cursed Technique Reversal: Red (new)", id: "909052002" },
  { name: "Straw Doll Technique (new)", id: "909052003" },
  { name: "Ten Shadows Technique: Totality (new)", id: "909052004" },
  { name: "Catchy Melody (new)", id: "909052005" },
  { name: "Farewell (new)", id: "909052006" },
  { name: "Panther Move (new)", id: "909052007" },
  { name: "Heart Attack! (new)", id: "909052008" },
  { name: "Umbrella Go (new)", id: "909052009" },
  { name: "T-pose (new)", id: "909052010" },
  { name: "Laggy (new)", id: "909052011" },
  { name: "Treasure Rain (new)", id: "909052012" },
  { name: "King of Gold (new)", id: "909052013" },
  { name: "King of Gold (new)", id: "909052014" },
  { name: "King of Gold (new)", id: "909052015" },
  { name: "King of Gold (new)", id: "909052016" },
  { name: "Raise Your Thumb! (new)", id: "909052019" },
  { name: "Open Fire", id: "909049012" },
  { name: "\"100\" Gloo Sculpture", id: "909042007" },
  { name: "909000019", id: "909000019" },
  { name: "909000020", id: "909000020" },
  { name: "LOL", id: "909000002" },
  { name: "Provoke", id: "909000003" },
  { name: "Flowers of Love", id: "909000010" }
];

export default function EmotesPage({ onBack }: { onBack: () => void }) {
  const [executed, setExecuted] = useState<Record<string, boolean>>({});

  const handleSend = (id: string) => {
    setExecuted(prev => ({ ...prev, [id]: true }));
    // Reset after 2 seconds
    setTimeout(() => {
      setExecuted(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0B0914] p-4 md:p-8 relative overflow-hidden text-gray-100">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-purple-300 hover:text-white transition-colors bg-[#130F24]/80 border border-purple-500/30 px-5 py-2.5 rounded-xl backdrop-blur-md w-fit shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Dashboard</span>
        </button>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
          {emotes.map((emote, idx) => (
            <div key={idx} className="bg-[#130F24]/80 backdrop-blur-xl border border-purple-500/20 rounded-xl p-3 flex flex-col items-center justify-between shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] hover:border-purple-500/40 transition-all group h-full gap-3">
              <h3 className="text-purple-100 font-bold text-sm text-center flex items-center justify-center line-clamp-2 w-full h-10">
                {emote.name}
              </h3>
              
              <button 
                onClick={() => handleSend(emote.id)}
                disabled={executed[emote.id]}
                className={`w-full py-2 rounded-lg font-semibold text-sm transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] ${
                  executed[emote.id]
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50 shadow-none cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]'
                }`}
              >
                {executed[emote.id] ? "EMOTE EXICUTED" : "Send"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
