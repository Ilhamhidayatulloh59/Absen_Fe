import Icon from "@chakra-ui/icon";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";

const TableDates = ({ dates }) => {

    function ValueComponent(props) {
        const { date } = props;
      
        switch (new Date(date.date).getDay()) {
          case 0:
            return <Td>Minggu</Td>;
          case 1:
            return <Td>Senin</Td>;
          case 2:
            return <Td>Selasa</Td>;
          case 3:
            return <Td>Rabu</Td>;
          case 4:
            return <Td>Kamis</Td>;
          case 5:
            return <Td>Jum'at</Td>;
          case 6:
            return <Td>Sabtu</Td>;
          default:
            return <Td>Default value</Td>;
        }
      }

  return (
    <>
      {dates.length ? (
        <TableContainer
          w="60vw"
          mb="4"
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
              </Tr>
            </Thead>
            <Tbody>
              {dates.map((item, index) => {
                return (
                  <Tr key={index}>
                    <ValueComponent date={item}/>
                    <Td>{item.date}</Td>
                    <Td isNumeric>{item.time}</Td>
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
