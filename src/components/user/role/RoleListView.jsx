/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 02 Jul 2025
 * Time: 10:35 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Table, Typography} from "antd";
import useRoleList from "../../../hooks/useRoleList.js";

const RoleListView = () => {
    const {roleList, loading} = useRoleList()

    const columns = [
        {
            key: 1,
            title: "Id",
            dataIndex: 'id',
        },
        {
            key: 2,
            title: "UserId",
            dataIndex: 'userId',
        },
        {
            key: 3,
            title: "Title",
            dataIndex: 'title',
        },
        {
            key: 4,
            title: "Status",
            dataIndex: "completed",
            render: (complete) => {
                return complete ? "Completed" : "Failed"
            }
        }
    ]
    return (
        <>
            <Typography.Title>Role List</Typography.Title>
            <Table
                columns={columns}
                dataSource={roleList}
                loading={loading}
            >

            </Table>
        </>
    );
};

export default RoleListView;