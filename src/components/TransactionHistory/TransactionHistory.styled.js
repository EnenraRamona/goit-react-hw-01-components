import styled from 'styled-components';

export const TransactionTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const TitleList = styled.thead`
  background-color: #00bcd5;
  border: 1px solid #fff;
  border-radius: 5px;

  :nth-child(3) {
    border: none;
  }
`;

export const TitleItem = styled.th`
  width: 160px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid #fff;
  border-top: none;
  border-left: none;
  border-bottom: none;
  color: #fff;
`;
export const TableBody = styled.tbody``;

export const TableList = styled.tr``;

export const TableItem = styled.td`
  text-align: center;
  width: 160px;
`;
