import * as React from 'react';
import Typography from '@mui/material/Typography/Typography';

export default function Ipify(props: any) {
  const [ipAddress, setIpAddress] = React.useState("");

  React.useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIp();
  }, []);

  return (
    <>
      {ipAddress && <Typography
        component="h5"
        variant="h5"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignSelf: 'center',
          textAlign: 'center',
        }}
      >
        你的公网 IP 是&nbsp;
        <Typography
          component="span"
          variant="h5"
          sx={{
            color: (theme) =>
              theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
          }}
        >
          {ipAddress}
        </Typography>
      </Typography>}
    </>
  );
}