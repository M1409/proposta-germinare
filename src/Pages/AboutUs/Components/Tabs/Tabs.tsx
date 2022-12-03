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
                    <AcademicContent src={img_swift} title='Academia Swift' chips={['Varejo', 'Supply Chain', 'Vendas']} description='Os alunos atuam como vendedores nas lojas Swift, exercendo as atividades de atendimento ao cliente e organização da loja. Como primeiro emprego, essa etapa agrega muito conhecimento e experiência prática à vida dos jovens, fazendo com que tenham mais desenvoltura e tino comercial para argumentar com os clientes e vender os produtos. O objetivo desse estágio é fazer com que os alunos entendam a base operacional de uma grande empresa.' descriptionWidth={width <= 768 ? '300px' : '569px'} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <AcademicContent src={img_friboi} title='Academia Friboi' chips={['Commodities', 'Análise', 'Operações e Logística']} description='A Academia Friboi tem como foco preparar os alunos para o core business do grupo, a manufatura de commodities e alimentos, oferencendo aulas magnas, de análise, de estudo científico e relizando periódicas visitas as instalações da JBS. Além disso, os estudantes tem acesso a cases reais de ensino, o que propicia uma profunda análise em aula e um preparo prático do negócio.' descriptionWidth={width <= 768 ? '300px' : '569px'} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <AcademicContent src={img_picpay} title='Academia PicPay' chips={['Tecnologia', 'Produtos Digitais', 'Programação']} description='Os alunos que escolherem e tiverem habilidades para a área de Tecnologia, têm a oportunidade de aplicar os conhecimentos de programação dentro do maior aplicativo de pagamentos do Brasil. Após passar pela área de operações do PicPay, os alunos aplicam o que aprendem sobre desenvolvimento de sistemas, experiência do usuário e gestão da tecnologia na prática. Todos os estudantes da Germinare, possuem aulas de tecnologia desde o sexto ano do fundamental, tendo como base: Programação em Python, HTML, CSS, JavaScript e análise de dados.' descriptionWidth={width <= 768 ? '300px' : '569px'} />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <AcademicContent src={img_original} title='Academia Original' chips={['Finanças', 'Estatística', 'Mercado de Capitais']} description='Podendo escolher ter uma vivência profissional totalmente diferente das trilhas de bens de consumo, os alunos do 9° ano e do 1° podem optar por iniciar uma jornada de trabalho no Banco Original. De forma bem dinâmica e educativa, passarão por até 12 áreas diferentes dentro do segmento de varejo, onde vivenciarão as rotinas e se aprofundarão no dia a dia do mercado financeiro. Esse estágio tem como objetivo desenvolver habilidades técnicas e analíticas, estimulando a visão 360° e aprimorando o perfil de gestor financeiro.' descriptionWidth={width <= 768 ? '300px' : '569px'} />
                </TabPanel>
            </div>
        </>
    )
}