import MemberHeader from '../../organisms/member-header/member-header'
import MemberFooter from '../../organisms/member-footer/member-footer'
import '../general.scss'
import CourseVerificationTemplate from '../../templates/course-verification-template/course-verification-template'

function CourseVerificationPage() {
    return (
        <>
            <header >
                <MemberHeader />
            </header>
            <body>
                <CourseVerificationTemplate />
            </body>
            <footer className='course-verification-footer'>
                <MemberFooter />
            </footer>
        </>

    )
}

export default CourseVerificationPage