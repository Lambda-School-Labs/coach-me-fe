import React, { useState, useEffect } from 'react';

import MessageCard from './MessageCard';
import {
    deleteScheduledMessage,
    getScheduledMessage
} from '../../../../actions/coachActions';
import backArrow from '../../../utils/assets/back.svg';
import { useDispatch, useSelector } from 'react-redux';
import './messageCard.scss';

const ScheduledMessagesList = props => {
    const state = useSelector(state => state.coach);
    const { messages, show, toggleScheduler } = props;
    // console.log(messages);
    const dispatch = useDispatch();
    const [messagelist, setmessagelist] = useState([]);

    useEffect(() => {
        if (state.scheduledMessage[0] !== undefined) {
            setmessagelist(state.scheduledMessage);
        }
        if (state.scheduledMessage.length === 0) {
            setmessagelist(state.scheduledMessage);
        }
    }, [messages]);

    const removedMessage = id => {
        const filtered = messagelist.filter(item => {
            if (item.scheduleId !== id) {
                // console.log('removedMessage line 20', item);
                // console.log('removedMessage item', item);
                // console.log('removedMessage id', id);
                return [item];
            }
        });

        // console.log('filited list', filtered);
        setmessagelist(filtered);
    };

    const updatedMessage = id => {
        const updated = messagelist.filter(item => {
            if (item.scheduleId !== id) {
                return [item];
            }
        });

        setmessagelist(updated);
    };

    // console.log(messagelist);
    // if (show) {

    if (state.scheduledMessage !== 0) {
        return (
            <div className='message-list-wrapper'>
                <div className='back-bttn-container'>
                    <img
                        className='back-button-sheduler'
                        alt='back'
                        src={backArrow}
                        onClick={() => toggleScheduler(show)}
                    ></img>
                    <h1>Back</h1>
                </div>
                <h1 className='title-text'>Previously Scheduled Messages</h1>
                <div className='message-list-container'>
                    {messagelist.map(item => (
                        <MessageCard
                            className='message-card'
                            item={item}
                            clientId={props.clientId}
                            removedMessage={removedMessage}
                            updatedMessage={updatedMessage}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return <h1>No messages scheduled</h1>;
    // }
    // return null
};

export default ScheduledMessagesList;
