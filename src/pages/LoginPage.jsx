/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 23 Jun 2025
 * Time: 11:39 AM
 * Email: zishan.softdev@gmail.com
 */

import React, {useContext} from 'react';
import {Button, Form, Input, Typography} from "antd";
import {Navigate} from "react-router-dom";
import {ROOT_PATH} from "../routes/Slug.js";
import {AuthContext} from "../context/AuthContextProvider.jsx";


const LoginPage = () => {

    const authContext = useContext(AuthContext);

    const [form] = Form.useForm();


    const onFinish = (value) => {
        authContext.login(value);
    }

    if (authContext.isLogin) return <Navigate to={ROOT_PATH}/>


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px',
            width: 500,
            height: 500
        }}>
            <Typography.Title>Login Form</Typography.Title>
            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
                style={{padding: "10px"}}
                onKeyDown={(event) => {
                    if(event.key === 'Enter'){
                        event.preventDefault();
                        form.submit();
                    }
                }}
            >
                <Form.Item
                    label="UserName"
                    name="username"
                    rules={[
                        {required: true, message: 'Please input your username!'},
                    ]}
                >
                    <Input placeholder="Enter Username"/>
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {type: 'email', required: true, message: 'Please input your email!'},
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {required: true, message: 'Please input your password!'},
                    ]}
                >
                    <Input.Password placeholder="Enter Password"/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" block>Log in</Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default LoginPage;