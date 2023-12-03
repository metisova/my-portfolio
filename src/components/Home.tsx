import { Box, Container, Link as UiLink, Typography } from '@mui/material/';
import Link from 'next/link';
import { useTranslation, Trans } from 'next-i18next';

const ReadMore = () => (
  <Trans
    components={{
      AboutLink: <UiLink variant="h6" component={Link} href="/about" />,
      ContactLink: <UiLink variant="h6" component={Link} href="/contact" />,
    }}
    i18nKey="introduction"
  />
);

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        minHeight: {
          xs: '100vh',
          lg: '95vh',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box mb={7}>
        <Typography gutterBottom component="h1" variant="h3">
          {t('greeting')}
        </Typography>

        <Typography gutterBottom component="h2" variant="h5">
          {t('occupation')}
        </Typography>

        <Typography color="textSecondary" component="p" variant="subtitle1">
          <ReadMore />
        </Typography>
      </Box>
    </Container>
  );
}
