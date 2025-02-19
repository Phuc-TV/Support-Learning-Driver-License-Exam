import './footer-inf.scss'

function FooterInformation() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-information">
                    <h1>Trung tâm đào tạo lái xe FDRIVING</h1>
                    <p className="contact-information">
                        <ul>
                            <li>Liên hệ</li>
                            <li>Hotline 1: 0987987654</li>
                            <li>Hotline 2: 0978234786</li>
                            <li>Địa chỉ: 123/56 Trần Hưng Đạo, Phường 5, Quận 1</li>
                        </ul>
                    </p>
                </div>

                <div className='divine-line'></div>

                <div className="commiting-information">
                    <p className="line-1">Quyết định thành lập số 773/QĐ – UBND ngày 27/02/2009.</p>
                    <p className="line-2">Giấy phép số 69/TCĐBVN-QLPT&NL ngày 08/07/2011 của Tổng Cục Đường bộ Việt Nam.</p>
                    <img src="/res/imgs/commiting/commiting.png" alt="commiting-picture" />
                </div>
            </div>
        </>
    )
}

export default FooterInformation