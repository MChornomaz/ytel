<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- BOOTSTRAP CSS  -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css?_v=20240129141456" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
    <!-- CUSTOM STYLES -->
    <link rel="stylesheet" href="css/style.min.css?_v=20240129141456">
    <title>Login</title>
</head>
<body>
    <div class="wrapper">
        <div class="login">
            <div class="login__content">
                <div class="login__logo">
                    <picture><source srcset="./img/logo.webp" type="image/webp"><img src="./img/logo.png" alt="Ytel logo"></picture>
                </div>
                <div class="login__text">
                    <h3 class="login__title">Access Your Account</h3>
                    <p class="login__hint">Please enter your login details to ensure a safe and seamless experience.</p>
                </div>
                <form class="login__form">
                    <label class="login__label" for="userId">User ID</label>
                    <div class="login__formcontrol">
                        <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512"  class="login__icon">
                            <path d="M376.9 175.9c-.3 49.8-31.7 96.2-78.8 113.4-48.2 17.6-102.7 2.8-135.5-36.6-32.4-38.9-36.2-96-10.2-139.1 26-43.3 78.1-66.4 127.7-56.2 49.2 10.1 87.5 50.3 95.5 99.8C376.5 163.4 376.9 169.7 376.9 175.9c.1 9.6 15.1 9.7 15 0-.3-56.7-36-107.9-89.2-127.6-53-19.7-115.2-2.9-151.2 40.7-36.4 44.2-41.7 108.2-11.8 157.4 29.6 48.5 87.3 73.6 142.9 62.8 54.8-10.7 99.1-56.7 107.5-111.9 1.1-7.1 1.7-14.2 1.7-21.3C392 166.3 377 166.3 376.9 175.9zM22.7 469.8c49.5-48.5 111.9-82.8 180.5-94.4 64.5-10.9 131.8-.6 190.7 27.6 35.2 16.9 67.3 39.6 95.3 66.8 6.9 6.7 17.6-3.9 10.6-10.6-51.1-49.4-115.6-85-185.9-97.6-67.8-12.2-137.8-2.8-200.3 26.3C76 405.5 41.8 430.1 12.1 459.2 5.2 465.9 15.8 476.5 22.7 469.8L22.7 469.8z"></path>
                        </svg>
                        <input type="text" name="userId" id="userId" placeholder="Input your user ID" class="login__input">
                    </div>
                    <label class="login__label" for="password">Password</label>
                    <div class="login__formcontrol">
                        <svg viewBox="0 0 48 48" class="login__icon">
                             <path fill="#687175" id="i-437" d="M11,6c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S13.757,6,11,6z M11,14c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3 S12.654,14,11,14z M26.76,19.83C29.19,14.52,28.09,8.279,23.92,4.1C21.27,1.46,17.75,0,14.01,0S6.75,1.46,4.1,4.1 C1.46,6.75,0,10.27,0,14.01s1.46,7.26,4.1,9.91c2.65,2.64,6.17,4.1,9.91,4.1c2,0,4-0.43,5.82-1.26l3.859,3.86l5.37,1.899 l1.061,4.801l4.72,1.04l1.08,4.859l3.96,0.09L42.4,48H48v-6.41L26.76,19.83z M46,46h-2.4l-2.51-4.66l-3.56-0.08l-1.011-4.58 l-4.72-1.04L30.77,31l-5.99-2.12l-4.559-4.56l-0.65,0.34c-1.711,0.89-3.631,1.359-5.561,1.359c-3.21,0-6.22-1.25-8.49-3.52 C3.25,20.23,2,17.221,2,14.01c0-3.21,1.25-6.22,3.52-8.49C7.79,3.25,10.8,2,14.01,2c3.211,0,6.221,1.25,8.49,3.52 c3.73,3.73,4.6,9.371,2.16,14.051l-0.33,0.64L46,42.41V46z"></path> 
                            <use x="0" y="0" xlink:href="#i-437"></use>
                            </svg>
                        <input type="password" name="password" id="password" placeholder="*****************" class="login__input">
                    </div>
                    <a href="#" class="login__link">Forgot password?</a>
                    <button type="submit" class="login__btn">Login</button>
                    <div class="login__links">
                        <p>Don’t have an account?</p>
                        <a href="#" class="login__link">Create Account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- BOOTSTRAP JS  -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js?_v=20240129141456" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
    
    <!-- CUSTOM SCRIPTS -->
    <script defer src="js/app.min.js?_v=20240129141456"></script>
</body>
</html>
