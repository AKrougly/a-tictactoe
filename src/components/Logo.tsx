import React from 'react';
import { Box } from '@mui/material';
//import { SxProps, Theme } from '@mui/material/styles';

interface ILogoProps {
  className: string;
  //sx: SxProps<Theme>;
}

const Logo: React.FC<ILogoProps> = ({ className }: ILogoProps): React.ReactElement => {
  return (
    <Box className={className} component="img" alt="Logo" src="static/logo.svg"
      //sx={[{}, ...(Array.isArray(sx) ? sx : [sx]),]}
    />
  );
};

export default Logo;
