import { format } from 'date-fns'

const main = () => {
  const now = format(new Date(), 'yyyy-MM-dd');
  Logger.log(now);
};
