export async function fetchWithRetries(url: string, requestInit: RequestInit = {}, retries: number = 3) {
    let attempt = 0;

    while (attempt < retries) {
        try {
            const response = await fetch(url, requestInit);

            if (response.ok) {
                return await response.json();
            } else {
                console.warn(`Error response: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.warn(`Error during fetch attempt ${attempt + 1}: ${error}`);
        }

        attempt++;

        if (attempt === retries) {
            throw new Error(`Failed to fetch from ${url} after ${retries} attempts`);
        }
    }
};