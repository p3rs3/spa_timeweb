import { useRef, useState } from 'react';
import { JournalItemWrapper, ContorollArrow, Text } from './style';

export const JournalItem = ({title, text}) => {
    const [isActive, setIsActive] = useState(false);
    const [textHeight, setTextHeight] = useState(0);
    const textRef = useRef();

    const itemClicketHandler = () => {
        if (!isActive) {
            setTextHeight(textRef.current.scrollHeight + 20);
            setIsActive(true);

            return;
        }

        setIsActive(false);
        setTextHeight(0);
    }

    return (
        <JournalItemWrapper isActive={isActive} onClick={itemClicketHandler}>
            <h3>
                {/* Качественный хостинг дешево: миф или реальность? */}
                {title}
            </h3>
            <Text ref={textRef} height={textHeight} dangerouslySetInnerHTML={{__html: text}}>
                {/* Хостинг - услуга, в рамках которой вы сможете разместить и администрировать ваши сайты сети.
                В одной из прошлых статей мы уже разбирали отличия платного хостинга от бесплатного хостинга, теперь 
                же хотим рассказать, как можно сэкономить при выборе платного хостинга */}
                {/* {text} */}
            </Text>
            <ContorollArrow isActive={isActive} />
        </JournalItemWrapper>
    )
}