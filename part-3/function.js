// javascript function parameters

function addName(firstname, lastname) {
   console.log('nama depan:', firstname)
   console.log('nama belakang:', lastname)
}

addName('hilmawan', 'ega tetama')

// javascript function arguments

function addStatus() {
   console.log('fakultas:', arguments[0])
   console.log('program studi:', arguments[1])
}

addStatus('Ilmu komputer', 'S1 informatika')

//looping function

function addFriend() {
   for (let i = 0; i < arguments.length; i++)
      console.log('nama lengkap:', arguments[i])
}

addFriend('johan liebert', 'bang ryan', 'bang rijal')

// new Function

const sum = new Function(
   'x',
   'y',
   'console.log(x+y)',
)

sum(1, 2)

//row function

const sum2 = (x, y) => {
   console.log(x + y)
}

sum2(3, 6)

//function random

function randomize() {
   const randomNumber = ~~(Math.random() * 1000)
   if(randomNumber > 200) {
      console.log('wow amazing')
   }
   else {
      console.log(randomNumber)
   }
}

randomize()