function sum(...item) {
    let sumItem = 0;

    for (const x of item) {
        sumItem += x
    }

    return sumItem;
};

const result = sum(5, 10, 15);
console.log(result);