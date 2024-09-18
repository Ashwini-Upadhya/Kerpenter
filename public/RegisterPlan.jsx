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
            </div>

            <Footer/>
        </div>
    )
}