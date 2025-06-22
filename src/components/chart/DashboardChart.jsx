/**
 * Created by WebStorm.
 * User: Zishan
 * Date: 19 Jun 2025
 * Time: 10:31 AM
 * Email: zishan.softdev@gmail.com
 */

import React, {useEffect, useState} from 'react';
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import APICall from "../../services/APICall.js";
import {Card, message} from "antd";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const DashboardChart = () => {

    const [loading, setLoading] = useState(false)
    const [revenueData, setRevenueData] = useState({
        labels: [],
        datasets: [],
    });

    const getRevenue = async () => {
        try {
            setLoading(true);
            const res = await APICall.getRevenue();
            message.success("Data has been successfully revenue");
            console.log("Revenue : ", res.data);

            const labels = res.data.carts.map((cart) => {
                return `User-${cart.userId}`
            })

            const data = res.data.carts.map((cart) => {
                return cart.discountedTotal;
            })

            const dataSource = {
                labels,
                datasets: [
                    {
                        label: 'Revenue',
                        data: data,
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            };

            setRevenueData(dataSource);

            setLoading(false);
        } catch (err) {
            message.error("Data not found");
        }
    }

    useEffect(() => {
        getRevenue();
    }, [])


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Order Revenue',
                font: {
                    size: 26,
                    weight: 'bold'
                },
            },
        },
    };


    return (
        <Card style={{ height: 300, marginTop: 30 }}>
            <Bar options={options} data={revenueData}/>
        </Card>
    )
};

export default DashboardChart;