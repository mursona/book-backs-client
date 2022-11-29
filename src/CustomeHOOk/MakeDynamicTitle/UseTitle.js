import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() => {
        document.title = `${title} - Book Backs`;
    }, [title])
}

export default useTitle;