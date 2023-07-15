/**
 * ウィンドウのロード時に、保存された名前とメールの値を確認し、それらがあればデフォルトとして設定します。
 */
window.onload = () => {
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");

    const storedName = localStorage.getItem('name');
    if (storedName) {
        nameElement.value = storedName;
    }

    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
        emailElement.value = storedEmail;
    }
};

/**
 * 入力フィールドを確認し、それらが空であればエラーメッセージを表示します。入力内容をローカルストレージに保存します。
 */
function validateForm() {
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");

    if (!nameElement.value.trim()) {
        showError(nameElement, "nameError");
    } else {
        hideError(nameElement, "nameError");
        localStorage.setItem('name', nameElement.value);
    }

    if (!emailElement.value.trim()) {
        showError(emailElement, "emailError");
    } else {
        hideError(emailElement, "emailError");
        localStorage.setItem('email', emailElement.value);
    }

    if (!passwordElement.value.trim()) {
        showError(passwordElement, "passwordError");
    } else {
        hideError(passwordElement, "passwordError");
    }

    if (nameElement.value.trim() && emailElement.value.trim() && passwordElement.value.trim()) {
        document.getElementById("confirmName").textContent = nameElement.value;
        document.getElementById("confirmEmail").textContent = emailElement.value;
        document.getElementById("inputSection").style.display = "none";
        document.getElementById("confirmSection").style.display = "block";
    }
}

/**
 * 確認セクションから入力セクションに戻ります。
 */
function backToInput() {
    document.getElementById("inputSection").style.display = "block";
    document.getElementById("confirmSection").style.display = "none";
}

/**
 * ボタンを無効にし、ローディングスピナーを表示し、その後、完了アイコンを表示します。
 */
function disableButton() {
    const myButton = document.getElementById('myButton');
    const buttonText = document.getElementById('buttonText');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const completeIcon = document.getElementById('completeIcon');

    myButton.disabled = true;
    buttonText.textContent = '処理中...';
    loadingSpinner.style.display = 'inline-block';

    setTimeout(() => {
        loadingSpinner.style.display = 'none';
        buttonText.textContent = '完了';
        completeIcon.style.display = 'inline-block';
    }, 1000);
}

/**
 * 与えられた入力フィールドのエラーメッセージを表示します。
 */
function showError(input, errorElementId) {
    input.classList.add("border-danger");
    const errorElement = document.getElementById(errorElementId);
    errorElement.style.display = "block";
}

/**
 * 与えられた入力フィールドのエラーメッセージを非表示にします。
 */
function hideError(input, errorElementId) {
    input.classList.remove("border-danger");
    const errorElement = document.getElementById(errorElementId);
    errorElement.style.display = "none";
}
