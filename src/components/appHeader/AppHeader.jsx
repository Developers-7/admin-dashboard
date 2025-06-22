/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 10:54 AM
 * Email: zishan.softdev@gmail.com
 */

import React, {useEffect, useState} from 'react';
import {Badge, Drawer, Image, List, message, Space, Typography} from 'antd';
import {BellFilled, MailOutlined} from "@ant-design/icons";
import APICall from "../../services/APICall.js";

const AppHeader = () => {
    const [loading, setLoading] = useState(false);

    const [comments, setComments] = useState([]);
    const [commentCount, setCommentCount] = useState(null);
    const [commentsOpen, setCommentsOpen] = useState(false);

    const [notification, setNotification] = useState([]);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const [notificationCount, setNotificationCount] = useState(null);

    const getMailComments = async () => {
        try{
            setLoading(true);
            const res = await APICall.getMailComment();
            console.log("Comments : ", res.data.comments);
            message.success("Data is getting successfully.");
            setComments(res.data.comments);
            setCommentCount(res.data.comments.length);
            setLoading(false);

        }catch(error){
            message.error(error.message);
        }
    }

    const getProductOrder = async () => {
        try{
            setLoading(true);
            const res = await APICall.getProductOrder();
            setNotification(res.data.products);
            message.success("Data is getting successfully.");
            setNotificationCount(res.data.products.length);
            setLoading(false);
        }catch(error){
            message.error(error.message);
        }
    }
    useEffect(() => {
        getMailComments();
        getProductOrder();
    },[])

    return (
        <div className="AppHeader">
            <Image
                width="40px"
                src="https://cdn-icons-png.flaticon.com/512/5432/5432747.png"
            />
            <Typography.Title>Zishan's Dashboard</Typography.Title>
            <Space>
                <Badge count={commentCount} dot>
                    <MailOutlined onClick={()=>setCommentsOpen(true)} style={{ fontSize: 24 }}/>
                </Badge>
                <Badge count= {notificationCount} >
                    <BellFilled onClick={()=>setNotificationOpen(true)} style={{fontSize: 24}}/>
                </Badge>
            </Space>

            <Drawer
                title="All Comments"
                open={commentsOpen}
                onClose={()=>setCommentsOpen(false)}
                footer={null}
            >
                <List
                    dataSource={comments}
                    renderItem={(item) => (
                        <List.Item key={item.id}>{item.body}</List.Item>
                    )}
                >

                </List>
            </Drawer>

            <Drawer
                title="All Notifications"
                open={notificationOpen}
                onClose={()=>setNotificationOpen(false)}
                footer={null}
            >
                <List
                    dataSource={notification}
                    renderItem={(item) => (
                        <List.Item key={item.id}><Typography.Text strong>{item.title} </Typography.Text> has been ordered!</List.Item>
                    )}
                >

                </List>
            </Drawer>
        </div>
    );
};

export default AppHeader;