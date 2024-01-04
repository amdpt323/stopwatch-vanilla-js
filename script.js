class Stopwatch {
  constructor(minutes,seconds,milliseconds,startBtn,startStopDiv) {
    this.startTime = 0
    this.elapsedTime = 0
    this.timerInterval = null
    this.mm = document.getElementById(minutes)
    this.ss = document.getElementById(seconds)
    this.ms = document.getElementById(milliseconds)
    this.startBtn = document.getElementById(startBtn)
    this.startStopDiv = document.getElementById(startStopDiv)
  }

  startTimer() {
    this.startTime = Date.now() - this.elapsedTime
    this.timerInterval = setInterval(() => this.updateTime(), 10)
    this.startBtn.textContent = 'Stop'
    this.startStopDiv.style.backgroundColor = 'red'
  }

  stopTimer() {
    clearInterval(this.timerInterval)
    this.timerInterval = null
    this.startBtn.textContent = 'Start'
    this.startStopDiv.style.backgroundColor = 'green'
  }

  resetTimer() {
    clearInterval(this.timerInterval)
    this.elapsedTime = 0
    this.mm.textContent = 'Minutes'
    this.ss.textContent = 'Seconds'
    this.ms.textContent = 'Milliseconds'
    this.startBtn.textContent = 'Start'
    this.startStopDiv.style.backgroundColor = 'green'
  }

  updateTime() {
    const currentTime = Date.now()
    this.elapsedTime = currentTime - this.startTime
    this.displayTime(this.elapsedTime)
  }

  displayTime(time) {
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const seconds = Math.floor((time / 1000) % 60)
    const milliseconds = Math.floor((time % 1000) / 10)

    const displayMinutes = String(minutes).padStart(2, '0')
    const displaySeconds = String(seconds).padStart(2, '0')
    const displayMilliseconds = String(milliseconds).padStart(2, '0')

    this.mm.textContent = `${displayMinutes}`
    this.ss.textContent = `${displaySeconds}`
    this.ms.textContent = `${displayMilliseconds}`
  }

  init(startBtn,resetBtn) {
    document.getElementById(startBtn).addEventListener('click', () => {
      if (this.timerInterval) {
        this.stopTimer()
      } else {
        this.startTimer()
      }
    })

    document.getElementById(resetBtn).addEventListener('click', () => {
      this.resetTimer()
    })
  }
}

const addsw = document.getElementById('addsw')
const display = document.getElementById('display')
let count = 0;
const swarr = [];

addsw.addEventListener('click', () => {
  createStopwatch()
})


const createStopwatch = () => {
 count+=1;
  display.insertAdjacentHTML(
    'beforeend',
    `<div class="container">
        <input type="text" placeholder="Stopwatch">
        <div class="frames" id="minutes${count}">Minutes</div>
        <div class="frames" id="seconds${count}">Seconds</div>
        <div class="frames" id="milliseconds${count}">Milliseconds</div>
        <div class="frames start" id="startStopDiv${count}">
          <button id="startBtn${count}">Start</button>
        </div>
        <div class="frames reset"><button id="resetBtn${count}">Reset</button></div>
      </div>`
  )
  const newsw = new Stopwatch(
    (minutes = `minutes${count}`),
    (seconds = `seconds${count}`),
    (milliseconds = `milliseconds${count}`),
    (startBtn = `startBtn${count}`),
    (startStopDiv = `startStopDiv${count}`)
  )
  newsw.init(startBtn = `startBtn${count}`,resetBtn=`resetBtn${count}`)
  swarr.push(newsw)
}

const sw1 = new Stopwatch(
  (minutes = 'minutes'),
  (seconds = 'seconds'),
  (milliseconds = 'milliseconds'),
  (startBtn = 'startBtn'),
  (startStopDiv = 'startStopDiv')
)
sw1.init(startBtn = 'startBtn',resetBtn='resetBtn')
