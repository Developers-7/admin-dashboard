/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 02 Jul 2025
 * Time: 10:32 AM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import PageWrapper from "../../common/PageWrapper.jsx";
import PrimaryBtn from "../../buttons/PrimaryBtn.jsx";
import CustomPageHeader from "../../layout/page-header/CustomePageHeader.jsx";
import {Table} from "antd";
// import {Col, Input, Select} from "antd";
// import SearchCard from "../../common/SearchCard.jsx";

const EmployeeListView = () => {

    const pageHeader = <CustomPageHeader
        title="Employee List"
        extra={[
            <PrimaryBtn
                key={1}
                btnName="Create New Employee "
                //onClick={() => openEmployeeDrawer(null)}
            />
        ]}
    />
    return (
        <PageWrapper pageHeader={pageHeader}>

            <div>
            {/*    <SearchCard*/}
            {/*        title="Total Employees"*/}
            {/*        count={totalElements}*/}
            {/*    >*/}
            {/*        <Col md={4}>*/}
            {/*            <Select*/}
            {/*                allowClear*/}
            {/*                onClear={() => employeeDropDownSearchClear("active")}*/}
            {/*                onSelect={*/}
            {/*                    value => handleEmployeeDropdownSearch(*/}
            {/*                        {target: {name: "active", value}}*/}
            {/*                    )*/}
            {/*                }*/}
            {/*                value={search?.active ? search.active : null}*/}
            {/*                placeholder="Status"*/}
            {/*                style={{width: "100%"}}*/}
            {/*            >*/}
            {/*                <Select.Option value="ALL">*/}
            {/*                    All*/}
            {/*                </Select.Option>*/}
            {/*                <Select.Option value={ACTIVE}>*/}
            {/*                    Active*/}
            {/*                </Select.Option>*/}
            {/*                <Select.Option value={INACTIVE}>*/}
            {/*                    Inactive*/}
            {/*                </Select.Option>*/}
            {/*            </Select>*/}
            {/*        </Col>*/}

            {/*        <Col md={8}>*/}
            {/*            <Input*/}
            {/*                allowClear*/}
            {/*                onChange={e => handleEmployeeSearch(e)}*/}
            {/*                value={search?.searchKey}*/}
            {/*                name="searchKey"*/}
            {/*                placeholder="Search"*/}
            {/*            />*/}
            {/*        </Col>*/}

            {/*    </SearchCard>*/}

                {/*<Table*/}
                {/*    columns={columns}*/}
                {/*    dataSource={dataSource}*/}


                {/*>*/}

                {/*</Table>*/}

            </div>

        </PageWrapper>
    );
};

export default EmployeeListView;