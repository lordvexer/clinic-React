import React from 'react'

export const PatientRecords = () => {
  return (
<div id="PatientSection" className="tabcontent">
  <div className="container-fluid ">
    <div className="col-12 ">
      <div className="card TableCard ">
        <table className="table TableGui ">
          <thead className="thead-primary ">
            <tr>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>شماره تماس</th>
              <th>پرونده</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row " className="scope ">
                قباد
              </th>
              <td>آسی</td>
              <td>0912000000</td>
              <td>
                <a href="# " className="btn btn-primary BtnFill ">
                  مشاهده
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row " className="scope ">
                میلاد
              </th>
              <td>صادقی</td>
              <td>0912000000</td>
              <td>
                <a href="# " className="btn btn-primary BtnFill ">
                  مشاهده
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row " className="scope ">
                نفیسه
              </th>
              <td>خاموش</td>
              <td>0912000000</td>
              <td>
                <a href="# " className="btn btn-primary BtnFill ">
                  مشاهده
                </a>
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
