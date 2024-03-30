const candles = [4, 4, 1, 3];

function countTallerCandles(candlesArray) {
    let tallerCandles = candlesArray.filter(candle => candle == 4);
    return tallerCandles.length
}

console.log(countTallerCandles(candles));