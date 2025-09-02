let loggedIn = false;
let address = Math.random()
document.getElementById('loginButton').addEventListener('click', function() {
    if (loggedIn === false) {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let money = document.getElementById('money');
        let money2 = document.getElementById('money2').textContent;
        let moneyValue = parseFloat(money2.textContent);

        if (username.includes("'") || password.includes("'")) {
            const errorElement = document.createElement('p');
            errorElement.className = 'error-message';
            errorElement.style.color = 'red';
            errorElement.style.fontFamily = 'Segoe UI';
            errorElement.textContent = 'you really thought';
            document.body.appendChild(errorElement);
            setTimeout(function() {
                document.body.removeChild(errorElement);
            }, 1000);
        } else if (username === '24084' && password === 'schlange') {
            loggedIn = true;
            document.getElementById('tomorrow').style.display = 'none';
            document.getElementById('username').style.display = 'none';
            document.getElementById('password').style.display = 'none';
            document.getElementById('loginButton').textContent = 'Logout';
            document.getElementById('welcome').textContent = `Welcome, ${username}!`;
            document.getElementById('enterMessage').style.display = 'block';
            document.getElementById('transferButton').style.display = 'block';
            document.getElementById('money2').style.display = 'block';
            document.getElementById('receiveButton').style.display = 'block';
            setTimeout(function() {
                document.getElementById('enterMessage').style.display = 'none';
            }, 2000);
            money.style.display = 'block';
            money2.style.display = 'block';
            // Redirect to another page or perform further actions
        } else {
            const errorElement = document.createElement('p');
            errorElement.className = 'error-message';
            errorElement.textContent = 'Invalid username or password.';
            errorElement.style.color = 'red';
            errorElement.style.fontFamily = 'Segoe UI';
            document.body.appendChild(errorElement);
            setTimeout(function() {
                document.body.removeChild(errorElement);
            }, 1000);
        }
    } else {
        if (confirm("Are you sure you want to logout?")) {
            window.location.reload();
        } else {
            console.log("cancelled.");
        }
    }
});

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('loginButton').click();
    }
});

function withdraw() {
    if (loggedIn) {
        const money2 = document.getElementById('money2').textContent;
        const moneyValue = parseFloat(money2.replace(' BTC', '')); // Remove " BTC" from the string

        const amount = prompt(`Enter the amount of BTC you want to transfer (Available: ${moneyValue})`, moneyValue.toString());
        if (amount !== null) {
            const amountNumber = parseFloat(amount);
            if (amountNumber > moneyValue) {
                alert("Insufficient funds.");
            } else if (isNaN(amountNumber) || amountNumber <= 0) {
                alert("Invalid amount.");
            } else {
                const recipient = prompt(`Transferring ${amount} BTC to:`);
                if (recipient !== null) {
                    alert(`Transferred ${amount} BTC successfully to ${recipient}`);
                    const newBalance = moneyValue - amountNumber;
                    document.getElementById('money2').textContent = `${newBalance} BTC`;
                    if (document.getElementById('money2').textContent <= 0) {
                        document.getElementById('money2').style.display = 'none';
                    } else {
                        
                    }
                } else {
                    alert("Transfer cancelled.");
                }
            }
        }
    } else {
        cheating()
    }
}

function reloadp() {
    window.location.reload();
}

function cheating() {

}

function receive() {
    if (loggedIn === true) {
    alert("Your BTC Address: " + address) } else {
        alert("Please login first.")
    }
}
