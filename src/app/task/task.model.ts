export interface Task {
  id: string;
  title: string;
  details?: string;
  completed?: boolean;
  repeatSchedule?: TaskSchedule;
}

interface TaskSchedule {
  period: Period;
  periodQuantity: number;
  startDate: string;
  startTime: string;
}

enum Period {
  day = 'DAY',
  week = 'WEEK',
  month = 'MONTH',
  year = 'YEAR'
}
