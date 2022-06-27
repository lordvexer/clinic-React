import React from 'react'

export const ProfileSection = () => {
  return (
<div id="ProfileSection" className="tabcontent">
  <div className="container-fluid ">
    <div className="card ">
      <form className="FormInline "></form>
      <div className="inline InlineButton ">
        <button
          className="btn btn-primary BtnForm tooltip-element tablinks "
          onclick="ChangeSection(event, 'DashboardSection') "
          type="submit "
        >
          بازگشت
        </button>
        <button className="btn btn-primary BtnForm " type="submit ">
          ویرایش
        </button>
      </div>
    </div>
  </div>
</div>

  )
}
