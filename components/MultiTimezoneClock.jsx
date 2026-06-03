import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const MultiTimezoneClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timezones = [
    { name: 'UTC', offset: 'UTC' },
    { name: 'New York', offset: 'America/New_York' },
    { name: 'Los Angeles', offset: 'America/Los_Angeles' },
    { name: 'London', offset: 'Europe/London' },
    { name: 'Paris', offset: 'Europe/Paris' },
    { name: 'Tokyo', offset: 'Asia/Tokyo' },
    { name: 'Sydney', offset: 'Australia/Sydney' },
    { name: 'Dubai', offset: 'Asia/Dubai' },
    { name: 'Hong Kong', offset: 'Asia/Hong_Kong' },
    { name: 'Singapore', offset: 'Asia/Singapore' },
    { name: 'Mumbai', offset: 'Asia/Kolkata' },
    { name: 'Toronto', offset: 'America/Toronto' },
  ];

  const getTimeInTimezone = (timezone) => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
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
      });
      return formatter.format(time);
    } catch (error) {
      return 'Invalid';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-10 h-10 text-purple-400" />
            <h1 className="text-4xl font-bold text-white">Global Time Zone Clock</h1>
          </div>
          <p className="text-gray-300 text-lg">Real-time synchronized across world zones</p>
        </div>

        {/* Main Clock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {timezones.map((tz, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {/* Timezone Label */}
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {tz.name}
                </h2>
                <p className="text-sm text-gray-400">{tz.offset}</p>
              </div>

              {/* Digital Time Display */}
              <div className="mb-3">
                <div className="text-4xl font-mono font-bold text-purple-300 tracking-wider">
                  {getTimeInTimezone(tz.offset)}
                </div>
              </div>

              {/* Date Display */}
              <div className="text-sm text-gray-400 font-mono">
                {getDateInTimezone(tz.offset)}
              </div>

              {/* Animated Border Accent */}
              <div className="mt-4 h-1 bg-gradient-to-r from-purple-500/0 via-purple-400 to-purple-500/0 rounded-full group-hover:shadow-md group-hover:shadow-purple-400/50 transition-all"></div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Current UTC Time */}
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-blue-300 mb-2">UNIVERSAL TIME</h3>
            <div className="text-3xl font-mono font-bold text-white">
              {getTimeInTimezone('UTC')}
            </div>
            <p className="text-xs text-gray-400 mt-2">Coordinated Universal Time</p>
          </div>

          {/* Update Status */}
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-green-300 mb-2">STATUS</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Live Sync</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">Updated every second</p>
          </div>

          {/* Timezone Count */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-purple-300 mb-2">COVERAGE</h3>
            <div className="text-3xl font-bold text-white">
              {timezones.length}
            </div>
            <p className="text-xs text-gray-400 mt-2">Time zones monitored</p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 p-6 bg-gray-900/50 border border-gray-700/50 rounded-xl">
          <p className="text-sm text-gray-400 text-center">
            🌍 Displaying current time in {timezones.length} major global time zones • All times synchronized in real-time
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultiTimezoneClock;
