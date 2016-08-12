import React, {Component, PropTypes} from 'react';
import {
    View,
    Text
} from 'react-native';

class Detail extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View>
                <Text>this is detail page.</Text>
                <Text>
                    {new Date(this.props.ts).toLocaleDateString()}
                </Text>
            </View>
        );
    }
}

Detail.propTypes = {
    ts: PropTypes.number.isRequired
};

export default Detail;