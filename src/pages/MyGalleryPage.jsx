/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 22 Jun 2025
 * Time: 4:11 PM
 * Email: zishan.softdev@gmail.com
 */

import React, {useEffect, useState} from 'react';
import {Card, Image, Input, List, message, Space, Typography} from "antd";
import APICall from "../services/APICall.js";


const MyGalleryPage = () => {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [searchedText, setSearchedText] = useState("");

    const [previewImage, setPreviewImage] = useState([]);

    const onSearch = (value) => {
        setSearchedText(value);
    }

    const getProductImages = async () => {
        try {
            setLoading(true);
            const res = await APICall.getProductImages(searchedText);
            setDataSource(res.data.products);
            console.log("Images : ", res.data);
            setLoading(false);
        } catch (e) {
            message.error(e.message);
        }
    }

    useEffect(() => {
        getProductImages();
    }, [searchedText]);

    return (
        <Space style={{ padding: "0px 16px"}} direction="vertical">
            <Typography.Title
                level={2}
                style={{textAlign: "center"}}
            >Zishan's Gallery</Typography.Title>

            <Input.Search
                onSearch={onSearch}
                style={{width: 500, margin: "auto", marginTop: "20px", marginBottom: "20px"}}
            />

            <List
                grid={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6}}
                loading={loading}
                dataSource={dataSource}
                renderItem={(item) => {
                    return <Card hoverable key={item.id} style={{height: 300, margin: 12}}>
                        <Image src={item.thumbnail} preview={false} onClick={() => {
                            setPreviewImage(item.images);
                        }}/>
                    </Card>
                }
                }
            >

            </List>

            {
                previewImage.length > 0 ? <Image.PreviewGroup preview={{
                    visible: previewImage.length,
                    onVisibleChange: (value) => {
                        if (!value) {
                            setPreviewImage([]);
                        }
                    }
                }}>
                    {previewImage.map((image) => (<Image src={image}/>))}

                </Image.PreviewGroup> : null
            }
        </Space>
    );
};

export default MyGalleryPage;