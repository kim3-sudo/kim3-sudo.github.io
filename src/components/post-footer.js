import React from "react"
import useDarkMode from "use-dark-mode"
import Comment from "./comment"

const PostFooter = () => {
    const darkMode = useDarkMode(true)
    const commentBox = React.createRef()
    React.useEffect(() => {
        const commentScript = document.createElement("script")
        const commentsTheme = darkMode.value ? "github-dark" : "github-light"
        commentScript.async = true
        commentScript.setAttribute("repo", "kim3-sudo/kim3-sudo.github.io")
        commentScript.setAttribute("issue-term", "pathname")
        commentScript.setAttribute("label", "comment")
        commentScript.setAttribute("theme", commentsTheme)
        commentScript.setAttribute("crossorigin", "anonymous")
        return () => {
            removeScript()
        }
    }, [commentBox, darkMode])
    return (
        <React.Fragment>
            <Comment ref={commentBox} />
            <hr />
        </React.Fragment>
    )
}

export default PostFooter
