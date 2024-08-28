import { useEffect } from 'react'

function useOutsideClick(refDiv, stateHandle) {

    useEffect(() => {
        function handleClick(e) {
            if (!refDiv.current || refDiv.current.contains(e.target)) {
                return
            }
            stateHandle()
        }

        document.addEventListener('mousedown', handleClick)

        return (() => {
            document.removeEventListener('mousedown', handleClick)
        })
    }, [stateHandle, refDiv])
}

export default useOutsideClick