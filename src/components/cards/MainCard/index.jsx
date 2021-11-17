import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@mui/material';

const MainCard = React.forwardRef(
  (
    {
      border = true,
      boxShadow,
      children,
      content = true,
      contentClass,
      contentSX,
      darkTitle,
      secondary,
      shadow,
      sx = {},
      title,
      ...rest
    },
    ref
  ) => (
    <Card
      ref={ref}
      {...rest}
      sx={{
        border: border ? '1px solid' : 'none',
        ':hover': {
          boxShadow: boxShadow
            ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)'
            : 'inherit'
        },
        ...sx
      }}
    >
      {!darkTitle && title && <CardHeader title={title} action={secondary} />}
      {darkTitle && title && (
        <CardHeader
          title={<Typography variant="h3">{title}</Typography>}
          action={secondary}
        />
      )}
      {title && <Divider />}

      {content && (
        <CardContent sx={contentSX} className={contentClass}>
          {children}
        </CardContent>
      )}
      {!content && children}
    </Card>
  )
);

export default MainCard;
