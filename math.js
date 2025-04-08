// Addition(+) two variables to get total value 

    const eggPrice = 10;
    const onionPrice = 20;

    const total = eggPrice + onionPrice

    console.log(total);


    // subtraction(-) two variables to get remaing value 

    const potatoPrice = 15;
    const tomatoPrice = 20;
    const result = potatoPrice - tomatoPrice

    console.log(result);

    const milkPrice = 50;
    const sugarPrice = 40;
    const result2 = milkPrice - sugarPrice;

    console.log(result2);

    // Multiplication(*) multiply two variables to get result value 

    const dimPrice = 25;
    const aloPrice = 20;

    const result3 = dimPrice * aloPrice

    console.log(result3);

// Division(/) divide two variables to get result value 

const banaPrice = 40;
const melonPrice = 20;

console.log(banaPrice / melonPrice);

const fishPrice = 50;
const meatPrice = 15;

console.log(fishPrice / meatPrice);


// modules or remainder operator (%) Vagses varkorar er jonno 

console.log(11 % 7);
console.log(10 % 3);

// for addition(+) two string variables' values 

const first = "Masud"
const second = "Rana"

console.log(first + '      ' + second);


const sugar = 20;
const daddy = '20';

console.log(sugar + daddy);

// Variable names caculate with variables value 

const price = 35;
const inboxPrice = price + 10;

console.log(inboxPrice);

const oldPrice = 50;
const newPrice = oldPrice + 40;
const discountPrice = newPrice - 10;

console.log(discountPrice);


// practice homework 

// 1. ধর, তুই 100 টাকা আয় করেছিস । তার মধ্যে 40 টাকা খরচ করছিস ।বাকি টাকা কত রইল, সেটা বের করার এ প্রোগ্রাম লিখ ।

const income = 100;
const spend = 40;

const remain = income - spend;

console.log(remain);

// 2. তোর কাছে 10টা পেন্সিল আছে । প্রতিবার তুই একসাথে 2টা পেন্সিল ব্যবহার করতে পারবি? প্রোগ্রাম লিখে বের কর ।

const pencil = 10;
const usingTogether = 2;

console.log(pencil / usingTogether);

// 3. তোর কাছে 60 টাকা আছে । তুই যদি প্রতিবার 15 টাকা করে খরচ করিস, কয়বার খরচ করতে পারবি? এবং খরচের পর কয় টাকা বাকি থাকবে,সেটা বের করতে একটা প্রোগ্রাম লিখ।

const youHave = 60;
const spendAtATime = 15;
const howManyTimeSpend = youHave / spendAtATime;

console.log(howManyTimeSpend);

const totalSpend = spendAtATime * howManyTimeSpend;

console.log(totalSpend);

console.log(youHave - totalSpend);

// 4. ধর, তুই দুইটা স্ট্রিং লিখলি 'Hello' আর 'World'। এই দুইটা স্ট্রিংকে একসাথে জোড়া দিয়ে কীভাবে "HelloWorld" বানানো যায়, সেটা দেখানোর জন্য একটা প্রোগ্রাম লিখ।

const first2 = 'Hello';
const second2 = "World";

console.log(first2 + second2);

// 5. তুই 153 কেজি চাল আর 261 কেজি ডাল কিনলি, তাহলে কয় কেজি কিনেছিস? মোট কেজি বের করার একটা প্রোগ্রাম লিখ।

const rice = 153;
const lentil = 261; 
const totalKg = rice + lentil;

console.log(totalKg);

// 6. তোর কাছে 500 টাকা আছে, প্রতিবার তুই 75 টাকা খরচ করবি। কয়বার খরচ করতে পারবি আর শেষে কয় টাকা বাকি থাকবে, সেটা বের করার একটা প্রোগ্রাম লিখ।

const youHaveTk = 500;
const everyTimeSpend = 75;
const howManyBar = youHaveTk / everyTimeSpend;

console.log(howManyBar);
console.log(500 % 75);

// 7. তুই 8-কে 3 দিয়ে ভাগ দিলে ভাগফল কত আর ভাগশেষ কত, সেটা বের করার জন্য একটা প্রোগ্রাম লিখ।

const eight = 8; 
const three = 3;
console.log(eight / three);
console.log(8 % 3);

// 8. তুই 50-কে 9 দিয়ে ভাগ দিলে শুধু ভাগশেষ কত, সেটা বের করার জন্য একটা প্রোগ্রাম লিখ।

const fifty = 50; 
const nine = 9;
console.log(fifty / nine);
console.log(50 % 9);

// 9. তুই "Bangla" আর "desh" স্ট্রিং যোগ করে "Bangladesh" বানাতে চাস। কিভাবে করবি, সেটা দেখার জন্য একটা প্রোগ্রাম লিখ।

const namePart1 = "Bangla";
const namePartLast = "desh";

console.log(namePart1 + namePartLast);

// 10. ধর, একদিন ঘুম থেকে উঠে খিদার চোটে তুই ছোটখাটো 

const dailyNeedRice = 4;
const totalRice = 480;

const howmanyDaysSpend = totalRice / dailyNeedRice;

console.log(howmanyDaysSpend);

const oneMonth = 30;

const totalMonthSpend = howmanyDaysSpend / oneMonth;

console.log(totalMonthSpend);

