import React, { Component } from 'react'
import { Products } from '../component/Products';

export class Badges extends Component {

    componentWillUnmount() {
        console.log('6. componentWillUnmount');
        clearTimeout(this.timeoutId);
      }
    render() {
        return (
            <div>
                 <Products/>
            </div>
        )
    }
}

export default Badges
