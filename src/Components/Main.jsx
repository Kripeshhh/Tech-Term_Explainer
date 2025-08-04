import React, { useEffect, useState } from "react";
import { InfoAll } from "../InfoStorage/Information";

const Main = ({ techTerm }) => {
  const [query, setQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    if (techTerm) {
      setQuery(techTerm);
    }
  }, [techTerm]);

  const filteredData = InfoAll.filter((item) =>
    item.Term.toLowerCase().includes(query.toLowerCase())
  );

  const toggleExpand = (index) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-w-4xl mx-auto p-8">
      {/* Search Input */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search terms..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 pl-12 bg-gray-900 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all text-white placeholder-gray-400 shadow-lg"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Terms List */}
      <div className="space-y-5">
        {filteredData.map((item, index) => {
          const isExpanded = expandedItems.includes(index);

          return (
            <div
              key={index}
              className="border border-gray-500 rounded-xl overflow-hidden shadow-lg bg-gray-900 transition-all hover:border-amber-500/50"
            >
              {/* Term Header */}
              <div
                onClick={() => toggleExpand(index)}
                className="flex justify-between items-center p-5 bg-gray-800 hover:bg-gray-700 cursor-pointer transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-8 bg-amber-500 rounded-full"></div>
                  <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.Term}
                  </h2>
                </div>
                <span
                  className={`transform transition-transform duration-300 text-amber-400 text-xl ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="p-5 bg-gray-900 border-t border-gray-300 space-y-6">
                  {/* Explanation */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 h-full w-1 bg-amber-500 rounded-full"></div>
                    <div className="pl-4">
                      <h3 className="font-bold text-lg text-amber-400 mb-2 flex items-center">
                        <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                        Explanation
                      </h3>
                      <p className="text-gray-300 pl-5 border-l border-gray-500">
                        {item.Explanation}
                      </p>
                    </div>
                  </div>

                  {/* Key Uses */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 h-full w-1 bg-amber-500 rounded-full"></div>
                    <div className="pl-4">
                      <h3 className="font-bold text-lg text-amber-400 mb-2 flex items-center">
                        <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                        Key Uses
                      </h3>
                      <ul className="space-y-2 pl-5 border-l border-gray-500">
                        {item.KeyUses.map((use, i) => (
                          <li
                            key={i}
                            className="text-gray-300 flex items-start"
                          >
                            <span className="text-amber-400 mr-2">•</span>
                            {use}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Real World Example */}
                  <div className="relative">
                    <div className="absolute -left-5 top-0 h-full w-1 bg-amber-500 rounded-full"></div>
                    <div className="pl-4">
                      <h3 className="font-bold text-lg text-amber-400 mb-2 flex items-center">
                        <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                        Real World Example
                      </h3>
                      <p className="text-gray-300 pl-5 border-l border-gray-500">
                        {item.RealWorldExample}
                      </p>
                    </div>
                  </div>

                  {/* Quick Fact */}
                  <div className="relative p-4 bg-gray-800 rounded-lg border border-gray-500">
                    <div className="absolute -top-2 left-6 px-2 bg-amber-500 text-black text-xs font-bold rounded">
                      QUICK FACT
                    </div>
                    <p className="text-amber-300 italic pt-2">
                      {item.QuickFact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
