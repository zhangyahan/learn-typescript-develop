// 元素相交观察者，当元素完全出现在窗口中的时候，该观察者会调用回调函数进行通知。
import '@/styles/base.css'

const observer = new IntersectionObserver((entries) => {
  const [entry] = entries
  console.log(entry);
  if (entry.isIntersecting) {
    alert('元素出现')
  }
  else {
    alert('元素消失')
  }
}, {
  root: document.querySelector('#scroll-view'),
  threshold: 1,
})

observer.observe(document.querySelector('#list-item'))
