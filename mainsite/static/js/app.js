import './test'
import '../css/styles.css'

console.log('app start')
console.log('do something...')

let count = 0
const testEl = document.querySelector('#test')
testEl.innerHTML = count


const ageEl = document.querySelector('#age')
ageEl.innerHTML = '23dd'

setInterval(() => {
  count += 1
  testEl.innerHTML = count
}, 2000)


if (module.hot) {
  console.log('kkkkkkk')
  module.hot.accept('./test.js', () => {
    console.log('hahahahahaha......')
  });
}
