import { writable, readable } from 'svelte/store'

export const count = writable(0)

export const time = readable(new Date(), set => {
  const interval = setInterval(() => {
    set(new Date())
  }, 1000)

  return function () {
    clearInterval(interval)
  }
})
