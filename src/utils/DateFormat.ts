import { format, parse, parseISO } from 'date-fns';

export function formatDate(date: string) {
  const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
  return format(parsedDate, 'dd.MM.yy');
}

export function formatDateWithFullYear(date: string) {
  const parsedDate = parse(date, 'dd.MM.yy', new Date());
  return format(parsedDate, 'dd/MM/yyyy');
}

export function formatHour(newDate: Date) {
  return format(newDate, 'HH:mm');
}
