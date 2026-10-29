import { gym, schedule, DAYS } from '../data/gymData';

export function fmt(min) {
  const h = Math.floor(min / 60), m = min % 60, ap = h >= 12 ? 'PM' : 'AM';
  return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${ap}`;
}

// Current day and minutes in the gym's own time zone (Pakistan), whatever the visitor's device says
export function gymNow() {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: gym.timezone, weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23' }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t).value;
  return { day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday')), minutes: +get('hour') * 60 + +get('minute') };
}

export function getStatus() {
  const { day, minutes } = gymNow();
  const today = schedule.closedDays.includes(day) ? [] : schedule.sessions;
  const current = today.find(([s, e]) => minutes >= s && minutes < e);
  if (current) return { open: true, day, text: `Open now. Closes at ${fmt(current[1])}` };
  const next = today.find(([s]) => minutes < s);
  if (next) return { open: false, day, text: `Closed now. Opens at ${fmt(next[0])}` };
  for (let d = 1; d <= 7; d++) {
    const nd = (day + d) % 7;
    if (!schedule.closedDays.includes(nd)) return { open: false, day, text: `Closed now. Opens ${d === 1 ? 'tomorrow' : DAYS[nd]} at ${fmt(schedule.sessions[0][0])}` };
  }
  return { open: false, day, text: 'Closed' };
}
