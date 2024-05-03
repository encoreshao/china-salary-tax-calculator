import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.backgroundChannel,
    color: theme.palette.common.backgroundChannel,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  personValue: number | undefined,
  personTax: number | undefined,
  companyValue: number | undefined,
  companytax: number | undefined
) {
  return { name, personValue, personTax, companyValue, companytax };
}


export default function DataOverview(props: any) {
  const { data } = props;

  console.log(data)

  const rows = [
    createData('养老保险金：', data.insuranceAndFund.pension, undefined, data.insuranceAndFundOfCompany.pension, undefined),
    createData('医疗保险金：', data.insuranceAndFund.medicalInsurance, undefined, data.insuranceAndFundOfCompany.medicalInsurance, undefined),
    createData('失业保险金：', data.insuranceAndFund.unemploymentInsurance, undefined, data.insuranceAndFundOfCompany.unemploymentInsurance, undefined),
    createData('工伤保险金：', data.insuranceAndFund.injuryInsurance, undefined, data.insuranceAndFundOfCompany.injuryInsurance, undefined),
    createData('生育保险金：', data.insuranceAndFund.maternityInsurance, undefined, data.insuranceAndFundOfCompany.maternityInsurance, undefined),
    createData('基本住房公积金：', data.insuranceAndFund.housingFund, undefined, data.insuranceAndFundOfCompany.housingFund, undefined),
    // createData('补充住房公积金：', undefined, undefined, undefined, undefined),
    createData('共计支出：', data.insuranceAndFund.totalFund, undefined, data.insuranceAndFundOfCompany.totalFund, undefined),
    createData('应税工资：', data.salaryAfterTaxAvg, undefined, undefined, undefined),
    createData('个人所得税：', (data.salaryTotalTax / 12) > 0 ? data.salaryTotalTax / 12 : 0, undefined, undefined, undefined),
    createData('税后月薪：', data.salaryAfterTaxAvg, undefined, undefined, undefined),
  ];

  return (
    <>
      <Typography
        component="h5"
        variant="h5"
        textAlign="center"
        sx={{
          p: 2, width: { xs: '100%', sm: 'auto' },
          color: (theme) =>
            theme.palette.mode === 'light' ? 'primary.main' : 'primary.light'
        }}
      >
        五险一金汇缴明细(按月计算)
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: '98%', margin: 'auto' }} aria-label="Salary Data">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">个人应缴部分</StyledTableCell>
              <StyledTableCell align="center">单位应缴部分</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.personValue && row.personValue.toFixed(0)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.companyValue && row.companyValue.toFixed(0)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography
        variant="h6"
        textAlign="right"
        sx={{ p: 2, width: { xs: '100%', sm: 'auto' } }}
        color="text.secondary"
      >
        以上基于2024年最新数据计算，因企业缴纳各异，本结果仅供参考！
      </Typography>
    </>
  );
}
