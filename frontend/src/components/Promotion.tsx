'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Divider,
  Chip,
  Snackbar,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

// --------------------
// Types
// --------------------
type CardVariant = 'blue' | 'teal';

interface StatItem {
  value: string;
}

interface CheckItem {
  label: string;
  promoCode?: string; // if set, renders a copyable chip instead of plain text
}

interface PromoCardTemplateProps {
  variant: CardVariant;
  badge: string;
  title: string;
  description: string;
  stats: [StatItem, StatItem];
  checkItems: CheckItem[];
  urgency?: string;
  ctaLabel: string;
  ctaHref: string;
}

// --------------------
// Theme-aware variant config
// --------------------
const variantConfig: Record<
  CardVariant,
  {
    borderColor: string;
    badgeBg: string;
    badgeColor: string;
    accentColor: string;
    statBg: string;
    statValueColor: string;
    checkColor: 'primary' | 'secondary';
    btnColor: 'primary' | 'secondary';
  }
> = {
  blue: {
    borderColor: 'primary.light',
    badgeBg: 'primary.50',
    badgeColor: 'primary.700',
    accentColor: 'primary.main',
    statBg: 'primary.main',
    statValueColor: 'primary.contrastText',
    checkColor: 'primary',
    btnColor: 'primary',
  },
  teal: {
    borderColor: 'secondary.light',
    badgeBg: 'secondary.50',
    badgeColor: 'secondary.700',
    accentColor: 'secondary.main',
    statBg: 'secondary.main',
    statValueColor: 'secondary.contrastText',
    checkColor: 'secondary',
    btnColor: 'secondary',
  },
};

// --------------------
// Sub-components
// --------------------

const PromoCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows[3],
    },
}));

interface CopyableCodeChipProps {
  code: string;
  onCopy: (code: string) => void;
}

const CopyableCodeChip = ({ code, onCopy }: CopyableCodeChipProps) => (
  <Chip
    label={code}
    size="small"
    icon={<ContentCopyIcon sx={{ fontSize: '13px !important' }} />}
    onClick={() => onCopy(code)}
    sx={{
      fontFamily: 'monospace',
      fontWeight: 700,
      fontSize: '0.75rem',
      cursor: 'pointer',
      height: 24,
      '& .MuiChip-label': { px: 1 },
      '&:hover': { opacity: 0.85 },
    }}
  />
);

// --------------------
// Shared card template
// --------------------
const PromoCardTemplate = ({
  variant,
  badge,
  title,
  description,
  stats,
  checkItems,
  urgency,
  ctaLabel,
  ctaHref,
  onCopy,
}: PromoCardTemplateProps & { onCopy: (code: string) => void }) => {
  const cfg = variantConfig[variant];

  return (
    <PromoCard sx={{ border: 2, borderColor: cfg.borderColor }}>
      {/* Body */}
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Title + Badge */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75, flexWrap: 'wrap' }}>
          <LocalOfferIcon color={cfg.checkColor} sx={{ fontSize: 20 }} />
          <Typography variant="h5" component="h2" fontWeight="bold" sx={{ flex: 1 }}>
            {title}
          </Typography>
          <Box
            sx={{
              bgcolor: cfg.accentColor,
              color: 'common.white',
              px: 1.5,
              py: 0.5,
              borderRadius: 10,
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {badge}
          </Box>
        </Box>

        {/* Description */}
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
          {description}
        </Typography>

        {/* Stat tiles */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            mb: 2,
            flexWrap: 'wrap',
          }}
        >
          {stats.map((stat) => (
            <Box
              key={stat.value}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: { xs: 1.25, sm: 2.25 },
                py: { xs: 0.75, sm: 1.1 },
                borderRadius: 999,
                bgcolor: cfg.statBg,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.8rem', sm: '1rem' },
                  fontWeight: 800,
                  color: cfg.statValueColor,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </Typography>
            </Box>
          ))}
        </Stack>

        <Divider sx={{ mb: 2 }} />

        {/* Checklist */}
        <Stack spacing={1} sx={{ mb: 3 }}>
          {checkItems.map((item) => (
            <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon color={cfg.checkColor} sx={{ fontSize: 18, flexShrink: 0 }} />
              {item.promoCode ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography variant="body2" fontWeight="bold">
                    {item.label}
                  </Typography>
                  <CopyableCodeChip code={item.promoCode} onCopy={onCopy} />
                </Box>
              ) : (
                <Typography variant="body2" fontWeight="bold">
                  {item.label}
                </Typography>
              )}
            </Box>
          ))}
        </Stack>

        {/* CTA */}
        <Box sx={{ mt: 'auto' }}>
          {urgency && (
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary.main"
              sx={{ display: 'block', textAlign: 'center', mb: 1 }}
            >
              {urgency}
            </Typography>
          )}
          <Button
            variant="contained"
            color={cfg.btnColor}
            size="large"
            fullWidth
            component="a"
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabel}
          </Button>
        </Box>
      </Box>
    </PromoCard>
  );
};

// --------------------
// Card data
// --------------------
const FIRST_LESSON_CARD: PromoCardTemplateProps = {
  variant: 'blue',
  badge: 'April Only',
  title: 'First Lesson 50% Off',
  description:
    'New to Dave\'s Swim School? Try your first lesson at 50% off. Use the promo code below when booking online.',
  stats: [
    { value: '50% off first lesson' },
    { value: 'New swimmers only' },
  ],
  checkItems: [
    { label: 'Valid for any lesson type' },
    { label: 'Promo code:', promoCode: 'FIRSTLESSON50' },
    { label: 'Offer ends April 30' },
  ],
  ctaLabel: 'Book Now — LIMITED TIME LEFT',
  ctaHref: 'https://bookeo.com/daveswimschool',
};

const BUNDLE_CARD: PromoCardTemplateProps = {
  variant: 'teal',
  badge: 'Best Value',
  title: 'Bundle Deal',
  description:
    'Our bundles work like punch cards, buy credits online and use them to book any lesson type: on-site, travel, or pool rental.',
  stats: [
    { value: '5 lessons + 1 free' },
    { value: 'Save over 15%' },
  ],
  checkItems: [
    { label: 'Punch-card credits, never expire' },
    { label: 'Works for any lesson type' },
    { label: 'Buy & book entirely online' },
  ],
  ctaLabel: 'Buy a Bundle',
  ctaHref: 'https://bookeo.com/daveswimschool',
};

// --------------------
// Main section
// --------------------
const PromoSection = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => setSnackbarOpen(true));
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h2" color="primary.main" sx={{ mb: 1 }}>
          Special Offers This Month
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Deals to help you get started or level up your swimming. First lesson promo code valid through April 30.
        </Typography>
      </Box>

      <Grid container spacing={3} alignItems="stretch" direction={{ xs: 'column', md: 'row' }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ width: '100%' }}>
          <PromoCardTemplate {...FIRST_LESSON_CARD} onCopy={handleCopy} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ width: '100%' }}>
          <PromoCardTemplate {...BUNDLE_CARD} onCopy={handleCopy} />
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message="Promo code copied!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Container>
  );
};

export default PromoSection;