import type {INotificationProps} from "models";
import './Notification.css';

export const Notification = ({ notificationStatus, resetNotification }: INotificationProps) => {

    return (
        <div
            className="notification"
            data-testid="notification-box"
        >
            <button onClick={ resetNotification }>close</button>

            <div data-testid="notification-box__value">Operation: { notificationStatus.operation }</div>
            <div data-testid="notification-box__value">Text: { notificationStatus.value }</div>
            <div data-testid="notification-box__value">Status: { notificationStatus.operationStatus }</div>
        </div>
    )
}