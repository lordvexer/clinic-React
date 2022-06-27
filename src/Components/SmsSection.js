import React from 'react'

export const SmsSection = () => {
  return (
<div id="SmsSection" className="tabcontent">
  <div className="container-fluid ">
    <div className="col-12 ">
      <div
        className="card col-sm-3"
        style={{
          background: "unset",
          boxShadow: "none",
          marginBottom: "-1rem",
          border: "unset"
        }}
      >
        <div className=" inline InlineSms ">
          <button className="btn btn-primary " type="submit ">
            پنل ارسال پیام
          </button>
          <div className="form-floating ">
            <input
              type="search "
              className="form-control "
              id="FloatingSmsSearch "
              placeholder="جستجو "
            />
            <label htmlFor="FloatingSmsSearch ">جستجو</label>
          </div>
        </div>
      </div>
      <div className="card SmsTableCard " style={{ height: 733 }}>
        <table className="table TableGui ">
          <thead className="thead-primary ">
            <tr>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>شماره تماس</th>
              <th>نام پزشک</th>
              <th>زمان ارسال</th>
              <th>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row " className="scope ">
                صادق
              </th>
              <td>تقیپور</td>
              <td>0912000000</td>
              <td>دکتر قاسمی</td>
              <td>1400/02/01 12:42</td>
              <td>
                <span
                  className="spinner-grow spinner-grow-sm SmsStatusSending "
                  role="status "
                  aria-hidden="true "
                />{" "}
                درحال ارسال
              </td>
            </tr>
            <tr>
              <th scope="row " className="scope ">
                صادق
              </th>
              <td>تقیپور</td>
              <td>0912000000</td>
              <td>دکتر قاسمی</td>
              <td>1400/02/01 12:42</td>
              <td>
                <span
                  className="spinner-grow spinner-grow-sm SmsStatusFail "
                  role="status "
                  aria-hidden="true "
                />{" "}
                خطا
              </td>
            </tr>
            <tr>
              <th scope="row " className="scope ">
                صادق
              </th>
              <td>تقیپور</td>
              <td>0912000000</td>
              <td>دکتر قاسمی</td>
              <td>1400/02/01 12:42</td>
              <td>
                <span
                  className="spinner-grow spinner-grow-sm SmsStatusDelivered "
                  role="status "
                  aria-hidden="true "
                />{" "}
                رسیده است
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}
