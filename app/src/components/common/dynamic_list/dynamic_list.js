import React, { Component } from 'react';
import { Card, Grid, Button } from 'antd-mobile';
import { getDetailDate } from '../../../utils/filter'
import { Link } from 'dva/router';
import { connect } from 'dva'
import API from '../../../services/index'
class DynamicList extends Component {
    // state = {
    //     dynamicData: []
    // }
    follow(id) {
        console.log(id)
    }
    async like(_id) {
        let _author = this.props._author
        let res = await API.DYNAMIC_LIKE({ _id, _author })
        // if (res) {
        //     // let likes_count = res.data.count
        //     // this.updateDynamicData({ likes_count })
        // }
    }
    // updateDynamicData({ likes_count }) {

    // }
    render() {
        let { data } = this.props
        let noData = <div style={{ backgroundColor: '#fff', textAlign: 'center', padding: '12px 0' }}>暂无数据</div>
        return (
            <div >
                {!data.length ? noData :
                    data.map((item, key) =>
                        <Card full key={key}>
                            <Card.Header
                                title={<div>{item._author.username}</div>}
                                thumb={<div style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '6px' }}><img style={{ width: '100%', height: '100%' }} src={item._author.head_img_url} /></div>}
                                extra={<Button type="warning" inline size="small" style={{ marginRight: '4px' }}
                                    onClick={() => { this.follow(item._author._id) }}>关注</Button>}
                            />
                            <Card.Body>
                                <div style={{ marginBottom: '5px' }}>{item.content}</div>
                                <Grid data={item.images}
                                    columnNum={3}
                                    hasLine={false}
                                    activeStyle={false}
                                    renderItem={dataItem => (
                                        <div style={{ padding: '0px 5px' }}>
                                            <img src={dataItem} style={{ width: '100%', height: '100%' }} alt="" />
                                        </div>
                                    )}
                                />
                            </Card.Body>
                            <Card.Footer style={{ margin: '12px 0 5px' }}
                                content={getDetailDate(item.create_time)}
                                extra={<div>
                                    <span style={{ marginRight: '20px' }} onClick={() => { this.like(item._id) }}>点赞 {item.likes_count}</span>
                                    <Link to='/hhh' style={{ color: '#888' }}>评论 {item.comment_count}</Link>
                                </div>} />
                        </Card>
                    )}
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        _author: state.user.userId
    }
}
export default connect(mapStateToProps)(DynamicList)