import { useEffect, useState } from 'react';
import ActiclesService from '../../api/ArticlesService';
import XMLParser from 'react-xml-parser';
import { JournalWrapper, JournalList } from './style';
import { JournalItem } from '../journal-item/JournalItem';
import Loader from "react-loader-spinner";

export const Journal = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await ActiclesService.getArticles();
            setIsLoading(false);
            const jsonDataFromXml = new XMLParser().parseFromString(response.data);
            setArticles(jsonDataFromXml.getElementsByTagName('item'));
        })();
    }, [])


    return (
        <JournalWrapper>
            <div className='title'>
                <div className='subtitle'>
                    Бортовой журнал
                </div>
                <h2>
                    Бортовой журнал
                </h2>
            </div>
            {
            isLoading
                ?
                <Loader
                    type="Grid"
                    color="#062436"
                    height={100}
                    width={100}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%'
                    }}
                />
                :
                <JournalList>
                    {
                        articles.map((article, index) => {
                            return <JournalItem key={index} title={article.children[0].value} text={article.children[4].value} />
                        })
                    }
                </JournalList>
            }
        </JournalWrapper>
    )
}