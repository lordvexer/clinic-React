import React from 'react'

export const DoctorList = () => {
  return (
<div id="DoctorSection" className="tabcontent">
  <div className="container-fluid ">
    <div className="col-12 ">
      <div className="card TableCard ">
        <table className="table TableGui ">
          <thead className="thead-primary ">
            <tr>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>شماره تماس</th>
              <th>نظام پزشکی</th>
              <th>پرونده</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row " className="scope ">
                صادق
              </th>
              <td>تقیپور</td>
              <td>0912000000</td>
              <td>56498476</td>
              <td>
                <a href="# " className="btn btn-primary BtnFill ">
                  مشاهده
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row " className="scope ">
                حشمت
              </th>
              <td>سرابی</td>
              <td>0912000000</td>
              <td>56498476</td>
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
