import { TableBody, TableItem, TableList, TitleItem, TitleList, TransactionTable } from "./TransactionHistory.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <TitleList>
                <tr>
                    <TitleItem>Type</TitleItem>
                    <TitleItem>Amount</TitleItem>
                    <TitleItem>Currency</TitleItem>
                </tr>
            </TitleList>
            <TableBody>
                {items.map(item => (
                    <TableList key={item.id}>
                        <TableItem>{item.type}</TableItem>
                        <TableItem>{item.amount }</TableItem>
                        <TableItem>{item.currency}</TableItem>
                    </TableList>
                ))}
            </TableBody>
        </TransactionTable>
          
      
    )
};