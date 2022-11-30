import * as React from 'react';
import AcademicContent from '../AcademicContent/AcademicContent'
import img_seara from '../Tabs/Assets/Images/img_seara.png'
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

import { StyledTab, StyledTabs } from './Tabs.style'

type TabPanelProps = {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index } = props;

    return (
        <div
            hidden={value !== index}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

export function AcademicsTabs() {

    const { width } = useWindowDimensions()

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const chipsSeara = ['Marketing', 'Marcas', 'Bens de Consumo', 'Inovação']

    return (
        <>

            <div>
                <div>
                    <StyledTabs value={value} onChange={handleChange}>
                        <StyledTab label='Academia Swift' />
                        <StyledTab label="Academia Seara" />
                        <StyledTab label="Academia Friboi" />
                        <StyledTab label="Academia PicPay" />
                        <StyledTab label="Academia Original" />
                    </StyledTabs>
                </div>
                <TabPanel value={value} index={0}>
                    <AcademicContent src={img_seara} title='Academia Seara' chips={chipsSeara} description='A Academia de Bens de Consumo busca formar tocadores de negócio e, por meio da Metodologia de Casos de Ensino, trabalha o desafio do negócio como instrumento de aprendizagem sobre a complexidade organizacional. Com execuções práticas, leva para a sala de aula situações reais e conhecimento sobre as marcas, sobre as áreas do comercial, do marketing, do produto e do Supply Chain.' descriptionWidth={width <= 768 ? '300px' : '569px'} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </div>
        </>
    )
}