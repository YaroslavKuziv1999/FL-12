// Your code goes here
let email = prompt('Please enter your email');
let password;
let user = {userEmail: 'user@gmail.com', password: 'UserPass' };
let admin = {adminEmail: 'admin@gmail.com', password: 'AdminPass'};
let userIn = false;
let adminIn = false;

// eslint-disable-next-line eqeqeq
if(email == null) {
    alert('Canceled');
} else{
    // eslint-disable-next-line no-magic-numbers
    if(email.length<5){
        alert('I don’t know any emails having name length less than 5 symbols');
    }else{
        // eslint-disable-next-line eqeqeq
        if(email==user.userEmail || email ==admin.adminEmail){
            password = prompt('Enter password');
            // eslint-disable-next-line eqeqeq
            if(password==null){
                alert('Canceled');
            }else{
                // eslint-disable-next-line eqeqeq
                if(email==user.userEmail){
                    // eslint-disable-next-line eqeqeq
                    if(email==user.userEmail && password==user.password){
                        alert('HelloUser!');
                        userIn=true;
                    }else{
                        alert('Wrong password');
                    }
                }else{
                    // eslint-disable-next-line eqeqeq
                    if(email==admin.adminEmail && password==admin.password){
                        alert('HelloAdmin!');
                        adminIn=true;
                    }else{
                        alert('Wrong password');
                    }
                }
            }
        }else{
            alert('I don’t know you')
        }
    }
}
let check = confirm('Do you want to change your password?');
let oldPass;
let newPass;
let newNewPass;

// eslint-disable-next-line eqeqeq
if(check == null){
    alert('You have failed the change.');
}else{
    oldPass = prompt('Please write the old password');
    // eslint-disable-next-line eqeqeq
    if(userIn==true){
        // eslint-disable-next-line eqeqeq
        if(oldPass==user.password){
            newPass=prompt('Enter new password');
            // eslint-disable-next-line eqeqeq
            if(newPass==null){
                alert('Canceled');
            }
            // eslint-disable-next-line no-magic-numbers
            if(newPass.length<6){
                alert('It’s too short password. Sorry.');
            } else{
                newNewPass=prompt('Enter it again');
                // eslint-disable-next-line eqeqeq
                if(newNewPass==newPass){
                    alert('You have successfully changed your password.');
                }else{
                    alert('You wrote the wrong password.');
                }
            }
        }else{
            alert('Wrong password');
        }
    }
    // eslint-disable-next-line eqeqeq
    if(adminIn==true){
        // eslint-disable-next-line eqeqeq
        if(oldPass==admin.password){
            newPass=prompt('Enter new password');
            // eslint-disable-next-line eqeqeq
            if(newPass==null){
                alert('Canceled');
            }
            // eslint-disable-next-line no-magic-numbers
            if(newPass.length<6){
                alert('It’s too short password. Sorry.');
            }else{
                newNewPass=prompt('Enter it again');
                // eslint-disable-next-line eqeqeq
                if(newNewPass==newPass){
                    alert('You have successfully changed your password.');
                }else{
                    alert('You wrote the wrong password.');
                }
            }
        }else{
            alert('Wrong password');
        }
    }
}