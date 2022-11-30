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
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    backgroundColor: 'rgba(2, 14, 79, 0.9)',
    paddingLeft: '20px',
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
});

export const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        color: 'white',
        '&.Mui-selected': {
            fontWeight: theme.typography.fontWeightBold,
            bacgroundColor: 'white'

        },
    }),
);