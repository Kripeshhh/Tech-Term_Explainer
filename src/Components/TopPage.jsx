import React, { useState } from "react";
import Navbar from "./Navbar";

// Main list for "Term Lists"
const techTerms = [
  "HTML",
  "CSS",
  "JavaScript",
  "API",
  "HTTP",
  "HTTPS",
  "Framework",
  "Database",
  "Cloud Computing",
  "Artificial Intelligence (AI)",
  "Machine Learning (ML)",
  "Blockchain",
  "Internet of Things (IoT)",
  "Cybersecurity",
  "Encryption",
  "Algorithm",
  "Data Structure",
  "Version Control",
  "Containerization",
  "DevOps",
  "Responsive Design",
  "Progressive Web App (PWA)",
  "SaaS (Software as a Service)",
  "Virtual Machine (VM)",
  "Microservices",
  "Big Data",
  "Agile Methodology",
  "CSS Grid",
  "JavaScript Promises",
  "Event Loop",
  "GraphQL",
  "Web Assembly (Wasm)",
  "OAuth",
  "JSON",
  "REST API",
  "WebSocket",
  "SSL/TLS",
  "CDN (Content Delivery Network)",
  "Web Hosting",
  "Cache",
  "DNS (Domain Name System)",
  "Latency",
  "Server",
  "Client",
  "Open Source",
  "Full Stack",
  "Library",
  "Debugging",
  "IDE (Integrated Development Environment)",
  "CI/CD (Continuous Integration/Delivery)",
  "DOM (Document Object Model)",
  "Cookies",
  "DNS Propagation",
  "Deep Learning",
  "Training vs Inference",
  "Bias in AI",
  "Prompt Engineering",
  "LLM (Large Language Model)",
  "Malware",
  "Zero Trust",
  "Brute Force Attack",
  "DDoS (Distributed Denial of Service)",
  "Cross-platform",
  "APK/IPA",
  "Data Warehouse",
  "Data Mining",
  "Structured vs Unstructured Data",
  "Cloud Storage",
  "NFT (Non-Fungible Token)",
  "Edge Computing",
  "AR/VR (Augmented/Virtual Reality)",
  "5G",
  "Decentralized Apps (dApps)",
  "Quantum Computing",
];

// Subset list for "Trending Topics"
const trendyTerms = [
  "Artificial Intelligence (AI)",
  "Machine Learning (ML)",
  "Blockchain",
  "Internet of Things (IoT)",
  "Cybersecurity",
  "Cloud Computing",
  "DevOps",
  "Progressive Web App (PWA)",
  "GraphQL",
  "WebAssembly (Wasm)",
  "Prompt Engineering",
  "LLM (Large Language Model)",
  "NFT (Non-Fungible Token)",
  "Edge Computing",
  "AR/VR (Augmented/Virtual Reality)",
  "5G",
  "Decentralized Apps (dApps)",
  "Quantum Computing",
];

const TopPage = ({ termclick }) => {
  const [page, setPage] = useState(null);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar onNavClick={setPage} />

      <div className="flex flex-col items-center justify-center flex-grow px-4 py-12 text-center">
        {/* Term List Page */}
        {page === "hi" && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-amber-400 text-3xl font-bold mb-8">
              All Tech Terms
              <h6 className="text-[12px] text-gray-500 mt-2">
                Try clicking one ?
              </h6>
            </h2>
            <div
              className="flex flex-wrap justify-center gap-3"
              style={{
                color: "white",
                fontSize: "14px",
                lineHeight: "1.3",
              }}
            >
              {techTerms.map((term, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 bg-gray-800 rounded-md border border-gray-700 hover:bg-gray-700 transition-colors cursor-default"
                  style={{
                    whiteSpace: "nowrap",
                    userSelect: "none",
                  }}
                  onClick={() => {
                    termclick(term);
                  }}
                >
                  {term}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Trending Topics Page */}
        {page === "bye" && (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-amber-400 text-3xl font-bold mb-8">
              Trending Topics
            </h2>
            <div
              className="flex flex-wrap justify-center gap-3"
              style={{
                color: "white",
                fontSize: "14px",
                lineHeight: "1.3",
              }}
            >
              {trendyTerms.map((term, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 bg-gray-800 rounded-md border border-gray-700 hover:bg-gray-700 transition-colors cursor-default"
                  style={{
                    whiteSpace: "nowrap",
                    userSelect: "none",
                  }}
                  onClick={() => {
                    termclick(term);
                  }}
                >
                  {term}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Default Home Page */}
        {!page && (
          <div className="max-w-6xl mx-auto">
            <h1 className="text-white font-bold text-6xl sm:text-7xl md:text-8xl leading-tight mb-6">
              TECH TERM EXPLAINER
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
              Simplifying complex technology terms into clear,
              easy-to-understand explanations for everyone.
            </p>
            <div className="text-amber-400 text-5xl mt-12 animate-bounce-rotated">
              <span className="inline-block transform rotate-90">→</span>
            </div>
          </div>
        )}
      </div>

      {/* Animation style */}
      <style jsx>{`
        @keyframes bounce-rotated {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-bounce-rotated {
          animation: bounce-rotated 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default TopPage;
