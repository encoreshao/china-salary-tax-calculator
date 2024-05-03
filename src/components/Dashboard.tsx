/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import DataOverview from './DataOverview';
import Salary from '../calculator';

export default function Dashboard(props: any) {
  const { city, chinaTax } = props;

  const [salary, setSalary] = React.useState(undefined || String);
  const [result, setResult] = React.useState<any>();

  const [cityName, setCityName] = React.useState<any>('');

  React.useEffect(() => {
    setCityName(chinaTax[city].label)
  }, [city]);

  const salaryTaxCalculator = () => {
    const salaryResult = (new Salary({
      salary: Number(salary),
      startingSalary: 5000,
    })).calculate()

    setResult(salaryResult)
  }

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            个税计算器&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              {cityName}
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            简单、精准、免费的 五险一金及税后工资个税计算器
            <br />
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="税前月薪"
              placeholder="税前月薪人民币..."
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              onKeyDown={(event) => {
                if (!/[0-9\b]|Backspace|Delete/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <Button variant="contained" color="primary" onClick={() => salaryTaxCalculator()}>
              计算
            </Button>
          </Stack>
          {salary && result && result.salaryAfterTaxAvg &&
            <Typography variant="body1" textAlign="center" color="text.secondary">
              月税后：
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                }}
              >
                {(result.salaryAfterTaxAvg).toFixed(2)}
              </Typography>
              &nbsp;元
              <br />
              年税后：
              <Typography
                component="span"
                variant="body2"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                }}
              >
                {(result.totalSalaryAfterTax).toFixed(2)}
              </Typography>
              &nbsp;元 累计预扣每月详情
            </Typography>
          }
        </Stack>
        {salary && result && result.salaryAfterTaxAvg &&
          <Box
            id="image"
            sx={(theme) => ({
              mt: { xs: 8, sm: 10 },
              alignSelf: 'center',
              height: { xs: 200, sm: 700 },
              width: '100%',
              backgroundSize: 'cover',
              borderRadius: '10px',
              outline: '1px solid',
              outlineColor:
                theme.palette.mode === 'light'
                  ? alpha('#BFCCD9', 0.9)
                  : alpha('#9CCCFC', 0.1),
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                  : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
            })}
          >
            <DataOverview data={result} />
          </Box>
        }
      </Container>
    </Box>
  );
}