import styled from 'styled-components';

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-size: .9rem;
`;

export const TableHeader = styled.div`
  display: flex;
  background-color: ${props => props.theme.bahTableHeaderColor};
  font-weight: 700;
  border-bottom: 1px solid ${props => props.theme.bahTableHeaderBorderColor};
`;

export const TableRow = styled.div`
  display: flex;
  background-color: ${props => props.theme.bahTableRowColor};
`;

export const TableCol = styled.div`
  flex-grow: ${props => props.flexGrow || 1};
  flex-basis: 0;
  margin: 2px 8px 2px 4px;
`;

export default Table;
