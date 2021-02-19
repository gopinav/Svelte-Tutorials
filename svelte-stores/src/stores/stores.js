import { writable, readable, derived } from 'svelte/store'

export const count = writable(0)

export const time = readable(new Date(), set => {
  const interval = setInterval(() => {
    set(new Date())
  }, 1000)

  return function () {
    clearInterval(interval)
  }
})

const start = new Date()

export const elapsedTime = derived(time, $time =>
  Math.round(($time - start) / 1000)
)

function createCount() {
  const { subscribe, set, update } = writable(0)

  return {
    subscribe,
    increment: (size = 1) => update(n => n + size),
    decrement: (size = 1) => update(n => n - size),
    reset: () => set(0)
  }
}

export const customCount = createCount()
