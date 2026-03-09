'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

// Counties where LPK has active leadership / elected presence
const LPK_PRESENCE: Record<string, 'strong' | 'active' | 'growing'> = {
  Nairobi: 'strong',
  Mombasa: 'strong',
  Kisumu: 'strong',
  Nakuru: 'strong',
  Uasin: 'strong', // Uasin Gishu (Eldoret)
  'Uasin Gishu': 'strong',
  Meru: 'active',
  Kisii: 'active',
  Kakamega: 'active',
  Bungoma: 'active',
  Machakos: 'active',
  Kiambu: 'active',
  Kilifi: 'active',
  Migori: 'active',
  Siaya: 'active',
  Homa: 'active', // Homa Bay
  'Homa Bay': 'active',
  Nyeri: 'growing',
  Kitui: 'growing',
  Makueni: 'growing',
  Murang: 'growing', // Murang'a
  "Murang'a": 'growing',
  Embu: 'growing',
  Nyandarua: 'growing',
  Laikipia: 'growing',
  Nandi: 'growing',
  Kericho: 'growing',
  Bomet: 'growing',
};

const LEVEL_CONFIG = {
  strong: { fill: '#DC2626', label: 'Strong Presence' },
  active: { fill: '#ef4444' },
  growing: { fill: '#fca5a5' },
  none:    { fill: '#1f1f1f' },
};

function getPresenceLevel(countyName: string): 'strong' | 'active' | 'growing' | 'none' {
  if (!countyName) return 'none';
  const normalized = countyName.trim();
  for (const key of Object.keys(LPK_PRESENCE)) {
    if (normalized.toLowerCase().startsWith(key.toLowerCase()) ||
        key.toLowerCase().startsWith(normalized.toLowerCase())) {
      return LPK_PRESENCE[key];
    }
  }
  return 'none';
}

type TooltipState = { county: string; level: 'strong' | 'active' | 'growing' | 'none' } | null;

export default function KenyaPresenceMap() {
  const [tooltip, setTooltip] = useState<TooltipState>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const strongCount = Object.values(LPK_PRESENCE).filter(v => v === 'strong').length;
  const activeCount = Object.values(LPK_PRESENCE).filter(v => v === 'active').length;
  const growingCount = Object.values(LPK_PRESENCE).filter(v => v === 'growing').length;

  return (
    <div className="relative w-full select-none">
      {/* Map */}
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{ rotate: [-37.8, -0.2, 0], scale: 3100 }}
        style={{ width: '100%', height: '100%' }}
        className="w-full"
      >
        <Geographies geography="/geojson/kenya-counties.geojson">
          {({ geographies }) =>
            geographies.map((geo) => {
              const name: string = String(geo.properties?.NAME_1 ?? '');
              const level = getPresenceLevel(name);
              const isHovered = hovered === name;

              const fill = isHovered
                ? '#ffffff'
                : level === 'strong'
                  ? '#DC2626'
                  : level === 'active'
                    ? '#ef4444'
                    : level === 'growing'
                      ? '#fca5a5'
                      : '#1f1f1f';

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setHovered(name);
                    setTooltip({ county: name, level });
                  }}
                  onMouseLeave={() => {
                    setHovered(null);
                    setTooltip(null);
                  }}
                  style={{
                    default: {
                      fill,
                      stroke: '#8fbb44',
                      strokeWidth: 0.6,
                      outline: 'none',
                      transition: 'fill 0.2s ease',
                    },
                    hover: {
                      fill: '#ffffff',
                      stroke: '#DC2626',
                      strokeWidth: 1,
                      outline: 'none',
                      cursor: 'pointer',
                    },
                    pressed: {
                      fill: '#DC2626',
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {/* Tooltip */}
      {tooltip && (
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl px-3.5 py-2.5 text-sm pointer-events-none z-20 min-w-[140px]">
          <p className="text-white font-black text-sm">{tooltip.county}</p>
          <p className="text-[11px] mt-0.5" style={{
            color: tooltip.level === 'strong' ? '#DC2626'
                 : tooltip.level === 'active'  ? '#ef4444'
                 : tooltip.level === 'growing' ? '#fca5a5'
                 : '#6b7280'
          }}>
            {tooltip.level === 'strong' ? '● Strong Presence'
           : tooltip.level === 'active'  ? '● Active Chapter'
           : tooltip.level === 'growing' ? '● Growing'
           : '○ Expanding Soon'}
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-3 flex flex-wrap items-center gap-3 justify-center">
        {[
          { color: '#DC2626', label: `Strong (${strongCount})` },
          { color: '#ef4444', label: `Active (${activeCount})` },
          { color: '#fca5a5', label: `Growing (${growingCount})` },
          { color: '#1f1f1f', label: 'Expanding', border: '1px solid #333' },
        ].map(({ color, label, border }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ background: color, border: border ?? 'none' }}
            />
            <span className="text-[11px] text-gray-500 font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
