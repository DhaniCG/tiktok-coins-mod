$(() => {
    setTimeout(() => {
        const $coins = $("#coins-val");
        let coinsCount = 0;
        const count = setInterval(() => {
            coinsCount += 25;
            $coins.text(`${coinsCount}`);
            if (coinsCount === 50000) clearInterval(count);
        }, 1)
    }, 3000)
})