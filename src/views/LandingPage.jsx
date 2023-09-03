import LoginForm from '../components/LoginForm';
import './landingPage.css'

export default function LandingPage (props) {

    return (
        <div className='landing-page-container'>
            <LoginForm login={props.login} />
        </div>
        
    )

}