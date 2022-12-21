import BackOfHouse from "../layouts/back-of-house";
import Table from '../components/table'
import sectionStyles from '../styles/components/Sections.module.css';

const Kitchen = ({employees, inventory}) => {
    // const {
    //     title,
    //     content,
    // } = postData;

    const employeesColumns = [
        {accessor: 'firstName', displayName: 'First Name'},
        {accessor: 'lastName',displayName: 'Last Name'},
        {accessor: 'jobTitle', displayName: 'Role'},
        {accessor: 'schedule', displayName: 'Schedule'},
    ]

    const inventoryColumns = [
        {accessor: 'itemName', displayName: 'Item'},
        {accessor: 'category',displayName: 'Category'},
        {accessor: 'units', displayName: 'Units'},
        {accessor: 'unitOfMeasure', displayName: 'Measurement'},
    ]

    return (
        <BackOfHouse>
            <h1>Back of House</h1>
            <section className={`${sectionStyles.section}`}>
                <div className={sectionStyles.interior}>
                    <h2>Orders</h2>
                    view order details
                </div>
            </section>
            <section className={`${sectionStyles.section}`}>
                <div className={sectionStyles.interior}>
                    <h2>Scheduled Employees</h2>
                    <Table
                        columns={employeesColumns}
                        rows={employees}
                    />
                    <button className="primary">Manage Schedule</button>
                </div>
            </section>
            <section className={`${sectionStyles.section}`}>
                <div className={sectionStyles.interior}>
                    <h2>Inventory</h2>
                    <Table
                        columns={inventoryColumns}
                        rows={inventory}
                    />
                    <button className="primary">Order Items</button>
                </div>
            </section>
        </BackOfHouse>
    )
}

export default Kitchen;

export async function getServerSideProps(context) {

    const {data: employees} = await fetch(`http://localhost:3000/api/employees`, { method: 'GET' })
      .then((response) => response.json())
    
    const {data: inventory} = await fetch(`http://localhost:3000/api/inventory`, { method: 'GET' })
      .then((response) => response.json())


    return {
      props: {
        // props for your component
        inventory,
        employees,
      },
    };
  }