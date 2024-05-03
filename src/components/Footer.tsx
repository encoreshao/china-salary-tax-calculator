import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link
        href="https://ranbot.online/"
        target="_blank"
        rel="noopener"
        color="inherit">
          RanBOT&nbsp;
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              关于工资计算器
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              工资计算器按照最新的五险一金缴纳比例计算各城市的税后工资收入，帮助您更详细了解五险一金扣税的各比例和金额。
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              反馈或建议请发送邮件至：encoreshaoAtgmail.com
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            链接
          </Typography>
          <Link color="text.secondary" href="https://icmoc.com">
            ICMOC
          </Link>
          <Link color="text.secondary" href="https://ranbot.online">
            RanBOT
          </Link>
          <Link color="text.secondary" href="https://linktr.cn">
            Linktr.cn
          </Link>
          <Link color="text.secondary" href="https://inked.top">
            Top Inked
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Run Local AI Models
          </Typography>
          <Link color="text.secondary" href="https://ollama.com/">
            Ollama
          </Link>
          <Link color="text.secondary" href="https://lmstudio.ai/">
            LM Studio
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://github.com/ranbot-ai"
            aria-label="GitHub"
            target='_blank'
            sx={{ alignSelf: 'center' }}
          >
            <FacebookIcon color="info" fontSize='large' />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com/encoreshao"
            aria-label="X"
            target='_blank'
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon color="info" fontSize='large' />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/encoreshao"
            aria-label="LinkedIn"
            target='_blank'
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon color="info" fontSize='large' />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}