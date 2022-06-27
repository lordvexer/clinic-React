import React from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

export default function PersianDatePicker() {
  return (
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
      />
  )
}