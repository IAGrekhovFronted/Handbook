const maxResponce = 3;

const fetchCMSFirst = async (targetUrl: string) => {
    const url = `https:www.example.ru/api/${targetUrl}`;

    const attemps = 0;

    while (attemps < maxResponce) {
        await fetch(url)
    }
}

const fetchCMSSecond = async (targetUrl: string) => {
    const url = `https:www.example2.ru/api/${targetUrl}`;

    const attemps = 0;

    while (attemps < maxResponce) {
        await fetch(url)
    }
}