import React from 'react';
import "./Login.css" 
import GoogleLogin from 'react-google-login';


const Login = () => {

    //Chequea respuestas de OAuth
    const responseGoogle = (response) => {
        console.log(response)
        console.log(response.profileObj)
    };

    return (
        <>
        <div className="signinform">
        <h1>Inicia sesión</h1> 
        {/* container */}
        <div className="container">
            {/* main content */}
            <div className="w3l-form-info">
                <div className="w3_info">
                    <h2 id="login">Inicia sesión</h2>
                    <form action="#" method="post">
                        <div className="input-group">
                            <span><i className="fas fa-user" aria-hidden="true"></i></span>
                            <input type="email" placeholder="Nombre de usuario ó Email" required=""/>
                        </div>
                        <div className="input-group">
                            <span><i className="fas fa-key" aria-hidden="true"></i></span>
                            <input type="Password" placeholder="Clave" required=""/>
                        </div>
                        {/* <!--
                            <div className="form-row bottom">
                                <div className="form-check">
                                    <input type="checkbox" id="remenber" name="remenber" value="remenber">
                                    <label for="remenber"> Remember me?</label>
                                </div>
                                <a href="#url" className="forgot">Forgot password?</a>
                            </div>
                        --> */}
                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                    </form>
                    
                        <p className="continue"><span>O</span></p>
                        <div className="social-login">
                            {/* <a href="#facebook">
                                <div className="facebook">
                                    <span className="fab fa-facebook-f" aria-hidden="true"></span>
                    
                                </div>
                            </a>
                            <a href="#twitter">
                                <div className="twitter">
                                    <span className="fab fa-twitter" aria-hidden="true"></span>
                                </div>
                            </a> */}
                            <a href="#google">
                                <button className="login-google"> 
                                    <span>Continúa con</span> 
                                    <span><img className="img-google" src="https://img.pngio.com/google-logo-2015-png-image-purepng-free-transparent-cc0-png-google-logo-transparent-10000_3382.png" alt="" /></span>
                                    {/* <span className="fab fa-google google" aria-hidden="true"></span> */}
                                
                                </button>
                            </a>
                        </div>
                        <p className="account">¿No tienes cuenta? <a href="#signup">Regístrate</a></p>
                        <br /><br />
                        
                        <GoogleLogin
                            clientId="905627960838-oumcr1eecgnta22frcifb841fpam6mlc.apps.googleusercontent.com"
                            buttonText="Inicia sesión con cuenta de Google"
                            // render={renderProps => (
                            //   <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
                            // )}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />,
                </div>
            </div>
            {/* <!-- //main content --> */}
        </div>
        {/* <!-- //container --> */}
        {/* <!-- footer --> */}
        <div className="footer">
        </div>
        {/* <!-- footer --> */}
    </div>
    
        </>
    );

}

export default Login;