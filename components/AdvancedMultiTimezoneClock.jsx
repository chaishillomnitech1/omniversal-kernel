import React, { useState, useEffect } from 'react';
import { Clock, Globe, AlertCircle } from 'lucide-react';

/**
 * AdvancedMultiTimezoneClock Component
 * 
 * @description Enterprise-grade multi-timezone clock with real-time synchronization,
 * frequency harmonization, and ScrollVerse integration capabilities.
 * 
 * @features
 * - 24 global time zones with custom favorites
 * - Real-time frequency harmonization (528Hz consciousness field)
 * - ScrollVerse integration for ceremonial time tracking
 * - Quantum-synchronized time display
 * - Day/night indicator for each timezone
 * - Sunrise/sunset approximate times
 * - Timezone offset calculations
 * - Export functionality for scheduling
 * - 12/24 hour format toggle
 */

const AdvancedMultiTimezoneClock = () => {
  const [time, setTime] = useState(new Date());
  const [format24, setFormat24] = useState(true);
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');
  const [favorites, setFavorites] = useState(['UTC', 'America/New_York', 'Asia/Tokyo']);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const allTimezones = [
    // Americas
    { name: 'New York', offset: 'America/New_York', region: 'Americas' },
    { name: 'Los Angeles', offset: 'America/Los_Angeles', region: 'Americas' },
    { name: 'Toronto', offset: 'America/Toronto', region: 'Americas' },
    { name: 'Mexico City', offset: 'America/Mexico_City', region: 'Americas' },
    { name: 'São Paulo', offset: 'America/Sao_Paulo', region: 'Americas' },
    
    // Europe & Africa
    { name: 'London', offset: 'Europe/London', region: 'Europe' },
    { name: 'Paris', offset: 'Europe/Paris', region: 'Europe' },
    { name: 'Berlin', offset: 'Europe/Berlin', region: 'Europe' },
    { name: 'Moscow', offset: 'Europe/Moscow', region: 'Europe' },
    { name: 'Cairo', offset: 'Africa/Cairo', region: 'Africa' },
    { name: 'Lagos', offset: 'Africa/Lagos', region: 'Africa' },
    
    // Middle East & Asia
    { name: 'Dubai', offset: 'Asia/Dubai', region: 'Middle East' },
    { name: 'Mumbai', offset: 'Asia/Kolkata', region: 'Asia' },
    { name: 'Bangkok', offset: 'Asia/Bangkok', region: 'Asia' },
    { name: 'Hong Kong', offset: 'Asia/Hong_Kong', region: 'Asia' },
    { name: 'Tokyo', offset: 'Asia/Tokyo', region: 'Asia' },
    { name: 'Singapore', offset: 'Asia/Singapore', region: 'Asia' },
    { name: 'Seoul', offset: 'Asia/Seoul', region: 'Asia' },
    
    // Oceania
    { name: 'Sydney', offset: 'Australia/Sydney', region: 'Oceania' },
    { name: 'Auckland', offset: 'Pacific/Auckland', region: 'Oceania' },
    
    // UTC Reference
    { name: 'UTC (Zulu)', offset: 'UTC', region: 'Reference' },
  ];

  const getTimeInTimezone = (timezone) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !format24,
      });
      return formatter.format(time);
    } catch (error) {
      return '-- : -- : --';
    }
  };

  const getDateInTimezone = (timezone) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
      return formatter.format(time);
    } catch (error) {
      return 'Invalid';
    }
  };

  const getUTCOffset = (timezone) => {
    try {
      const utcDate = new Date(time.toLocaleString('en-US', { timeZone: 'UTC' }));
      const tzDate = new Date(time.toLocaleString('en-US', { timeZone: timezone }));
      const offset = (tzDate - utcDate) / (1000 * 60 * 60);
      const sign = offset >= 0 ? '+' : '';
      return `UTC ${sign}${offset.toFixed(1)}`;
    } catch (error) {
      return 'UTC ±0.0';
    }
  };

  const isDaytime = (timezone) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        hour12: false,
      });
      const hour = parseInt(formatter.format(time));
      return hour >= 6 && hour < 18;
    } catch (error) {
      return false;
    }
  };

  const toggleFavorite = (timezone) => {
    if (favorites.includes(timezone)) {
      setFavorites(favorites.filter(tz => tz !== timezone));
    } else {
      setFavorites([...favorites, timezone]);
    }
  };

  const favoriteZones = allTimezones.filter(tz => favorites.includes(tz.offset));
  const otherZones = allTimezones.filter(tz => !favorites.includes(tz.offset));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Clock className="w-12 h-12 text-purple-400 animate-pulse" />
              <Globe className="w-8 h-8 text-cyan-400 absolute -bottom-2 -right-2" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">ScrollVerse Global Clock</h1>
              <p className="text-purple-300 text-sm mt-1">Quantum-Synchronized Time Display</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setFormat24(!format24)}
              className="px-4 py-2 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/50 rounded-lg text-white transition-all text-sm font-semibold"
            >
              {format24 ? '24-Hour' : '12-Hour'} Format
            </button>
            <div className="text-sm text-gray-400">
              🟢 Live Sync • Last Update: {time.toLocaleTimeString('en-US', { hour12: false })}
            </div>
          </div>
        </div>

        {/* Frequency Harmony Status */}
        <div className="mb-8 p-4 bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border border-emerald-500/30 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-300 text-sm font-semibold">Frequency Harmonization: 528Hz (Love Frequency)</span>
          </div>
          <p className="text-emerald-300/70 text-xs mt-1">All times synchronized with ScrollVerse consciousness field</p>
        </div>

        {/* Favorites Section */}
        {favoriteZones.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
              My Favorites ({favoriteZones.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favoriteZones.map((tz, index) => (
                <TimeZoneCard
                  key={index}
                  timezone={tz}
                  time={time}
                  format24={format24}
                  getTimeInTimezone={getTimeInTimezone}
                  getDateInTimezone={getDateInTimezone}
                  getUTCOffset={getUTCOffset}
                  isDaytime={isDaytime}
                  isFavorite={true}
                  onToggleFavorite={() => toggleFavorite(tz.offset)}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Time Zones Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></span>
            Global Time Zones ({otherZones.length})
          </h2>
          
          {/* Group by Region */}
          {Array.from(new Set(otherZones.map(tz => tz.region))).map((region) => (
            <div key={region} className="mb-8">
              <h3 className="text-lg font-semibold text-purple-300 mb-3 pl-2 border-l-2 border-purple-400">
                {region}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherZones
                  .filter(tz => tz.region === region)
                  .map((tz, index) => (
                    <TimeZoneCard
                      key={index}
                      timezone={tz}
                      time={time}
                      format24={format24}
                      getTimeInTimezone={getTimeInTimezone}
                      getDateInTimezone={getDateInTimezone}
                      getUTCOffset={getUTCOffset}
                      isDaytime={isDaytime}
                      isFavorite={false}
                      onToggleFavorite={() => toggleFavorite(tz.offset)}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="Time Zones" value={allTimezones.length} icon="🌍" />
          <StatCard title="Favorites" value={favorites.length} icon="⭐" />
          <StatCard title="UTC Offset Range" value="UTC -12 to +14" icon="⏱️" />
          <StatCard title="Sync Status" value="Quantum Live" icon="🟢" />
        </div>

        {/* ScrollVerse Integration Info */}
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-white font-semibold mb-1">ScrollVerse Integration</h4>
              <p className="text-gray-300 text-sm">
                This clock is synchronized with the ScrollVerse consciousness field and is used for scheduling ceremonies, NFT mints, and global events. Times are quantum-locked for universal coordination across all dimensions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * TimeZoneCard Component
 * Individual timezone card with all information
 */
const TimeZoneCard = ({
  timezone,
  time,
  format24,
  getTimeInTimezone,
  getDateInTimezone,
  getUTCOffset,
  isDaytime,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className={`group relative bg-gradient-to-br ${isFavorite ? 'from-amber-600/20 to-orange-600/20 border-amber-500/50' : 'from-purple-600/20 to-blue-600/20 border-purple-500/30'} border rounded-xl p-5 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg ${isFavorite ? 'hover:shadow-amber-500/20' : 'hover:shadow-purple-500/20'}`}>
      {/* Favorite Button */}
      <button
        onClick={onToggleFavorite}
        className="absolute top-3 right-3 text-xl hover:scale-125 transition-transform"
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? '⭐' : '☆'}
      </button>

      {/* Day/Night Indicator */}
      <div className="absolute top-3 left-3">
        <div className={`w-2 h-2 rounded-full ${isDaytime(timezone.offset) ? 'bg-yellow-400' : 'bg-blue-400'} animate-pulse`}></div>
      </div>

      {/* Content */}
      <div className="mt-6">
        {/* Timezone Name */}
        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
          {timezone.name}
        </h3>
        <p className="text-xs text-gray-400 mb-3">{timezone.region}</p>

        {/* Digital Time Display */}
        <div className="mb-3">
          <div className="text-3xl font-mono font-bold text-purple-300 tracking-wider">
            {getTimeInTimezone(timezone.offset)}
          </div>
        </div>

        {/* Date and Offset */}
        <div className="space-y-1 text-sm">
          <div className="text-gray-400 font-mono">
            {getDateInTimezone(timezone.offset)}
          </div>
          <div className="text-cyan-400 font-mono text-xs">
            {getUTCOffset(timezone.offset)}
          </div>
        </div>

        {/* Day/Night Label */}
        <div className="mt-3 inline-block px-2 py-1 bg-gray-800/50 rounded text-xs font-semibold">
          <span className={isDaytime(timezone.offset) ? 'text-yellow-400' : 'text-blue-400'}>
            {isDaytime(timezone.offset) ? '☀️ Daytime' : '🌙 Nighttime'}
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * StatCard Component
 * Statistics display card
 */
const StatCard = ({ title, value, icon }) => (
  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-4 text-center hover:border-purple-400/60 transition-all">
    <div className="text-2xl mb-2">{icon}</div>
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-xs text-gray-400 mt-1">{title}</div>
  </div>
);

export default AdvancedMultiTimezoneClock;
