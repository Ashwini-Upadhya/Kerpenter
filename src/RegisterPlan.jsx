import './RegisterPlan.css'
import Header from "./Header"
import Menu from "./Menu"
import Footer from './Footer'

export default function RegisterPlan() {
    return (
        <div>
            <div className='topBar'></div>
            <Header/>
            <Menu/>
            <h2>Register Plan</h2>
            <div className="planDiv">
                <div>
                    <img src="div.elementor-widget-wrap.svg" alt="" />
                </div>
                <div>
                    <form action="/actin">
                    <p>Company Name</p>
                    <input type="text"></input>
                    <p>Siret</p>
                    <input type="text"></input>
                    <p>First Name</p>
                    <input type="text"></input>
                    <p>Last Name</p>
                    <input type="text"></input>
                    <p>E-mail</p>
                    <input type="email"></input>
                    <p>Address</p>
                    <input type="text"></input>
                    <p>Phone</p>
                    <input type="text"></input>
                    <p>Password</p>
                    <input type="password"></input>
                    <br />
                    <input type="checkbox" id='atcCheckbox'></input>
                    <a href="">Accept Terms and Conditions</a>
                    <br />
                    <button type="submit">Register</button>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>
    )
}