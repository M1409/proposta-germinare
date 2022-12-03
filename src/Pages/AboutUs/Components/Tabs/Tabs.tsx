import * as React from 'react';
import { useState } from 'react'
import AcademicContent from '../AcademicContent/AcademicContent'
import {img_seara, img_swift, img_friboi, img_picpay, img_original} from '../Tabs/Assets/Images'
import {useWindowDimensions} from '../../../../hooks';

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

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const chipsSeara = ['Marketing', 'Marcas', 'Bens de Consumo', 'Inovação']

    return (
        <>
            <div>
                <div>
                    <StyledTabs value={value} onChange={handleChange}>
                        <StyledTab label='Academia Seara' />
                        <StyledTab label="Academia Swift" />
                        <StyledTab label="Academia Friboi" />
                        <StyledTab label="Academia PicPay" />
                        <StyledTab label="Academia Original" />
                    </StyledTabs>
                </div>
                <TabPanel value={value} index={0}>
                    <AcademicContent src={img_seara} title='Academia Seara' chips={['Marketing', 'Marcas', 'Bens de Consumo', 'Inovação']} description='A Academia de Bens de Consumo busca formar tocadores de negócio e, por meio da Metodologia de Casos de Ensino, trabalha o desafio do negócio como instrumento de aprendizagem sobre a complexidade organizacional. Com execuções práticas, leva para a sala de aula situações reais e conhecimento sobre as marcas, sobre as áreas do comercial, do marketing, do produto e do Supply Chain.' descriptionWidth={width <= 768 ? '300px' : '569px'} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AcademicContent src={img_swift} title='Academia Swift' chips={['Varejo', 'Supply Chain', 'Vendas']} description='A Academia Swift transforma a sala de aula em um ambiente de negócios, no qual desde o sexto ano os alunos cultivam uma desenvoltura comercial, além da postura comunicadora e oportunista. Por meio de profissionais atuantes no varejo, nossos estudantes tem acesso à diversas técnicas e perspectivas sobre o tema, o que os permitem se tornarem especialistas em vendas.' descriptionWidth={width <= 768 ? '300px' : '569px'} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <AcademicContent src={img_friboi} title='Academia Friboi' chips={['Commodities', 'Análise', 'Operações e Logística']} description='A Academia Friboi tem como foco preparar os alunos para o core business do grupo, a manufatura de commodities e alimentos, oferencendo aulas magnas, de análise, de estudo científico e relizando periódicas visitas as instalações da JBS. Além disso, os estudantes tem acesso a cases reais de ensino, o que propicia uma profunda análise em aula e um preparo prático do negócio.' descriptionWidth={width <= 768 ? '300px' : '569px'} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <AcademicContent src={img_picpay} title='Academia PicPay' chips={['Tecnologia', 'Produtos Digitais', 'Programação']} description='Nossa instituição é 100% digital e preza muito pelo acompanhamento das novas tecnologias. Por isso, a Academia PicPay acredita na formação de profissionais da área de TI (Tecnologia da Informação) e oferece a nossos alunos aulas de programação desde o sexto ano, incluindo conteúdos como: Python, HMTL, CSS, JavaScript, análise de dados e UX.' descriptionWidth={width <= 768 ? '300px' : '569px'} />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <AcademicContent src={img_original} title='Academia Original' chips={['Finanças', 'Estatística', 'Mercado de Capitais']} description='A Academia Original estima a formação de estudantes capacitados quanto a matemática e as finanças. Por meio das aulas de economia e matemática financeira, nossos alunos desenvolvem capacidades técnicas e analíticas, estimulando sua visão 360° e aprimorando seu perfil quanto ao mercado monetário.' descriptionWidth={width <= 768 ? '300px' : '569px'} />
                </TabPanel>
            </div>
        </>
    )
}