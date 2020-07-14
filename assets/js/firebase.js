let loginClicked = false;
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        if (!loginClicked)
            return;
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        document.getElementById('account-label').innerHTML = 'Logout';
        if (displayName === null) {
            window.location = "/registration.html";
        } else {
            // document.getElementById('greetings').innerHTML = 'HELLO ' + displayName.toUpperCase() + '!<br/>WELCOME TO Internship Fair 2019';
        }
        console.log("user change", user);
    } else {
        document.getElementById('account-label').innerHTML = 'Login';
    }
});

let authUIConfiguration = {
    signInFlow: 'popup',
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // authUIContainer.style.display = "none";
            document.getElementById("register").click();
            var isNewUser = authResult.additionalUserInfo.isNewUser;
        
            document.getElementById("modalLRInput11").innerHTML = authResult.user.phoneNumber;;
            if (isNewUser) {
                window.location = "/registration.html";
                var user = authResult.user;
                console.log(user);
            }
            return false;
        },
        signInFailure: function (error) {
            return handleUIError(error);
        },
        uiShown: function () {
            // document.getElementById('loader').style.display = 'none';
        }
    },
    signInOptions: [
        {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            defaultCountry: 'IN',
            recaptchaParameters: {
                type: 'image', // 'audio'
                size: 'invisible', // 'invisible' or 'compact'
                badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
            },
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    tosUrl: '<your-tos-url>',
    privacyPolicyUrl: function () {
        window.location.assign('<your-privacy-policy-url>');
    }
};
const authUI = new firebaseui.auth.AuthUI(firebase.auth());

const loginButton = document.getElementById('account');
const authUIContainer = document.getElementById('auth-container');
loginButton.onclick = function () {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut().then(() => {
            alert.log("Signedout");
        }).catch((error) => {
            console.log(error);
        });
        return;
    }
    // authUIContainer.style.display = "block";
    authUI.start('#firebaseui-auth-container', authUIConfiguration);
};

window.onclick = function (event) {
    if (event.target === authUIContainer) {
        authUIContainer.style.display = "none";
    }
};