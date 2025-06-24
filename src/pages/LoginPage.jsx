/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 23 Jun 2025
 * Time: 11:39 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Button, Form, Input, message, Typography} from "antd";
import APICall from "../services/APICall.js";
import {Navigate} from "react-router-dom";
import {ROOT_PATH} from "../routes/Slug.js";
import {TOKEN} from "../components/constant/ConstantVariables.js";

const LoginPage = () => {

    const [form] = Form.useForm();


    const onFinish = async (value) => {
        try {
            const res = await APICall.login(value);
            localStorage.setItem(TOKEN, res.data.accessToken);
            message.success("Login successful!!");
            window.location.reload();
            <Navigate to={ROOT_PATH}/>
            form.resetFields();

        } catch (error) {
            console.log("Login Error : ", error);
            message.error("Login failed with error: ", error);
        }
    }

   // if (localStorage.getItem(TOKEN)) return <Navigate to={ROOT_PATH}/>


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px',
            width: 500,
            height: 500
        }}>
            <Typography.Title>Login</Typography.Title>
            <Form
                form={form}
                onFinish={onFinish}
                style={{padding: "10px"}}
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