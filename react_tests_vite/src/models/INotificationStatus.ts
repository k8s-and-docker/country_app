type Operation = 'copy' | 'delete' | 'create'
type OperationStatus = 'success' | 'failed' | 'pending'

export interface INotificationStatus {
    status: boolean;
    value: string;
    operation: Operation;
    operationStatus: OperationStatus
}
