import React, { Component } from 'react';
import API from '../../services/index'
import { connect } from 'dva'
import { List, WhiteSpace, DatePicker, Picker, Tag, TextareaItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { district } from 'antd-mobile-demo-data'

const Item = List.Item;

class MyProfile extends Component {
    state = {
        newUserInfo: {},
        sexData: [{
            value: 0,
            label: '女'
        }, {
            value: 1,
            label: '男'
        }],
        hobbiesData: [
            {
                value: '1',
                label: '游泳',
                isSelected: false
            },
            {
                value: '2',
                label: '篮球',
                isSelected: false
            },
            {
                value: '3',
                label: '羽毛球',
                isSelected: false
            },
            {
                value: '4',
                label: '摄影',
                isSelected: false
            },
            {
                value: '5',
                label: '旅游',
                isSelected: false
            }
        ]

    }
    async replaceHeadImg(event) {
        let file = event.target.files[0]
        let res = await API.UPLOAD({ file, type: 1 })
        let head_img_url = res.data.url
        this.updateNewUserInfo({ head_img_url })
    }
    updateNewUserInfo(data) {
        this.setState(() => ({
            newUserInfo: { ...this.state.newUserInfo, ...data }
        }));
    }
    saveNewUserInfo() {
        this.props.dispatch({
            type: 'user/updateUserInfoAction', data: this.state.newUserInfo
        })
    }
    selectHobbies(value, isSelected) {
        let { hobbies } = this.state.newUserInfo
        if (isSelected) {
            let h = hobbies.filter(val => val !== value)
            this.updateNewUserInfo({ hobbies: h })
        } else {
            this.updateNewUserInfo({ hobbies: [...hobbies, value] })
        }
    }
    componentWillMount() {
        this.setState(() => ({
            newUserInfo: { ...this.props.userInfo }
        }));
    }
    render() {
        let { sexData, hobbiesData, newUserInfo } = this.state
        let { head_img_url, sign, hobbies,
            birthday, address, sex } = newUserInfo
        let { getFieldProps } = this.props.form
        return (
            <div>
                <List>
                    <Item
                        arrow="horizontal"
                        extra={<img src={head_img_url} />}
                    >
                        <label htmlFor='file' style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0 }}></label>
                        <input type='file' accept="image/*" id="file" style={{ display: 'none' }} onChange={(e) => { this.replaceHeadImg(e) }} />
                        更换头像
                    </Item>
                    <TextareaItem
                        value={sign}
                        title="个人签名"
                        placeholder="请填写属于您自己的个人签名..."
                        autoHeight
                        rows={3}
                        style={{ color: '#888' }}
                        onChange={val => this.updateNewUserInfo({ sign: val })}
                    />
                </List>
                <WhiteSpace />
                <List>
                    <Picker extra="请选择"
                        data={sexData}
                        cols={1}
                        {...getFieldProps('sexData', {
                            initialValue: [sex],
                        })}
                        onOk={([val]) => this.updateNewUserInfo({ sex: val })}
                    >
                        <List.Item arrow="horizontal">性别</List.Item>
                    </Picker>
                    <DatePicker
                        mode="date"
                        value={birthday ? new Date(birthday) : new Date()}
                        minDate={new Date(1900, 1, 1)}
                        maxDate={new Date()}
                        onChange={val => this.updateNewUserInfo({ birthday: val })}
                    >
                        <List.Item arrow="horizontal">出生日期</List.Item>
                    </DatePicker>
                    <Picker extra="请选择"
                        data={district}
                        {...getFieldProps('district', {
                            initialValue: address,
                        })}
                        onOk={val => this.updateNewUserInfo({ address: val })}
                    >
                        <List.Item arrow="horizontal">所在家乡</List.Item>
                    </Picker>
                </List>
                <WhiteSpace />
                <List>
                    <Item arrow="empty">
                        兴趣爱好
                       <div style={{ marginTop: '4px', marginBottom: '23px' }}>
                            {hobbiesData.map(({ value, label, isSelected }) => (
                                <Tag selected={hobbies ? hobbies.includes(value) : false} key={value}
                                    onChange={() => this.selectHobbies(value, isSelected)}
                                    style={{ marginRight: '12px', marginTop: '12px', float: "left" }}
                                >{label}</Tag>
                            ))}
                        </div>
                    </Item>
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <div style={{ padding: '0 12px' }}>
                    <Button type="primary" onClick={() => { this.saveNewUserInfo() }}>保存</Button>
                </div>
            </div >
        )
    }
}

export default connect((state) => {
    return {
        _author: state.user.userId,
        userInfo: state.user.userInfo,
    }
})(createForm()(MyProfile)) 