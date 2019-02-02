import React from 'react'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '288682915180-3mnalgj92hjd5ksia58coi1ni5523utc.apps.googleusercontent.com',
                scope: 'email'
            })
        })
    }
    render() {
        return <div>GoogleAuth</div>
    }
}
export default GoogleAuth