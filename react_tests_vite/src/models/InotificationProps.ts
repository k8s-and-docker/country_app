import type {INotificationStatus} from "./INotificationStatus.ts";

export interface INotificationProps {
    notificationStatus: INotificationStatus;
    resetNotification: () => void;
}