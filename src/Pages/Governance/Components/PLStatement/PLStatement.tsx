import styles from './PLStatement.module.scss'
import PDFIcon from './Assets/Images/PDF.svg'

export type PLStatementProps = {
    documents: {
        url?: string;
        year: number;
    }[];
}


export function PLStatement({ documents, ...props }: PLStatementProps) {
    return (
        <>
            <div className= {styles.PLStatementContainer}>
                {documents.map(({ url, year }, index) => {
                    return (
                            <div key={index} className={styles.PLStatementDocuments}>
                                <p className={styles.PLStatementText}>{year}</p>
                                <a className={styles.PLStatementLink} href={url} target="_blank"><img className={styles.PLStatementImg} src={PDFIcon}></img></a>
                            </div>
                            )
                })}
                <p className={styles.PLStatementWarningText}>*Clique nos ícones de PDF para baixar os documentos.</p>
            </div>
        </>
    )
}



