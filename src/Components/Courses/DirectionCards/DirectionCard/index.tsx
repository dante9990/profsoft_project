import React from "react";
import classes from "./directionCard.module.scss";

export const DirectionCardComponent = (props : any) => {
    return <>
        <div className={classes.directionCards}>
            <div className={classes.directionCards__firstBlock}>
                <div className={classes.infoBlock}>
                    <h2 className={classes.directionCardTitle}>Направление подготовки:</h2>
                    <p className={classes.directionCardInfo}>Design</p>
                </div>
                <div className={classes.infoBlock}>
                    <h2 className={classes.directionCardTitle}>Изучение: </h2>
                    <p className={classes.directionCardInfo}> Создание макетов и прототипов
                        Web и Мобильных приложения для платформ iOS, Android в Figma.
                        Изучение UXPin, практическое применение полученных знаний</p>
                </div>
            </div>
            <div className={classes.directionCards__secondBlock}>
                <div className={classes.infoBlock}>
                    <h2 className={classes.directionCardTitle}>Форма обучения: </h2>
                    <p className={classes.directionCardInfo}>очная</p>
                </div>
                <div className={classes.infoBlock}>
                    <h2 className={classes.directionCardTitle}>Период обучения:  </h2>
                    <p className={classes.directionCardInfo}> 01.07.2021-30.08.2021</p>
                </div>
                <div className={classes.infoBlock}>
                    <h2 className={classes.directionCardTitle}>Преподаватель:  </h2>
                    <p className={classes.directionCardInfo}> Щелкунова Юлия Сергеевна</p>
                </div>
            </div>
            <div className={classes.directionCards__imagesBlock}>
                <img alt='img01' className={classes.cardImage} src={props.image01}/>
                <img alt='img02' className={classes.cardImage} src={props.image02}/>
            </div>
        </div>
    </>
}