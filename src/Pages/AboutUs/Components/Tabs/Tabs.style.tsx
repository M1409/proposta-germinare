import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

type StyledTabProps = {
    label: string;
}

type StyledTabsProps = {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs
        {...props}
        variant="scrollable"
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan"
        /> 
    }}
    allowScrollButtonsMobile
    />
))({
    backgroundColor: 'rgba(2, 14, 79, 0.9)',
    height: '68px',
    maxWidth:'100%',
    alignItems: 'center',
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 80,
        width: '100%',
        backgroundColor: 'white',
    },
    '& .MuiTabs-flexContainer': {
        justifyContent: 'space-around',
    },
    '& .css-ptiqhd-MuiSvgIcon-root':{
        fill: 'white'
    },
    '@media only screen and (max-width: 768px)': {
        '& .MuiTabs-flexContainer':{
            justifyContent: 'normal',
        }
        
    }
    
});

export const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        minWidth: 'fit-content',
        color: 'white',
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: '16px',
        '&.Mui-selected': {
            fontWeight: theme.typography.fontWeightBold,
            color: 'white'
        },
    }),
);