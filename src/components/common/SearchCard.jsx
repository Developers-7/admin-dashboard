/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 02 Jul 2025
 * Time: 3:12 PM
 * Email: zishan.softdev@gmail.com
 */

import React from 'react';
import {Row} from "antd";

import "./search_card.scss"

const SearchCard = ({title, count, children}) => {
    return (
        <div className="search-card">

            <div className="search-card-left">
                <span className="title">
                    {title}
                </span>{title && ":"}
                <span className="count">
                    {count}
                </span>
            </div>

            <div className="search-card-right">
                <Row
                    gutter={24}
                    style={{justifyContent: "flex-end", margin: 0}}
                >
                    {children}
                </Row>
            </div>
        </div>
    );
};

export default SearchCard;