/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 17 Jun 2025
 * Time: 4:33 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {useEffect, useState} from 'react';
import {Button, Form, Input, message, Modal, Table, Typography} from "antd";
import APICall from "../../services/APICall.js";


const DashboardTable = () => {

    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [form] = Form.useForm();

    const getData = async () => {
        try {
            setLoading(true);
            const res = await APICall.getOrders();
            console.log("First : ", res);
            console.log("Second : ", res.data);
            console.log("Third : ", res.data.products);

            setDataSource(res.data.products);
            setLoading(false);

        } catch (err) {
            console.error("Error fetching orders:", err);
        }
    };
    useEffect(() => {
        getData();
    }, []);


    const handleEdit = (record) => {
        setEditingItem(record);
        form.setFieldsValue(record);
        setEditModalVisible(true);
    };

    const onFinish = async (values) => {
        try {
            const payload = {
                id: editingItem.id,
                quantity: values.quantity
            };

            await APICall.updateOrder(1, payload);

            const res = await APICall.getOrders();
            setDataSource(res.data.products);

            setEditModalVisible(false);
            form.resetFields();
            message.success("Cart updated successfully");
        } catch (err) {
            console.error("Update failed:", err);
            message.error("Update failed");
        }
    };


    const handleDelete = async () => {
        try {
            await APICall.deleteOrder(1);

            setDataSource([]);
            message.success("Cart deleted successfully");
        } catch (err) {
            console.error("Delete failed:", err);
            message.error("Delete failed");
        }
    };

    const columns = [
        {
            title: "Title",
            dataIndex: "title"
        },
        {
            title: "Quantity",
            dataIndex: "quantity"
        },
        {
            title: "Price",
            dataIndex: "price"
        },
        {
            title: "Action",
            render: (record) => (
                <>
                    <a onClick={() => handleEdit(record)}>Edit</a> |{" "}
                    <a onClick={() => handleDelete(record.id)} style={{ color: "red" }}> Delete</a>
                </>
            )
        }
    ]

    return (
        <div>
            <Typography.Title>Recent Orders</Typography.Title>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                loading={loading}
                rowKey={(record) => record.id}
            />

            <Modal
                title="Edit Order"
                open={editModalVisible}
                onCancel={() => setEditModalVisible(false)}
                footer={null}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: "Please enter a title" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="quantity"
                        label="Quantity"
                        rules={[{ required: true, message: "Enter quantity" }]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[{ required: true, message: "Enter price" }]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    );
};

export default DashboardTable;