import { fetchWithRetries } from "../../00. Helpers/fetch-retries.helper";

const urls: Array<string> = ['https:www.example.ru/api/', 'https:www.example2.ru/api/']

for (const url of urls) {
    await fetchWithRetries(url)
}