import { iretail, icomputer, ifamily, ifinances } from "./Assets/Images";

export type Sections = "varejo" | "germinare" | "escolaDaFamilia" | "tecnologia" | "financas"

export type SectionsInfo = Record<
  Sections,
  { name: string; color: string; icon: string }
>;

export const sections: SectionsInfo = {
    varejo: {
      name: "Varejo",
      color: "#E86339",
      icon: iretail,
    },
    germinare: {
      name: "Germinare",
      color: "#2E3092",
      icon: ifamily,
    },
    escolaDaFamilia: {
      name: "Escola da Família",
      color: "#2E3092",
      icon: ifamily,
    },
    tecnologia: {
      name: "Tecnologia",
      color: "#11C76F",
      icon: icomputer,
    },
    financas: {
      name: "Finanças",
      color: "#008646",
      icon: ifinances,
    },
  };
  