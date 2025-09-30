import {useStore } from '@nanostores/solid'
import { counter, echo, echoed } from '../scripts/stores/index.ts'

export const Counter = () => {

    const $counter = useStore(counter)
    const $echoed = useStore(echoed)

    return <>

        <input placeholder={$echoed()} id='echo' type='text'
            onKeydown={(e) => {
                echo(e.currentTarget.value)
            }}
        />

        <p>Echoed: {$echoed}</p>

        <p>Check F12 Console for echos</p>

        <p>Counter</p>

        <button class='btn' onClick={() => {
            counter.set($counter() + 1)
        }}>
            +
        </button>
        <p>{$counter}</p>
        <button class='btn' onClick={() => {
            counter.set($counter() - 1)
        }}>
           - 
        </button>

    </>

}
