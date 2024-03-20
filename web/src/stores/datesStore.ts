import dayjs from 'dayjs'
import { create } from 'zustand'

export const useDatesStore = create((set) => ({
  dates: {
    startDate: dayjs().subtract(1, 'year').toDate().toISOString(),
    endDate: dayjs().toDate().toISOString(),
  },
  setDates: (newDates: {
    startDate: string | number | dayjs.Dayjs | Date
    endDate: string | number | dayjs.Dayjs | Date
  }) =>
    set({
      dates: {
        startDate: dayjs(newDates.startDate).toDate().toISOString(),
        endDate: dayjs(newDates.endDate).toDate().toISOString(),
      },
    }),
}))
