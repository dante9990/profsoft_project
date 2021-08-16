import React, { FC, ReactElement } from "react";
import classes from "./description.module.scss";
import { Text } from "../Text";
import { Buttons } from "../Button";
import { Link } from "react-scroll";

export const Description = () => {
  return (
    <>
      <div className={classes.textPart}>
        <p className={classes.descriptionHeader_1}>
          <Text
            theme={"dark"}
            color={"white"}
            type={"mainHeader"}
            text={"Твой билет"}
          />
        </p>

        <p className={classes.descriptionHeader_2}>
          <Text
            theme={"dark"}
            color={"white"}
            type={"mainHeader"}
            text={"в команду мечты"}
          />
        </p>
        <div className={classes.descr_text_1}>
          <Text
            theme={"dark"}
            color={"grey"}
            type={"textUnderHeader"}
            text={"Пройди обучение и получи сертификат"}
          />
        </div>

        <div className={classes.descr_text_2}>
          <Text
            theme={"dark"}
            color={"grey"}
            type={"textUnderHeader"}
            text={"подтвержадющий квалификацию"}
          />
        </div>
        <div className={classes.yellowButton}>
          <Link to="inputEl" smooth={true} offset={-250}>
            <Buttons type={"yellow"} text={"проверить сертификат"} />
          </Link>
        </div>
      </div>
      <div className={classes.blockWithNumbers}>
        <p className={classes.headerWhy}>
          <Text
            theme={"dark"}
            color={"white"}
            type={"secondHeader"}
            text={"Зачем?"}
          />
        </p>
        <div className={classes.textWhy}>
          <p>
            <Text
              theme={"dark"}
              color={"white"}
              type={"description"}
              text={
                "Компания ProfSoft находится на рынке мобильных приложений более 5-ти лет. Мы не только разрабатываем качественные программные продукты, но и подготавливаем квалифицированных IT-специалистов"
              }
            />
          </p>
        </div>
        <div className={classes.numbersBlock}>
          <div className={classes.numbersAndText}>
            <div className={classes.countBlock}>
              <Text
                theme={"dark"}
                color={"white"}
                type={"numbers"}
                text={"3"}
              />
            </div>

            <div className={classes.countDescription}>
              <Text
                theme={"dark"}
                color={"white"}
                type={"numbersText"}
                text={"школы разработки"}
              />
            </div>
          </div>

          <div className={classes.numbersAndText}>
            <div className={classes.countBlock}>
              <div className={classes.number_eight}>
                <Text
                  theme={"dark"}
                  color={"white"}
                  type={"numbers"}
                  text={"8"}
                />
              </div>
            </div>
            <div className={classes.countDescription}>
              <Text
                theme={"dark"}
                color={"white"}
                type={"numbersText"}
                text={"направлений обучения"}
              />
            </div>
          </div>

          <div className={classes.numbersAndText}>
            <div className={classes.countBlock}>
              <div className={classes.number_435}>
                <Text
                  theme={"dark"}
                  color={"white"}
                  type={"numbers"}
                  text={"435"}
                />
              </div>
            </div>
            <div className={classes.countDescription}>
              <Text
                theme={"dark"}
                color={"white"}
                type={"numbersText"}
                text={"записей"}
              />
            </div>
          </div>

          <div className={classes.numbersAndText}>
            <div className={classes.countBlock}>
              <Text
                theme={"dark"}
                color={"white"}
                type={"numbers"}
                text={"75"}
              />
            </div>
            <div className={classes.countDescription}>
              <Text
                theme={"dark"}
                color={"white"}
                type={"numbersText"}
                text={"учеников"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
