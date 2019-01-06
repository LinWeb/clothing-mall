import React, { Component } from 'react';
import { SearchBar, WhiteSpace, } from 'antd-mobile';
class Header extends Component {
    render() {
        return (
            <div>
                <SearchBar placeholder="搜索" maxLength={8} />
                <WhiteSpace />
            </div>
        )
    }
}

export default Header