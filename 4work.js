//1
const bills = [36, 166, 648] 
const tips = [];
const payments = [];
const tipCaculator = () => {
    for (let i = 0; i < bills.length; i++) {
        const x = bills[i]
        if (x < 50) {
            const tip = x * 0.2
            const pay = x + tip
            tips.push(tip)
            payments.push(pay)
        }
        if (x >= 50 & x <= 200) {
            const tip = x * 0.15
            const pay = x + tip
            tips.push(tip)
            payments.push(pay)
        } else if (x > 200) {
            const tip = x * 0.1
            const pay = x + tip
            tips.push(tip)
            payments.push(pay)
        }
    }
    console.log("三笔消费的小费分别为：", tips) 
    console.log("三笔消费的小费分别为：", payments) 
}
tipCaculator()




//2 
function mean(a, b, c) {
    return (a + b + c) / 3;
}

//平均值
const mean1 = (...numbers) => {
    let l = numbers.length;
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    let Avg = sum / l;
    console.log(Avg);
}
mean1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//reduce()函数
const mean2 = (numbers) => {
    let l = numbers.length;
    let Avg = numbers.reduce((numbers, sum) => numbers + sum) / l;
    return Avg
}
console.log(mean2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//数组中的偶数品平均数
const asd = []; 
const mean2 = () => {
    let l = asd.length;
    let Avg = asd.reduce((asd, sum) => asd + sum) / l;
    console.log(Avg)
} //平均值
const mean3 = (arr1, callback) => {
    const arr2 = arr1.map((sum) => {
        if (sum % 2 == 0) {
            return sum
        }
    }) //取偶数
    arr2.forEach(
        item => {
            if (item) {
                asd.push(item)
            }
        }
    ) //新的数组
    if (typeof (callback) === "function") {
        callback()
    } //回调
}
mean3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mean2)

