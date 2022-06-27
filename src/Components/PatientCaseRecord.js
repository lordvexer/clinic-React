import React from 'react'

export const PatientCaseRecord = () => {
  return (
  <div id="CaseSection" className="tabcontent ">
  <div className="container-fluid ">
    <div className="card">
      <form className="FormInline needs-validation">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingPatientCaseNumber"
            placeholder="name@example.com"
            disabled=""
          />
          <label htmlFor="FloatingPatientCaseNumber"> شماره پرونده</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control Qbime"
            id="FloatingPatientQuickInsuranceCode"
            placeholder="name@example.com"
          />
          <label htmlFor="FloatingPatientQuickInsuranceCode">
            کد سریع بیمه
          </label>
        </div>
        <select
          className="form-select form-select-lg mb-3 Gender"
          aria-label=".form-select-lg example"
        >
          <option value={1}>بیمه گر</option>
          <option value={2}>بدون بیمه</option>
          <option value={3}>تامین</option>
          <option value={4}>...</option>
        </select>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingPatientInsuranceCode"
            placeholder="name@example.com"
          />
          <label htmlFor="FloatingPatientInsuranceCode">شماره بیمه</label>
        </div>
        <select
          className="form-select form-select-lg mb-3 Gender"
          aria-label=".form-select-lg example"
        >
          <option value={1}>بیمه تکمیلی</option>
          <option value={2}>سامان</option>
          <option value={3}>ایران</option>
          <option value={4}>...</option>
        </select>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingPatientFirstName"
            placeholder="name@example.com"
          />
          <label htmlFor="FloatingPatientFirstName"> نام</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingPatientLastName"
            placeholder="name@example.com"
          />
          <label htmlFor="FloatingPatientLastName"> نام خانوادگی</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingPatientFatherName"
            placeholder="name@example.com"
          />
          <label htmlFor="FloatingPatientFatherName"> نام پدر</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingPatientNationalCode"
            placeholder="name@example.com"
          />
          <label htmlFor="FloatingPatientNationalCode"> کد ملی</label>
        </div>
        <select
          className="form-select form-select-lg mb-3 Gender"
          aria-label=".form-select-lg example"
        >
          <option value={1}>مرد</option>
          <option value={2}>زن</option>
          <option value={3}>سایر</option>
        </select>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingPatientJob"
            placeholder="name@example.com"
          />
          <label htmlFor="FloatingPatientJob"> شغل</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingPatientHomeNumber"
            placeholder="name@example.com"
          />
          <label htmlFor="FloatingPatientHomeNumber"> تلفن ثابت</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingPatientPhoneNumber"
            placeholder="name@example.com"
          />
          <label htmlFor="FloatingPatientPhoneNumber"> تلفن همراه</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control Address"
            row={3}
            id="FloatingPatientAddress"
            placeholder="name@example.com"
          />
          <label htmlFor="FloatingPatientAddress"> آدرس</label>
        </div>
      </form>
      <div className="inline InlineButton">
        <button className="btn btn-primary BtnForm" type="submit">
          ثبت
        </button>
        <button className="btn btn-primary BtnForm" type="reset ">
          ریست
        </button>
        <button className="btn btn-primary BtnForm" type="reset ">
          بیشتر
        </button>
      </div>
    </div>
  </div>
</div>
  )
}
