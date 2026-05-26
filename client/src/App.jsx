import { useState } from "react";
import axios from "axios";

export default function App() {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");
  const [userId, setUserId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const handleDecide = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post("/decide", {
        question,
        context: context || null,
        user_id: userId || null,
      });
      setResult(response.data);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-400">LifeFlow AI</h1>
          <p className="text-gray-400 mt-2">Multi-agent decision support system</p>
        </div>

        {/* Input Section */}
        <div className="bg-gray-900 rounded-2xl p-6 mb-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Your Decision *</label>
            <textarea
              className="w-full bg-gray-800 rounded-xl p-3 text-gray-100 resize-none outline-none focus:ring-2 focus:ring-indigo-500"
              rows={3}
              placeholder="e.g. Should i prefer full creame or skimmed milk."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Context (optional)</label>
            <input
              className="w-full bg-gray-800 rounded-xl p-3 text-gray-100 outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. I am a 21 year old man looking into loosing weight."
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">User ID (optional, for memory)</label>
            <input
              className="w-full bg-gray-800 rounded-xl p-3 text-gray-100 outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g. bhondu"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <button
            onClick={handleDecide}
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-900 disabled:text-indigo-400 text-white font-semibold py-3 rounded-xl transition-all"
          >
            {loading ? "Thinking..." : "Help me decide →"}
          </button>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">

            {/* Recommendation */}
            <div className="bg-indigo-900 border border-indigo-500 rounded-2xl p-6">
              <h2 className="text-indigo-300 font-semibold text-sm uppercase mb-2">Final Recommendation</h2>
              <p className="text-white text-lg font-medium">{result.recommendation}</p>
              <p className="text-indigo-200 mt-2 text-sm">{result.reasoning}</p>
            </div>

            {/* Alternatives */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h2 className="text-gray-400 font-semibold text-sm uppercase mb-4">Alternatives Considered</h2>
              <ul className="space-y-2">
                {result.alternatives.map((alt, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-indigo-400 font-bold">{i + 1}.</span>
                    <span className="text-gray-200">{alt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scenarios */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h2 className="text-gray-400 font-semibold text-sm uppercase mb-4">Simulated Scenarios</h2>
              <div className="space-y-4">
                {result.scenarios.map((s, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-indigo-300 font-medium text-sm">{s.option}</p>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${s.risk_level === "low" ? "bg-green-900 text-green-300" :
                        s.risk_level === "medium" ? "bg-yellow-900 text-yellow-300" :
                          "bg-red-900 text-red-300"
                        }`}>
                        {s.risk_level} risk
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{s.outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Debate Log */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h2 className="text-gray-400 font-semibold text-sm uppercase mb-4">Agent Debate</h2>
              <div className="space-y-3">
                {result.debate_log.map((line, i) => {
                  const isOptimist = line.toLowerCase().startsWith("optimist");
                  const isPessimist = line.toLowerCase().startsWith("pessimist");
                  return (
                    <div key={i} className={`rounded-xl p-4 text-sm ${isOptimist ? "bg-green-950 text-green-200" :
                      isPessimist ? "bg-red-950 text-red-200" :
                        "bg-yellow-950 text-yellow-200"
                      }`}>
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}