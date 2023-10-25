import './sidebar.scss'
import { NavLink, useNavigate } from 'react-router-dom'


function MentorSidebar() {

  const styleSidebarCom = ({ isActive }: { isActive: boolean }): {
    paddingLeft: string;
    fontWeight: string;
    backgroundColor: string;
    borderLeft: string;
    transition: string;
  } => {
    return {
      paddingLeft: isActive ? '5px' : '0',
      fontWeight: isActive ? '600' : '',
      backgroundColor: isActive ? '#3572B8' : '#4292EB',
      borderLeft: isActive ? '5px solid gray' : 'none',
      transition: isActive
        ? 'padding-left ease-out 0.5s, background-color ease-out 0.5s, border-left ease-out 0.5s, font-weight ease-out 0.5s'
        : 'none'
    };
  };

  const handleScroll = () => {
    {
      window.scrollTo(0, 0);
    }
  }

  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.removeItem('loginedUser');
    navigate('/');
    location.reload();
    handleScroll();
  }

  return (
    <div className='sidebar-container'>
      <div className="sidebar-title">
        <h1>Mentor Sidebar</h1>
      </div>
      <div className='mentor-sidebar'>
        <li className='sidebar-component'>
          <div className="mentor-list">
            <NavLink style={styleSidebarCom} to='/'>
              Trang chủ
            </NavLink>
          </div>
        </li>
        <li className='sidebar-component'>
          <div className="mentor-list">
            <NavLink style={styleSidebarCom} to='/lich-day'>
              Lịch dạy
            </NavLink>
          </div>
        </li>
        <li className='sidebar-component'>
          <div className="mentor-list">
            <NavLink style={styleSidebarCom} to='/tai-lieu-day-hoc'>
              Tài liệu dạy học
            </NavLink>
          </div>
        </li>
        <li className='sidebar-component'>
          <div className="mentor-list">
            <NavLink className='logout-btn' to='/' onClick={handleLogout}>
              Đăng xuất
            </NavLink>
          </div>
        </li>
      </div>
    </div>
  )
}

export default MentorSidebar