import React from "react"
import ScrollTracker from "./scroll-tracker"
import ShareBanner from "./share-banner"

class PostSidebar extends React.Component {
    sidebarStyle = {
        paddingTop: 100,
        marginLeft: -30
    }

    render() {
        return(
            <ScrollTracker>
                <div style={this.sidebarStyle}>
                    <p>Written by <br /><strong>kim3-sudo</strong></p>
                </div>
            </ScrollTracker>
        )
    }
}

export default PostSidebar
