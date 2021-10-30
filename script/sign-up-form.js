(function () {
 const __support = (function () {
        if (!window.DOMParser) return false;
        var parser = new DOMParser();
        try {
            parser.parseFromString('x', 'text/html');
        } catch (err) {
            return false;
        }
        return true;
    })();

    let stringToHTML = function (str) {

        // If DOMParser is supported, use it
        if (__support) {
            var parser = new DOMParser();
            var doc = parser.parseFromString(str, 'text/html');
            return doc.body.children[0];
        }

        // Otherwise, fallback to old-school method
        var dom = document.createElement('div');
        dom.innerHTML = str;
        return dom;

    }

    class SignUpForm {
        constructor() {
            let html = ''
            html = `
            <section class="signup-modal">
                <form>
                    <h3>Signup for using world class Technology</h3>
                    <hr class="my-3" color="#D2D2D2">
                    <div class="signup-modal-input">
                        <input value="" id="signup_modal_hospital">
                        <label for="signup_modal_hospital" >Enter your Hospital Name</label>
                    </div>
                    <div class="signup-modal-input">
                        <input value="" id="signup_modal_name">
                        <label for="signup_modal_name" >Enter your Name</label>
                    </div>
                    <div class="signup-modal-input">
                        <input value="" id="signup_modal_number">
                        <label for="signup_modal_number" >Contact Number</label>
                    </div>
                    <div class="signup-modal-input">
                        <input value="" id="signup_modal_email">
                        <label for="signup_modal_email" >Email ID</label>
                    </div>

                    <div class="signup-modal-input">
                        <input type="checkbox" value="" id="signup_modal_email">
                        <span for="signup_modal_email" >Terms and Conditions</span>
                    </div>
                    <div class="signup-modal-input" style="margin-top: -20px;">
                        <input type="checkbox" value="" id="signup_modal_email">
                        <span for="signup_modal_email" >Subscribe to our News Latter</span>
                    </div>
                    <div class="signup-action flex jc-between px-5">
                        <button class="btn red tx-l" id="signup_cancel">Cancel</button>
                        <button class="btn green tx-l" id="signup_register">Register</button>
                    </div>
                </form>
                <style>
                    .signup-modal {
                        height: 100vh;
                        width: 100vw;
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: 1;
                        background-color: rgba(0,0,0,0.3);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .signup-modal form {
                        width: 100%;
                        max-width: 700px;
                        padding: 20px;
                        background: var(--white);
                        border-radius: 8px;
                    }
                    .signup-modal h3 {
                        text-align:center;
                        font-size: 1.3em;
                        font-weight: bold;
                        color: var(--primary);
                    }
                    .signup-modal .signup-modal-input {
                        position: relative;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        padding: 20px;
                    }
                    .signup-modal .signup-modal-input input {
                        padding: 10px 16px;
                        font-size: 18px;
                        border-radius: 8px;
                        color: var(--text-light);
                        border: 1px solid var(--gray-dark);
                        margin-right: 20px;
                        width: 100%;
                    }
                    .signup-modal .signup-modal-input input[type="checkbox"] {
                        border-radius: 8px;
                        border: 1px solid var(--gray-dark);
                        margin-right: 10px;
                        width: 16px;
                        height: 16px;
                    }
                    .signup-modal .signup-modal-input input[type="checkbox"]:focus {
                        outline: none;
                    }
                    
                    .signup-modal .signup-modal-input input:focus {
                        outline: 1px solid var(--secondary);
                    }
                    .signup-modal .signup-modal-input  label {
                        position: absolute;
                        transform: translateY(-50%);
                        background: var(--white);
                        padding: 0px 8px;
                        transition: top 0.6s;
                        left: 40px;
                        top: 50%;
                        color: var(--text-lightest);
                    }
                    .signup-modal .signup-modal-input input:focus + label,
                    .signup-modal .signup-modal-input input.filled + label {
                        color: var(--primary);
                        font-style: normal;
                        top: 20px;
                    }
                    .signup-modal .signup-action button{
                        width: 200px
                    }
                </style>
            </section>
            
        `
            this.dom = stringToHTML(html)
            this.dom.querySelectorAll('input').forEach(input => {
                input.addEventListener('blur', () => {
                    const eleClass = input.getAttribute('class') || ''
                    if(input.value !== '') {
                        input.setAttribute('class', eleClass + ' ' + 'filled')
                    } else {
                        input.setAttribute('class', eleClass.replace(' filled', ''))
                    }
                })
            })
            this.dom.querySelector('#signup_cancel').addEventListener('click', () => {
                this.close()
            })
            this.dom.querySelector('#signup_register').addEventListener('click', () => {
                this.register()
            })
            this.close()
            document.body.append(this.dom)
        }

        open () {
            this.dom.style.display = 'flex'
        }

        close () {
            this.dom.style.display = 'none'
        }

        register () {
            // need to write logic
            
        }
    }
    window.SignUpForm = SignUpForm
})()