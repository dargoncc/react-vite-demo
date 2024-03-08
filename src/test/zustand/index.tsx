import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ICounterState {
    counter: number
    inc: (by: number) => void
    dec: (by: number) => void
}
const useCounter = create<ICounterState>((set) => ({
    counter: 0,
    inc: (by) => set((state) => ({ counter: state.counter + by })),
    dec: (by) => set((state) => ({ counter: state.counter - by })),
}))

interface ILocalStorageCounterState  {
    counter: number
    inc: (by: number) => void
    dec: (by: number) => void
}
const useLocalStorageCounter = create(persist<ILocalStorageCounterState>(
    (set) => ({
        counter: 0,
        inc: (by) => set((state) => ({ counter: state.counter + by })),
        dec: (by) => set((state) => ({ counter: state.counter - by })),
    }),
    { name: 'shul'}
))

export default function Zustand() {
    const { counter, inc, dec } = useCounter()
    const { counter: counter2, inc: inc2, dec: dec2 } = useLocalStorageCounter()
    return (
        <>
            <div>Zustand counter: {counter}</div>
            <button onClick={() => inc(1)}>+</button>
            <button onClick={() => dec(1)}>-</button>

            <hr />

            <div>LocalStorage counter2: {counter2}</div>
            <button onClick={() => inc2(1)}>+</button>
            <button onClick={() => dec2(1)}>-</button>
        </>
    )
}
