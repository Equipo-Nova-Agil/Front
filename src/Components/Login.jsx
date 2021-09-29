import React from 'react';
import "./Login.css" 


const Login = () => {
    return (
        <>
        <div class="signinform">
        <h1>Inicia sesión</h1> 
        {/* container */}
        <div class="container">
            {/* main content */}
            <div class="w3l-form-info">
                <div class="w3_info">
                    <h2 id="login">Inicia sesión</h2>
                    <form action="#" method="post">
                        <div class="input-group">
                            <span><i class="fas fa-user" aria-hidden="true"></i></span>
                            <input type="email" placeholder="Nombre de usuario ó Email" required=""/>
                        </div>
                        <div class="input-group">
                            <span><i class="fas fa-key" aria-hidden="true"></i></span>
                            <input type="Password" placeholder="Clave" required=""/>
                        </div>
                        {/* <!--
                            <div class="form-row bottom">
                                <div class="form-check">
                                    <input type="checkbox" id="remenber" name="remenber" value="remenber">
                                    <label for="remenber"> Remember me?</label>
                                </div>
                                <a href="#url" class="forgot">Forgot password?</a>
                            </div>
                        --> */}
                        <button class="btn btn-primary btn-block" type="submit">Login</button>
                    </form>
                    
                        <p class="continue"><span>O</span></p>
                        <div class="social-login">
                            {/* <a href="#facebook">
                                <div class="facebook">
                                    <span class="fab fa-facebook-f" aria-hidden="true"></span>
                    
                                </div>
                            </a>
                            <a href="#twitter">
                                <div class="twitter">
                                    <span class="fab fa-twitter" aria-hidden="true"></span>
                                </div>
                            </a> */}
                            <a href="#google">
                                <button className="login-google"> 
                                    <span>Continúa con</span> 
                                    <span><img className="img-google" src="https://img.pngio.com/google-logo-2015-png-image-purepng-free-transparent-cc0-png-google-logo-transparent-10000_3382.png" alt="" /></span>
                                    {/* <span class="fab fa-google google" aria-hidden="true"></span> */}
                                
                                </button>
                            </a>
                        </div>
                        <p class="account">¿No tienes cuenta? <a href="#signup">Regístrate</a></p>
                    
                </div>
            </div>
            {/* <!-- //main content --> */}
        </div>
        {/* <!-- //container --> */}
        {/* <!-- footer --> */}
        <div class="footer">
        </div>
        {/* <!-- footer --> */}
    </div>
    
        </>
    );

}

export default Login;