import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-md w-full text-center relative z-10">
        <div className="relative mb-8">
          <h1 className="text-[150px] font-black text-slate-200 leading-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-slate-800">Oops!</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-4">Page Not Found</h2>
        <p className="text-slate-500 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl shadow-green-500/20 hover:scale-105"
        >
          <span>←</span> Back to Portfolio
        </Link>
        
        <div className="mt-16 pt-8 border-t border-slate-200 flex justify-center gap-6 text-slate-400">
            <span className="text-xs font-bold uppercase tracking-widest hover:text-green-500 cursor-pointer transition-colors">GitHub</span>
            <span className="text-xs font-bold uppercase tracking-widest hover:text-blue-500 cursor-pointer transition-colors">LinkedIn</span>
            <span className="text-xs font-bold uppercase tracking-widest hover:text-sky-500 cursor-pointer transition-colors">Twitter</span>
        </div>
      </div>
    </div>
  );
}
