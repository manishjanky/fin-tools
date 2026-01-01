interface FeatureTileProps {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
  gradient: string;
}

export default function FeatureTile({
  title,
  description,
  icon,
  onClick,
  gradient,
}: FeatureTileProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-full text-left bg-gradient-to-br ${gradient} p-0.5 rounded-lg hover:shadow-lg transition transform hover:scale-105 group`}
    >
      <div className="bg-slate-900 rounded-lg p-8 h-full flex flex-col justify-between group-hover:bg-slate-800 transition">
        <div>
          <div className="text-5xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-purple-200 leading-relaxed">{description}</p>
        </div>
        <div className="inline-flex items-center text-purple-400 group-hover:text-purple-300 transition">
          <span className="pr-2">Explore</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-2 transition"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
