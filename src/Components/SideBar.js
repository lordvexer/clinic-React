import React from 'react'

export const SideBar = () => {
  return (
    <div><nav>
    <div className="sidebar-top">
      <span className="shrink-btn">
        <i className="bx bx-chevron-right" />
      </span>
      <img src="/img/logo.svg" className="logo" alt="" />
      <h3 className="hide">کلینیک</h3>
    </div>
    <div className="search">
      <i className="bx bxs-search bx-tada" />
      <input type="text" className="hide" placeholder="جستجو سریع" />
    </div>
    <div className="sidebar-links">
      <ul>
        <div className="active-tab" />
        <li
          className="tooltip-element tablinks active"
          onclick="ChangeSection(event, 'DashboardSection')"
          data-tooltip={0}
        >
          <a href="#" className="active" data-active={0}>
            <div className="icon">
              <i className="bx bxs-dashboard" />
              <i className="bx bxs-dashboard bx-tada bx-flip-horizontal" />
            </div>
            <span className="link hide">داشبورد</span>
          </a>
        </li>
        <li
          className="tooltip-element tablinks "
          onclick="ChangeSection(event, 'DoctorPage')"
          data-tooltip={1}
        >
          <a href="#" data-active={1}>
            <div className="icon">
              <i className="bx bxs-note" />
              <i className="bx bxs-note bx-tada" />
            </div>
            <span className="link hide">تجویز نسخه</span>
          </a>
        </li>
        <li
          className="tooltip-element tablinks "
          onclick="ChangeSection(event, 'AcceptanceSection')"
          data-tooltip={2}
          data-bs-toggle="modal"
          data-bs-target="#AcceptanceModal"
        >
          <a href="#" data-active={2}>
            <div className="icon">
              <i className="bx bxs-receipt" />
              <i className="bx bxs-receipt bx-tada" />
            </div>
            <span className="link hide">پذیرش</span>
          </a>
        </li>
        <li
          className="tooltip-element tablinks "
          onclick="ChangeSection(event, 'CaseSection')"
          data-tooltip={3}
        >
          <a href="#" data-active={3}>
            <div className="icon">
              <i className="bx bxs-folder" />
              <i className="bx bxs-folder bx-tada" />
            </div>
            <span className="link hide">ثبت پرونده</span>
          </a>
        </li>
        <li
          className="tooltip-element tablinks "
          onclick="ChangeSection(event, 'PatientSection')"
          data-tooltip={4}
        >
          <a href="#" data-active={4}>
            <div className="icon">
              <i className="bx bxs-user-badge" />
              <i className="bx bxs-user-badge bx-tada" />
            </div>
            <span className="link hide">لیست بیماران</span>
          </a>
        </li>
        <li
          className="tooltip-element tablinks "
          onclick="ChangeSection(event, 'DoctorSection')"
          data-tooltip={5}
        >
          <a href="#" data-active={5}>
            <div className="icon">
              <i className="bx bxs-user" />
              <i className="bx bxs-user bx-tada" />
            </div>
            <span className="link hide">لیست پزشکان</span>
          </a>
        </li>
        <li
          className="tooltip-element tablinks "
          onclick="ChangeSection(event, 'SmsSection')"
          data-tooltip={6}
        >
          <a href="#" data-active={6}>
            <div className="icon">
              <i className="bx bxs-envelope" />
              <i className="bx bxs-envelope bx-tada" />
            </div>
            <span className="link hide"> پیامک</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="sidebar-footer">
      <a
        href="#"
        className="account tooltip-element tablinks"
        data-tooltip={0}
        onclick="ChangeSection(event, 'ProfileSection')"
      >
        <i className="bx bx-user" />
      </a>
      <li
        className="tooltip-element tablinks Pointers"
        onclick="ChangeSection(event, 'ProfileSection')"
      >
        <div className="admin-user tooltip-element" data-tooltip={1}>
          <div className="admin-profile hide">
            <img src="./img/face-1.jpg" alt="" />
            <div className="admin-info">
              <h3>دکتر ابتکار</h3>
              <h5>Admin</h5>
            </div>
          </div>
        </div>
      </li>
      <a href="#" className="log-out">
        <i className="bx bx-log-out" />
      </a>
    </div>
    <div className="tooltip">
      <span>خروج</span>
    </div>
  </nav>
  </div>
  )
}
