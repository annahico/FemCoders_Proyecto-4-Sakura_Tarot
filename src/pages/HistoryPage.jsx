export function HistoryPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/ebeeaf4c-022f-401d-a7fa-62eb2ed7f2e9.png')",
      }}
    >

      <div className="w-95 rounded-3xl bg-white/40 backdrop-blur-xl shadow-2xl p-5">

        <div className="text-center mb-4">
          <h1 className="text-lg font-semibold text-pink-900">
            El Amanecer Mágico
          </h1>
          <p className="text-xs text-pink-700">
            Tarot del pasado, presente y futuro
          </p>
        </div>


        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-pink-900">
             tus lecturas guardadas:
          </p>
          <button className="text-pink-700 text-sm">🏠</button>
        </div>


        {[ 
          { date: "Jueves 8 de Enero 2026, 17:30hrs" },
          { date: "Viernes 9 de Enero 2026, 20:00hrs" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-pink-50/70 rounded-2xl p-4 mb-3 shadow"
          >
            <div className="grid grid-cols-3 gap-3 text-center mb-2">
              {["Pasado", "Presente", "Futuro"].map((label) => (
                <div key={label}>
                  <p className="text-xs text-pink-800 mb-1">
                    {label}
                  </p>
                  <div className="h-20 rounded-lg bg-pink-200/60 flex items-center justify-center">
                    <span className="text-pink-700 text-xs">
                      Carta
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-pink-700">
              <span>{item.date}</span>
              <button className="text-pink-600 hover:text-pink-800">
                🗑️
              </button>
            </div>
          </div>
        ))}


        <div className="flex justify-center mt-4">
          <button className="px-6 py-2 rounded-full bg-white text-pink-800 text-sm font-medium shadow hover:bg-pink-50 transition">
            🧹 Limpiar historial
          </button>
        </div>
      </div>
    </div>
  );
}
