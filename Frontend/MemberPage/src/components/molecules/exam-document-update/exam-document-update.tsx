import { toast } from 'react-toastify';
import './exam-document-update.scss'
import { useNavigate } from 'react-router-dom'

function ExamDocumentUpdate() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    toast.success("Cập nhật hồ sơ thi thành công");
    navigate('/ho-so-thi');
  }

  return (
    <div className='exam-document-update-container'>
      <div className='exam-document-update-title'>
        <h1>Hồ sơ thi</h1>
      </div>
      <div className='exam-document-update-form'>
        <form onSubmit={handleSubmit}>
          <div className="first-part">
            <h2 className='text-center'>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
            <h3 className='text-center'>Độc lập - Tự do - Hạnh phúc</h3>
            <div className='cross-line'></div>
          </div>
          <div className='second-part'>
            <li className='member-img-container'>
              <label htmlFor="member-img">ảnh thẻ</label>
            </li>
            <div className='exam-update-demand-title'>
              <h2>ĐƠN ĐỀ NGHỊ HỌC, SÁT HẠCH ĐỂ CẤP GIẤY PHÉP LÁI XE</h2>
              <p>Kính gửi: SỞ GIAO THÔNG VẬN TẢI THÀNH PHỐ HỒ CHÍ MINH</p>
            </div>
          </div>
          <li className='line-1'>
            <div className='name-container'>
              <label htmlFor="name">Tôi là: </label>
              <input type="text" name="" id="" />
            </div>
            <div className="nationality-container">
              <label htmlFor="nationality">Quốc tịch: </label>
              <input type="text" name="" id="" />
            </div>
          </li>
          <li className='line-2'>
            <div className="dob-container">
              <label htmlFor="dob">Sinh ngày: </label>
              <input type="date" name="" id="" />
            </div>
            <div className="gender-container">
              <label htmlFor="gender">Giới tính: </label>
              <div className='result-yes'>
                <label htmlFor="gender-">Nam: </label>
                <input type="radio" name='gender' />
              </div>
              <div className='result-no'>
                <label htmlFor="gender-">Nữ: </label>
                <input type="radio" name='gender' />
              </div>
            </div>
          </li>
          <li>
            <label htmlFor="residenceAddress">Nơi đăng ký hộ khẩu thường trú: </label>
            <span>Vũng Tàu, Cà Mau</span>
          </li>
          <li>
            <label htmlFor="tempAddress">Nơi cư trú: </label>
            <span>Cần Thơ, Sapa</span>
          </li>
          <li>
            <label htmlFor="cccdNo">Số giấy CMND, hoặc thẻ căn cước công dân (hoặc hộ chiếu): </label>
            <span>0112233445566</span>
          </li>
          <li className='line-3'>
            <div className='cccdDate-container'>
              <label htmlFor="cccdDate">Cấp ngày: </label>
              <span>11/11/2022</span>
            </div>
            <div className='cccdLocation-container'>
              <label htmlFor="cccdLocation">Nơi cấp: </label>
              <span>Hà Tĩnh, Hà Nội</span>
            </div>
          </li>
          <li className='line-4'>
            <div className='hasDrivingLicenseNo-container'>
              <label htmlFor="hasDrivingLicenseNo">Đã có giấy phép lái xe số: </label>
              <span>59T2 34370</span>
            </div>
            <div className="hasDrivingLicenseTier-container">
              <label htmlFor="hasDrivingLicenseTier">hạng: </label>
              <span>A1</span>
            </div>
            <div className='hasDrivingLicenseBy-container'>
              <label htmlFor="hasDrivingLicenseBy">do: </label>
              <span>địa điểm cấp</span>
            </div>
            <div className="hasDrivingLicenseDate-container">
              <label htmlFor="hasDrivingLicenseDate">cấp ngày: </label>
              <span>ngày cấp</span>
            </div>
          </li>
          <li>
            <label htmlFor="drivingLicenseDemand">Đề nghị cho tôi được học, dự sát hạch để cấp giấy phép lái xe hạng: </label>
            <span>B2</span>
          </li>
          <li>
            <label htmlFor="integratedDrivingLicense">Đăng ký tích hợp giấy phép lái xe: </label>
            <input type="checkbox" />
          </li>
          <li>
            <label htmlFor="">Vi phạm hành chính trong lĩnh vực giao thông đường bộ với hình thức tước quyền sử dụng giấy
              <br />
              phép lái xe: </label>
            <div className='check-result'>
              <div className='result-yes'>
                <label htmlFor="check">Có: </label>
                <input type="radio" name='check' />
              </div>
              <div className='result-no'>
                <label htmlFor="check">Không: </label>
                <input type="radio" name='check' />
              </div>
            </div>
          </li>
          <li>
            <label htmlFor="enclosedDocument">Xin gửi kèm theo: </label>
            <div className="enclosed-subLi">
              <li>01 giấy chứng nhận đủ sức khỏe.</li>
              <li>06 ảnh có màu cỡ 3cm x 4cm, chụp không quá 06 tháng.</li>
              <li>Bản sao giấy chứng minh nhân dân hoặc thẻ căn cước công dân hoặc hộ chiếu còn thời hạn
                có ghi số giấy chứng minh nhân dân hoặc thẻ căn cước công dân (đối với người Việt Nam)
                hoặc hộ chiếu (đối với người nước ngoài);</li>
              <li>Các tài liệu khác có liên quan gồm: </li>
            </div>
          </li>
          <p className='exam-document-update-commitment'>Tôi xin cam đoan những điều ghi trên là đúng sự thật,
            nếu sai tôi xin hoàn toàn chịu trách nhiệm.</p>
          <div className='sign-container'>
            <p>TP. Hồ Chí Minh, ngày .......... tháng .......... năm 2023</p>
            <p>NGƯỜI LÀM ĐƠN</p>
            <p>(Ký và ghi rõ họ, tên)</p>
          </div>
          <button className='confirm-btn' type='submit'>Cập nhật</button>
        </form>
      </div>
    </div>
  )
}

export default ExamDocumentUpdate