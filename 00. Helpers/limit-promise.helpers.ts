import pLimit from 'p-limit';

export async function limitPromises<T = any>(promises: (() => Promise<T>)[], concurrentLimit: number): Promise<T[]> {
    const limit = pLimit(concurrentLimit);
    const limitedPromises = promises.map(promise => limit(promise));
    return Promise.all(limitedPromises);
}