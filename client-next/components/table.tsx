import Link from "next/link";
import styles from "../styles/components/Table.module.css";

interface Column {
  /** String corresponding to key used in `rows` */
  accessor: string;
  /** Display text used in table header */
  displayName: string;
}

interface Props {
  /** Array representing column header configuration. Accessors should correspond to keys in `rows` data */
  columns: Column[];
  /** Array representing table rows */
  rows: any[];
  /** Unique index for data in row, will be appended to actionPath */
  index: string;
  /** Displayed text on action button */
  actionText?: string;
  /** URL to navigate to when clicking action button */
  actionPath?: String;
}

const Table = ({
  columns,
  rows,
  index = "id",
  actionText,
  actionPath,
}: Props) => {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          {columns.map((col) => {
            return <th key={col.accessor}>{col.displayName}</th>;
          })}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const cells = columns.map((col) => {
            return <td key={col.accessor}>{row[col.accessor].toString()}</td>;
          });

          return (
            <tr key={row[index]} className={styles.row}>
              {cells}
              <td>
                <Link passHref href={`/${actionPath}/${row[index]}`}>
                  <button className="primary">{actionText}</button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
