import React from 'react'

export const Dashboard = () => {
  return (
  <div
    id="DashboardSection"
    className="tabcontent active"
    style={{ display: "block" }}
  >
    <div className="container-fluid row ">
      <div className="card widthFixer">
        <canvas id="ChartVisitInfo" />
      </div>
      <div className="card widthFixer">
        <canvas id="MonthChart" />
      </div>
      <div className="card widthFixer">
        <canvas id="MoneyChart" />
      </div>
      <div className="card widthFixer">
        <canvas id="ChartOfInsurance" />
      </div>
    </div>
  </div>
  )
}
