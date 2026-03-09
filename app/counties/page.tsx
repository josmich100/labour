"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { COUNTIES } from "@/lib/data/counties";
import { Search, MapPin, Phone, Users } from "lucide-react";

const REGIONS = ["All", "Nairobi", "Central", "Coast", "Eastern", "North Eastern", "Nyanza", "Rift Valley", "Western"];

export default function CountiesPage() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All");

  const filtered = useMemo(
    () =>
      COUNTIES.filter((c) => {
        const matchQ = c.name.toLowerCase().includes(query.toLowerCase()) || c.coordinator.toLowerCase().includes(query.toLowerCase());
        const matchR = region === "All" || c.region === region;
        return matchQ && matchR;
      }),
    [query, region]
  );

  const totalMembers = COUNTIES.reduce((sum, c) => sum + c.members, 0);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-64 flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=1920"
          alt="Counties"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-red-400 text-sm font-bold uppercase tracking-widest mb-2">
            Across Kenya
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            All 47 Counties
          </h1>
          <p className="text-gray-300 text-base mt-2">
            {totalMembers.toLocaleString()} members spread across Kenya.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <div className="bg-red-700 text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold">47</div>
            <div className="text-red-200 text-xs uppercase tracking-widest mt-1">Counties</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{totalMembers.toLocaleString()}</div>
            <div className="text-red-200 text-xs uppercase tracking-widest mt-1">Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold">8</div>
            <div className="text-red-200 text-xs uppercase tracking-widest mt-1">Regions</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search counties or coordinators..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  region === r
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Counties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-gray-500 text-sm mb-6">
          Showing <strong>{filtered.length}</strong> counties
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((county) => (
            <div
              key={county.id}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3
                    className="font-bold text-gray-900 text-base group-hover:text-red-600 transition-colors"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {county.name}
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">{county.region}</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <strong className="text-gray-700">Coordinator:</strong> {county.coordinator}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gray-400" />
                  <a href={`tel:${county.phone}`} className="hover:text-red-600 transition-colors">
                    {county.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-red-500" />
                  <span>
                    <strong className="text-red-600">
                      {county.members.toLocaleString()}
                    </strong>{" "}
                    members
                  </span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-400">
                Est. {county.established}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p className="text-lg font-medium">No counties found.</p>
            <button
              onClick={() => { setQuery(""); setRegion("All"); }}
              className="mt-4 text-red-600 underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
