//materi pertama (basic array)
const arrayKamu = []
arrayKamu[0] = 'ryan'
arrayKamu[1] = 'pewang'
arrayKamu[2] = 'vito'
console.log(arrayKamu)

const arraySaya = ['😁', '😪', '😑', '💀', '😸', '🐶']
const skull = arraySaya.includes('💀')

if(skull) {
    const skullPosition = arraySaya.indexOf('💀')
    console.log(skullPosition)
}
else {
    console.log("sorry I don't know")
}

console.log(skull)


//materi kedua (counting array)
const arrayKita = ['<', '+', '=', '-', '>']
const minus = arrayKita.includes('-')

if (minus) {
const minusPosition = arrayKita.indexOf('-')
const indexBefore = minusPosition - 1
const indexAfter = minusPosition + 1
const Before = arrayKita[indexBefore]
const After = arrayKita[indexAfter]
console.log(`the sign before minus is "${Before}"`)
console.log(`the sign after minus is "${After}"`)
}
else {
    console.log('error')
}

//materi ketiga (deep copy array)
const arrayBaru = ['<', '+', '=', '-', '>']
const newArrayBaru = Array.from(arrayBaru)
// const newArrayBaru = [...arrayBaru]
// const newArrayBaru = JSON.parse(JSON.stringify(arrayBaru))

newArrayBaru[0] = 'x'

console.log({ arrayBaru })
console.log({ newArrayBaru })


//materi keempat (multi array)
 const arrayMulti = ['😎', '13' , 
{
    skull: function () {
        console.log("this is skull")
    }
}
    , 'eyes', ['sheesh', 'damn']]

 console.log(arrayMulti[4][0])
 arrayMulti[2].skull()


//materi kelima (merge and mapping array)
const arrayPertama = ['1', '2', '3', '4', '5']
const arrayKedua = ['6', '7', '8', '9', '10']

const mergeArray = arrayPertama.concat(arrayKedua)
console.log(mergeArray)

mergeArray.map((value, index) => console.log(value, index))
for(list of mergeArray) console.log(list)


//materi keenam (API datas)
const datas = [
    {
        name: 'ega tetama',
        stack: 'javascript',
        age: '18',
    }, 
    {
        name: 'seno aji',
        stack: 'dart',
        age: '19',
    }, 
    {
        name: 'yonky juliano',
        stack: 'python',
        age: '20',
    },
]

datas.map((values, index) => {
    console.log(values.name, values.stack, values.age)
})

//sort & filter data
datas.sort((a, b) => b.age - a.age).map(values => console.log(values))
datas.filter((x) => x.age > 19).map(values => console.log(values))


