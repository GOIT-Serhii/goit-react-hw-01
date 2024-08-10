import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionContainer}>
      <thead className={css.transactionHead}>
        <tr className={css.transactionHeadList}>
          <th className={css.transactionHeadItem}>Type</th>
          <th className={css.transactionHeadItem}>Amount</th>
          <th className={css.transactionHeadItem}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.transactionList} key={item.id}>
              <td className={css.transactionItem}>{item.type}</td>
              <td className={css.transactionItem}>{item.amount}</td>
              <td className={css.transactionItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
