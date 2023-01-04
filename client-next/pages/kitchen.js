import { gql, useQuery } from "@apollo/client";
import BackOfHouse from "../layouts/back-of-house";
import Table from '../components/table'
import { useGetAllEmployeesQuery } from "../redux/services/employees";
import { useGetAllInventoryItemsQuery } from "../redux/services/inventory";
import {DELIVERY_MODE, DELIVERY_STATUS, CARRYOUT_STATUS } from "../constants/pizza-options";

import sectionStyles from '../styles/components/Sections.module.css';


const ALL_ORDERS_QUERY = gql`
    query {
        orders {
            id
            createdAt
            pizzasCount
            status
        }
    }
`

// const NEW_ORDERS_SUBSCRIPTION = gql`
//     subscription {
//         newLink {
//             id
//             url
//             description
//             createdAt
//             postedBy {
//                 id
//                 name
//             }
//             votes {
//                 id
//                 user {
//                     id
//                 }
//             }
//         }
//     }
// `;

const Kitchen = () => {
    // const {
    //     title,
    //     content,
    // } = postData;

    const { data: employeesData, isLoading: isEmployeesLoading } = useGetAllEmployeesQuery()
    const { data: inventoryData, isLoading: isInventoryLoading } = useGetAllInventoryItemsQuery()

    let orders = [];

    const ordersColumns = [
        { accessor: 'id', displayName: 'Order #' },
        { accessor: 'createdAt', displayName: 'Created Date' },
        { accessor: 'timeElapsed', displayName: 'Time Elapsed' }, // how old is the order
        { accessor: 'pizzasCount', displayName: '# Items' },
        { accessor: 'statusText', displayName: 'Status' },
        // { accessor: 'mode', displayName: 'Mode' }
    ]

    const employeesColumns = [
        { accessor: 'firstName', displayName: 'First Name' },
        { accessor: 'lastName', displayName: 'Last Name' },
        { accessor: 'jobTitle', displayName: 'Role' },
        { accessor: 'schedule', displayName: 'Schedule' },
    ]

    const inventoryColumns = [
        { accessor: 'itemName', displayName: 'Item' },
        { accessor: 'category', displayName: 'Category' },
        { accessor: 'units', displayName: 'Units' },
        { accessor: 'unitOfMeasure', displayName: 'Measurement' },
    ]

    const { data: ordersData
    } = useQuery(ALL_ORDERS_QUERY, {
        pollInterval: 5000
    });

    orders = ordersData?.orders.map((order) => {
        const {
            mode,
            createdAt,
            status
        } = order;

        const statusInfo = (mode === DELIVERY_MODE) ? DELIVERY_STATUS : CARRYOUT_STATUS;

        return {
            ...order,
            timeElapsed: Date.now() - (new Date(createdAt)).getTime(),
            statusText: statusInfo[status].displayText
        }

    }) || []
    // also only show only incomplete orders
    // sort by time elapsed
    // poll for new/updated orders on consistent basis

    return (
        <BackOfHouse>
            <h1>Kitchen Operations Dashboard</h1>
            <section className={`${sectionStyles.section}`}>
                <div className={sectionStyles.interior}>
                    <h2>Orders</h2>
                    <Table
                        columns={ordersColumns}
                        rows={orders}
                        index="id"
                        actionText="View Details"
                        actionPath="orders"
                    />
                </div>
                {/* <chart of business></chart> */}
            </section>
            <section className={`${sectionStyles.section}`}>
                <div className={sectionStyles.interior}>
                    <h2>Scheduled Employees</h2>
                    {isEmployeesLoading ? (<>...Loading</>) :
                        (<Table
                            columns={employeesColumns}
                            rows={employeesData}
                            index="id"
                            actionText="Manage Schedule"
                            actionPath="employees"
                        />)
                    }
                </div>
                {/* <schedule chart></schedule> */}
            </section>
            <section className={`${sectionStyles.section}`}>
                <div className={sectionStyles.interior}>
                    <h2>Inventory</h2>
                    {isInventoryLoading ? (<>...Loading</>) :
                        (<Table
                            columns={inventoryColumns}
                            rows={inventoryData}
                            index="id"
                            actionText="Order Items"
                            actionPath="inventory"
                        />)}
                </div>
            </section>
        </BackOfHouse>
    )
}

export default Kitchen;

// SSR next js, rtk query   

// export async function getServerSideProps(context) {

//     const { data: employees } = await fetch(`http://localhost:3000/api/employees`, { method: 'GET' })
//         .then((response) => response.json())

//     const { data: inventory } = await fetch(`http://localhost:3000/api/inventory`, { method: 'GET' })
//         .then((response) => response.json())


//     return {
//         props: {
//             // props for your component
//             inventory,
//             employees,
//         },
//     };
// }