import { Component } from "react";

class ImageGallery extends Component {
    state = {
        item: null,
        error: '',
        status: 'idle',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.props.value) {
            this.setState({status: 'pending'})
        }
    }
}

export default ImageGallery