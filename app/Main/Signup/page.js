import "./styles.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


<script src="https://kit.fontawesome.com/60530add50.js" crossorigin="anonymous"></script>
export default function Page() {

  return (
    <div className="container">
        <div className="form-box">
            <h1 id="title">Sign Up</h1>
            <form>
                <div className="input-group">
                    <div className="input-field" id="nameField">
                    {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                    {/* <FontAwesomeIcon icon= {fa-user} />
                    <FontAwesomeIcon icon={faCoffee} /> */}
                    <input type="text" placeholder="Name" />
                    </div>
                    <div className="input-field">
                    {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                    <input type="email" placeholder="email" />
                    </div>

                    <div className="input-field">
                    {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                    <input type="password" placeholder="Password" />
                    </div>
                    <p>Forget password <a href="#">Click here</a></p>
                </div>
                <div className="btn-field">
                    <button type="button" id="signupbtn">Sign up</button>
                    <button type="button" id="loginbtn" className="disabled">Log in</button>
                </div>
            </form>
        </div>
    </div>
  );
}