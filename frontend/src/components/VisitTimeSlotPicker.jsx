import { useMemo } from 'react';
import { isSlotPast, TIME_SLOTS } from '../utils/validation';

const VisitTimeSlotPicker = ({
  id,
  date,
  value,
  onChange,
  hasError = false,
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedBy,
  className = '',
}) => {
  const slotOptions = useMemo(
    () =>
      TIME_SLOTS.map((slot) => ({
        label: slot,
        value: slot,
        disabled: Boolean(date) && isSlotPast(slot, date),
      })),
    [date]
  );

  const hasAvailableSlots = slotOptions.some((option) => !option.disabled);

  return (
    <div>
      <select
        id={id}
        name="slot"
        value={value}
        onChange={onChange}
        disabled={!date}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedBy}
        className={className}
      >
        <option value="">
          {!date
            ? 'Select a date first'
            : hasAvailableSlots
              ? 'Select a time slot'
              : 'No slots available today'}
        </option>
        {slotOptions.map(({ label, value: slotValue, disabled }) => (
          <option key={slotValue} value={slotValue} disabled={disabled}>
            {disabled ? `${label} (Unavailable)` : label}
          </option>
        ))}
      </select>
      {date && !hasAvailableSlots && (
        <p className="text-xs text-brand-muted mt-1.5">
          All time slots for today have passed. Please choose a future date.
        </p>
      )}
    </div>
  );
};

export default VisitTimeSlotPicker;
