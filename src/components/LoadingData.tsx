import styles from '../styles/components/Modal.module.css'
export function LoadingData(){
        return(
            <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <header>.</header>
                <strong>Carregando Dados</strong>
                <p>Aguardade um instante.</p>
    
            </div>
            </div>
        )
    
}