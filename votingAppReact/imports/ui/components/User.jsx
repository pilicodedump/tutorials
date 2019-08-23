import React, { Component } from 'react';

export default class User extends Component {
    render() {
        return (
            <tr key={_id}>
                <td className="vertical-align" width="5%">
                    {count+1}
                </td>
                <td className="vertical-align" width="30%">
                    {isCurrentUser ? <Label bsStyle="success">You!</Label> : ''}
                    {emails[0].address}
                </td>
                <td className="vertical-align" width="40%">
                    {emails[0].verified}
                </td>
                <td className="vertical-align" width="5%">

                </td>
            </tr>
        )
    }
}
