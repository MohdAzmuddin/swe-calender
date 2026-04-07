import React, { useState, useMemo } from 'react';
import { 
  format, addMonths, subMonths, startOfMonth, endOfMonth, 
  startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, isWithinInterval 
} from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WallCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2022, 0, 1)); // Set to Jan 2022 to match image
  const [range, setRange] = useState({ start: null, end: null });

  const calendarGrid = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Starts on Monday per image
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let day = startDate;
    while (day <= endDate) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        days.push(day);
        day = addDays(day, 1);
      }
      rows.push(days);
    }
    return rows;
  }, [currentMonth]);

  const onDateClick = (day) => {
    if (!range.start || (range.start && range.end)) setRange({ start: day, end: null });
    else if (day < range.start) setRange({ start: day, end: null });
    else setRange({ ...range, end: day });
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 min-h-screen">
      
      {/* 1. SPIRAL BINDING EFFECT */}
      <div className="w-[450px] flex justify-center gap-1 mb-[-10px] z-10">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-2 h-6 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full border-t border-gray-300" />
        ))}
      </div>

      {/* 2. CALENDAR BODY */}
      <div className="w-[500px] bg-white shadow-2xl flex flex-col overflow-hidden border-t-8 border-gray-800">
        
        {/* HERO IMAGE WITH GEOMETRIC OVERLAY */}
        <div className="relative h-64">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" 
            className="w-full h-full object-cover" 
            alt="Mountains"
          />
          {/* Blue Geometric Shapes */}
          <div className="absolute bottom-0 w-full h-24 bg-sky-500 clip-path-custom opacity-90 flex flex-col justify-center items-end pr-8 text-white">
            <span className="text-xl font-light leading-none">2022</span>
            <span className="text-3xl font-bold uppercase tracking-wider">{format(currentMonth, 'MMMM')}</span>
          </div>
        </div>

        {/* BOTTOM SECTION: NOTES & GRID */}
        <div className="flex p-8 pt-12 gap-8">
          
          {/* Notes Section */}
          <div className="w-1/3 border-r border-gray-100 pr-4">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase mb-4">Notes</h3>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border-b border-gray-200 w-full h-4" />
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-7 text-center mb-4">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => (
                <div key={d} className={`text-[10px] font-extrabold ${d === 'SAT' || d === 'SUN' ? 'text-sky-500' : 'text-gray-500'}`}>
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-2">
              {calendarGrid.flat().map((day, i) => {
                const isSelected = isSameDay(day, range.start) || isSameDay(day, range.end);
                const inRange = range.start && range.end && isWithinInterval(day, { start: range.start, end: range.end });
                const isWeekend = format(day, 'i') > 5;

                return (
                  <div 
                    key={i} 
                    onClick={() => onDateClick(day)}
                    className={`
                      text-center py-1 cursor-pointer text-sm font-semibold transition-all
                      ${!isSameMonth(day, currentMonth) ? 'text-gray-200' : isWeekend ? 'text-sky-400' : 'text-gray-700'}
                      ${inRange ? 'bg-sky-50' : ''}
                      ${isSelected ? 'bg-sky-500 !text-white rounded-full scale-110 shadow-md' : ''}
                    `}
                  >
                    {format(day, 'd')}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Controls (Floating or at Bottom) */}
        <div className="flex justify-center gap-10 py-4 bg-gray-50 border-t border-gray-100">
           <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}><ChevronLeft className="text-gray-400 hover:text-sky-500" /></button>
           <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}><ChevronRight className="text-gray-400 hover:text-sky-500" /></button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .clip-path-custom {
          clip-path: polygon(0 60%, 30% 20%, 60% 70%, 100% 0, 100% 100%, 0 100%);
        }
      `}} />
    </div>
  );
};

export default WallCalendar;