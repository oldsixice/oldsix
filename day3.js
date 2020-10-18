let person = new Object();
person.name = 'ygq';
person.age = 21;
console.log(person.name);

// 对象字面量
let person1 = {};
let s = `
    <div>
        <h1>adcbs</h1>
    </div>
`;
let a = '';

person1.name = 'ygq';
person1.age =21;

let person2 = {
    name: 'ygq',
    age: 21,
};
console.log(person2.name);
console.log(typeof person2);  // Object

// 数组
// const oArray = new Array();

// const oArray = [];

// console.log(typeof oArray);


// 数组初始化
const heroes = [];
console.log(heroes[0]);
heroes[0] = '瑞克';
heroes[1] = '莫迪';
heroes[2] = '反转侠';
heroes[5] = '老姚';

console.log(heroes);

// 数组字面量
const avengers = ['acdc', '卡兹', '西撒', '天堂制造'];
console.log(avengers);
delete avengers[0];
console.log(avengers);


let person2 = {
    name: 'ygq',
    age: 21,
};
const a = [0,undefined, '114119', null, person2];
console.log(a);



// 解构语法
const array1 = [1,2,3];
let a = array1[0];
let b = array1[1];
let c = array1[2];

const [a,b,c] = [1,2,3];
console.log(`a=${a}, b=${b}, c=${c}`)

const [a,b] = [1,2,3];
console.log(a);


const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
console.log(avengers.length);
avengers.length = 4;
console.log(avengers);

const avengers = ['acdc', '卡兹', '西撒', '天堂制造'];
console.log(avengers.pop());
console.log(avengers);
avengers.push('蝙蝠侠');
console.log(avengers);




const avengers = ['acdc', '卡兹', '西撒', '天堂制造']
console.log(avengers.shift())
console.log(avengers)

avengers.unshift('DIO')
console.log(avengers)


const avengers = ['acdc', '卡兹', '西撒', '天堂制造'];
const heroes = ['瑞克','莫迪','反转侠', '老姚'];

const oArray = avengers.concat(heroes);
console.log(avengers);
console.log(oArray);

const avengers = ['acdc', '卡兹', '西撒', '天堂制造'];
const heroes = ['瑞克','莫迪','反转侠', '老姚'];
const oArray = [...avengers,...heroes];
console.log(oArray) 

const avengers = ['acdc', '卡兹', '西撒', '天堂制造'];
const a = avengers.join('&');
console.log(a);

const avengers = ['acdc', '卡兹', '西撒', '天堂制造'];
const b = avengers.slice(2,4);
console.log(b)
console.log(avengers)

const avengers = ['瑞克','莫迪','反转侠', '老姚'];
const c = avengers.splice(2,2,'ygq',2,3)
console.log(c);
console.log(avengers);


const d = ['a','b','c','d']
const e = d.reverse();
console.log(e,d);

const f = [1,2,10,1,2];
const g = f.sort();
console.log(g,f)


const avengers = ['acdc', '卡兹', '西撒', '天堂制造'];
const a1 = avengers.indexOf('天堂制造2');
console.log(a1);

const avengers = ['acdc', '卡兹', '西撒', '天堂制造'];
const a2 = avengers.includes('天堂制造2');
console.log(a2);

// 多维数组
const ma = [[1,2],[3,4]];
console.log(ma[0][0]);

const summer = ['DEEMO', 'RAY', 'ANG']; 
const winter = ['CAT', 'JIN', 'FBI']; 
const nested = [ summer, winter ]; 
console.log(nested);

const flat = [...summer, ...winter];
console.log(flat);


// set
const list = new Set();
list.add(1);
list.add(2).add(3).add(4).add(5);
list.add(5);
console.log(list);

const list = new Set([1,2,3,4,5])
console.log(list);

// 数组去重
const a = [1,2,12,1,2,3,4,5]
const b = new Set(a);
console.log(b);
const c = [...b];
console.log(c);

const c = new Set('Hello');
console.log(c)

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.size)
list4.size = 6;
console.log(list4)

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.has('brown'));
list4.delete('the');
console.log(list4)

list4.clear();
console.log(list4);


const list4 = new Set().add('the').add('quick').add('brown').add('fox');
const oArray = [...list4];
console.log(oArray)

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
const oArray = Array.from(list4);
console.log(oArray);


// 内存泄漏
let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
const strong = new Set().add(array1).add(array2); 
console.log(strong.has(array1));
array1 = null; // 删除对原始对象的引用
array2 = null;
array3 = [...strong][0]; 
array4 = [...strong][1];
console.log(array3);
console.log(array4);

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
const weak = new WeakSet().add(array1).add(array2);
console.log(weak);
array1 = null;
array2 = null;
const array3 = [...weak][0];
const array4 = [...weak][1];
console.log(array3);
console.log(array4);


// map
const romanNumerals = new Map(); 
romanNumerals.set(1,'I'); 
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V'); 
console.log(romanNumerals);
console.log(romanNumerals.size);
console.log(romanNumerals.get(3));
console.log(romanNumerals.has(5));
romanNumerals.delete(5);
console.log(romanNumerals);
romanNumerals.clear();
console.log(romanNumerals);

// map to array

const romanNumerals = new Map(); 
romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V'); 
const oArray1 = [...romanNumerals];
const oArray2 = Array.from(romanNumerals);
console.log(oArray1);
console.log(oArray2);


