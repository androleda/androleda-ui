import "./styles.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


<script src="https://kit.fontawesome.com/60530add50.js" crossorigin="anonymous"></script>
export default function Page() {

  return (
    <div className="container">
        <div className="form-box">
            <h1 id="title">Sign Up</h1>
            <form method="post" action='https://register-demo.freecodecamp.org'>
              <div className="input-group">       
              <div className="input-field">
                <label for="first-name">Enter Your First Name: <input id="first-name" type="text" required /></label>
              </div>
              <div className="input-field">
                <label for="email">Enter Your Email: <input id="email" type="email" required /></label>
              </div>
              <div className="input-field">
                <label for="new-password">Create a New Password: <input id="new-password" type="password" pattern="[a-z0-5]{8,}" required /></label>
                </div>                        
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
    </div>
  );
}
