import BackOfHouse from "../layouts/back-of-house";
import Table from '../components/table'
import { useGetAllEmployeesQuery } from "../redux/services/employees";
import { useGetAllInventoryItemsQuery } from "../redux/services/inventory";

import sectionStyles from '../styles/components/Sections.module.css';

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

    const ordersColumns = [
        { accessor: 'orderNumber', displayName: 'Order #' },
        { accessor: 'createdDate', displayName: 'Created Date' }, // how old is the order
        { accessor: 'numPizzas', displayName: '# Items' },
        { accessor: 'status', displayName: 'Status' },
    ]

    const orders = [];

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

    return (
        <BackOfHouse>
            <h1>Kitchen Operations Dashboard</h1>
            <section className={`${sectionStyles.section}`}>
                <div className={sectionStyles.interior}>
                    <h2>Orders</h2>
                    <Table
                        columns={ordersColumns}
                        rows={orders}
                    />
                </div>
                <button>View Order Details</button>
                {/* <chart of business></chart> */}
            </section>
            <section className={`${sectionStyles.section}`}>
                <div className={sectionStyles.interior}>
                    <h2>Scheduled Employees</h2>
                    {isEmployeesLoading ? (<>...Loading</>) :
                        (<Table
                            columns={employeesColumns}
                            rows={employeesData}
                        />)
                    }
                    <button className="primary">Manage Schedule</button>
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
                        />)}
                    <button className="primary">Order Items</button>
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