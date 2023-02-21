import Icon from "@chakra-ui/icon";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import useValue from "../../hooks/useValue";

const TableDates = () => {
  const {dates} = useValue()

  return (
    <>
      {dates.length ? (
        <TableContainer
          w="60vw"
          border="1px"
          borderColor="orange.100"
          p="2"
        >
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Hari</Th>
                <Th>Tanggal</Th>
                <Th isNumeric>Jam Mapel</Th>
                <Th>JP</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dates.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>{item.day}</Td>
                    <Td>{item.date}</Td>
                    <Td isNumeric>{item.time}</Td>
                    <Td>{item.jp}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
};

export default TableDates;
