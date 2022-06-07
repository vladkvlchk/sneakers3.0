import styles from './Info.module.scss' 

function Info({imageUrl, title, description}){
    return(
        <div className={styles.info}>
            <div className={styles.image}>
                <img alt="[info-logo]" src={imageUrl}/>
            </div>
            <div className={styles.title}>
                <h1>{title}</h1>
            </div>
            <div className={styles.description}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Info