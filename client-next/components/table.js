import styles from '../styles/components/Table.module.css'

const Table = ({ columns, rows }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.header}>
                <tr>
                    {columns.map(col => {
                        return (<th key={col.accessor}>{col.displayName}</th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {rows.map(row => {
                    const cells = columns.map(col => {
                        return (<td key={col.accessor}>{row[col.accessor].toString()}</td>)
                    })
                    return (<tr key={row.id} className={styles.row}>{cells}</tr>)
                })}
            </tbody>
        </table>
    )
}

export default Table;