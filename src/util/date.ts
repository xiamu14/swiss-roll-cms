import { DateTime } from 'luxon'

export function dateTimeWithZone(dates: string[]) {
  return dates.map((date) => {
    return DateTime.fromISO(date, { zone: 'America/New_York' })
      .setZone('Asia/Shanghai')
      .toFormat('yyyy-MM-dd HH:mm:ss')
  })
}
