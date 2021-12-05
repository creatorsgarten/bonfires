import { Observable, Observer } from 'rxjs'

/** Observes iterating through the observable. */
interface IterationObserver<T> extends Observer<T> {
  done: boolean
  container: PromiseContainer<T>
}

/** Stores the promise. */
interface PromiseContainer<T> {
  promise?: Promise<T>

  resolve?(value: T | PromiseLike<T>): void
  reject?(error: Error): void
}

/** Creates a promise container. */
function container<T>() {
  const container: PromiseContainer<T> = {}

  container.promise = new Promise<T>((resolve, reject) => {
    container.resolve = resolve
    container.reject = reject
  })

  return container
}

/**
 * Convert an observable to an async iterator.
 *
 * Quote: "This observer will drop values if the consumer is still busy. This is the only
 * default that makes sense, but other observable combinators can add more specific buffering
 * strategies."
 *
 * Source: https://gist.github.com/zenparsing/4e65592f184dafc82125
 */
export async function* toAsyncIterator<T>(
  observable: Observable<T>
): AsyncIterator<T> {
  const observer: IterationObserver<T> = {
    done: false,
    container: container(),

    next(v) {
      this.container.resolve?.(v)
      this.container = container()
    },

    error(e) {
      this.container.reject?.(e)
    },

    complete() {
      this.done = true
    },
  }

  const subscription = observable.subscribe(observer)

  try {
    while (true) {
      const value = await observer.container.promise
      value //?

      if (observer.done) return

      if (value !== undefined) yield value
    }
  } finally {
    subscription.unsubscribe()
  }
}

export function toAsyncIterable<T>(
  observable: Observable<T>
): AsyncIterable<T> {
  const iterator = toAsyncIterator(observable)

  return { [Symbol.asyncIterator]: () => iterator }
}
