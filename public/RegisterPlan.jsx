import ''
import Header from "../src/Header"
import Menu from "../src/Menu"

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
                    <imput type="text"></imput>
                    <p>Siret</p>
                    <imput type="text"></imput>
                    <p>First Name</p>
                    <imput type="text"></imput>
                    <p>Last Name</p>
                    <imput type="text"></imput>
                    <p>E-mail</p>
                    <imput type="email"></imput>
                    <p>Address</p>
                    <imput type="text"></imput>
                    <p>Phone</p>
                    <imput type="text"></imput>
                    <p>Password</p>
                    <imput type="password"></imput>
                    
                    <imput type="checkbox"></imput>
                    <a href="">Accept Terms and Conditions</a>
                    <button type="submit">Register</button>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>
    )
}