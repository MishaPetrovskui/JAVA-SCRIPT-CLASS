function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, attributes = {}) {

    attributes = {
        path: '/',
        ...attributes
    };

    if (attributes.expires instanceof Date) {
        attributes.expires = attributes.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let attributeKey in attributes) {
        updatedCookie += "; " + attributeKey;
        let attributeValue = attributes[attributeKey];
        if (attributeValue !== true) {
        updatedCookie += "=" + attributeValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}

function getAllCookies() {
    let cookies = {};
    document.cookie.split(';').forEach(cookie => {
            let [name, value] = cookie.trim().split('=');
            if (name) {
                cookies[decodeURIComponent(name)] = decodeURIComponent(value);
            }
    });
    return cookies;
}

function displayCookies() {
    let allCookies = getAllCookies();
    console.log('ВСЕ КУКИ');
    console.log(allCookies);
    console.log('Строка куки:', document.cookie);
    let cookieDisplay = document.querySelector("div.cookieDisplay");
    if (cookieDisplay) {
        cookieDisplay.innerHTML = '<pre>' + JSON.stringify(allCookies, null, 2) + '</pre>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Загрузка страницы...');
    displayCookies();
    
    document.querySelector("div.overSite").style.display = "none"
    document.querySelector("form.task").style.display = "block"

    let user = { login: "", password: "", remember: false }
    let output = getCookie('user')
    if (output !== undefined) {
        try {
            output = JSON.parse(output)
        } catch (e) {
            output = undefined
        }
    }

    if (output) {
        document.querySelector("form.task").style.display = "none"
        document.querySelector("div.overSite").style.display = "block"
        document.querySelector("p.InSiteP").innerHTML = `Hello, ${output.login}!`

        document.querySelector("button.SignOut").addEventListener("click", (e) => {
            e.preventDefault()
            deleteCookie('user')
            console.log('Кука удалена. Текущие куки:');
            displayCookies();
            document.querySelector("form.task").style.display = "block"
            document.querySelector("div.overSite").style.display = "none"
        })

        if (output.remember) {
            let loginEl = document.querySelector("input.IPlogin")
            let passEl = document.querySelector("input.IPpassword")
            let remEl = document.querySelector("input.remember")
            if (loginEl) loginEl.value = output.login
            if (passEl) passEl.value = output.password
            if (remEl) remEl.checked = !!output.remember
        }
    }
    let form = document.querySelector("form.task")
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            user.login = document.querySelector("input.IPlogin").value
            user.password = document.querySelector("input.IPpassword").value
            user.remember = document.querySelector("input.remember").checked

            let value = JSON.stringify(user)

            if (user.remember) {
                setCookie('user', value, { 'max-age': 60 * 60 * 24 * 30 })
            } else {
                setCookie('user', value, { })
            }

            console.log('Кука установлена. Текущие куки:');
            console.log(getCookie('user'))
            displayCookies();
            event.target.submit()
        })
    }
});