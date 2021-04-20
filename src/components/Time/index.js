import React from 'react';
import { ContainerTime, Title, DayWithTime, Day, Hours } from './styledComponents';

const Time = ({ title }) => {
  return (
    <>
      <ContainerTime>
        <Title>{title}</Title>
        <DayWithTime>
          <Day>Lundi</Day>
          {title === 'Bureau' ? (
            <>
              <Hours>10h à 12h</Hours>
              <Hours>15h à 19h</Hours>
            </>
          ) : (
            <>
              <Hours>à partir de 8h jusqu&apos;à 20h</Hours>
            </>
          )}
        </DayWithTime>
        <DayWithTime>
          <Day>Mardi</Day>
          {title === 'Bureau' ? (
            <>
              <Hours>10h à 12h</Hours>
              <Hours>15h à 19h</Hours>
            </>
          ) : (
            <>
              <Hours>à partir de 8h jusqu&apos;à 20h</Hours>
            </>
          )}
        </DayWithTime>
        <DayWithTime>
          <Day>Mercredi</Day>
          {title === 'Bureau' ? (
            <>
              <Hours>10h à 12h</Hours>
              <Hours>15h à 19h</Hours>
            </>
          ) : (
            <>
              <Hours>à partir de 8h jusqu&apos;à 20h</Hours>
            </>
          )}
        </DayWithTime>
        <DayWithTime>
          <Day>Jeudi</Day>
          {title === 'Bureau' ? (
            <>
              <Hours>10h à 12h</Hours>
              <Hours>15h à 19h</Hours>
            </>
          ) : (
            <>
              <Hours>à partir de 8h jusqu&apos;à 20h</Hours>
            </>
          )}
        </DayWithTime>
        <DayWithTime>
          <Day>Vendredi</Day>
          {title === 'Bureau' ? (
            <>
              <Hours>10h à 12h</Hours>
              <Hours>15h à 19h</Hours>
            </>
          ) : (
            <>
              <Hours>à partir de 8h jusqu&apos;à 20h</Hours>
            </>
          )}
        </DayWithTime>
        <DayWithTime>
          <Day>Samedi</Day>
          {title === 'Bureau' ? (
            <>
              <Hours>10h à 12h</Hours>
              <Hours>15h à 19h</Hours>
            </>
          ) : (
            <>
              <Hours>à partir de 8h jusqu&apos;à 20h</Hours>
            </>
          )}
        </DayWithTime>
      </ContainerTime>
    </>
  );
};

export default Time;
