import React from 'react'

export const Acceptance = () => {
  return (
<div id="AcceptanceSection" className="tabcontent">
  <div className="container-fluid ">
    <div className="card ">
      <form className="FormInline ">
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control "
            id="FloatingAcceptanceCaseNamber "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptanceCaseNamber "> شماره پرونده</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control Qbime "
            id="FloatingAcceptanceInsuranceName "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptanceInsuranceName ">شرکت بیمه</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control Qbime "
            id="FloatingAcceptanceInsuranceDate "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptanceInsuranceDate ">
            تاریخ اعتبار بیمه
          </label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control Qbime "
            id="FloatingAcceptanceNasionalCode "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptanceNasionalCode ">کد ملی</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control "
            id="FloatingAcceptanceFirstName "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptanceFirstName "> نام</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control "
            id="FloatingAcceptanceLastName "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptanceLastName "> نام خانوادگی</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control "
            id="FloatingAcceptancePhoneNumber "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptancePhoneNumber "> تلفن همراه</label>
        </div>
        <select
          className="form-select form-select-lg mb-3 Gender "
          aria-label=".form-select-lg example "
        >
          <option value={1}>انتخاب پزشک</option>
          <option value={2}>سمیه هوشنگی</option>
          <option value={3}>محمد پارسال</option>
          <option value={4}>...</option>
        </select>
      </form>
      <div className="inline InlineButton ">
        <button className="btn btn-primary BtnForm card2Active " type="submit ">
          محاسبه
        </button>
        <button
          className="btn btn-primary BtnForm "
          type="submit "
          data-bs-toggle="modal "
          data-bs-target="#AcceptanceModal "
        >
          ریست
        </button>
      </div>
    </div>
  </div>
  <div className="container-fluid ">
    <div className="card2 ">
      <form className="FormInline2 ">
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control "
            id="FloatingAcceptanceAllPrice "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptanceAllPrice "> مبلغ کل خدمت</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control Qbime "
            id="FloatingAcceptanceTaxs "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptanceTaxs ">مالیات</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control Qbime "
            id="FloatingAcceptanceInsuranceSlicePrice "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptanceInsuranceSlicePrice ">
            سهم بیمه
          </label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control Qbime "
            id="FloatingAcceptanceInsurancePlusSplicePrice "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptanceInsurancePlusSplicePrice ">
            سهم بیمه تکمیلی
          </label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            type="email "
            className="form-control "
            id="FloatingAcceptancePatientSplicePrice "
            placeholder="name@example.com "
            disabled=""
          />
          <label htmlFor="FloatingAcceptancePatientSplicePrice ">
            {" "}
            سهم بیمار
          </label>
        </div>
      </form>
      <div className="inline InlineButton ">
        <button
          className="btn btn-primary BtnForm tablinks "
          type="button "
          onclick="ChangeSection(event, 'DashboardSection') "
          data-tooltip={0}
        >
          ثبت
        </button>
        <div
          className="position-fixed bottom-0 end-0 p-3 "
          style={{ zIndex: 11 }}
        >
          <div
            id="liveToast "
            className="toast hide "
            role="alert "
            aria-live="assertive "
            aria-atomic="true "
          >
            <div className="toast-header ">
              <strong className="me-auto ">وضعیت</strong>
              <small>اکنون</small>
              <button
                type="button "
                className="btn-close "
                data-bs-dismiss="toast "
                aria-label="Close "
              />
            </div>
            <div className="toast-body ">ثبت با موفقیت انجام شد</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
