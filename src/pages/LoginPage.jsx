/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 23 Jun 2025
 * Time: 11:39 AM
 * Email: zishan.softdev@gmail.com
 */

import React, {useContext, useState} from 'react';
import {Button, Col, Form, Input, Row} from "antd";
import LoginCoverOne from "../components/admin-login/LoginCoverOne.jsx";
import LoginLayoutFormOne from "../components/form-layout/LoginLayoutFormOne.jsx";
import {AuthContext} from "../context/AuthContextProvider.jsx";
import {Link, Navigate} from "react-router-dom";
import {LOGIN_NEED_HELP_PATH, ROOT_PATH} from "../routes/Slug.js";
import CustomTitle from "../components/common/CustomTitle.jsx";
import OTPInput from "react-otp-input";
import {INPUT_BGC} from "../components/constant/ColorConstant.js";
import PrimaryBtn from "../components/buttons/PrimaryBtn.jsx";

const LoginPage = () => {

    const authContext = useContext(AuthContext);

    const [form] = Form.useForm();

    const [otp, setOTP] = useState("");

    const inputStyle = {
        width: "16%",
        height: 64,
        fontSize: 18,
        fontWeight: 600,
        border: "none",
        borderRadius: "4px",
        backgroundColor: INPUT_BGC
    }


    const onFinish = (value) => {
        authContext.login(value);
    }

    if (authContext.isLogin) return <Navigate to={ROOT_PATH}/>

    const childrenOne = () => {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '20px',
                width: 500,
                height: 500
            }}>

                <Form
                    layout="vertical"
                    form={form}
                    onFinish={onFinish}
                    style={{padding: "10px"}}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            form.submit();
                        }
                    }}
                >

                    <CustomTitle
                        title="Welcome Back!"
                        style={{fontSize: '34px', marginBottom: '16px'}}
                    />

                    <CustomTitle
                        title="Sign In"
                        style={{fontSize: '24px'}}
                    />

                    <p className="login-form-subtitle">
                        Enter your username and passkey to sign in!
                    </p>

                    <Form.Item
                        label="UserName"
                        name="username"
                        rules={[
                            {required: true, message: 'Please input your username!'},
                        ]}
                    >
                        <Input onChange={(e)=>getActiveUser(e.target.value)} placeholder="Enter Username"/>
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

                    <Form.Item
                        label="Pass Key (Use Authenticator app to get the 6 digit code)"
                    >
                        <div className="otp-wrapper">
                            <OTPInput
                                inputType="tel"
                                value={otp}
                                onChange={setOTP}
                                numInputs={6}
                                renderInput={(props) => <input {...props} />}
                                containerStyle={{gap: 16}}
                                inputStyle={inputStyle}
                            />
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>Sign in</Button>
                    </Form.Item>

                    {/*<Form.Item>*/}
                    {/*    <PrimaryBtn*/}
                    {/*        onClick={() => form.submit()}*/}
                    {/*        style={{width: "100%", marginTop: "16px"}}*/}
                    {/*        disabled={otp?.length !== 6}*/}
                    {/*        btnName="Sign in"*/}
                    {/*        //loading={loading || authContext.loginLoading}*/}
                    {/*        //btnName={!isActivate ? "Send request for activation" : "Sign In"}*/}
                    {/*    />*/}
                    {/*</Form.Item>*/}

                    <Link to={LOGIN_NEED_HELP_PATH}>
                    <span className="need-help-login text-primary-gradient-color">
                        Need help to sign in ?
                    </span>
                    </Link>

                </Form>
            </div>
        );
    }

    return (
        <Row style={{height: '100vh'}}>

            <Col md={12}>
                <LoginCoverOne/>
            </Col>

            <Col md={12}>
                <LoginLayoutFormOne
                    childrenOne={childrenOne()}
                />
            </Col>

        </Row>
    );
};

export default LoginPage;