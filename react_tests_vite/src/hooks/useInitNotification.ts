import {useState} from "react";
import type {INotificationStatus} from "models";

export const useInitNotification = () => {
    const initialValue: INotificationStatus = {
        status: false,
        value: "",
        operation: "copy",
        operationStatus: "success"
    }

    const [notificationStatus, setNotificationStatus] = useState<INotificationStatus>(initialValue);

    const initNotification = (content: string) => {
        setNotificationStatus(prev => ({...prev, status: true, value: content}));
    }

    const resetNotification = () => {
        setNotificationStatus(initialValue);
    }

    return { notificationStatus, resetNotification, initNotification, initialValue }
}