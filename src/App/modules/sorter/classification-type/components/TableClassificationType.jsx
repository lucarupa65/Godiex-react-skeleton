import React from "react";
import "../classification-type.css";
import {Table} from "antd";
import {useSelector} from "react-redux";

const TableClassificationType = () => {
    const classificationsTypes = useSelector(state => state?.classificationsTypes);

    const columns = [
        {
            title: "Id de el tipo",
            width: 30,
            dataIndex: "id",
            key: "id",
            defaultSortOrder: 'descend',
            fixed: "left",
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: "Nombre",
            width: 30,
            dataIndex: "name",
            key: "name",
        },
    ];
    return (
        <>
            <Table size='small' columns={columns} dataSource={classificationsTypes} x={1500} y={500}/>
        </>
    );
}

export default TableClassificationType;
