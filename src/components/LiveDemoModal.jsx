import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, Play, RotateCcw, CheckCircle2, AlertTriangle, ShieldCheck, 
  Brain, TrendingUp, Cpu, Network, ArrowRight, BarChart3, Database, ExternalLink 
} from 'lucide-react'

export default function LiveDemoModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState(project?.id || 'graph-rag')

  // Biomedical Graph RAG State
  const [graphQuery, setGraphQuery] = useState('metformin-ampk')
  const [graphRunning, setGraphRunning] = useState(false)
  const [graphOutput, setGraphOutput] = useState(null)

  // FinSight State
  const [forecastModel, setForecastModel] = useState('SARIMAX')
  const [forecastHorizon, setForecastHorizon] = useState('6')
  const [anomalyFlagged, setAnomalyFlagged] = useState(false)

  // Explainable AI Aircraft State
  const [telemetry, setTelemetry] = useState({
    vibration: 78,
    exhaustTemp: 840,
    hydraulicPsi: 2450,
    oilViscosity: 11,
  })
  const [predRunning, setPredRunning] = useState(false)
  const [predictionResult, setPredictionResult] = useState(null)

  // Handlers
  const handleRunGraphRAG = () => {
    setGraphRunning(true)
    setGraphOutput(null)
    setTimeout(() => {
      setGraphRunning(false)
      if (graphQuery === 'metformin-ampk') {
        setGraphOutput({
          cypher: `MATCH (d:Drug {name: "Metformin"})-[:TARGETS]->(t:Protein {name: "AMPK"})\n-[:REGULATES]->(p:Pathway {name: "Hepatic Gluconeogenesis"})\n-[:ASSOCIATED_WITH]->(dis:Disease {name: "Type 2 Diabetes Mellitus"})\nRETURN d, t, p, dis LIMIT 10`,
          hops: 3,
          guardrailStatus: 'VERIFIED_PASS (4-tier AST AST-Safe, Zero Write-injection)',
          ragasScore: { faithfulness: '0.96', relevancy: '0.94' },
          nodes: [
            { id: 'n1', label: 'Metformin', type: 'Drug', color: '#2563EB' },
            { id: 'n2', label: 'AMPK (PRKAA1)', type: 'Target Protein', color: '#059669' },
            { id: 'n3', label: 'Hepatic Gluconeogenesis', type: 'Biological Pathway', color: '#D97706' },
            { id: 'n4', label: 'Type 2 Diabetes', type: 'Disease Phenotype', color: '#DC2626' },
          ],
          synthesis: 'Metformin initiates allosteric activation of 5\'-AMP-activated protein kinase (AMPK). Downstream traversal confirms suppression of PEPCK/G6Pase expression within the Hepatic Gluconeogenesis pathway, directly attenuating fasting hyperglycemia in Type 2 Diabetes patients.',
        })
      } else {
        setGraphOutput({
          cypher: `MATCH (d:Drug {name: "Sildenafil"})-[:INHIBITS]->(t:Enzyme {name: "PDE5"})\n-[:ENHANCES]->(p:Pathway {name: "cGMP Signaling"})\n-[:TREATS]->(dis:Disease {name: "Pulmonary Arterial Hypertension"})\nRETURN d, t, p, dis LIMIT 10`,
          hops: 3,
          guardrailStatus: 'VERIFIED_PASS (Parameterized Template Validated)',
          ragasScore: { faithfulness: '0.97', relevancy: '0.95' },
          nodes: [
            { id: 'n1', label: 'Sildenafil', type: 'Drug', color: '#2563EB' },
            { id: 'n2', label: 'PDE5', type: 'Enzyme Target', color: '#059669' },
            { id: 'n3', label: 'cGMP Vasodilation', type: 'Pathway', color: '#D97706' },
            { id: 'n4', label: 'Pulmonary Hypertension', type: 'Disease', color: '#DC2626' },
          ],
          synthesis: 'Sildenafil selectively inhibits phosphodiesterase type 5 (PDE5), promoting accumulation of cyclic guanosine monophosphate (cGMP). The resulting pulmonary vascular smooth muscle relaxation substantially lowers pulmonary arterial pressure.',
        })
      }
    }, 600)
  }

  const handlePredictFailure = () => {
    setPredRunning(true)
    setTimeout(() => {
      setPredRunning(false)
      const isHighRisk = telemetry.exhaustTemp > 800 || telemetry.vibration > 70
      if (isHighRisk) {
        setPredictionResult({
          status: 'ALERT: Turbine Bearing Degradation',
          confidence: '94.2%',
          riskLevel: 'HIGH',
          shapAttribution: [
            { feature: 'Exhaust Temp (°C)', value: `+${((telemetry.exhaustTemp - 600) * 0.0012).toFixed(2)}`, pushed: true, raw: `${telemetry.exhaustTemp}°C` },
            { feature: 'Vibration (Hz)', value: `+${((telemetry.vibration - 40) * 0.008).toFixed(2)}`, pushed: true, raw: `${telemetry.vibration} Hz` },
            { feature: 'Hydraulic PSI', value: `-0.04`, pushed: false, raw: `${telemetry.hydraulicPsi} PSI` },
            { feature: 'Oil Viscosity', value: `+0.07`, pushed: true, raw: `${telemetry.oilViscosity} cSt` },
          ],
          limeDiagnosis: 'Local linear surrogate indicates high-temperature thermal stress combined with abnormal bearing vibration frequencies are the dominant factors triggering this threshold breach.',
        })
      } else {
        setPredictionResult({
          status: 'Nominal Aircraft Component Operation',
          confidence: '98.5%',
          riskLevel: 'LOW',
          shapAttribution: [
            { feature: 'Exhaust Temp (°C)', value: `-0.22`, pushed: false, raw: `${telemetry.exhaustTemp}°C` },
            { feature: 'Vibration (Hz)', value: `-0.18`, pushed: false, raw: `${telemetry.vibration} Hz` },
            { feature: 'Hydraulic PSI', value: `-0.05`, pushed: false, raw: `${telemetry.hydraulicPsi} PSI` },
            { feature: 'Oil Viscosity', value: `-0.08`, pushed: false, raw: `${telemetry.oilViscosity} cSt` },
          ],
          limeDiagnosis: 'All telemetry metrics fall safely within the calibrated baseline. Feature contributions remain negative, indicating stable aero-engine performance.',
        })
      }
    }, 500)
  }

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm p-3 sm:p-6 md:p-8 flex items-center justify-center overflow-y-auto">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="bg-white max-w-4xl w-full rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-xs">
              <Play className="w-4 h-4 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <h3 className="font-display font-bold text-slate-900 text-base">
                  Interactive Live Project Sandbox
                </h3>
              </div>
              <p className="text-xs font-mono text-slate-500">
                Client-side execution simulation of Sakib's production AI/ML architectures
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 pt-3 bg-slate-50 border-b border-slate-200 flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('graph-rag')}
            className={`px-4 py-2 text-xs font-mono font-semibold rounded-t-xl transition-all border-t border-x ${
              activeTab === 'graph-rag'
                ? 'bg-white text-slate-900 border-slate-200 shadow-xs'
                : 'text-slate-500 hover:text-slate-900 border-transparent'
            }`}
          >
            01. Biomedical Graph RAG
          </button>
          <button
            onClick={() => setActiveTab('finsight')}
            className={`px-4 py-2 text-xs font-mono font-semibold rounded-t-xl transition-all border-t border-x ${
              activeTab === 'finsight'
                ? 'bg-white text-slate-900 border-slate-200 shadow-xs'
                : 'text-slate-500 hover:text-slate-900 border-transparent'
            }`}
          >
            02. FinSight AI Forecasting
          </button>
          <button
            onClick={() => setActiveTab('aircraft-failure')}
            className={`px-4 py-2 text-xs font-mono font-semibold rounded-t-xl transition-all border-t border-x ${
              activeTab === 'aircraft-failure'
                ? 'bg-white text-slate-900 border-slate-200 shadow-xs'
                : 'text-slate-500 hover:text-slate-900 border-transparent'
            }`}
          >
            03. Explainable AI (SHAP/LIME)
          </button>
        </div>

        {/* Tab Content Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* TAB 1: BIOMEDICAL GRAPH RAG */}
          {activeTab === 'graph-rag' && (
            <div className="space-y-5">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900">
                    Multi-Hop Knowledge Graph Reasoning Engine
                  </h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">
                    Traversing 2.25M+ relationships across 47K+ biomedical nodes with Cypher guardrails.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono rounded-lg">
                    Docker &amp; Ollama Ready
                  </span>
                  <span className="px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-mono rounded-lg">
                    RAGAS Validated
                  </span>
                </div>
              </div>

              {/* Live Deployment Direct Link Banner */}
              <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-sans text-blue-900">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                  <span>Hosted Live Production Deployment on Hugging Face Spaces:</span>
                </div>
                <a
                  href="https://sakib885-biomedical-graph-rag.static.hf.space/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Open Full Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Query Control */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-600 uppercase">
                  Select Biomedical Research Query:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => setGraphQuery('metformin-ampk')}
                    className={`p-3 text-left rounded-xl border text-xs font-sans transition-all ${
                      graphQuery === 'metformin-ampk'
                        ? 'border-blue-600 bg-blue-50/50 text-slate-900 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-semibold block text-slate-900">Query A (Metabolic Pathway)</span>
                    Metformin → AMPK Target → Gluconeogenesis → Type 2 Diabetes
                  </button>
                  <button
                    onClick={() => setGraphQuery('sildenafil-pde5')}
                    className={`p-3 text-left rounded-xl border text-xs font-sans transition-all ${
                      graphQuery === 'sildenafil-pde5'
                        ? 'border-blue-600 bg-blue-50/50 text-slate-900 shadow-xs'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="font-semibold block text-slate-900">Query B (Drug Repurposing)</span>
                    Sildenafil → PDE5 Inhibitor → cGMP Pathway → Pulmonary Hypertension
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleRunGraphRAG}
                disabled={graphRunning}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-display font-semibold text-xs tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                {graphRunning ? (
                  <>
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Executing Multi-Hop Graph Traversal &amp; Cypher Guardrails...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Execute Graph RAG Multi-Hop Reasoning</span>
                  </>
                )}
              </button>

              {/* Results Console */}
              {graphOutput && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 pt-2"
                >
                  {/* Security Guardrail Pill */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{graphOutput.guardrailStatus}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <span>RAGAS Faithfulness: <strong className="text-slate-900">{graphOutput.ragasScore.faithfulness}</strong></span>
                      <span>Relevancy: <strong className="text-slate-900">{graphOutput.ragasScore.relevancy}</strong></span>
                    </div>
                  </div>

                  {/* Multi-Hop Interactive Node Graph */}
                  <div className="bg-slate-900 text-white p-5 rounded-2xl">
                    <div className="text-[11px] font-mono text-slate-400 mb-3 flex items-center justify-between">
                      <span>// 3-HOP KNOWLEDGE GRAPH SUB-NETWORK</span>
                      <span className="text-emerald-400 font-bold">24 EDGE TYPES INDEXED</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 my-4">
                      {graphOutput.nodes.map((node, i) => (
                        <React.Fragment key={node.id}>
                          <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-800 border border-slate-700 w-full sm:w-auto">
                            <span className="w-3 h-3 rounded-full mb-1.5" style={{ backgroundColor: node.color }} />
                            <span className="text-xs font-display font-bold text-white">{node.label}</span>
                            <span className="text-[10px] font-mono text-slate-400">{node.type}</span>
                          </div>
                          {i < graphOutput.nodes.length - 1 && (
                            <div className="text-slate-500 font-mono text-xs flex items-center">
                              <ArrowRight className="w-4 h-4 rotate-90 sm:rotate-0" />
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Cypher Code Box */}
                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <div className="text-[10px] font-mono text-slate-400 mb-1">GENERATED CYPHER QUERY:</div>
                      <pre className="text-[11px] font-mono text-blue-300 bg-slate-950 p-3 rounded-lg overflow-x-auto">
                        {graphOutput.cypher}
                      </pre>
                    </div>
                  </div>

                  {/* Clinical Synthesis */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                      Synthesized Multi-Entity Clinical Reasoning:
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
                      {graphOutput.synthesis}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* TAB 2: FINSIGHT AI FORECASTING */}
          {activeTab === 'finsight' && (
            <div className="space-y-5">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900">
                    FinSight – AI Financial Forecasting &amp; Anomaly Engine
                  </h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">
                    Analyzing Rs. 184.5 Cr ARR across 50,000+ ledger records. Forecasting turnaround: &lt; 3 mins.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-purple-50 border border-purple-200 text-purple-700 text-[11px] font-mono rounded-lg">
                    Dual SARIMAX / Holt-Winters
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono rounded-lg">
                    MAPE &lt; 4.8%
                  </span>
                </div>
              </div>

              {/* Live Deployment Direct Link Banner */}
              <div className="p-3 bg-purple-50/80 border border-purple-200 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-sans text-purple-900">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
                  <span>Hosted Live Production Deployment on Hugging Face Spaces:</span>
                </div>
                <a
                  href="https://sakib885-finsight.static.hf.space/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Open Full Live App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Controls Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-600 uppercase block mb-1.5">
                    Forecasting Model Architecture:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setForecastModel('SARIMAX')}
                      className={`py-2 px-3 rounded-xl border text-xs font-mono font-semibold ${
                        forecastModel === 'SARIMAX'
                          ? 'border-blue-600 bg-blue-50 text-blue-800'
                          : 'border-slate-200 bg-white text-slate-600'
                      }`}
                    >
                      SARIMAX (Seasonal)
                    </button>
                    <button
                      onClick={() => setForecastModel('Holt-Winters')}
                      className={`py-2 px-3 rounded-xl border text-xs font-mono font-semibold ${
                        forecastModel === 'Holt-Winters'
                          ? 'border-blue-600 bg-blue-50 text-blue-800'
                          : 'border-slate-200 bg-white text-slate-600'
                      }`}
                    >
                      Holt-Winters Exponential
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-600 uppercase block mb-1.5">
                    Forecasting Horizon:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['3', '6', '12'].map((m) => (
                      <button
                        key={m}
                        onClick={() => setForecastHorizon(m)}
                        className={`py-2 rounded-xl border text-xs font-mono font-semibold ${
                          forecastHorizon === m
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 bg-white text-slate-600'
                        }`}
                      >
                        {m} Months
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Forecast Curve Visualizer (SVG) */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500">
                  <span>ARR REVENUE TRAJECTORY (Rs. 184.5 Cr Baseline)</span>
                  <span className="text-slate-900 font-bold">Accuracy: 94.2%</span>
                </div>

                {/* SVG Visual Graph */}
                <div className="w-full h-44 bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-center relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 500 160">
                    {/* Grid lines */}
                    <line x1="0" y1="40" x2="500" y2="40" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="#E2E8F0" strokeDasharray="3 3" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#E2E8F0" strokeDasharray="3 3" />
                    
                    {/* Confidence band for forecast */}
                    <polygon
                      points="260,82 340,65 420,52 490,40 490,95 420,98 340,105 260,82"
                      fill="#DBEAFE"
                      opacity="0.6"
                    />

                    {/* Historical trajectory curve (solid) */}
                    <path
                      d="M 10 130 Q 80 110 140 115 T 260 82"
                      fill="none"
                      stroke="#0F172A"
                      strokeWidth="2.5"
                    />

                    {/* Forecast projection curve (dashed) */}
                    <path
                      d="M 260 82 Q 340 78 420 70 T 490 62"
                      fill="none"
                      stroke="#2563EB"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                    />

                    {/* Model demarcation line */}
                    <line x1="260" y1="10" x2="260" y2="150" stroke="#94A3B8" strokeDasharray="2 2" />
                    <text x="265" y="25" fill="#64748B" fontSize="10" fontFamily="monospace">Forecast Horizon Start</text>
                  </svg>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-slate-900 inline-block" /> Historical (Rs. 184.5 Cr)</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-0.5 bg-blue-600 inline-block" /> {forecastModel} Projection ({forecastHorizon}m)</span>
                  </div>
                  <span className="text-emerald-700 font-semibold">MAPE: 4.6%</span>
                </div>
              </div>

              {/* Anomaly Detection Trigger Button */}
              <div className="pt-1">
                <button
                  onClick={() => setAnomalyFlagged(!anomalyFlagged)}
                  className={`w-full py-3 rounded-xl font-display font-semibold text-xs tracking-wide border transition-all flex items-center justify-center gap-2 ${
                    anomalyFlagged
                      ? 'bg-amber-50 border-amber-300 text-amber-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>{anomalyFlagged ? 'Hide Anomaly Engine Output' : 'Run Ledger Anomaly Detection Engine (Flag Risks)'}</span>
                </button>
              </div>

              {/* Anomaly Output Table */}
              {anomalyFlagged && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-3 pt-2"
                >
                  <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl flex items-center justify-between text-xs font-mono text-amber-900">
                    <span className="font-bold flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      ANOMALY ENGINE: Rs. 3.2 Cr Total Reporting Risk Flagged
                    </span>
                    <span>IQR / Z-Score &gt; 3.0</span>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="bg-slate-100 font-mono text-[11px] text-slate-600">
                        <tr>
                          <th className="p-2.5">Ledger ID</th>
                          <th className="p-2.5">Category</th>
                          <th className="p-2.5">Amount</th>
                          <th className="p-2.5">Z-Score</th>
                          <th className="p-2.5">Severity</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 font-mono text-[11px]">
                        <tr>
                          <td className="p-2.5 text-slate-900">#LEDG-8402</td>
                          <td className="p-2.5 text-slate-600">Disbursement Spike</td>
                          <td className="p-2.5 font-bold text-slate-900">Rs. 1.85 Cr</td>
                          <td className="p-2.5 text-red-600">+3.84</td>
                          <td className="p-2.5"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-md font-bold">CRITICAL</span></td>
                        </tr>
                        <tr>
                          <td className="p-2.5 text-slate-900">#LEDG-9118</td>
                          <td className="p-2.5 text-slate-600">Revenue Recognition Lag</td>
                          <td className="p-2.5 font-bold text-slate-900">Rs. 0.95 Cr</td>
                          <td className="p-2.5 text-amber-600">+3.12</td>
                          <td className="p-2.5"><span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md font-bold">HIGH</span></td>
                        </tr>
                        <tr>
                          <td className="p-2.5 text-slate-900">#LEDG-7391</td>
                          <td className="p-2.5 text-slate-600">Duplicate Vendor Batch</td>
                          <td className="p-2.5 font-bold text-slate-900">Rs. 0.40 Cr</td>
                          <td className="p-2.5 text-amber-600">+2.95</td>
                          <td className="p-2.5"><span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded-md font-bold">MEDIUM</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* TAB 3: EXPLAINABLE AI AIRCRAFT FAILURE */}
          {activeTab === 'aircraft-failure' && (
            <div className="space-y-5">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-display font-bold text-slate-900">
                    Explainable AI Aircraft Failure Prediction System
                  </h4>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">
                    SHAP &amp; LIME interpretability pipeline reducing domain diagnostic cycles by 40%.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-mono rounded-lg">
                    90%+ Multi-Class Accuracy
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-mono rounded-lg">
                    SHAP / LIME Auditable
                  </span>
                </div>
              </div>

              {/* Sensor Telemetry Sliders */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold text-slate-600 uppercase flex items-center justify-between">
                  <span>Aero-Engine Sensor Telemetry Controls:</span>
                  <button
                    onClick={() => setTelemetry({ vibration: 45, exhaustTemp: 620, hydraulicPsi: 2950, oilViscosity: 16 })}
                    className="text-[11px] text-blue-600 hover:underline flex items-center gap-1 font-mono"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset Nominal
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Exhaust Temperature */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="font-semibold text-slate-800">Exhaust Gas Temp (°C)</span>
                      <span className="font-mono text-slate-900 font-bold">{telemetry.exhaustTemp} °C</span>
                    </div>
                    <input
                      type="range"
                      min="400"
                      max="950"
                      value={telemetry.exhaustTemp}
                      onChange={(e) => setTelemetry({ ...telemetry, exhaustTemp: Number(e.target.value) })}
                      className="w-full accent-slate-900 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>400°C</span>
                      <span>Normal: 600°C</span>
                      <span>950°C</span>
                    </div>
                  </div>

                  {/* Vibration Frequency */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="font-semibold text-slate-800">Vibration Frequency (Hz)</span>
                      <span className="font-mono text-slate-900 font-bold">{telemetry.vibration} Hz</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="120"
                      value={telemetry.vibration}
                      onChange={(e) => setTelemetry({ ...telemetry, vibration: Number(e.target.value) })}
                      className="w-full accent-slate-900 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>20 Hz</span>
                      <span>Nominal: 40 Hz</span>
                      <span>120 Hz</span>
                    </div>
                  </div>

                  {/* Hydraulic Pressure */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="font-semibold text-slate-800">Hydraulic Pressure (PSI)</span>
                      <span className="font-mono text-slate-900 font-bold">{telemetry.hydraulicPsi} PSI</span>
                    </div>
                    <input
                      type="range"
                      min="1800"
                      max="3400"
                      value={telemetry.hydraulicPsi}
                      onChange={(e) => setTelemetry({ ...telemetry, hydraulicPsi: Number(e.target.value) })}
                      className="w-full accent-slate-900 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>1800 PSI</span>
                      <span>Nominal: 3000 PSI</span>
                      <span>3400 PSI</span>
                    </div>
                  </div>

                  {/* Oil Viscosity */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="font-semibold text-slate-800">Oil Viscosity (cSt)</span>
                      <span className="font-mono text-slate-900 font-bold">{telemetry.oilViscosity} cSt</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="25"
                      value={telemetry.oilViscosity}
                      onChange={(e) => setTelemetry({ ...telemetry, oilViscosity: Number(e.target.value) })}
                      className="w-full accent-slate-900 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>5 cSt</span>
                      <span>Nominal: 16 cSt</span>
                      <span>25 cSt</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Predict Failure Button */}
              <button
                onClick={handlePredictFailure}
                disabled={predRunning}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-display font-semibold text-xs tracking-wide shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                {predRunning ? (
                  <>
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Computing Random Forest &amp; SHAP Shapley Explanations...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Run Failure Classification &amp; SHAP/LIME Explainability</span>
                  </>
                )}
              </button>

              {/* Prediction & SHAP Breakdown */}
              {predictionResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4 pt-2"
                >
                  {/* Status Banner */}
                  <div className={`p-4 rounded-xl border flex items-center justify-between ${
                    predictionResult.riskLevel === 'HIGH'
                      ? 'bg-red-50 border-red-200 text-red-900'
                      : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  }`}>
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider">Classification Output:</div>
                      <div className="text-base font-display font-bold">{predictionResult.status}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono uppercase">Confidence:</div>
                      <div className="text-base font-mono font-bold">{predictionResult.confidence}</div>
                    </div>
                  </div>

                  {/* SHAP Feature Attribution Waterfall */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-slate-700 uppercase">SHAP Waterfall Force Attribution Breakdown:</span>
                      <span className="text-slate-500">Base f(x) = 0.05</span>
                    </div>

                    <div className="space-y-2">
                      {predictionResult.shapAttribution.map((attr, aIdx) => (
                        <div key={aIdx} className="bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-slate-800">{attr.feature}</span>
                            <span className="font-mono text-slate-400">({attr.raw})</span>
                          </div>
                          <div className="flex items-center gap-2 font-mono">
                            <span className={`font-bold ${attr.pushed ? 'text-red-600' : 'text-emerald-600'}`}>
                              SHAP: {attr.value}
                            </span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                              attr.pushed ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                            }`}>
                              {attr.pushed ? '+ Risk' : '- Safe'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LIME Interpretability Summary */}
                  <div className="p-4 rounded-xl bg-slate-900 text-white">
                    <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center justify-between">
                      <span>// LIME MODEL-AGNOSTIC LOCAL FIDELITY AUDIT</span>
                      <span className="text-emerald-400">R² = 0.92</span>
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {predictionResult.limeDiagnosis}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>Engineered by Sakib Sayyed</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-semibold"
          >
            Close Sandbox
          </button>
        </div>
      </motion.div>
    </div>
  )
}
