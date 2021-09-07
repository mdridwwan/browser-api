const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(g => g.includes(name));
    if (findCookie) {
        const cookieNamesValue = findCookie.split('=');
        return cookieNamesValue[1];
    }
}