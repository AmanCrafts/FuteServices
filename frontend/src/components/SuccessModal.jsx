import { useState } from 'react';

const SuccessModal = ({ bookingDetails, onClose }) => {
  const [refId] = useState(() => {
    // Generate a unique 6-digit reservation ID lazily on mount
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    return `SHA-${randomDigits}`;
  });

  const downloadICS = () => {
    const title = `Sky Heights Avenue Site Visit`;
    const description = `Your scheduled tour of the model home (${bookingDetails.config}) at Sky Heights Avenue, Sarjapur Road, Bangalore.`;
    const datePart = bookingDetails.date.replace(/-/g, '');
    
    let startTime = '100000';
    let endTime = '110000';
    if (bookingDetails.slot.includes('11:00 AM')) {
      startTime = '110000';
      endTime = '120000';
    } else if (bookingDetails.slot.includes('2:00 PM')) {
      startTime = '140000';
      endTime = '150000';
    } else if (bookingDetails.slot.includes('4:00 PM')) {
      startTime = '160000';
      endTime = '170000';
    }

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sky Heights Developers//Sky Heights Avenue Booking//EN',
      'BEGIN:VEVENT',
      `UID:${refId}@skyheights.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${datePart}T${startTime}`,
      `DTEND:${datePart}T${endTime}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      'LOCATION:Sarjapur Road, Bangalore',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Sky_Heights_Site_Visit_${refId}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-scale-up">
        
        {/* Banner Header */}
        <div className="bg-slate-900 dark:bg-slate-950 p-6 flex flex-col items-center text-center text-white">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20 animate-checkmark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>

          <h3 className="text-xl font-bold font-outfit">
            Booking Confirmed
          </h3>
          <p className="text-slate-400 text-xs mt-1">
            Reference ID: <span className="font-mono text-brand-green font-bold">{refId}</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Confirmed alert text */}
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-800 dark:text-emerald-300 text-sm font-semibold text-center leading-relaxed">
            Your site visit has been booked successfully. Our sales team will contact you soon.
          </div>

          {/* Booking Summary Card */}
          <div className="bg-slate-50 dark:bg-slate-850 rounded-2xl p-5 border border-slate-100 dark:border-slate-800/80 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              Booking Summary
            </h4>
            
            <div className="space-y-2 text-sm text-slate-800 dark:text-slate-200">
              <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                <span className="text-slate-450 dark:text-slate-500">Full Name</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 font-outfit">{bookingDetails.name}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                <span className="text-slate-450 dark:text-slate-500">Phone Number</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 font-outfit">{bookingDetails.phone}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                <span className="text-slate-450 dark:text-slate-500">Unit Type</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 font-outfit text-brand-green">{bookingDetails.config}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/40 dark:border-slate-800/40 pb-2">
                <span className="text-slate-450 dark:text-slate-500">Visit Date</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 font-outfit">{bookingDetails.date}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-slate-450 dark:text-slate-500">Time Slot</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 font-outfit">{bookingDetails.slot}</span>
              </div>
            </div>
          </div>

          {/* Location details */}
          <div className="flex gap-3 items-start text-xs text-slate-500 dark:text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 text-brand-green flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <div>
              <span className="font-bold text-slate-800 dark:text-slate-200 font-outfit">Site Address:</span>
              <p className="mt-0.5">Sarjapur Road, opposite Wipro Campus, Bangalore - 560035</p>
              <a
                href="https://maps.google.com/?q=Sarjapur+Road+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green font-semibold mt-0.5 inline-block hover:underline"
              >
                Get Directions on Google Maps →
              </a>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={downloadICS}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl cursor-pointer active:scale-95 transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 text-brand-green">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              Add to Calendar
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 px-5 text-sm font-bold text-white bg-brand-green hover:bg-brand-green-hover rounded-xl shadow-md cursor-pointer active:scale-95 transition-all duration-200"
            >
              Done
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SuccessModal;
