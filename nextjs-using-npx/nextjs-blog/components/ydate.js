import { parseISO, format } from 'date-fns';

export default function YDate({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'EEEE, \'the\' do \'of\' LLLL, yyyy \'years\' G')}</time>;
}
