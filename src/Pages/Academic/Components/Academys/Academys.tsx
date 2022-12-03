import { Typography } from "../../../../Components";
import styles from "./Academys.module.scss";
import { marcas, commodities, varejo, financas, controle } from "./Assets/Images";
export interface iAcademysSection {
  academy: string;
  subjects: string[];
  image: string;
  maxColumnLength: number;
}
export function Academys() {
  const AcademysSection: iAcademysSection[] = [
    {
      academy: "Marcas",
      subjects: [
        "Marketing",
        "Produto",
        "Supply Chain",
        "História",
        "Geografia",
        "Sociologia",
        "Filosofia",
        "Línguas",
      ],
      image: marcas,
      maxColumnLength: 4
    },
    {
      academy: "Commodities",
      subjects: [
        "Comercial",
        "Produção",
        "Planejamento",
        "Ciências",
        "Biologia",
        "Física",
        "Química",
        "ESG",
      ],
      image: commodities,
      maxColumnLength: 4
    },
    {
      academy: "Varejo",
      subjects: [
        "Varejo",
        "Operações",
        "Expansão Comercial",
        "Chefia e Liderança",
      ],
      image: varejo,
      maxColumnLength: 5
    },
    {
      academy: "Controle",
      subjects: [
        "Experiência do Usuário",
        "Metodologias",
        "Estruturação",
        "Programação",
        "Contabilidade",
        "Direito",
        "Fiscal",
        "Informática"
      ],
      image: controle,
      maxColumnLength: 4
    },
    {
      academy: "Finanças",
      subjects: [
        "Economia",
        "Mercado de Capitais",
        "Banking",
        "Matemática",
        "Estatística"
      ],
      image: financas,
      maxColumnLength: 5
    }
  ];
  return (
    <div className={styles.container}>
      {AcademysSection.map((item) => {
        let arr = Array.from(Array(item.subjects.length).keys());
        return (
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <div className={styles.academy}>
                  <img
                    src={item.image}
                    alt={`${item.academy}`}
                    className={styles.mainImage}
                  />
                  <div className={styles.titleContainer}>
                    <Typography
                      style={{
                        fontSize: 18,
                        fontWeight: "500",
                        color: "white",
                      }}
                    >
                      {item.academy}
                    </Typography>
                  </div>
                </div>
              </div>
              <div
                className={styles.flipCardBack}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className={styles.shadow}>
                  <h2>{item.academy}</h2>
                  <>
                    {item.subjects.length >= item.maxColumnLength ? (
                      <div className={styles.wrapper}>
                        <ul>
                          {item.subjects
                            .slice(0, Math.floor(item.subjects.length / 2))
                            .map((subject) => (
                              <li>{subject}</li>
                            ))}
                        </ul>
                        <ul>
                          {item.subjects
                            .slice(
                              Math.floor(item.subjects.length / 2),
                              item.subjects.length
                            )
                            .map((subject) => (
                              <li>{subject}</li>
                            ))}
                        </ul>
                      </div>
                    ) : (
                      <ul>
                        {item.subjects.map((subject) => (
                          <li>{subject}</li>
                        ))}
                      </ul>
                    )}
                  </>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
