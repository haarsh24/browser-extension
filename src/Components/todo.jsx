import { useState } from 'react'
import { TodoModal } from './todoModal'
const Todo = () => {
    const [showModal, setShowModal] = useState("")
    return (
        <div className='flex justify-end text-center bottom-0 left-0 right-0 relative mr-2'>
            {showModal && <TodoModal setShowModal={setShowModal} />}
            <button
                className='font-bold text-2xl'
                onClick={() => setShowModal(pre => !pre)}>Todo</button>
        </div>
    )
}

export { Todo }