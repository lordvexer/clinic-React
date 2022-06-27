import React from 'react'

export const DoctorPrescription = () => {
  return (
<div id="DoctorPage" className="tabcontent ">
  <div className="container-fluid ">
    <div className="card TableCard ">
      <table className="table TableGui">
        <thead className="thead-primary">
          <tr>
            <th style={{ borderTopRightRadius: 8 }}>نام</th>
            <th>نام خانوادگی</th>
            <th style={{ borderTopLeftRadius: 8 }}>کدملی</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="scope">
              صادق
            </th>
            <td>تقیپور</td>
            <td>40722256658</td>
          </tr>
          <tr>
            <th scope="row" className="scope">
              حشمت
            </th>
            <td>سرابی</td>
            <td>40722256658</td>
          </tr>
          <tr>
            <th scope="row" className="scope">
              قباد
            </th>
            <td>آسی</td>
            <td>40722256658</td>
          </tr>
          <tr>
            <th scope="row" className="scope">
              میلاد
            </th>
            <td>صادقی</td>
            <td>40722256658</td>
          </tr>
          <tr>
            <th scope="row" className="scope">
              نفیسه
            </th>
            <td>خاموش</td>
            <td>40722256658</td>
          </tr>
        </tbody>
      </table>
      <nav className="paginationLayout" aria-label="Page navigation ">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="inline InlineButton">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control Qbime"
            id="GetMelliCode"
            placeholder="name@example.com"
          />
          <label htmlFor="GetMelliCode">کد ملی را وارد کنید</label>
        </div>
        <button
          className="btn btn-primary BtnForm"
          type="reset "
          style={{ height: "calc(3.5rem + 2px)", marginTop: 0 }}
        >
          دریافت اطلاعات
        </button>
      </div>
    </div>
    {/* Prescription Order */}
    <div className="card">
      <legend className="Prescriptionlegend">اطلاعات بیمار</legend>
      <form className="FormInline">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingCaseNumber"
            defaultValue={222222}
            disabled=""
          />
          <label htmlFor="FloatingCaseNumber"> شماره پرونده</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingInsurance"
            defaultValue="بیمه ایران"
            disabled=""
          />
          <label htmlFor="FloatingInsurance">بیمه گر</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingFirstName"
            defaultValue="ناصر"
            disabled=""
          />
          <label htmlFor="FloatingFirstName">نام</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingLastName"
            defaultValue="عبدی"
            disabled=""
          />
          <label htmlFor="FloatingLastName"> نام خانوادگی</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingGen"
            defaultValue="مرد"
            disabled=""
          />
          <label htmlFor="FloatingGen">جنسیت</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control PdatePicker"
            id="FloatingBdate"
            defaultValue="1359/12/01"
            disabled=""
          />
          <label htmlFor="FloatingBdate">تاریخ تولد</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control PdatePicker"
            id="FloatingInsuranceDate"
            defaultValue="1401/12/01"
            disabled=""
          />
          <label htmlFor="FloatingInsuranceDate">تاریخ اعتبار بیمه</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingInsuranceType"
            defaultValue="اجباری"
            disabled=""
          />
          <label htmlFor="FloatingInsuranceType">نوع بیمه</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control PdatePicker"
            id="FloatingPrescription"
            defaultValue="1400/12/01"
            disabled=""
          />
          <label htmlFor="FloatingPrescription">تاریخ نسخه</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control PdatePicker"
            id="FloatingDate"
            defaultValue="1401/12/01"
            disabled=""
          />
          <label htmlFor="FloatingDate">تاریخ اعتبار نسخه</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingRedirectReason"
            defaultValue="-"
            disabled=""
          />
          <label htmlFor="FloatingRedirectReason">دلیل ارجاع</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingHaveCase"
            defaultValue={1}
            disabled=""
          />
          <label htmlFor="FloatingHaveCase">بیمار دارای پرونده</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="FloatingHaveImportantIssue"
            defaultValue="بدون بیماری زمینه ای"
            disabled=""
          />
          <label htmlFor="FloatingHaveImportantIssue">دارای بیماری مهم</label>
        </div>
        <select
          className="form-select form-select-lg mb-3 Gender"
          aria-label=".form-select-lg example"
        >
          <option value={1}>تشخیص اولیه</option>
        </select>
        <select
          className="form-select form-select-lg mb-3 Gender"
          aria-label=".form-select-lg example"
        >
          <option value={1}>نوع تجویز</option>
          <option value={2}>ویزیت</option>
          <option value={3}>ویزیت وخدمات</option>
          <option value={4}>دارو</option>
          <option value={4}>پاراکلینیک</option>
          <option value={4}>خدمات</option>
        </select>
        <div className="inline InlineButton">
          <button className="btn btn-primary BtnForm" type=" " disabled="">
            خدمات ارجاعی
          </button>
          <button className="btn btn-primary BtnForm" type=" " disabled="">
            حساسیت دارویی
          </button>
          <button
            className="btn btn-primary BtnForm"
            data-tooltip={2}
            data-bs-toggle="modal"
            data-bs-target="#PatientHistory"
          >
            سوابق بیمار
          </button>
        </div>
        {/* Prescription Section */}
        <div className="inline InlineButton">
          <button className="btn btn-primary BtnForm" type=" " disabled="">
            گواهی پزشکی
          </button>
          <button
            className="btn btn-primary BtnForm"
            style={{ background: "#2c3875" }}
            type=" "
          >
            ثبت ویزیت
          </button>
        </div>
      </form>
    </div>
    {/* Visit Table Menu */}
    <div className="card" style={{ marginBottom: "2rem" }}>
      <nav id="menu-container" className="arrow">
        <div id="btn-nav-previous" style={{ fill: "#FFF" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div id="btn-nav-next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </div>
        <div className="menu-inner-box noselect">
          <div className="menu">
            <a href="#Visit">
              <button
                className="menu-item active"
                onclick="ChangeSection(event, 'Visit');"
                style={{ borderRadius: "0px 9px" }}
              >
                ویزیت
              </button>
            </a>
            <a href="#Drug">
              <button
                className="menu-item"
                onclick="ChangeSection(event, 'Drug');SmoothScroll()"
              >
                دارو
              </button>
            </a>
            <a href="#MedicalService">
              <button
                className="menu-item"
                onclick="ChangeSection(event, 'MedicalService');SmoothScroll()"
              >
                خدمات پزشکی
              </button>
            </a>
            <a href="#Lab">
              <button
                className="menu-item"
                onclick="ChangeSection(event, 'Lab');SmoothScroll()"
              >
                آزمایشگاه
              </button>
            </a>
            <a href="#Radio">
              <button
                className="menu-item"
                onclick="ChangeSection(event, 'Radio');SmoothScroll()"
              >
                رادیولوژی
              </button>
            </a>
            <a href="#CtScan">
              <button
                className="menu-item"
                onclick="ChangeSection(event, 'CtScan')"
              >
                CT Scan
              </button>
            </a>
            <a href="#MRI">
              <button
                className="menu-item"
                onclick="ChangeSection(event, 'MRI');SmoothScroll()"
              >
                MRI
              </button>
            </a>
            <a href="#Sonographi">
              <button
                className="menu-item"
                onclick="ChangeSection(event, 'Sonographi');SmoothScroll()"
              >
                سونوگرافی
              </button>
            </a>
            <a href="#physiotherapy">
              <button
                className="menu-item"
                onclick="ChangeSection(event, 'physiotherapy');SmoothScroll()"
              >
                فیزیوتراپی
              </button>
            </a>
            <a href="#OderMedService">
              <button
                className="menu-item"
                onclick="ChangeSection(event, 'OderMedService');SmoothScroll()"
              >
                سایر خدمات پاراکلینیک
              </button>
            </a>
            <a href="#RedirectServices">
              <button
                className="menu-item"
                style={{ marginLeft: 50 }}
                onclick="ChangeSection(event, 'RedirectServices')"
              >
                خدمات ارجاعی
              </button>
            </a>
          </div>
        </div>
      </nav>
      {/* Visit Table Inside Menu */}
      <div
        id="Visit"
        className="tabcontent active"
        style={{ display: "block" }}
      >
        <form className="FormInline">
          <div className="mb-3 col-12">
            <label htmlFor="DoctorExplainment" className="form-label">
              توضیحات تکمیلی پزشک:
            </label>
            <textarea
              className="form-control"
              id="DoctorExplainment"
              rows={5}
              defaultValue={""}
            />
          </div>
        </form>
        <div className="inline InlineButton">
          <button className="btn btn-primary BtnForm" type="submit">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm" type="submit">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm" type="reset ">
            انصراف
          </button>
        </div>
      </div>
      {/* Drug Section */}
      <div id="Drug" className="tabcontent ">
        <form className="FormInline">
          <select className="Selector " style={{ width: 508 }} name="state">
            <option value={1}>نام دارو را انتخاب کنید</option>
            <option value={1}>drog1</option>
            <option value={2}>drog2</option>
          </select>
          <select className="Selector" name="state">
            <option value={1}>زمان مصرف</option>
            <option value={1}>سه بار در روز</option>
            <option value={2}>دو بار در روز</option>
          </select>
          <select className="Selector" name="state">
            <option value={1}>طریقه مصرف</option>
            <option value={1}>با غذا</option>
            <option value={2}>صبح</option>
          </select>
          <select className="Selector" name="state">
            <option value={1}>مقادیر مصرف</option>
            <option value={1}>2</option>
            <option value={2}>3</option>
          </select>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="FloatingPeriod"
              defaultValue="-"
            />
            <label htmlFor="FloatingPeriod">تعداد دوره مصرف</label>
          </div>
          <div className="form-floating mb-3">
            <input type="number" className="form-control" id="NumberOfPill" />
            <label htmlFor="NumberOfPill">دوره تکرار</label>
          </div>
          <button
            className="btn btn-primary BtnForm"
            type="submit"
            style={{ background: "#369ba5", height: 57, marginTop: 2 }}
          >
            درج در لیست
          </button>
        </form>
        <div className="card TableCard ">
          <table className="table TableGui " style={{ width: "100%" }}>
            <thead className="thead-primary">
              <tr>
                <th style={{ width: "40%" }}>نام دارو</th>
                <th style={{ width: "3%" }}>تعداد</th>
                <th style={{ width: "12%" }}>مقادیر مصرف</th>
                <th style={{ width: "5%" }}>زمان مصرف</th>
                <th style={{ width: "5%" }}>تکرار</th>
                <th style={{ width: "5%" }}>دستورات</th>
                <th style={{ width: "5%" }}>حذف</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="scope">
                  (18F) FLUDEOXYGLUCOSE 10 mCi PARENTERAL INJECTION, SOLUTION
                </th>
                <td>2</td>
                <td>يک و نيم عدد-Tab/Cap</td>
                <td>هر 4 ساعت </td>
                <td>1</td>
                <td>
                  <i className="bx bxs-notepad " />
                </td>
                <td>
                  <i className="bx bxs-message-alt-x " />
                </td>
              </tr>
              <tr>
                <th scope="row" className="scope">
                  {" "}
                  PROSTAGLANDIN E1(ALPROSTADIL) POWDERFOR SOLUTION 20 ug{" "}
                </th>
                <td>5</td>
                <td>يک و نيم عدد-Tab/Cap</td>
                <td>هر 4 ساعت</td>
                <td>2</td>
                <td>
                  <i className="bx bxs-notepad" />
                </td>
                <td>
                  <i className="bx bxs-message-alt-x" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <form className="FormInline">
          <div className="mb-3 col-12">
            <label htmlFor="DoctorExplainment" className="form-label">
              توضیحات تکمیلی پزشک:
            </label>
            <textarea
              className="form-control"
              id="DoctorExplainment"
              rows={5}
              defaultValue={""}
            />
          </div>
        </form>
        <div className=" inline InlineButton ">
          <button className="btn btn-primary BtnForm " type="submit ">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            نسخه پر استفاده
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            انصراف
          </button>
        </div>
      </div>
      <div id="MedicalService" className="tabcontent ">
        <form className="FormInline ">
          <select className="Selector" name="state">
            <option value={1}>خدمت 1</option>
            <option value={2}>خدمت 2</option>
          </select>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="NumberOfService"
            />
            <label htmlFor="NumberOfService">تعداد</label>
          </div>
          <button
            className="btn btn-primary BtnForm"
            type="submit"
            style={{ background: "#369ba5", height: 57, marginTop: 2 }}
          >
            درج در لیست
          </button>
        </form>
        <div className="card TableCard ">
          <table className="table TableGui">
            <thead className="thead-primary">
              <tr>
                <th>نام خدمت</th>
                <th>تعداد</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="scope">
                  {" "}
                  Body Box شامل پلتيسموگرافي، اندازه‌گيري ظرفيت باقي مانده
                  عملکردي (FRC)، حجم باقي مانده (RV) و ظرفيت کامل ريوي (TLC) و
                  اندازه گيري مقاومت مجاري هوايي و همراه با اندازه گيري کامل حجم
                  هاي ديناميک(توام با اسيپرومتري کامل) و استاتيک ريه{" "}
                </th>
                <td>2</td>
                <td>btn</td>
              </tr>
              <tr>
                <th scope="row" className="scope">
                  اندازه‌گيري ظرفيت باقي مانده عملکرد
                </th>
                <td>5</td>
                <td>btn</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form className="FormInline">
          <div className="mb-3 col-12">
            <label htmlFor="DoctorExplainment" className="form-label">
              توضیحات تکمیلی پزشک:
            </label>
            <textarea
              className="form-control"
              id="DoctorExplainment"
              rows={5}
              defaultValue={""}
            />
          </div>
        </form>
        <div className="inline InlineButton ">
          <button className="btn btn-primary BtnForm " type="submit ">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            نسخه پر استفاده
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            انصراف
          </button>
        </div>
      </div>
      <div id="Lab" className="tabcontent ">
        <form className="FormInline ">test</form>
        <div className="inline InlineButton ">
          <button className="btn btn-primary BtnForm " type="submit ">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            نسخه پر استفاده
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            انصراف
          </button>
        </div>
      </div>
      <div id="Radio" className="tabcontent ">
        <form className="FormInline ">test</form>
        <div className="inline InlineButton ">
          <button className="btn btn-primary BtnForm " type="submit ">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            نسخه پر استفاده
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            انصراف
          </button>
        </div>
      </div>
      <div id="CtScan" className="tabcontent ">
        <form className="FormInline ">test</form>
        <div className="inline InlineButton ">
          <button className="btn btn-primary BtnForm " type="submit ">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            نسخه پر استفاده
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            انصراف
          </button>
        </div>
      </div>
      <div id="MRI" className="tabcontent ">
        <form className="FormInline ">test</form>
        <div className="inline InlineButton ">
          <button className="btn btn-primary BtnForm " type="submit ">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            نسخه پر استفاده
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            انصراف
          </button>
        </div>
      </div>
      <div id="Sonographi" className="tabcontent ">
        <form className="FormInline ">test</form>
        <div className="inline InlineButton ">
          <button className="btn btn-primary BtnForm " type="submit ">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            نسخه پر استفاده
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            انصراف
          </button>
        </div>
      </div>
      <div id="physiotherapy" className="tabcontent ">
        <form className="FormInline ">test</form>
        <div className="inline InlineButton ">
          <button className="btn btn-primary BtnForm " type="submit ">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            نسخه پر استفاده
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            انصراف
          </button>
        </div>
      </div>
      <div id="OderMedService" className="tabcontent ">
        <form className="FormInline ">test</form>
        <div className="inline InlineButton ">
          <button className="btn btn-primary BtnForm " type="submit ">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            نسخه پر استفاده
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            انصراف
          </button>
        </div>
      </div>
      <div id="RedirectServices" className="tabcontent ">
        <form className="FormInline ">test tex</form>
        <div className="inline InlineButton">
          <button className="btn btn-primary BtnForm " type="submit ">
            ثبت
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            نسخه پر استفاده
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            چاپ
          </button>
          <button className="btn btn-primary BtnForm " type="reset ">
            انصراف
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
